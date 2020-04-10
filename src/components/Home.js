import React, {useState} from 'react';
import Dashboard from './Dashboard';
import DataLog from './DataLog';
import axios from 'axios';

const Home = () => {
    const [workout, setWorkout] = useState({amount: 0, name: localStorage.getItem('lastUsernameUsed') || ''});
    const [isLoading, setLoading] = useState(false);
    const [update, setUpdate] = useState({});
  

    const addWorkout = async function (e){
      setLoading(true);
      let users = await axios.get(`https://capi-dot-glass-sylph-272217.appspot.com/api/Users`);

      if (users.data.length) {
        let newWorkout = {
          "userID": users.data.filter((user) => { return user.name === workout.name })[0].id,
          "amount": Number.parseInt(workout.amount)
        };

        await axios.post(`https://capi-dot-glass-sylph-272217.appspot.com/api/Workouts/`, newWorkout);
        setUpdate(newWorkout);
        localStorage.setItem('lastUsernameUsed', workout.name);
      }
     
      setLoading(false);
    }
  
    return (
      <main>
        <Dashboard update={update} isLoading={isLoading}/>
        <DataLog onSubmit={addWorkout} isLoading={isLoading}  setLoading={setLoading} state={workout} setState={setWorkout}/>
      </main>
    )
  }
  
  export default Home