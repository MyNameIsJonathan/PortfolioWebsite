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
      <div className="left-image-container row">
        <div className="me-container col s12 l4">
          <img
            className="me-image"
            src="./assets/me.jpeg"
            alt="Me, wearing a suit, hands folded in a professional setting"
          />
        </div>
        <div className="tab-information col s12 l7 offset-l1">
          <h3 className="about-me-blue information">About Me</h3>
          <div className="collection">
            <div className="collection-item">
              <span className="information-category about-me-blue-background">
                Background:
              </span>
              <span className="information-text">
                I grew up in the service industry, spent time working in
                biochemical research, and have been learning software
                engineering for just over two years
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category about-me-blue-background">
                Interests:
              </span>
              <span className="information-text≈border">
                I love playing hockey, making (and drinking) coffee, playing the
                drums, woodworking, playing board games, and going to the beach
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category about-me-blue-background">
                Personal Goal:
              </span>
              <span className="information-text">
                I want to start my own sofware company within the next 10 years
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
