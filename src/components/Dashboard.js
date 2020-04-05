import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../utils/user.js';

const users = [
    {
        id: 1,
        name: 'Paulius'
    },
    {
        id: 2,
        name: 'Tomas'
    },
    {
        id: 3,
        name: 'Julius'
    },
    {
        id: 4,
        name: 'Robertas'
    },
    {
        id: 5,
        name: 'Mindaugas'
    },
    {
        id: 6,
        name: 'Vytautas Kirka'
    },
    {
        id: 7,
        name: 'Vytautas Kazlas'
    }
  ];

function idToName(id){
    return users.filter((user) => {
        return user.id === id
    })[0].name
}

const todayMaxAmount = getDaysPassedSinceStart() * 20;

function getDaysPassedSinceStart(){
    return Math.ceil(Math.abs(new Date() - new Date(2020,2,23)) / (1000 * 60 * 60 * 24)); 
}

function Dashboard() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get(`./api/Workouts/TodaysProgress`)
    .then(res => {
        setWorkouts(res.data);
        console.log(res.data);
    });
  }, []);

  return (
        <div id="dashboard">
            <h3>Daily progress</h3>
            <div id="progress-list">
                {
                  workouts.map((obj, index) => {
                        let progressInPercents = obj.amount / todayMaxAmount * 100;
                        return  <div className="participant" key={index}>
                                    <div className="name">{idToName(obj.userID)}</div>
                                    <div className="progress-max">
                                        <div className="progress-current" style={{width: progressInPercents + '%'}}>{obj.amount}</div>
                                    </div>
                                    <div className="progress-missing">{ todayMaxAmount  - obj.amount}</div>
                                </div>
                    })
                }
            </div>
        </div>
  )
}

export default Dashboard
