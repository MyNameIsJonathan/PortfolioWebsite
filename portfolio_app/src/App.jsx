import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="main">
        <Navbar />
        <div className="valign-wrapper">
          <div className="container">
            <h1 className="welcome-hello valign-wrapper center-align">Hello</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
