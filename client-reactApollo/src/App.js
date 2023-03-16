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
import OrderList from "./pages/orderList";
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { onError } from "@apollo/client/link/error";

function App() {

  /***********************************
   * apollo client start
  ***********************************/
  const client = new ApolloClient({
    uri: 'https://onedev.i234.me:4000',
    // uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  });
  
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });
  /***********************************
   * apollo client end
  ***********************************/


    // 로그인 시 로컬스토리지에 user 정보 등록.. 로그인 구현하게 되면 소스 변경
  const user = {
      user:{
      id:1,
      email:"dh@dh.com",
      address:"대구 남구 대명동"
      }
  }
  localStorage.setItem("user", JSON.stringify(user))



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
                <Route path="/orderList" component={OrderList}/>
            </Switch>
          </Wrapper>
          <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
