import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QrCodeTitle } from "../qrCode/QrCodeTitle";

export const RegisterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="qrCode.id" reference="QrCode" label="QRCode">
          <SelectInput optionText={QrCodeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
