import { Icon } from './types';

export const mergeIsopacks = (manifests: Icon[]) =>
  manifests.reduce((acc, manifest) => [...acc, ...manifest], []);

const hi = ['asdf'];
