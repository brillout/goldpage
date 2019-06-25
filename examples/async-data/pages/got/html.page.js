import React from 'react';
import getCharacters from './data/getCharacters';
import CharacterList from './views/CharacterList';

export default {
  // Everything returned in `getInitialProps()` is passed to the `view`'s prop.
  // `ssr-coin` calls `getInitialProps` before rendering `view` to HTML or the DOM.
  getInitialProps: async () => {
    const characters = await getCharacters();
    return {characters};
  },

  // The `characters` returned by `getInitialProps()` is available at `props.characters`
  view: props => <CharacterList characters={props.characters}/>,

  doNotRenderInBrowser: true,

  route: '/html',
};
