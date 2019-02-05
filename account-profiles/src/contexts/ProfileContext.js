import React, { Component } from 'react';

const Context = React.createContext();

export const ProfileConsumer = Context.Consumer;

export class ProfileStore extends Component {
  state = { name: 'Jenny Hess', status: 'silver' }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  };
}

export default Context;

