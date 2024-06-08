import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QRCODE_TITLE_FIELD } from "./QrCodeTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const QrCodeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsScanned" source="isScanned" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Register"
          target="qrCodeId"
          label="Registers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="QRCode"
              source="qrcode.id"
              reference="QrCode"
            >
              <TextField source={QRCODE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Scanned"
          target="qrCodeId"
          label="Scanneds"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <ReferenceField
              label="QRCode"
              source="qrcode.id"
              reference="QrCode"
            >
              <TextField source={QRCODE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ScanDate" source="scanDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
