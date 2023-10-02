import * as path from 'path';

// Self-hosting vs importing base64-encoded icons
// If your icons are hosted at https://example.com/icons,
// - set `remoteBase` to `https://example.com/icons`
// - run `npm run generate:collections`
// - the `src` property for each icon will be generated like `https://example.com/icons/isoflow/icons/server.svg`.
export const paths = {
  remoteBase: undefined,
  collectionsBase: path.resolve(__dirname, '../collections'),
  docsBase: path.resolve(__dirname, '../'),
  output: path.resolve(__dirname, 'generated')
};

export interface CollectionConfig {
  id: string;
  name: string;
  isIsometric: boolean;
}

export const collections: CollectionConfig[] = [
  {
    id: 'isoflow',
    name: 'Isoflow',
    isIsometric: true
  },
  {
    id: 'aws',
    name: 'AWS',
    isIsometric: false
  },
  {
    id: 'azure',
    name: 'Azure',
    isIsometric: false
  },
  {
    id: 'gcp',
    name: 'GCP',
    isIsometric: false
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    isIsometric: false
  }
];
