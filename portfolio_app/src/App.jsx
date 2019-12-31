import React from 'react';
import './App.css';
import { useSpring, animated, config } from 'react-spring';

import Node from './Components/field-node';

// import dijkstra from './dijkstra';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: Array.from({ length: 1089 }, (x, idx) => (
        <Node searchState={'unsearched'} key={idx} />
      )),
      routeNodes: new Set(),
      nameNodes: new Set(),
    };

    this.state.nameNodes.add(500);
    this.state.nameNodes.add(510);
    this.state.nameNodes.add(520);

    this.row_length = 33;
    this.num_rows = 33;
  }

  componentDidMount() {
    this.traverse();
  }

  // TODO COMPLETE DIJKSTRA ? SEARCH
  traverse() {
    const nodesToTraverse = [];
    let currentNode;
    nodesToTraverse.push(0);
    while (nodesToTraverse.length) {
      const currentNodeIdx = nodesToTraverse.pop();
      currentNode = this.state.nodes[currentNodeIdx];
      if (currentNode.props.searchState === 'unsearched') {
        const row = Math.floor(currentNodeIdx / this.row_length);
        const col = currentNodeIdx % this.row_length;
        let top;
        let bottom;
        let right;
        let left;
        if (row > 0) {
          nodesToTraverse.push(currentNodeIdx - this.row_length);
        }
        if (row < this.row_length - 1) {
          nodesToTraverse.push(currentNodeIdx + this.row_length);
        }
        if (col < this.num_rows - 1) {
          nodesToTraverse.push(currentNodeIdx + 1);
        }
        if (col > 0) {
          nodesToTraverse.push(currentNodeIdx - 1);
        }
      }
    }
  }

  render() {
    const { nodes } = this.state;

    return (
      <div className="main valign-wrapper">
        <div className="row">
          <div className="field-container">
            <div className="field">
              {nodes.map(node => {
                return node;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
