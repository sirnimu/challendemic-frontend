import React, {useState, useEffect} from 'react';
import axios from 'axios';

var today = new Date().toISOString().substr(0,10);


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

function nameToId(name){
  return users.filter((user) => {
      return user.name === name
  })[0].id
}


function onButtonClick(obj){
  axios.post(`./api/Workouts/`, obj)
      .then(res => {
        console.log(obj);
      })
}

const DataLog = () => {
  let [state, setState] = useState({amount: 0, name: ''});
  return (
    <div id="data-log">
      <h3>Workout</h3> 
      <form>
        <div className='row'>
          <div className='label'>Name</div>
          <input value={state.name} onChange={(e)=>{setState({name: e.target.value, amount: state.amount})}} className="input"></input>
        </div>

        <div className='row'>
          <div className='label'>Time</div>
          <div className="input">Now</div>
        </div>
 
        <div className='row'>
          <div className='label'>Amount</div>
          <input type="text"  value={state.amount} className="input" onChange={(e)=>{setState({name: state.name, amount: e.target.value})}}></input> 
        </div>

        <button type='button' onClick= {()=> {onButtonClick({"userID":nameToId(state.name),"amount":Number.parseInt(state.amount)})}}>Add workout</button>
      </form>
    </div>
  )
}

export default DataLog
