import React from 'react';

const NHL = props => {
  return (
    <div id="NHL" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <h3 className="tab-head valign-wrapper center-align nhl-orange-background">
          NHL
        </h3>
        <span className="subtitle nhl-orange">
          a daily interesting statistics reporting site
        </span>
      </div>
      <div className="left-image-container row">
        <div className="col s12 l5 center-align">
          <img
            className="sdc-cpu-image"
            src="./assets/hockey.png"
            alt="Server CPU utilization across a client load gradient"
          />
        </div>
        <div className="tab-information col s12 l7">
          <h3 className="nhl-orange information">information</h3>
          <div className="collection">
            <div className="collection-item">
              <span className="information-category nhl-orange-background">
                Technologies:
              </span>
              <span className="information-text">
                Python, Flask, MySQL, Docker, Nginx, Pandas, Twitter API
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category nhl-orange-background">
                Inspiration:
              </span>
              <span className="information-text≈border">
                This was my first major engineering project -- I love hockey and
                wanted to try my hand at creating a daily interesting
                statistic-reporting service. This site scrapes daily games,
                scores, and players, reporting stats like most games since
                scoring and longest assist drought for today's players.
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category nhl-orange-background">
                Future Steps:
              </span>
              <span className="information-text">
                I created this site before I knew JavaScript. I could use
                vanilla JS or react to implement some increased dynamics on the
                site but am generally confident with the functionality and
                makeup of the site, with a 90+ score on Google Lighthouse tests
                for performance.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NHL;
