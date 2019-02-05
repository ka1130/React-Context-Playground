import React, { Component } from 'react';

const ColorContext = React.createContext();

export const ColorConsumer = ColorContext.Consumer;

export class ColorStore extends Component {
  state = { menu: '', themeSwitcher: 'teal', editInfo: 'grey', submit: '' }

  switchTheme = () => {
    // if (this.state === defaultTheme) {
    //   this.setState({ ...altTheme });
    // } else {
    //   this.setState({ ...defaultTheme });
    // }
  };

  render() {
    return (
      <ColorContext.Provider value={{ ...this.state, switchTheme: this.switchTheme }}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

// const defaultTheme = { menu: '', themeSwitcher: 'teal', editInfo: 'grey', submit: ''};
// const altTheme = { menu: 'teal', themeSwitcher: 'orange', editInfo: 'olive', submit: 'purple'};