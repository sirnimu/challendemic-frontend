import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../utils/user.js';

const todayMaxAmount = getDaysPassedSinceStart() * 20;

function getDaysPassedSinceStart(){
    return Math.ceil(Math.abs(new Date() - new Date(2020,2,23)) / (1000 * 60 * 60 * 24)); 
};

function Dashboard(props) {
  const [todayWorkouts, setTodayWorkouts] = useState([]);

  useEffect(() => {
    async function getTodaysProgress(){
        await axios.get(`https://capi-dot-glass-sylph-272217.appspot.com/api/Workouts/TodaysProgress`)
        .then(res => {
            setTodayWorkouts(res.data);
        });
    }

    getTodaysProgress();
  }, [props.update]);

  return (
        <div id="dashboard">
            <h3>Daily progress</h3>
            <div id="progress-list">
                {
                  todayWorkouts.map((obj, index) => {
                        let progressInPercents = Math.min(obj.amount / todayMaxAmount * 100, 100);
                        return  <div className="participant" key={index}>
                                    <div className="name">{obj.name}</div>
                                    <div className="progress-max">
                                        <div className="progress-current" style={{width: progressInPercents + '%'}}>{obj.amount}</div>
                                    </div>
                                    <div className="progress-missing">{todayMaxAmount  - obj.amount}</div>
                                </div>
                    })
                }
            </div>
        </div>
  )
}

export default Dashboard;
