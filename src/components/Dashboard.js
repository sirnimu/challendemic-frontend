import React from 'react';

const data = [
    {
        "name": "Paulius",
        "progress": "60"
    },
    {
        "name": "Tomas",
        "progress": "121"
    },
    {
        "name": "Vytautas",
        "progress": "5"
    },
    {
        "name": "Mindaugas",
        "progress": "0"
    },
    {
        "name": "Julius",
        "progress": "240"
    }
];

const maxToday = 240;

const Dashboard = () => {
  return (
        <div id="dashboard">
            <h3>Daily progress</h3>
            <div id="progress-list">
                {
                    data.map((obj, index) => {
                        let progressInPercents = (obj.progress / maxToday * 100).toFixed(0);
                        return  <div className="participant" key={index}>
                                    <div className="name">{obj.name}</div>
                                    <div className="progress-max-value">
                                        <div className="progress-current-value" style={{width: progressInPercents + '%'}}> {progressInPercents}%</div>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
  )
}

export default Dashboard
