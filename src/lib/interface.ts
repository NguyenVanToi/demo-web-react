export enum LocalStorageKeys {
  DATA = 'DATA'
}

export interface IItem {
  name: string;
  createdAt: string;
}

export type THeadField = {
  field: string;
  name: string;
  sort: string | null;
}