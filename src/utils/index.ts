import type { FlattenedIcon, ProcessedCollection } from '../types';

export const flattenCollection = (
  collection: ProcessedCollection
): FlattenedIcon[] =>
  collection.icons.map((icon) => ({
    ...icon,
    collection: collection.id
  }));

export const flattenCollections = (
  collections: ProcessedCollection[]
): FlattenedIcon[] =>
  collections.reduce(
    (acc: FlattenedIcon[], collection: ProcessedCollection) => [
      ...acc,
      ...flattenCollection(collection)
    ],
    []
  );
