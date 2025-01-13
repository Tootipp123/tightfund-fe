"use client";

import { combineComponents } from "../utils/combineComponents";
import { AppThemeProvider } from "./AppTheme";

const providers = [AppThemeProvider];

const AppContextProvider = combineComponents(...providers);
export default AppContextProvider;
