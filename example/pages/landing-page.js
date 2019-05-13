const React = require('react');

module.exports = {
  route: '/',
  view: () => (
    <div>
      Hello from easy-ssr.
    </div>
  ),
  renderHtmlAtBuildTime: true,
};
