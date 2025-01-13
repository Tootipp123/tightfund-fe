"use client";

import { combineComponents } from "../utils/combineComponents";

const providers = [];

const AppContextProvider = combineComponents(...providers);
export default AppContextProvider;
