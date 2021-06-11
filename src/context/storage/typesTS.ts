import { typeTask } from "../types";
import { FromForm } from "../shareTS";

const { GET_STORAGE, REMOVE_STORAGE } = typeTask || {};

export interface StorageContextInterface extends InitialValueStorage {
  getDataStorage: () => void;
  removeStorage: () => void;
  dataStorage: Array<DataStorage> | null | [];
}
export interface InitialValueStorage {
  dataStorage: Array<DataStorage> | null | [];
}
export interface DataStorage extends FromForm {
  date: string;
  exchangeRate: number;
}

export type ActionsStorage =
  | {
      type: typeof GET_STORAGE;
      payload: Array<DataStorage> | [];
    }
  | {
      type: typeof REMOVE_STORAGE;
    };
