<template lang="pug">
  div.w-100.v-100.relative
    grid(v-if="showGrid").ph-10
    navbar.ph-10
    main#home.ph-10
      intro#intro
      about#about
      projects#projects
      contact#contact
    links.ph-10
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
