import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import PageThree from './Components/PageThree';

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
          <PageOne />
          <PageTwo />
          <PageThree />
        </main>

        <Footer />
      </>
    );
  }
}

export default App;
