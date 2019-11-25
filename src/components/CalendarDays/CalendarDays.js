import React from 'react';
// import ReactDOM from 'react-dom';


const CalendarDays = ({days,select}) => {
    
    let key = 500;
    const elems = days.map( (item) => {
        return  <div key={key++} className="calendar__day">{item}</div>;        
    }); 
    
    return ( 
        select ? null :
        <div className="calendar__days"> 
           {elems}
        </div>
    );
};

export default CalendarDays;