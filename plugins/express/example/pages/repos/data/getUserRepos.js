import fetch from '@brillout/fetch';

const GITHUB_API_URL = username => 'https://api.github.com/users/'+username+'/repos';

export default getUserRepos;

async function getUserRepos(username){
  const response = await fetch(GITHUB_API_URL(username));
  if( response.status===403 ){
    return null;
  }
  const repositories = await response.json();
  return repositories;
}
