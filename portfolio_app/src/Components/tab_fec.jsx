import React from 'react';

const FEC = props => {
  return (
    <div id="FEC" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <h3 className="tab-head valign-wrapper center-align fec-green-background">
          music player
        </h3>
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
                I wanted to test my scaling horizontal scaling abilities, so I
                expanded my Cassandra/Scylla node cluster to 10 nodes, as well
                as my Express server infrastructure to 4 servers, behind a
                heavily-configured NGINX load balancer
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category fec-green-background">
                Future Steps:
              </span>
              <span className="information-text">
                Further work could easily scale vertically (upgrade instances)
                or horizontally via Cassandra node count increase or server
                count increase. Request load/duration could be lightened via
                increased use of compression, further load balancing
                optimizations, or distributing nodes/serves across different AWS
                regions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FEC;
