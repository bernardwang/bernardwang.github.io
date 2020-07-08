<template lang="pug">
  div.w-100.v-100.ph-page.relative
    SkipNav
    Grid(v-if="showGrid")
    Navbar(:index="sectionIndex" @toggle="toggleGrid" @update="updateIndex")
    main(role="main")#home
      Intro.js-scroll
      About.js-scroll
      Work.js-scroll
      Contact.js-scroll
    ContactLinks
</template>

<script>
import Grid from './Grid'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import ContactLinks from './ContactLinks'
import SkipNav from './SkipNav'
import _ from 'lodash'

export default {
  name: 'Home',
  components: {
    Grid,
    Navbar,
    Intro,
    About,
    Work,
    Contact,
    ContactLinks,
    SkipNav
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
    scrollUpdate: function () {
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
    },
    toggleGrid: function () {
      this.showGrid = !this.showGrid
    },
    updateIndex: function (index) {
      this.sectionIndex = index
    }
  },
  mounted () {
    this.sections = document.getElementsByClassName('js-scroll')
    this.sectionSize = this.sections.length
    this.sectionIndex = this.sectionSize - 1
    // TODO: initialize with url hash
    for (let i = 0; i < this.sectionSize; i++) {
      if (this.sections[i].getBoundingClientRect().top > this.sectionThreshold) {
        this.sectionIndex = i - 1
        break
      }
    }
    document.body.addEventListener('scroll', _.throttle(this.scrollUpdate, 100))
  },
  destroyed () {
    document.body.removeEventListener('scroll', _.throttle(this.scrollUpdate, 100))
  }
}
</script>
