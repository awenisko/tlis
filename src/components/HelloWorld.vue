<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <button class="button is-primary" type="button">Button</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

$font-stack:    Helvetica, sans-serif;
$primary-color: #333;
$main-bg: #9999ff;
body {
  font: 100% $font-stack;
  color: $primary-color;
  background: $main-bg;
}

</style>

</style>
