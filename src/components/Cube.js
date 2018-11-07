import React, { Component } from 'react';
import threeEntryPoint from '../threejs/threeEntryPoint';

class Cube extends Component {

  componentDidMount() {
      threeEntryPoint(this.threeRootElement);
  }

  render () {
      return (
          <div className="header-header" ref={element => this.threeRootElement = element} />
      );
  }
}

export default Cube;


