import React from 'react';
import getCharacters from './data/getCharacters';
import CharacterList from './views/CharacterList';

export default {
  // Everything returned in `getInitialProps()` is passed to the props of the `view` component
  getInitialProps: async () => {
    const characters = await getCharacters();
    return {characters};
  },

  // Our data is available at `props.characters`
  view: props => <CharacterList characters={props.characters}/>,

  doNotRenderInBrowser: true,

  route: '/html',
};
