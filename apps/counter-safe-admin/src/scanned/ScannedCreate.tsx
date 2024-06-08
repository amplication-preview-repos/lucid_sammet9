import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { QrCodeTitle } from "../qrCode/QrCodeTitle";

export const ScannedCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <ReferenceInput source="qrCode.id" reference="QrCode" label="QRCode">
          <SelectInput optionText={QrCodeTitle} />
        </ReferenceInput>
        <DateTimeInput label="ScanDate" source="scanDate" />
      </SimpleForm>
    </Create>
  );
};
