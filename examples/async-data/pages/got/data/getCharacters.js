import fetch from '@brillout/fetch';

async function getCharacters() {
    const url = 'https://brillout-misc.github.io/game-of-thrones/characters/list.json';
    const characters = await (
        fetch(url)
        .then(response => response.json())
        .catch(err => {
            if( err.code === 'EAI_AGAIN' || err.message === 'Failed to fetch' ) {
              return null;
            }
            if( err.type ) {
              return 'Error - Is the server up and does it have CORS enabled?'
            }
            throw err;
        })
    );
    return characters;
}

export default getCharacters;
