import React from 'react';
import getCharacters from './data/getCharacters';
import CharacterList from './views/CharacterList';

export default {
  // `ssr-coin` calls `getInitialProps()` before rendering `view` to HTML or to the DOM.
  // Everything returned in `getInitialProps()` is passed to the `view`'s prop.
  getInitialProps: async () => {
    const characters = await getCharacters();
    return {characters};
  },

  // The `characters` returned by our `getInitialProps` is available at `props.characters`
  view: props => <CharacterList characters={props.characters}/>,

  doNotRenderInBrowser: true,

  route: '/html',
};
