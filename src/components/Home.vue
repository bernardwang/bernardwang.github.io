<template lang="pug">
  div.w-100.v-100.relative
    grid(v-if="showGrid").ph-page
    navbar.ph-page
    main#home.ph-page
      intro#intro
      about#about
      projects#projects
      contact#contact
    links.ph-page
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
      showGrid: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
