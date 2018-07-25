import React, { Component } from 'react';
import RequestData from './RequestData';

interface IProps {
  renderMode: string;
  baseURL: string;
}

class App extends Component<IProps, any> {
  public render() {
    return (
      <RequestData baseURL={this.props.baseURL} />
    );
  }
}

export default App;
