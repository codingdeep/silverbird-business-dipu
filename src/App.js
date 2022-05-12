import { BrowserRouter, Switch, Route } from "react-router-dom";

import '@mdi/font/css/materialdesignicons.css';

import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Calender from "./pages/Calender/Calender";
import Customers from "./pages/Customers/Customers";
import Services from "./pages/Services/Services";
import Staff from "./pages/Staff/Staff";




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/staff" component={Staff} />

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
