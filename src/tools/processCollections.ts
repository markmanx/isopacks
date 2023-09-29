import * as fs from 'fs/promises';
import * as path from 'path';

interface CollectionConfig {
  dirName: string;
  categoryName: string;
  isIsometric: boolean;
}

const collectionsBase = path.join(__dirname, '../collections');
const collections: CollectionConfig[] = [
  {
    dirName: 'isoflow',
    categoryName: 'Isoflow',
    isIsometric: true
  },
  {
    dirName: 'aws',
    categoryName: 'AWS',
    isIsometric: false
  },
  {
    dirName: 'azure',
    categoryName: 'Azure',
    isIsometric: false
  },
  {
    dirName: 'gcp',
    categoryName: 'GCP',
    isIsometric: false
  },
  {
    dirName: 'kubernetes',
    categoryName: 'Kubernetes',
    isIsometric: false
  }
];

/**
 * Creates an index file from a collection of icons.
 * @description This function will build an index file (a JSON object of all icons along with their names) from a folder of icons.
 * @param {string} dirName - The name of the directory within .
 * @param {string} author - The author of the book.
 */
const createIndexFromCollection = async (
  dirName: string,
  categoryName: string,
  isIsometric: boolean
) => {
  const collectionDir = path.join(collectionsBase, dirName);
  const iconsDir = path.join(collectionDir, 'icons');
  const iconFiles = await fs
    .readdir(iconsDir)
    .then((res) => res.filter((file) => file.endsWith('.svg')));

  const registryLineItems = iconFiles.reduce(
    (acc, svg) => {
      const id = svg.split('.')[0];
      const varName = id.replace(/(-|&)/g, '');
      const importLine = `import ${varName} from './icons/${svg}';`;
      const entryLine = `{
        id: '${id}',
        name: '${id}',
        category: '${categoryName}',
        url: ${varName},
        isIsometric: ${isIsometric}
      }`;

      const newImports = [...acc.imports, importLine];
      const newEntries = [...acc.entries, entryLine];

      return {
        imports: newImports,
        entries: newEntries
      };
    },
    {
      imports: [] as string[],
      entries: [] as string[]
    }
  );

  const registryFileContent = `
    import type { Icon } from '../../types';
    ${registryLineItems.imports.join('\n')}

    const ${categoryName}Isopack: Icon[] = [
      ${registryLineItems.entries.join(',\n')}
    ];

    export default ${categoryName}Isopack;
    `;

  await fs.writeFile(path.join(collectionDir, 'index.ts'), registryFileContent);
};

const processCollections = async () => {
  await Promise.all(
    collections.map((collection) =>
      createIndexFromCollection(
        collection.dirName,
        collection.categoryName,
        collection.isIsometric
      )
    )
  );
};

processCollections();
