import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

 //need to use the Timestamp component inside here 

  return (
    <div>
      <Timestamp time={props.timeStamp}/>
      <p>{props.person}</p>
      <p>{props.status} </p>
    </div>
  );
}

export default TimelineEvent;
