import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import { Container } from 'reactstrap';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import contact from "./components/Contact";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Products from './components/Products';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={contact} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Signin" component={Signin} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Products" component={Products} />
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
