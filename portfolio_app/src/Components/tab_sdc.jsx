import React from 'react';

const SDC = props => {
  return (
    <div id="SDC" className="container tab-body">
      <div className="valign-wrapper tab-head-container">
        <h3 className="tab-head valign-wrapper center-align sdc-pink-background">
          micro
        </h3>
        <span className="subtitle sdc-pink">
          a highly-scaled micro microservice
        </span>
      </div>
      <div className="left-image-container row">
        <div className="col s12 l4">
          <img
            className="sdc-cpu-image"
            src="./assets/cpu.png"
            alt="Server CPU utilization across a client load gradient"
          />
        </div>
        <div className="tab-information col s12 l7 offset-l1">
          <h3 className="sdc-pink information">Information</h3>
          <div className="collection">
            <div className="collection-item">
              <span className="information-category sdc-pink-background">
                Technologies:
              </span>
              <span className="information-text">
                Node.js, Espress.js, Cassandra, AWS EC2, NGINX
              </span>
            </div>
            <div className="collection-item">
              <span className="information-category sdc-pink-background">
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
              <span className="information-category sdc-pink-background">
                Future Steps:
              </span>
              <span className="information-text">FILL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDC;