import React, { Component } from 'react';
import { ProfileConsumer } from 'contexts/ProfileContext';
import { ColorConsumer } from 'contexts/ColorContext';
import { EditionConsumer } from 'contexts/EditionContext';

import ThemeSwitcher from 'components/ThemeSwitcher';

class AccountCard extends Component {
  renderProfileConsumer = ({ editInfo }, { isVisible, toggleVisibility }) => {
    const btnText = isVisible ? 'Hide Edition' : 'Edit Info'
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
                  onClick={toggleVisibility}
                >
                  {btnText}
                </button>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        )}
      </ProfileConsumer>  
    );  
  };

  renderColorConsumer = (data) => (
    <ColorConsumer>
      { value => this.renderProfileConsumer(value, data) }
    </ColorConsumer>
  )

  render() {
    return (
      <EditionConsumer>
        { value => this.renderColorConsumer(value) }
      </EditionConsumer>
    );
  }
}

export default AccountCard;
