import React from 'react';
import { ProfileConsumer } from 'contexts/ProfileContext';

const Menu = () => (
  <ProfileConsumer>
    { ({ name }) => (
      <div className="ui secondary pointing menu">
        <a className="active item" href="/">{name}</a>
        <div className="right menu">
          <a className="item" href="/">Logout</a>
        </div>
      </div>
    ) }

  </ProfileConsumer>
);

export default Menu;
