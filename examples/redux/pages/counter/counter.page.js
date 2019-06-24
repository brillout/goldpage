import { createStore } from 'redux'
import Counter from './Counter'
import reducers from './reducers'

export default {
  route: '/',
  view: Counter,
  getInitialProps,
};

async function getInitialProps({isNodejs}) {
  const state = await getState({isNodejs});
  const store = createStore(reducers, state);
  return {store};
}

async function getState({isNodejs}) {
  let state;
  if( isNodejs ){
    // On server-side rendering, we fetch the initial state
    const count = await fetchCount();
    state = {count};
  } else {
    // On browser-side rendering, the initial state is provided by the server
    state = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
  }
  return state;
}

// We simulate a network request
function fetchCount(callback) {
  let resolve;
  const p = new Promise(r => resolve=r);
  setTimeout(() => {
    resolve(getRandomInt(2, 10));
  }, 500);
  return p;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
