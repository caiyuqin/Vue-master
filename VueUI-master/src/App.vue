<template>
  <div id="app">
    <div class="bs-docs-header">
      <div class="container">
        <h1>VueUI</h1>
        <p>Vue UI components built with
          <a target="_blank" href="http://vuejs.org/">Vue.js</a> and
          <a href="http://v3.bootcss.com/css/" target="_blank">Bootstrap.css</a>.</p>
        <p>No any other 3rd party plugins required.</p>
        <!--<p><a class="btn btn-outline-inverse btn-lg" href="https://github.com/yuche/vue-strap">Code on GitHub</a></p>-->
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
@import "assets/css/bootstrap.min.css";
@import "assets/css/animate.css" ;
@import "assets/css/docs.min.css";
@import "assets/css/vueui.css";
@import "assets/css/color-brewer.css";
</style>
