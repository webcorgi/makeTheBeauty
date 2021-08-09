import { BrowserRouter} from "react-router-dom";
import ScrollToTop from './util/ScrollTop';
import { Route ,Switch } from "react-router-dom";
import React, {useState} from 'react';

import Wrapper from "./layout/wrapper";
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './pages/home';
import Order from './pages/order';
import OrderEnd from './pages/orderEnd';

function App() {

  return (
    <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Wrapper>
          <Switch>            
              <Route exact path="/" component={Home}/>  
              <Route path="/order" component={Order}/>
              <Route path="/orderEnd" component={OrderEnd}/>
              {/* <Route path="/faq" component={faq}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/> */}
          </Switch>
        </Wrapper>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
