<template>
<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">

  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <div class="navbar-burger burger" @click="toggleBurger" data-target="navMenuTransparentExample">
        <span></span>
        <span></span>
        <span></span>
    </div>
  </div>

  <div id="navMenuTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      
      <a class="navbar-item is-tab" to="/Feed">
        <i class="fa fa-list-alt"></i> Project List
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link  is-active" href="/documentation/overview/start/">
          Docs
        </a>
      </div>

      <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style="color: #333;">
        <i class="fa fa-lg fa-github"></i>
        </span>
      </a>

    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <Player></Player>
      </div>
    </div>
 </div>
</nav>
</template>

<script>
import Player from '@/components/Player'
export default {

  data: function () {

  },
  components: {
    Player
  },
  methods: {
    toggleBurger: function () {
      document.querySelector('#navMenuTransparentExample').classList.toggle('is-active')
    }
  }
}
</script>

<style lang="scss">
</style>
