import React from 'react';
import ListEventsItem from '../ListEventsItem';
import moment, { months } from 'moment';


const ListEvents = ({data}) => { //data,offset,dayselected

    let daySelected = moment()
                      .add(data[1],'month')
                      .startOf('months')
                      .add(data[2]-1,'day');

    const dataSelect = data[0].filter( (obj) => obj.date === daySelected.format("DD.MM.YYYY"));

    let key = 300;
    const elems = dataSelect.map( (item) => {    
        return (
            <ListEventsItem key={key++} item = {item}/>           
        )
    });
   
    let selectDate = data[2] ? daySelected.format("dddd,  DD  MMMM").toUpperCase()  :  "" ;
   
    return(
        <div className="listEvents">
                <div className='dateEvents'> {selectDate}</div> 
                {elems}  
        </div>
    );
};

export default ListEvents;