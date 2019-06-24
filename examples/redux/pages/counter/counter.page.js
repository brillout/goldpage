import { createStore } from 'redux'
import Counter from './Counter'
import reducers from './reducers'

export default {
  route: '/',
  view: Counter,
  getInitialProps,
};

async function getInitialProps({isNodejs}) {
  if( isNodejs ){
    const store = createStore(reducers);
    return {store};
  } else {
    const store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return {store};
  }
}
