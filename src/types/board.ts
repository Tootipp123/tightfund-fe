import { IColumn } from "./global";

export interface InitialData {
  newTokens: IColumn["items"];
  advancedNewTokens: IColumn["items"];
  kothTokens: IColumn["items"];
  ctoTokens: IColumn["items"];
  advancedKothTokens: IColumn["items"];
  advancedMigratedTokens: IColumn["items"];
}
