<template>
  <div id="app">
    <top-panel></top-panel>

    <div>ABC</div>
    <router-view/>
  </div>
</template>

<script>

import TopPanel from './components/TopPanel.vue'

export default {
  name: 'app',
  components: {
    TopPanel
  }

}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}*/
</style>
