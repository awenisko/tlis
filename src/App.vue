<template>
  <div id="app">
    <top-panel></top-panel>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-2">
            <router-view/>
          </div>
          <div class="column is-3">
            <div style="background-color:#999">x</div>
          </div>
        </div>
      </div>
    </section>
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

$font-stack:    Helvetica, sans-serif;
$primary-color: #333;
body {
  font: 100% $font-stack;
  color: $primary-color;
  background: '#fff';
}

/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}*/
</style>
