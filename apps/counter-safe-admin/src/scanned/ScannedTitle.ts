import { Scanned as TScanned } from "../api/scanned/Scanned";

export const SCANNED_TITLE_FIELD = "location";

export const ScannedTitle = (record: TScanned): string => {
  return record.location?.toString() || String(record.id);
};
