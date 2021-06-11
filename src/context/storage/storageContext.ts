import { createContext } from "react";
import { StorageContextInterface } from "./typesTS";

const storageContext = createContext<StorageContextInterface | null>(null);
export default storageContext;
