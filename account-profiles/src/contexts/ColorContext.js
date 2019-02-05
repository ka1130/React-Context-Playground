import React, { Component } from 'react';
import { isEqual } from 'lodash';

const ColorContext = React.createContext();

const defaultTheme = { menu: '', themeSwitcher: 'teal', editInfo: 'grey', submit: ''};
const altTheme = { menu: 'teal', themeSwitcher: 'orange', editInfo: 'olive', submit: 'purple'};

export class ColorStore extends Component {
  state = defaultTheme;

  switchTheme = () => (isEqual(this.state, defaultTheme)) ? this.setState(altTheme) : this.setState(defaultTheme);

  render() {
    return (
      <ColorContext.Provider value={{ ...this.state, switchTheme: this.switchTheme }}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

export const ColorConsumer = ColorContext.Consumer;
