import React from 'react';
// import ReactDOM from 'react-dom';
import './EventItem.css'


const EventItem = ({data}) => {
    
    let clazz = "events_for ev" + data.ev.length;
    let key=1000;

    return (        
        <div className={clazz} >
            {data.ev.map(  (item) => {   

                clazz = "line "+item;
                
                return <div key = {key++} className = {clazz}></div> ;
            })}
        </div>        
    );
};

export default EventItem;