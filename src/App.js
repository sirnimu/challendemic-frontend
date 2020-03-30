import React from 'react';
import Header from './Header/header';
import Dashboard from './Sections/Dashboard/dashboard';
import Notifications from './Sections/Notifications/notifications';
import DataEntry from './Sections/DataEntry/dataEntry';

const App = () => {
  return (
    <div>
         <Header />
         <main>
            <Dashboard />
            <Notifications />
            <DataEntry />
         </main>
    </div>
  )
}

export default App
