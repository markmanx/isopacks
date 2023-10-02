import * as fs from 'fs/promises';
import * as path from 'path';
import { collections, CollectionConfig, paths } from '../config';
import type { ProcessedCollection, ProcessedIcon } from '../types';

const createCollectionMarkdown = (collection: ProcessedCollection) => {
  const lineItems = collection.icons.map((icon) => [
    `|${icon.url}|${icon.id}|`
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

  let url;

  if (paths.remoteBase) {
    url = `${paths.remoteBase}/${collection.id}/icons/${id}.svg`;
  } else {
    url = await fs
      .readFile(
        path.join(paths.collectionsBase, collection.id, 'icons', fileName),
        'base64'
      )
      .then((res) => `data:image/svg+xml;base64,${res}`);
  }

  return {
    id,
    name: id,
    url,
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

  // Generate index markdown file
  const markdown = processedCollections
    .map(createCollectionMarkdown)
    .join('\n');

  await fs.writeFile(path.resolve(paths.output, 'isopacks.md'), markdown);
};

processCollections();
