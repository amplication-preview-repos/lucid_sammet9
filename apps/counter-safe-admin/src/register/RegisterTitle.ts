import { Register as TRegister } from "../api/register/Register";

export const REGISTER_TITLE_FIELD = "id";

export const RegisterTitle = (record: TRegister): string => {
  return record.id?.toString() || String(record.id);
};
