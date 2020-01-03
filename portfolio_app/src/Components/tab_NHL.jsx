import React from 'react';

const NHL = props => {
  return (
    <div id="NHL" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <h3 className="tab-head valign-wrapper center-align nhl-orange-background">
          NHL
        </h3>
        <span className="subtitle nhl-orange">an NHL web application</span>
      </div>
      <div className="nhl-container">
        <div className="tab-information">
          <h3 className="nhl-orange information">information</h3>
        </div>
      </div>
    </div>
  );
};

export default NHL;
