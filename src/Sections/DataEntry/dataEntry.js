import React from 'react';
import './style.css';

const players = ['Paulius', 'Tomas', 'Julius', 'Vytautas', 'Mindaugas'];

var date = new Date().toISOString().substr(0,10);

const Notifications = () => {
  return (
    <div id="section-input">
      <h3>My push ups</h3> 
      <p>Name:</p>
      <select name="select" >
        {players.map(function(n) { 
            return (<option value={n}>{n}</option>);
        })}
      </select>
      <p>Date</p>
      <input type="date" defaultValue={date}></input> 
      <p>Amount</p>
      <input type="number" value='0'></input> 
      <br></br>
      <button>Add workout</button>
    </div>
  )
}

export default Notifications
