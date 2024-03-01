import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';
import Doritos from './Doritos';
import Lays from './Lays';
import Snickers from './Snickers';
import Reeses from './Reeses';
import Coke from './Coke';
import Pepsi from './Pepsi';
import NavBar from './NavBar';
import Icons from './icons';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <VendingMachine/>
      </Route>
      <Route exact path="/chips">
        <Chips/>
      </Route>
      <Route exact path="/candy">
        <Candy/>
      </Route>
      <Route exact path="/soda">
        <Soda/>
      </Route>
      <Route exact path="/doritos">
        <Doritos/>
      </Route>
      <Route exact path="/lays">
        <Lays/>
      </Route>
      <Route exact path="/snickers">
        <Snickers/>
      </Route>
      <Route exact path="/reeses">
        <Reeses/>
      </Route>
      <Route exact path="/coke">
        <Coke/>
      </Route>
      <Route exact path="/pepsi">
        <Pepsi/>
      </Route>
      <NavBar/>
      <Icons/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
