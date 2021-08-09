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
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client'


function App() {

  // ApolloClient setup
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
