import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import AboutMe from './Components/tab_about_me';
import NHL from './Components/tab_NHL';
import Minify from './Components/tab_minify';
import FEC from './Components/tab_fec';
import SDC from './Components/tab_sdc';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />

        <main>
          <AboutMe />
          <NHL />
          <Minify />
          <FEC />
          <SDC />
        </main>

        <Footer />
      </>
    );
  }
}

export default App;
