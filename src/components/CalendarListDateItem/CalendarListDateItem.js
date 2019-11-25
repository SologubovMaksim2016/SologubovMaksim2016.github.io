import React from 'react';
import EventItem from '../EventItem';
// import ReactDOM from 'react-dom';

const CalendarListDateItem = ({data, daySelected, onDaySelectedChange}) => {

    const isSelected = +daySelected === data.name;
    const clazz = isSelected ? "dayWeek daySelected" : "dayWeek";

    function renderEvent(data) {
        return (            
        !data.ev.length ? <div></div> : <EventItem data = {data}/>                
    )};   
                    
    const elem = data.name[0] ==='0' ? <div></div> :  
                <div className = {clazz} onClick={()=>{onDaySelectedChange(data.name)}}> 
                    <div className ={data.redPoint ? "redPoint " : "" }></div>
                    <div className = {data.wd ? "date wd" : "date"}>{data.name}</div>                    
                    {renderEvent(data)}                    
                </div>
 
    return (
        <>    
            {elem}
        </>        
    );
};

export default CalendarListDateItem;