import React from 'react';
import './App.css';
import { useSpring, animated, config } from 'react-spring';

function App() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
    duration: 10000,
  });
  return (
    <div className="welcome valign-wrapper">
      <div className="row">
        <div className="col s12"></div>
        <div className="col s12 m4 l1"></div>
        <animated.div style={props} className="col s12 m4 l10 name-container">
          <p className="name">Jonathan Olson</p>
        </animated.div>
        <div className="col s12 m4 l1"></div>
      </div>
    </div>
  );
}

export default App;
