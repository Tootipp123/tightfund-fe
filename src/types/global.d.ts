import { IconType } from "react-icons";
import { PlatformTags, TokenTags } from "./column";
import { ColumnFilters } from "./constants";

export interface TokenDetails {
  creator: string;
  socialLinks: SocialLink[];
  tokenName: string;
  tokenTicker: string;
  description?: string;
  volume?: number;
  upvotes?: number;
  linkToDetails: string;
  imageUrl: string;
  marketCap?: string;
}

export interface SocialLink {
  text: string;
  href: string;
}

export interface GetTokenName {
  tokenName: string;
  tokenTicker: string;
}

export interface FeatureLink {
  name: string;
  icon: IconType;
  link?: string;
  isActive?: boolean;
}

// Note: res and err types are TBD
export interface ResponseData {
  res: any;
  err: any;
}

export interface IToken {
  name: string;
  symbol: string;
  type: "Basic" | "Advanced";
  tokenTag: TokenTags | null;
  image_uri: string;
  twitter: string;
  launchpad?: string;
  redirect: any;
  pumpLink: string;
  address: string;
  creatorAddress: string;
  telegram: string;
  website: string;
  bonding_curve: string;
  topTenPercentage: number | null;
  creator: string;
  createdAt?: Date;
  status?: "Migrating" | "Migrated";
  createdTimestamp: number;
  complete: boolean;
  king_of_the_hill_timestamp: number | null;
  marketCap: string;
  usd_market_cap: number;
  nsfw: boolean;
  imageUri: string;
  createdAt: Date;
  creator?: string;
  creationTimestamp: number;
  marketCap: string;
  volume: string;
  website: string;
  twitter: string;
  creatorAddress?: string;
  tokenTag?: TokenTags;
  pumpLink?: string;
  telegram: string;
  dexPaid: boolean;
  isCTO: boolean;
  tag: TokenTags; // Assuming ColumnTags.CommunityTakeoverTokens is a string
  topTen: TopTen | null;
  poolInfo: {
    raydiumPool: any;
    bondingCurve: string;
  };
  filters: TokenFilters;
  devDetails: any;
}

interface TopTen {
  overAllPercentage: number;
  topTenHolders: TopTenHolders[] | [];
}

export interface TokenFilters {
  isTopTen: boolean | null;
  isDexPaid: boolean;
  hasDev: boolean | null;
  hasOneSocials: boolean;
}

export interface TopTenHolders {
  address: string;
  percentage: number;
}

export interface IColumn {
  tag: string;
  platformTag: PlatformTags;
  name: string;
  isSelected: boolean;
  type?: string;
  redirect: ColumnRedirect | null;
  isMuted: boolean;
  items: Token[];
  settings: any[];
  filters: ColumnFiltersField[];
}

export interface ColumnRedirect {
  label: string;
  baseUrl: string;
  value: boolean;
  ref?: string;
}
export interface ColumnFiltersField {
  label: ColumnFilters;
  code: string;
  value: boolean;
}

interface BoardDetails {
  _id: string;
  name: string;
  boardId: string;
}
