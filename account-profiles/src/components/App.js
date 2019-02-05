import React, { Component } from 'react';
import AccountCard from 'components/AccountCard';
import AccountEdit from 'components/AccountEdit';
import Menu from 'components/Menu';

class App extends Component {
  render() {
    return (
      <>
      <Menu />
      <div className="ui container app-container">
        <div className="ui cards">
          <AccountCard />
          <AccountEdit />
        </div>
      </div>
      </>
    );
  }
}

export default App;
