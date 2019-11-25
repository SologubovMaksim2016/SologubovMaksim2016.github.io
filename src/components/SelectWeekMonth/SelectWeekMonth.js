import React from 'react';
// import ReactDOM from 'react-dom';

const SelectWeekMonth = ({select}) =>{

  let [selectPanel,monthSelect,weekSelect] = select;
  
    return (
        !selectPanel? null:
        <div className="selectWeekMonth">
                <button className="but" onClick={weekSelect}>This week</button>
                <button className="but" onClick={monthSelect}>This month</button>
              </div>
    );
};

export default SelectWeekMonth;