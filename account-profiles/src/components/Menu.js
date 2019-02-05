import React from 'react';

const Menu = props => {
  return (
    <div className="ui secondary pointing menu">
      <a className="active item" href="/">Jenny Hess</a>
      <div className="right menu">
        <a className="item" href="/">Logout</a>
      </div>
    </div>
  );
};

export default Menu;
