import React from 'react';

const FEC = props => {
  return (
    <div id="FEC" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <a
          href="https://github.com/MyNameIsJonathan/5cloud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3
            className="tab-head valign-wrapper center-align fec-green-background"
            id="fec-link"
          >
            music player
          </h3>
        </a>
        <span className="subtitle fec-green">
          a web-based music playback application
        </span>
      </div>
      <div className="top-image-container row">
        <div className="col s12">
          <img
            className="fec-gif"
            src="./assets/music_player.gif"
            alt="Server CPU utilization across a client load gradient"
          />
        </div>
        <div className="tab-information col s12">
          <h3 className="fec-green information">information</h3>
          <div className="collection">
            <div className="collection-item">
              <span className="information-category fec-green-background">
                Technologies:
              </span>
              <span className="information-text">
                React, Node.js, MySQL, AWS EC2, AWS S3 Storage, Express.js
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category fec-green-background">
                Inspiration:
              </span>
              <span className="information-text≈border">
                I've loved music for as long as I can remember, from my garage
                band in middle school to now building music playback
                applications. I built this web app for two reasons: 1 - I hadn't
                yet worked with media playback and though this project would be
                an excellent foray into a new subgenre (pun intended) of
                engineering and 2 - I just wanted to build something that I
                enjoy using before it's even finished. I loved building this app
                because of the technical challenges it led me to overcome and
                because once I created initial functionality, it became my
                playback app of choice.
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category fec-green-background">
                Future Steps:
              </span>
              <span className="information-text">
                Next steps could include expanding song selection (the initial
                application only included 100 songs), adding music toggling
                abilities i.e., searching for other songs, creating and
                modifying playlists, etc., and ameliorating network usage, as
                the volume of data sent between the client and server could
                likely be condensed even further to allow faster load times and
                better user experience.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FEC;
