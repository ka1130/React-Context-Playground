import React, { Component } from 'react';
import { ColorConsumer } from 'contexts/ColorContext';

class ThemeSwitcher extends Component {
  state = { themeSwitcher: this.props.themeSwitcher} 

  switchTheme() {
    console.log(this.props);
  }

  render() {
    return (
      <button
        className={`ui basic button ${this.props.themeSwitcher}`}
        onClick={() => this.switchTheme()} //this.props.switchTeme  - define it in the store
      >
        Switch theme
      </button>
    );
  }
}

const ConnectedThemeSwitcher = () => (
  <ColorConsumer>
    { value => <ThemeSwitcher {...value} /> }
  </ColorConsumer>
);

export default ConnectedThemeSwitcher;
