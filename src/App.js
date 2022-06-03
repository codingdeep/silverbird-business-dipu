import { BrowserRouter, Switch, Route } from "react-router-dom";

import '@mdi/font/css/materialdesignicons.css';

import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Calender from "./pages/Calender/Calender";
import Customers from "./pages/Customers/Customers";
import Services from "./pages/Services/Services";
import Staff from "./pages/Staff/Staff";
import Inventory from "./pages/Inventory/Inventory";
import Payroll from "./pages/Payroll/Payroll";
import CloseOut from "./pages/CloseOut/CloseOut";
import AddNewStaff from "./pages/Staff/AddNewStaff";
import ServiceTech from "./pages/Services/ServiceTech";
import { useEffect } from "react";




function App() {
  // const options = {
  //   method: "GET"
  // }

  // useEffect(() => {
  //   fetch('http://localhost:3000/Categories')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/add-new-staff" component={AddNewStaff} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/payroll" component={Payroll} />
          <Route exact path="/close-out" component={CloseOut} />
          <Route exact path="/servicesTech" component={ServiceTech} />

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
