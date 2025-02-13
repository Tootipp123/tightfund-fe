export enum ColumnTags {
  NewTokens = "NEW_TOKENS",
  AdvancedNewTokens = "ADVANCED_NEW_TOKENS",
  KingOfTheHill = "KOTH",
  AdvancedKingOfTheHill = "ADVANCED_KOTH",
  AdvancedMigratedTokens = "ADVANCED_MIGRATED_TOKENS",
  CommunityTakeoverTokens = "COMMUNITY_TAKEOVER_TOKENS",
}

export enum TokenTags {
  NewPumpToken = "NEW_PUMP_TOKEN",
  NewMoonshotToken = "NEW_MOONSHOT_TOKEN",
  KingOfTheHill = "KING_OF_THE_HILL_TOKEN",
  CommunityTakeoverToken = "COMMUNITY_TAKEOVER_TOKEN",
}

export enum PlatformTags {
  Pumpfun = "PUMPFUN",
  Moonshot = "MOONSHOT",
  Solana = "SOLANA",
}

export enum ColumnFilters {
  TopTenHolders = "Top 10 Holders",
  DevSold = "Dev Sold",
  Twitter = "Twitter",
  Telegram = "Telegram",
  Website = "Website",
  WithAtLeastOneSocial = "With at least 1 social",
  PrepaidDex = "Prepaid Dex",
  PumpFun = "Pump fun",
  Moonshot = "Moonshot",
}

export enum ColumnSettingsTag {
  EnablePauseOnHover = "ENABLE_PAUSE_ON_HOVER",
  ShowDevDetails = "SHOW_DEV_DETAILS",
  ShowTopTenHolders = "SHOW_TOP_TEN_HOLDERS",
}

export interface IUpdateColumnItems {
  selectedTag: ColumnTags;
  newItems?: any[];
  pendingItems?: any[];
  isMuted?: boolean;
  fromSocket?: boolean;
  newRealTimeItem?: any;
  newRealTimeItems?: any[];
  applyMaxItems?: boolean;
  isMouseOnLeave?: boolean;
}

export interface IPausedColumn {
  tag: string;
  isPaused: boolean;
}

export enum RedirectPlatforms {
  BananaGun = "Banana Gun",
  BonkBotMcqueen = "Bonk Bot Mcqueen",
  ShurikenTradingBot = "Shuriken Trading Bot",
  GMGN = "GMGN",
  Jupiter = "Jupiter",
  Trojan = "Trojan",
  SolTradingBot = "Sol Trading Bot",
  Photon = "Photon",
  BullX = "BullX",
}
