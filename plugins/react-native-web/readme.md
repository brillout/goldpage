<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

Goldpage + React Native Web = :heart:

# `@goldpage/react-native-web`

Use Goldpage with [React Native Web](https://github.com/necolas/react-native-web).

### Usage

Install `@goldpage/react-native-web`.

~~~shell
$ npm install @goldpage/react-native-web
~~~

The plugin is automatically loaded and
the `view` property of your page configs is now rendered with React Native Web.

### Example

~~~js
// ./example/pages/hello-native-web.page.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello from native web!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold', color: 'green' },
});

export default {
  route: '/',
  view: App,
//renderToDom: false,
  renderToHtml: true,
};
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react-native-web/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
