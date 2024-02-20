export interface IGeoLocation {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface LocalNames {
  pt: string;
  az: string;
  ml: string;
  ja: string;
  nl: string;
  fr: string;
  tr: string;
  et: string;
  ru: string;
  ko: string;
  uk: string;
  pl: string;
  tt: string;
  it: string;
  kk: string;
  lt: string;
  de: string;
  en: string;
  fi: string;
  ascii: string;
  feature_name: string;
  lv: string;
}
