import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { QRCODE_TITLE_FIELD } from "../qrCode/QrCodeTitle";

export const ScannedShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <ReferenceField label="QRCode" source="qrcode.id" reference="QrCode">
          <TextField source={QRCODE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ScanDate" source="scanDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
