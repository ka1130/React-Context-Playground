import React, { Component } from 'react';
import { ColorConsumer } from 'contexts/ColorContext';

class ThemeSwitcher extends Component {
  render() {
    return (
      <button
        className={`ui basic button ${this.props.themeSwitcher}`}
        onClick={this.props.switchTheme}
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
