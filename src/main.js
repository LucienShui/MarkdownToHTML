import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.api = axios;
Vue.prototype.markdown = require('markdown-it')({
    html: true,
    langPrefix: 'line-numbers language-',
    linkify: true,
    typographer: true
}).use(require('markdown-it-task-checkbox'), {
    disabled: true,
    divWrap: false,
    divClass: 'checkbox',
    idPrefix: 'cbx_',
    ulClass: 'task-list',
    liClass: 'task-list-item'
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
