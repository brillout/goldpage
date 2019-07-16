import React from 'react';
import getCharacters from './data/getCharacters';
import CharacterList from './views/CharacterList';

export default {
  // `ssr-coin` calls `addInitialProps()` before rendering `view` to HTML or to the DOM.
  // Everything returned in `addInitialProps()` is passed to the `view`'s prop.
  addInitialProps: async () => {
    const characters = await getCharacters();
    return {characters};
  },

  // The `characters` returned by `addInitialProps` is available to `view`
  view: ({characters}) => <CharacterList characters={characters}/>,

  doNotRenderInBrowser: true,

  route: '/html',
};
