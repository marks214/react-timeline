import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
 //This component will take a list of timeline events as a prop and render a list of TimelineEvent components 
 const timelineComponents = props.events.map((event, i) => {
  return (
    <li key={i}>
      <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp} />
    </li>
  );
});
  return (
    <div>
      {timelineComponents}
    </div>
  );
}

export default Timeline;