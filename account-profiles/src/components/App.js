import React, { Component } from 'react';

import { ProfileStore } from 'contexts/ProfileContext';
import AccountCard from 'components/AccountCard';
import AccountEdit from 'components/AccountEdit';
import Menu from 'components/Menu';

class App extends Component {
  render() {
    return (
      <>
        <ProfileStore>
          <Menu />
          <div className="ui container app-container">
            <div className="ui cards">
              <AccountCard />
              <AccountEdit />
            </div>
          </div>
        </ProfileStore>
      </>
    );
  }
}

export default App;
