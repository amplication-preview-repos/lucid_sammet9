import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { QrCodeTitle } from "../qrCode/QrCodeTitle";

export const ScannedEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <ReferenceInput source="qrCode.id" reference="QrCode" label="QRCode">
          <SelectInput optionText={QrCodeTitle} />
        </ReferenceInput>
        <DateTimeInput label="ScanDate" source="scanDate" />
      </SimpleForm>
    </Edit>
  );
};
