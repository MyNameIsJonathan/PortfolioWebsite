import React from 'react';

const AboutMe = props => {
  return (
    <div id="aboutMe" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <h3 className="tab-head valign-wrapper center-align about-me-blue-background">
          about me
        </h3>
        <span className="subtitle about-me-blue">
          full stack software engineer
        </span>
      </div>
      <div className="about-me-container">
        <div className="tab-information">
          <h3 className="about-me-blue information">Information</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
