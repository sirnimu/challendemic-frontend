import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Dashboard(props) {
  const [todaysPushups, setTodaysPushups] = useState([]);
  const [todaysPlanks, setTodaysPlanks] = useState([]);

  useEffect(() => {
    async function getTodaysPushups(){
        await axios.get(`https://capi-dot-glass-sylph-272217.appspot.com/api/Workouts/TodaysProgress/pushup`)
        .then(res => {
            setTodaysPushups(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    async function getTodaysPlanks(){
        await axios.get(`https://capi-dot-glass-sylph-272217.appspot.com/api/Workouts/TodaysProgress/plank`)
        .then(res => {
            setTodaysPlanks(res.data);
        })
        .catch(function (error) {
            console.warn(`Failed to GET /api/Workouts/TodaysProgress/`);
        });
    }

    getTodaysPushups();
    getTodaysPlanks();
  }, [props.update]);

  return (
        <div id="dashboard">
            <h3>Pushups</h3>
            <div id="progress-list">
                {
                  todaysPushups.map((obj, index) => {
                        const maxPushups = 200;
                        const progressInPercents = Math.min(obj.sum / maxPushups * 100, 100);
                        return  <div className="participant" key={index}>
                                    <div className="name">{obj.name}</div>
                                    <div className="progress-max">
                                        <div className="progress-current" style={{width: progressInPercents + '%'}}>{obj.sum}</div>
                                    </div>
                                    <div className="progress-missing">{Math.max(maxPushups  - obj.sum, 0)}</div>
                                </div>
                    })
                }
            </div>

            <h3>Planks</h3>
            <div id="progress-list">
                {
                  todaysPlanks.map((obj, index) => {
                        const maxPlank = 40;
                        let progressInPercents = Math.min(obj.sum / maxPlank * 100, 100);
                        return  <div className="participant" key={index}>
                                    <div className="name">{obj.name}</div>
                                    <div className="progress-max">
                                        <div className="progress-current" style={{width: progressInPercents + '%'}}>{obj.sum}</div>
                                    </div>
                                    <div className="progress-missing">{Math.max(maxPlank  - obj.sum, 0)}</div>
                                </div>
                    })
                }
            </div>
        </div>
  )
}

export default Dashboard;
