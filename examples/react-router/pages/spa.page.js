import React, {useEffect, useState} from 'react';
import {Link, Route} from "react-router-dom";
import './style.css';

const App = () => (
  <div>
    <Counter/>
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
      This is an example of browser-side routing + SSR.
      <br/><br/>
      SSR is enabled:
      see <HtmlSource pathname={'/'}/> to see this content rendered to HTML.
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      This is content for the <code>/about</code> page.
      <br/><br/>
      This content is rendered to HTML as well, see <HtmlSource pathname={'/about'}/>.
    </div>
  );
}

function HtmlSource({pathname}) {
  return (
    <code>{"view-source:http://localhost:3000"+pathname}</code>
  );
}

const pageConfig = {
  route: '/:params*',
  view: App,
  renderToHtml: true,
};

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <CountWrapper>
      {count}
    </CountWrapper>
  );
}

function CountWrapper({children}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <span style={{fontSize: '3em'}}>
        {children}
      </span>
      <span style={{fontSize: '0.87em', color: '#888'}}>
        (This counter is not reset when navigating between <code>/</code> and <code>/about</code> because we are doing browser-side routing.)
      </span>
    </div>
  );
}

export default pageConfig;
