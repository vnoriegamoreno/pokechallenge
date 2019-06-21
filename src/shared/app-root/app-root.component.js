// @ƒlow
import React from 'react';
import Pokedex  from 'area/pokedex/view/pokedex.container';
import TopBar from './top-bar/top-bar.component';

const AppRoot = () => {
  return (
    <div>
      <TopBar />
      <Pokedex />
    </div>
  );
};

export default AppRoot;