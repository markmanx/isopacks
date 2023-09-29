import { Icon } from './types';

export const mergeIsopacks = (isopacks: Icon[][]) =>
  isopacks.reduce((acc, pack) => [...acc, ...pack], [] as Icon[]);
