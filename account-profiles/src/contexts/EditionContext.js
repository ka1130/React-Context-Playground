import React, { Component } from 'react';

const EditionContext = React.createContext();

export const EditionConsumer = EditionContext.Consumer;

export class EditionStore extends Component {
  state = { isVisible: false }

  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    return (
      <EditionContext.Provider value={{ ...this.state, toggleVisibility: this.toggleVisibility }}>
        {this.props.children}
      </EditionContext.Provider>
    );
  };
}
