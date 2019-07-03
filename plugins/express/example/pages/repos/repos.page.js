// `ssr-coin` also supports other view libraries such as Vue
import React from 'react';

import RepoList from './views/RepoList';
import Counter from './views/Counter';
import getUserRepos from './data/getUserRepos';

export default {
  route: '/repos/:username',
  view,
  addInitialProps,
  title: ({username}) => 'Repos of '+username,
};

// We load the list of pinned repos and we use `addInitialProps` to make it
// available to our React components.
async function addInitialProps({username}) {
  const repositories = await getUserRepos(username);
  return {repositories};
}

function view({username, repositories}) {
  return (
    <div>
      Hi <b>{username}</b>,
      welcome to <code>ssr-coin</code>.
      <br/><br/>
      Interactive counter:
      <Counter/>
      <br/>
      Your repos:
      <RepoList repositories={repositories} />
    </div>
  );
}
