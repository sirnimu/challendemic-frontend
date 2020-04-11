import React from 'react';
import WorkoutTypeToggle from './WorkoutTypeToggle';

const DataLog = (props) => {
  const [activeWorkout, setActiveWorkout] = React.useState(localStorage.getItem('lastWorkoutTypeActive'));

  const onAmountInputChange = function(e){
    props.setState({name: props.state.name, type: activeWorkout, amount: e.target.value});
  };

  return (
    <div id="data-log">
      <h3>Workout</h3> 
      <form>
        <div className='row'>
          <WorkoutTypeToggle activeWorkoutHook={[activeWorkout, setActiveWorkout]} setState={props.setState} state={props.state} />
        </div>

        <div className='row'>
          <div className='label'>Name</div>
          <input value={props.state.name} onChange={(e)=>{props.setState({name: e.target.value, type: activeWorkout, amount: props.state.amount})}} className="input"></input>
        </div>
 
        <div className='row'>
          <div className='label'>{activeWorkout === 'plank' ? 'Duration' : 'Amount'}</div>
          <input type="text" value={props.state.amount} className="input" onChange={onAmountInputChange}></input> 
        </div>

        <button type='submit' disabled={props.isLoading} onClick={props.onSubmit} style={{backgroundColor: props.isLoading ? '#65101E' : '#7F1526'}}>
          {props.isLoading ? 'Loading...' : 'Add workout'}
        </button>

        {props.error.message ? <div className='error'>{props.error.message}</div> : null }
      </form>
    </div>
  )
}

export default DataLog
