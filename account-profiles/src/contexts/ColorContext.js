import React, { Component } from 'react';

const defaultTheme = { menu: '', themeSwitcher: 'teal', editInfo: 'grey', submit: ''}

const ColorContext = React.createContext(defaultTheme);

export const ColorConsumer = ColorContext.Consumer;

export class ColorStore extends Component {
  state = { menu: '', themeSwitcher: 'teal', editInfo: 'grey', submit: ''}

  static contextType = ColorContext;

  updateTheme = theme => console.log(theme, this.context);

  render() {
    return (
      <ColorContext value={{ ...this.state, updateTheme: this.updateTheme }}>
        {this.props.children}
      </ColorContext>
    );
  }
}

export default ColorContext;