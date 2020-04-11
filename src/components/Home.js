import React, {useState} from 'react';
import Dashboard from './Dashboard';
import DataLog from './DataLog';
import axios from 'axios';

const Home = () => {
    const [workout, setWorkout] = useState({amount: '', type: 'pushup', name: localStorage.getItem('lastUsernameUsed') || ''});
    const [isLoading, setLoading] = useState(false);
    const [update, setUpdate] = useState({});
    const [error, setError] = useState({});
  

    const addWorkout = async function (e){
      setLoading(true);
      let users = await axios.get(`https://capi-dot-glass-sylph-272217.appspot.com/api/Users`).catch(function (error) {
        console.log(error);
      });

      if (users.data.length) {
        let user = users.data.find((user) => { return user.name === workout.name });

        if (!user){
          setError({"message": "User name not found"});
          setLoading(false);
          return;
        } else {
          setError({});
        }

        let newWorkout = {
          "userID": user.id,
          "type": workout.type,
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
        <DataLog onSubmit={addWorkout} isLoading={isLoading} setLoading={setLoading} state={workout} setState={setWorkout} error={error}/>
        <Dashboard update={update} isLoading={isLoading}/>
      </main>
    )
  }
  
  export default Home