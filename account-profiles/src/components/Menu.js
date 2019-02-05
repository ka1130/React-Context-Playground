import React, { Component } from 'react';
import { ColorConsumer } from 'contexts/ColorContext';
import { ProfileConsumer } from 'contexts/ProfileContext';

class Menu extends Component {
  renderProfileConsumer(colors) {
    console.log(colors);
    const foo = 'red';
    return (
      <ProfileConsumer>
        { ({ name }) => (
          <div className={`ui secondary pointing menu ${foo}`}>
            <a className="active item" href="/">{name}</a>
            <div className="right menu">
              <a className="item" href="/">Logout</a>
            </div>
          </div>
        ) }

      </ProfileConsumer>
    );
  }

  render () {
    return (
      <ColorConsumer>
        {value => {
          console.log(value)
          return this.renderProfileConsumer(value)
        }}
      </ColorConsumer>
    );
  }
}

export default Menu;
