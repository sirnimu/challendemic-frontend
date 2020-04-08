import React, {useState}from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import DataLog from './components/DataLog';
import Spreadsheet from './components/Spreadsheet';
import axios from 'axios';
import './styles/app.scss';

const App = () => {
  const [workout, setWorkout] = useState({amount: 0, name: localStorage.getItem('lastUsernameUsed') || ''});
  const [isLoading, setLoading] = useState(false);
  const [update, setUpdate] = useState({});

  const addWorkout = async function (e){
    setLoading(true);
    let users = await axios.get(`https://capi-dot-glass-sylph-272217.appspot.com/api/Users`);
    
    let newWorkout = {
      "userID": users.data.filter((user) => { return user.name === workout.name })[0].id,
      "amount": Number.parseInt(workout.amount)
    };

    await axios.post(`https://capi-dot-glass-sylph-272217.appspot.com/api/Workouts/`, newWorkout);

    setUpdate(newWorkout);

    localStorage.setItem('lastUsernameUsed', workout.name);
    
    setLoading(false);
  }

  return (
    <>
         <Header />
         <main>
            <Dashboard update={update} isLoading={isLoading}/>
            <DataLog onSubmit={addWorkout} isLoading={isLoading}  setLoading={setLoading} state={workout} setState={setWorkout}/>
            <Spreadsheet />
         </main>
    </>
  )
}

export default App
