import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QrCodeTitle } from "../qrCode/QrCodeTitle";

export const RegisterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="qrCode.id" reference="QrCode" label="QRCode">
          <SelectInput optionText={QrCodeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
