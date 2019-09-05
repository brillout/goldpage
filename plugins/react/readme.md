<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

Goldpage + React = :heart:

# `@goldpage/react`

Use Goldpage with [React](https://github.com/facebook/react).

### Usage

Install `@goldpage/react`.

~~~shell
$ npm install @goldpage/react
~~~

The plugin is automatically loaded and
the `view` property of your page configs is now rendered with React.

### Example

~~~js
// /examples/basics/pages/repos/repos.page.js

// We use React but Goldpage also works with Vue, RNW, ...
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
  renderToHtml: true,
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
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
