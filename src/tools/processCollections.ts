import fs from 'fs/promises';
import path from 'path';

const collectionsBase = path.join(__dirname, '../collections');

/**
 * Represents a book.
 * @description This is a convenience script to create a registry file from a folder of icons.
 * @param {string} dirName - The name of the directory within .
 * @param {string} author - The author of the book.
 */
const createRegistryFromFolder = async (
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
      const entryLine = {
        id,
        name: id,
        category: categoryName,
        url: varName,
        isIsometric
      };

      const newImports = [...acc.imports, importLine];
      const newEntries = [...acc.entries, JSON.stringify(entryLine)];

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
    import type { IconInput } from 'src/types';
    ${registryLineItems.imports.join('\n')}

    const category = '${categoryName}';

    const ${categoryName}Isopack: IconInput[] = [
      ${registryLineItems.entries.join(',\n')}
    ];

    export default ${categoryName}Isopack;
    `;

  await fs.writeFile(path.join(collectionDir, 'index.ts'), registryFileContent);
};

const processCollections = async () => {
  const collections = [{
    dirName: 'basic',
    categoryName: 'Basic',
    isIsometric: true
  }, {
    
  }]
}

// createManifestFromFolder({
//   dirName: 'basic',
//   categoryName: 'Basic',
//   isIsometric: true
// });

// createManifestFromFolder({
//   dirName: 'networking',
//   categoryName: 'Networking',
//   isIsometric: true
// });

// createManifestFromFolder({
//   dirName: 'aws',
//   categoryName: 'AWS',
//   isIsometric: false
// });

// createManifestFromFolder({
//   dirName: 'azure',
//   categoryName: 'Azure',
//   isIsometric: false
// });

// createManifestFromFolder({
//   dirName: 'gcp',
//   categoryName: 'GCP',
//   isIsometric: false
// });

createRegistryFromFolder('kubernetes', 'Kubernetes', false);
