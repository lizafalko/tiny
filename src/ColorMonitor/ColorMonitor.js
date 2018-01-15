import React, { Component } from 'react';
import './ColorMonitor.css';

class ColorMonitor extends Component {
  render() {
    return (
      <div className="ColorMonitor" style={{backgroundColor: this.props.color}}>
      </div>
    );
  }
}

export default ColorMonitor;
