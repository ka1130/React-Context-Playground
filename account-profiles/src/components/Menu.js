import React, { Component } from 'react';
import { ColorConsumer } from 'contexts/ColorContext';
import { ProfileConsumer } from 'contexts/ProfileContext';

class Menu extends Component {
  renderProfileConsumer = colors => (
    <ProfileConsumer>
      { ({ name }) => (
        <div className={`ui secondary pointing menu ${colors.menu}`}>
          <a className="active item" href="/">{name}</a>
          <div className="right menu">
            <a className="item" href="/">Logout</a>
          </div>
        </div>
      ) }

    </ProfileConsumer>
  );

  render () {
    return (
      <ColorConsumer>
        { value => this.renderProfileConsumer(value) }
      </ColorConsumer>
    );
  }
}

export default Menu;
