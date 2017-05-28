<template lang="pug">
  div.w-100.v-100.ph-page.relative
    grid(v-if="showGrid")
    navbar(v-bind:pageIndex="pageIndex" v-on:toggle="toggleGrid")
    main#home
      intro
      about
      projects
      contact
    links
</template>

<script>
import grid from './Grid'
import navbar from './Navbar'
import intro from './Intro'
import about from './About'
import projects from './Projects'
import contact from './Contact'
import links from './Links'

export default {
  name: 'home',
  components: {
    grid,
    navbar,
    intro,
    about,
    projects,
    contact,
    links
  },
  data () {
    return {
      pageIndex: 0,
      showGrid: false
    }
  },
  methods: {
    toggleGrid: function () {
      this.showGrid = !this.showGrid
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
