import React from 'react';
import {Link, Route} from "react-router-dom";
import './style.css';

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
);

function Home() {
  return (
    <div>
      <h2>Home</h2>
      This is some content for the landing page <code>/</code>.
      <Notes sourcePath="/"/>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      This is content for the <code>/about</code> page.
      <Notes sourcePath="/about"/>
    </div>
  );
}

function Notes({sourcePath}) {
  return (
    <div>
      <br/>
      Note that:
      <ul>
        <li>This content is also rendered to HTML, see <code>{"view-source:http://localhost:3000"+sourcePath}</code>.</li>
        <li>The page doesn't reload when navigating between <code>/</code> and <code>/about</code>.</li>
      </ul>
    </div>
  );
}

const pageConfig = {
  route: '/:params*',
  view: App,
};

export default pageConfig;
