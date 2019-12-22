import React from 'react';
import './App.css';
import { useSpring, animated, config } from 'react-spring';

import Node from './Components/node';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: Array.from({ length: 100 }, x => 'unsearched'),
    };
  }
  // const props = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   config: config.molasses,
  //   // duration: 10000,
  // });
  render() {
    const { nodes } = this.state;

    return (
      <div className="welcome valign-wrapper">
        {/* <div className="row welcome-row">
          <div className="col l2">&nbsp;</div>
          <animated.div style={props} className="col l8 name-container">
            <p className="name">JONATHAN OLSON</p>
          </animated.div>
          <div className="col l2">&nbsp;</div>
        </div> */}
        <div className="row">
          <div className="field-container">
            <div className="field">
              {nodes.map(searchState => {
                return <Node searchState={searchState} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
