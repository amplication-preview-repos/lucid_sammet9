import { RegisterWhereInput } from "./RegisterWhereInput";
import { RegisterOrderByInput } from "./RegisterOrderByInput";

export type RegisterFindManyArgs = {
  where?: RegisterWhereInput;
  orderBy?: Array<RegisterOrderByInput>;
  skip?: number;
  take?: number;
};
