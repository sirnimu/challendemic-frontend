import React from 'react';
import './style.css';

const data = [
    {
        "name": "Paulius",
        "progress": "60"
    },
    {
        "name": "Tomas",
        "progress": "60"
    },
    {
        "name": "Vytautas",
        "progress": "40"
    }
];

const maxToday = 60;

const Dashboard = () => {
  return (
        <div id="dashboard">
            <h3>Today</h3>
            <div id="progress-list">
                {
                    data.map((obj, index) => {
                        return  <div className="participant" key={index}>
                                    <div className="name">{obj.name}</div>
                                    <div className="progress-max-value">
                                        <div className="progress-current-value" style={{width: obj.progress / maxToday * 100 + '%'}}>{obj.progress} / {maxToday}</div>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
  )
}

export default Dashboard
