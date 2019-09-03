import React from 'react';
import getCharacters from './data/getCharacters';
import CharacterList from './views/CharacterList';

export default {
  addInitialProps: async () => {
    const characters = await getCharacters();
    return {characters};
  },

  view: ({characters}) => <CharacterList characters={characters}/>,

  renderToDom: false,
  renderToHtml: true,

  route: '/html',
};
