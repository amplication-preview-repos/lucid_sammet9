import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QRCODE_TITLE_FIELD } from "../qrCode/QrCodeTitle";

export const ScannedList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Scanneds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <ReferenceField label="QRCode" source="qrcode.id" reference="QrCode">
          <TextField source={QRCODE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ScanDate" source="scanDate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
