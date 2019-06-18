if( isBrowser() ){
  require('../frontend/normalize.css');
  require('../frontend/style.css');
  require('../frontend/google-analytics.js');
}

function isBrowser() {
  return typeof window !== "undefined";
}
