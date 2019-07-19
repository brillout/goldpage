import Vue from 'vue';
import App from './App.vue';
//const App = eval('require')('-!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../helpers/rebuild/config/fallback-loader.js??ref--2-0!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=7185eed0&scoped=true&')
//const App = eval('require').resolve('../../../../node_modules/vue-loader/lib/loaders/templateLoader.js');
//const App = eval('require').resolve('../../../../node_modules/vue-loader');
//const App = eval('require').resolve('./vue-welcome.page.js');
console.log(App);
/*
import App from './App.vue';

export default {
    route: '/',
    view: App,
};
/*/
const app = new Vue({
    render: createElement => createElement('div', 'Hello from Vue'),
});

export default {
    route: '/',
    view: app,
};
//*/
