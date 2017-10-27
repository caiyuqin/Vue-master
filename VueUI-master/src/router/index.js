import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from '../../vuerouter.config.js'
import highlight from '../assets/js/highlight.pack.min'
hljs.initHighlightingOnLoad();

Vue.use(Router)

export default new Router(RouterConfig)
