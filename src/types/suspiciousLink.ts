import { ScamInfoType } from './account.types';

export interface SuspiciousLinkType {
  isSuspicious: boolean;
  message: string;
  textWithLinks: string;
}

export interface SuspiciousLinkPropsType {
  message: string;
  messagePrefix?: string;
  scamInfo?: ScamInfoType;
  isNsfw?: boolean;
  uris?: string[];
}

export interface TextWithLinksType {
  textWithLinks: string;
  hasLinks: boolean;
}
