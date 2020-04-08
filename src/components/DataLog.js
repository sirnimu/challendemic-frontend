import React from 'react';

const DataLog = (props) => {
  return (
    <div id="data-log">
      <h3>Workout</h3> 
      <form>
        <div className='row'>
          <div className='label'>Name</div>
          <input value={props.state.name} onChange={(e)=>{props.setState({name: e.target.value, amount: props.state.amount})}} className="input"></input>
        </div>

        <div className='row'>
          <div className='label'>Time</div>
          <div className="input">Now</div>
        </div>
 
        <div className='row'>
          <div className='label'>Amount</div>
          <input type="text"  value={props.state.amount} className="input" onChange={(e)=>{props.setState({name: props.state.name, amount: e.target.value})}}></input> 
        </div>

        <button type='submit' disabled={props.isLoading} onClick={props.onSubmit} style={{backgroundColor: props.isLoading ? '#222' : '#181717'}}>
          {props.isLoading ? 'Loading...' : 'Add workout'}
        </button>
      </form>
    </div>
  )
}

export default DataLog
