import React from 'react';

export default RepoList;

function RepoList({repositories}) {
  if( repositories===null ){
    return <Err msg="You reached GitHub's API quota limit. Try again later."/>;
  }
  if( repositories.length===0 ){
    return <Err msg="You have no repositories"/>;
  }
  return (
    <ul style={{marginBottom: -10}}>
      { repositories
      .sort((repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count)
      .map(({full_name, description}) => (
        <li key={full_name}>
          {full_name}
          {/*
          <b>{full_name}</b><span>{' - '+description}</span>
          */}
        </li>
      )) }
      {repositories.length===10 && <li>...</li>}
    </ul>
  );
}

function Err({msg}) {
  return <div style={{marginTop: 12, marginLeft: 22, color: 'red'}}>{msg}</div>;
}
