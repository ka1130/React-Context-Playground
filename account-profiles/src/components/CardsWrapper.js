import React, { Component } from 'react';
import { EditionConsumer } from 'contexts/EditionContext';
import AccountCard from 'components/AccountCard';
import AccountEdit from 'components/AccountEdit';

class CardsWrapper extends Component {
  render() {
    return (
      <EditionConsumer>
        { ({ isVisible }) => {
          const toggledClass = isVisible ? 'show-edit' : ''
          return (
            <div className="ui container app-container">
              <div className={`ui cards cards-wrapper ${toggledClass}`}>
                <AccountCard />
                <AccountEdit />
              </div>
            </div>
          )
        } }
      </EditionConsumer>

    );
  };
}

export default CardsWrapper;
