<template lang="pug">
  div
    grid(v-if="showGrid").pad
    nav.pad
    main.pad
      intro
      about
      projects
      contact
</template>

<script>
import grid from './Grid'
import nav from './Nav'
import intro from './Intro'
import about from './About'
import projects from './Projects'
import contact from './Contact'

export default {
  name: 'home',
  components: {
    grid,
    nav,
    intro,
    about,
    projects,
    contact
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showGrid: true
    }
  }
}
</script>

<style lang="scss" scoped>
.pad {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
