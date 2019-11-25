import React from 'react';
// import ReactDOM from 'react-dom';

const Header =({dataHeader}) => {

    let [headerData, nextButton, prevButton, selectWeekMonthPanel, arrowClick] = dataHeader;     
    
    let style = {
      fontSize: headerData[3]
    };
    
    return (
        <div className="header">             
                <div className="current">
                  <div className="currentCenter" style={style}>
                    {headerData[1]}
                  </div>            
                  <div className="arrow">
                    <img className="arrowImg" 
                         src={ selectWeekMonthPanel ?  "arrowUp.png" : "arrowDown.png" }
                         onClick={arrowClick}
                         alt=".png">
                    </img>
                  </div>
                  <div className="prev" onClick={prevButton}>{headerData[0]}</div>
                  <div className="next" onClick={nextButton}>{headerData[2]}</div>
                </div>
              </div> 
    );
};

export default Header;