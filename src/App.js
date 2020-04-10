import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Error from './components/Error';
import Spreadsheet from './components/Spreadsheet';
import Statistics from './components/Statistics';
import './styles/app.scss';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/statistics" component={Statistics} exact />
        <Route path="/sheets" component={Spreadsheet} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App
