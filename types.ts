import { ResponseType } from "axios";

export interface DealPayload {
  objectId: number;
  properties: {
    dealname: {
      value: string;
    };
  };
}

export interface Company {
  name: string;
  upright_id: UprightId;
  vatin: string | null;
  isin: string | null;
}

export interface UprightId {
  type: "VATIN" | "ISIN";
  value: string;
}

export interface UprightResponse {
  data: Buffer;
}

export interface GetProfileArgs {
  uprightId: UprightId;
  responseType?: ResponseType;
}
export interface UprightProfile {
  id: string;
  name: string;
  type: string;
  description?: string;
  country: string;
  score: number;
  teaser: boolean;
  fuzzyProductSetQuality: string;
}
