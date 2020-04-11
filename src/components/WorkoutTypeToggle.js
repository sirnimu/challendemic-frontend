import React from 'react';

const WorkoutTypeToggle = (props) => {
    const [activeWorkout, setActiveWorkout] = props.activeWorkoutHook;

    const workoutTypes = [{id:'pushup', name:'Pushup'},
    {id:'plank', name:'Plank'},
    {id:'squat', name:'Squat'},
    {id:'situp', name:'Sit up'}]; 

    const onToggle = function(id){
      setActiveWorkout(id);
      props.setState({name: props.state.name, type: id, amount: props.state.amount});
      localStorage.setItem('lastWorkoutTypeActive', id);
    }
  return (
    <div className='workout-toggle'>
        {
        workoutTypes.map((obj, index)=> {
            return  <div className={obj.id === activeWorkout ? 'active' : 'non-active'} key={obj.id} onClick={()=> {onToggle(obj.id)}}>{obj.name}</div>
        })
        }
    </div>
  )
}

export default WorkoutTypeToggle
