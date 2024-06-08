import { ScannedWhereInput } from "./ScannedWhereInput";
import { ScannedOrderByInput } from "./ScannedOrderByInput";

export type ScannedFindManyArgs = {
  where?: ScannedWhereInput;
  orderBy?: Array<ScannedOrderByInput>;
  skip?: number;
  take?: number;
};
