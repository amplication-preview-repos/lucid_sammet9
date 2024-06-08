import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { RegisterTitle } from "../register/RegisterTitle";
import { ScannedTitle } from "../scanned/ScannedTitle";

export const QrCodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <BooleanInput label="IsScanned" source="isScanned" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="registers"
          reference="Register"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RegisterTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="scanneds"
          reference="Scanned"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScannedTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
