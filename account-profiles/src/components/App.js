import React, { Component } from 'react';
import AccountCard from 'components/AccountCard';
import AccountEdit from 'components/AccountEdit';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="ui cards">
          <AccountCard />
          <AccountEdit />
        </div>
      </div>
    );
  }
}

export default App;
