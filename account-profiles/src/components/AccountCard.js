import React, { Component } from 'react';
import { ProfileConsumer } from 'contexts/ProfileContext';
import { ColorConsumer } from 'contexts/ColorContext';

import ThemeSwitcher from 'components/ThemeSwitcher';

class AccountCard extends Component {
  renderProfileConsumer = ({ editInfo }) => {
    console.log(editInfo);
    return (
      <ProfileConsumer>
        {({ name, status }) => (
          <div className="card">
          <div className="content">
            <img
              className="right floated mini ui image"
              src={require('img/jenny.jpg')}
              alt="jenny"
            />
            <h6 className="header">{name}</h6>
            <div className="meta">Joined: 1/1/19</div>
            <div className="description">
              Membership status: 
              <b> {status}</b>
            </div>        
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <button
                className={`ui basic ${editInfo} button`}
                onClick={() => {}
              }>
                Edit info
              </button>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        )}
      </ProfileConsumer>    
    )
  }

  render() {
    return (
      <ColorConsumer>
        { value => this.renderProfileConsumer(value) }
      </ColorConsumer>
    );
  }
}

export default AccountCard;
