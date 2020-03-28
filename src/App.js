import React from 'react';
import Header from './Header/header';
import Dashboard from './Sections/Dashboard/dashboard';
import Sheets from './Sections/Sheets/sheets';
import Notifications from './Sections/Notifications/notifications';
import DataEntry from './Sections/DataEntry/dataEntry';

const App = () => {
  return (
    <div id="container">
         <Header />
         <main>
            <Dashboard />
            <Sheets />
            <Notifications />
            <DataEntry />
         </main>
    </div>
  )
}

export default App
