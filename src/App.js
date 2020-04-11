import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Podium from './components/Podium';
import Settings from './components/Settings';
import Error from './components/Error';
import './styles/app.scss';

const App = () => {

  (function(){
    if(!localStorage.getItem('lastWorkoutTypeActive')){
      localStorage.setItem('lastWorkoutTypeActive', 'pushup');
    }

  })();

  return (
    <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/statistics" component={Statistics} exact />
        <Route path="/podium" component={Podium} />
        <Route path="/settings" component={Settings} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App
