import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({ seconds: state.seconds + 1 }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // JSX...

  //render() {
  //  return <div>Seconds: {this.state.seconds}</div>;
  //}

  // ...or, JavaScript

  render() {
    return React.createElement(
      "div", null,
      "Seconds: ", this.state.seconds
    );
  }
}

function App() {
  return <Timer />;
}

export default App;
