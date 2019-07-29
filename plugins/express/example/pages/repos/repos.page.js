// `ssr-coin` also supports other view libraries such as Vue
import React from 'react';

import getRepositories from './data/getRepositories';

import RepoList from './views/RepoList';
import Counter from './views/Counter';

// The page config:
export default {
  route: '/repos/:username',
  addInitialProps,
  view,
  title,
};

// `getRepositories(username)` loads the GitHub repositories of `username`.
// `addInitialProps` makes `repositories` available to `view`.
async function addInitialProps({username}) {
  const repositories = await getRepositories(username);
  return {repositories};
}

function view({username, repositories}) {
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
  return username + ' repositories ('+repositories.length+')';
}
