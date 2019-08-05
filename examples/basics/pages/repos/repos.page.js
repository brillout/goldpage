// We use React but ssr-coin also works with Vue, RNW, ...
import React from 'react';

import getRepositories from './data/getRepositories';

import RepoList from './views/RepoList';
import Counter from './views/Counter';

// The page config:
export default {
  route: '/repos/:username',
  addInitialProps,
  view: Repos,
  title,
};

// `getRepositories(username)` uses the GitHub API
// to load the repositories of `username`.
// `addInitialProps` makes `repositories` available
// to `view`.
async function addInitialProps({username}) {
  const repositories = await getRepositories(username);
  return {repositories};
}

function Repos({username, repositories}) {
  return (
    <div>
      Hello <b>{username}</b>,

      <br/><br/>
      Your repositories are:
      <RepoList repositories={repositories} />

      <br/><br/>
      This page is interactive:
      <Counter/>
    </div>
  );
}

function title({username, repositories}) {
  return (
    username+' repositories ('+repositories.length+')'
  );
}
