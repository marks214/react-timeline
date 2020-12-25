import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

 //need to use the Timestamp component inside here 

  return (
    <div>
      <p>{props.person}</p>
      <p>{props.status} </p>
      <p> {props.timeStamp}</p>
    </div>
  );
}

export default TimelineEvent;
