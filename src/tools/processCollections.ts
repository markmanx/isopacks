import * as fs from 'fs/promises';
import * as path from 'path';
import { collections, CollectionConfig, paths } from '../config';

interface ProcessedIcon {
  id: string;
  name: string;
  isIsometric: boolean;
  src: string;
}

interface ProcessedCollection {
  id: string;
  name: string;
  icons: ProcessedIcon[];
}

const createCollectionMarkdown = (collection: ProcessedCollection) => {
  const lineItems = collection.icons.map((icon) => [
    `|<img style="padding: 10px; width: 60px; height: 60px;" src="${icon.src}" />|${icon.id}|`
  ]);

  return [
    `## ${collection.name}`,
    '| Icon | ID |',
    '| ---- | -- |',
    ...lineItems,
    ''
  ].join('\n');
};

const processIconFile = async (
  collection: CollectionConfig,
  fileName: string
): Promise<ProcessedIcon> => {
  const id = fileName.split('.')[0];

  let src;

  if (paths.remoteBase) {
    src = `${paths.remoteBase}/${collection.id}/icons/${id}.svg`;
  } else {
    src = await fs
      .readFile(
        path.join(paths.collectionsBase, collection.id, 'icons', fileName),
        'base64'
      )
      .then((res) => `data:image/svg;base64, ${res}`);
  }

  return {
    id,
    name: id,
    src,
    isIsometric: collection.isIsometric
  };
};

const createCollectionIndex = async (
  collection: CollectionConfig
): Promise<ProcessedCollection> => {
  const iconFileNames = await fs
    .readdir(path.join(paths.collectionsBase, collection.id, 'icons'))
    .then((res) => res.filter((file) => file.endsWith('.svg')));

  const lineItems = await Promise.all(
    iconFileNames.map((fileName) => processIconFile(collection, fileName))
  );

  const resultCollection = {
    id: collection.id,
    name: collection.name,
    icons: lineItems
  };

  return resultCollection;
};

const processCollections = async () => {
  const processedCollections = await Promise.all(
    collections.map(createCollectionIndex)
  );

  // Store collections in output folder
  await Promise.all(
    processedCollections.map((collection) =>
      fs.writeFile(
        path.join(paths.output, `${collection.id}.ts`),
        `export default ${JSON.stringify(collection)};`
      )
    )
  );

  // Update markdown template
  const markdownTemplate = await fs.readFile(
    path.resolve('README.template'),
    'utf-8'
  );

  const markdown = processedCollections
    .map(createCollectionMarkdown)
    .join('\n');

  await fs.writeFile(
    path.resolve('README.md'),
    markdownTemplate.replace('{{ICON_COLLECTIONS}}', markdown)
  );
};

processCollections();
