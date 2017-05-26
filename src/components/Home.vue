<template lang="pug">
  div
    grid(v-if="showGrid").ph-10
    nav.ph-10
    main.ph-10
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
      showGrid: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
