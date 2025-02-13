import { combineComponents } from "../utils/combineComponents";
import { UserProvider } from "./User/userContext";

const providers = [UserProvider];

const AppContextProvider = combineComponents(...providers);
export default AppContextProvider;
