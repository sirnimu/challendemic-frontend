import React from 'react';

var today = new Date().toISOString().substr(0,10);


const DataLog = () => {
  return (
    <div id="data-log">
      <h3>Workout</h3> 
      <form>
        <div className='row'>
          <div className='label'>Name</div>
          <div contentEditable={true} className="input"></div>
        </div>

        <div className='row'>
          <div className='label'>Time</div>
          <div className="input">Now</div>
        </div>
 
        <div className='row'>
          <div className='label'>Amount</div>
          <div contentEditable={true} className="input"></div> 
        </div>

        <button type='button'>Add workout</button>
      </form>
    </div>
  )
}

export default DataLog
