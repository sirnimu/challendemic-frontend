import React, {useState}from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import DataLog from './components/DataLog';
import axios from 'axios';
import './styles/app.scss';

const App = () => {
  let [workout, setWorkout] = useState({amount: 0, name: localStorage.getItem('lastUsernameUsed') || ''});
  let [update, setUpdate] = useState({});

  const addWorkout = async function (e){
    e.preventDefault();
    let users = await axios.get(`${APIBaseURL}/api/Users`);

    let newWorkout = {
      "userID": users.data.filter((user) => { return user.name === workout.name })[0].id,
      "amount": Number.parseInt(workout.amount)
    };

    const APIBaseURL = 'https://cors-anywhere.herokuapp.com/' + 'https://capi-dot-glass-sylph-272217.appspot.com';
    await axios.post(`${APIBaseURL}api/Workouts/`, newWorkout);

    setUpdate(newWorkout);

    localStorage.setItem('lastUsernameUsed', workout.name);
  }

  return (
    <>
         <Header />
         <main>
            <Dashboard update={update}/>
            <DataLog onSubmit={addWorkout} state={workout} setState={setWorkout}/>
         </main>
    </>
  )
}

export default App
