import React from 'react';
import CalendarListDateItem from '../CalendarListDateItem';

const CalendarListDate = ({renderData, daySelected, onDaySelectedChange}) => {

    let key=10;

    return (
        <div className="calendar__date">
            {renderData.map(function (item) { 
                return (                
                    <CalendarListDateItem 
                        key = {key++} 
                        data = {item} 
                        daySelected = {daySelected}
                        onDaySelectedChange = {onDaySelectedChange}
                    />
                )
            })}
        </div> 
    );
};

export default CalendarListDate;


