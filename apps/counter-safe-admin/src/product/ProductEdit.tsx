import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { QrCodeTitle } from "../qrCode/QrCodeTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <DateTimeInput label="Expiry Date" source="expiryDate" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="qrCodes"
          reference="QrCode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QrCodeTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
