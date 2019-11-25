import React from 'react';
// import ReactDOM from 'react-dom';


const ListEventsItem = ({item}) => {

    return (
        <div className="events">
            <div className="eventsName">{item.events[0].name}</div>
            <div className="timeEvents">{item.events[0].time}</div>
            <div className="descritpionEvents">{item.events[0].body}</div>
        </div>
    );
};

export default ListEventsItem;