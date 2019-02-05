import React, { Component } from 'react';

const Context = React.createContext();

export const ProfileConsumer = Context.Consumer;

export class ProfileStore extends Component {
  state = { name: 'Jenny Hess', status: 'silver' }

  updateProfile = profileData => this.setState({ ...profileData });

  render() {
    console.log(this.props)
    return (
      <Context.Provider value={{ ...this.state, updateProfile: this.updateProfile }}>
        {this.props.children}
      </Context.Provider>
    );
  };
}

export default Context;

