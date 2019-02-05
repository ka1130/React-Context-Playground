import React, { Component } from 'react';
import { ProfileStore } from 'contexts/ProfileContext';
import { ColorStore } from 'contexts/ColorContext';
import { EditionStore } from 'contexts/EditionContext';
import CardsWrapper from 'components/CardsWrapper';
import Menu from 'components/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <ColorStore>
          <ProfileStore>
            <EditionStore>
              <Menu />
              <CardsWrapper />
            </EditionStore>
          </ProfileStore>        
        </ColorStore>
      </>
    );
  }
}

export default App;
