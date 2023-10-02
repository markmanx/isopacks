export interface FlattenedIcon {
  id: string;
  name: string;
  collection: string;
  url: string;
  isIsometric: boolean;
}

export interface ProcessedIcon {
  id: string;
  name: string;
  isIsometric: boolean;
  url: string;
}

export interface ProcessedCollection {
  id: string;
  name: string;
  icons: ProcessedIcon[];
}
