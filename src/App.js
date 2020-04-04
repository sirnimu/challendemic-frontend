import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import DataLog from './components/DataLog';
import './styles/app.scss';

const App = () => {
  return (
    <>
         <Header />
         <main>
            <Dashboard />
            <DataLog />
         </main>
    </>
  )
}

export default App
