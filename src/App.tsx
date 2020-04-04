import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.scss';
import './styles/icons.scss';
import './App.scss';

import Mainpage from './pages/Mainpage';
import About from './pages/information/About';
import Office from './pages/information/Office';
import Delivery from './pages/information/Delivery';
import Payment from './pages/information/Payment';
import ForClients from './pages/information/ForClients';
import ForBusiness from './pages/information/ForBusiness';
import Contacts from './pages/information/Contacts';
import Catalog from './pages/Catalog';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Table from './pages/Table';

import './styles/adaptation/mobile.scss';
import './styles/adaptation/tablet.scss';
import './styles/adaptation/desktop.scss';


function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route component={Mainpage} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={Office} path="/office" />
            <Route component={Delivery} path="/delivery" />
            <Route component={Payment} path="/payment" />
            <Route component={ForClients} path="/clients" />
            <Route component={ForBusiness} path="/business" />
            <Route component={Contacts} path="/contacts" />
            <Route component={Catalog} path="/catalog" />
            <Route component={Profile} path="/profile"  />
            <Route component={Cart} path="/cart" />
            <Route component={Table} path="/table" />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
