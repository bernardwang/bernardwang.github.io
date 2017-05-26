<template lang="pug">
  div
    grid(v-if="showGrid")
    nav
    main.mh6
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
