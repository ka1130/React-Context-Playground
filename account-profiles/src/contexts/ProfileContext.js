import React, { Component } from 'react';

const ProfileContext = React.createContext();

export const ProfileConsumer = ProfileContext.Consumer;

export class ProfileStore extends Component {
  state = { name: 'Jenny Hess', status: 'silver' }

  updateProfile = profileData => this.setState({ ...profileData });

  render() {
    return (
      <ProfileContext.Provider value={{ ...this.state, updateProfile: this.updateProfile }}>
        {this.props.children}
      </ProfileContext.Provider>
    );
  };
}

export default ProfileContext;
