import React, { Component } from 'react';

const ColorContext = React.createContext();

const defaultTheme = { menu: '', themeSwitcher: 'teal', editInfo: 'grey', submit: ''};
const altTheme = { menu: 'teal', themeSwitcher: 'orange', editInfo: 'olive', submit: 'purple'};

export class ColorStore extends Component {
  state = defaultTheme;

  switchTheme = () => {
    if (this.state === defaultTheme) {
      this.setState(altTheme);
    } else {
      this.setState(defaultTheme);
    }
    console.log(this.state);
  };

  render() {
    return (
      <ColorContext.Provider value={{ ...this.state, switchTheme: this.switchTheme }}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

export const ColorConsumer = ColorContext.Consumer;
