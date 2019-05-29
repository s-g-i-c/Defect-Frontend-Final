import React from "react";
import "antd/dist/antd.css";
// import CompanyLayout from "./components/Company/CompanyAdmin/CompanyLayout";
// import QALayout from "./components/Company/QA/QALayout";
// import DeveloperLayout from "./components/Company/Developer/DeveloperLayout";
import ProductAdminLayout from "./components/ProductAdmin/ProductAdminLayout";
// import PMLayout from "./components/Company/PM/PMLayout";
<<<<<<< HEAD
// import CommonLayout from "./components/Company/CommonDashboards/CommonLayout";
// import Main from "./components/MainPanel/Main";
=======
// import CommonLayout from './components/Company/CommonDashboards/CommonLayout'
// import Main from "./components/MainPanel/Main";
import Login from "./components/User/Login";
>>>>>>> d5bd11f173a75de15c2cd02965c55e714bebb830

function App() {
  return (
    <div>
      {/* <QALayout /> */}
      {/* <DeveloperLayout /> */}
      <ProductAdminLayout />
      {/* <CompanyLayout /> */}
      {/* <PMLayout /> */}
<<<<<<< HEAD
      {/* <CompanyLayout /> */}
      {/* <CommonLayout />  */}
      {/* <Main /> */}
=======
      {/* <CommonLayout /> */}
      {/* <Main /> */}
      <Login />
>>>>>>> d5bd11f173a75de15c2cd02965c55e714bebb830
    </div>
  );
}

export default App;
