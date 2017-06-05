<template lang="pug">
  div.w-100.v-100.ph-page.relative
    grid(v-if="showGrid")
    navbar(:index="sectionIndex" @toggle="toggleGrid")
    main#home
      intro.js-scroll
      about.js-scroll
      projects.js-scroll
      contact.js-scroll
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
      sections: [],
      sectionIndex: -1,
      sectionSize: -1,
      sectionThreshold: 150,
      tick: false,
      showGrid: false
    }
  },
  methods: {
    handleScroll: function () {
      if (!this.tick) {
        window.requestAnimationFrame(() => {
          if (this.sectionIndex === -1) { // Index not yet initialized
            return
          }
          if (this.sectionIndex !== this.sectionSize - 1) {
            let next = this.sections[this.sectionIndex + 1].getBoundingClientRect().top
            if (next < this.sectionThreshold) {
              this.sectionIndex++
            }
          }
          if (this.sectionIndex !== 0) {
            let prev = this.sections[this.sectionIndex].getBoundingClientRect().top
            if (prev > this.sectionThreshold) {
              this.sectionIndex--
            }
          }
          this.tick = false
        })
      }
      this.tick = true
    },
    toggleGrid: function () {
      this.showGrid = !this.showGrid
    }
  },
  mounted () {
    this.sections = document.getElementsByClassName('js-scroll')
    this.sectionSize = this.sections.length
    this.sectionIndex = this.sectionSize - 1
    for (let i = 0; i < this.sectionSize; i++) {
      if (this.sections[i].getBoundingClientRect().top > this.sectionThreshold) {
        this.sectionIndex = i - 1
        break
      }
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
