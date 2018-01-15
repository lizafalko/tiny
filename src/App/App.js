import React, { Component } from 'react';
import ColorMonitor from '../ColorMonitor/ColorMonitor';

class App extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this)
  }

  state = {
    pik: 'yellow'
  }

  updateState = function (e) {
    this.setState({
      pik: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <ColorMonitor color={this.state.pik} />
        <input onChange={this.updateState} />
      </div>
    );
  }
}

export default App;
