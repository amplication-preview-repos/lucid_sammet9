import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { QrCodeList } from "./qrCode/QrCodeList";
import { QrCodeCreate } from "./qrCode/QrCodeCreate";
import { QrCodeEdit } from "./qrCode/QrCodeEdit";
import { QrCodeShow } from "./qrCode/QrCodeShow";
import { ScannedList } from "./scanned/ScannedList";
import { ScannedCreate } from "./scanned/ScannedCreate";
import { ScannedEdit } from "./scanned/ScannedEdit";
import { ScannedShow } from "./scanned/ScannedShow";
import { RegisterList } from "./register/RegisterList";
import { RegisterCreate } from "./register/RegisterCreate";
import { RegisterEdit } from "./register/RegisterEdit";
import { RegisterShow } from "./register/RegisterShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CounterSafe"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="QrCode"
          list={QrCodeList}
          edit={QrCodeEdit}
          create={QrCodeCreate}
          show={QrCodeShow}
        />
        <Resource
          name="Scanned"
          list={ScannedList}
          edit={ScannedEdit}
          create={ScannedCreate}
          show={ScannedShow}
        />
        <Resource
          name="Register"
          list={RegisterList}
          edit={RegisterEdit}
          create={RegisterCreate}
          show={RegisterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
