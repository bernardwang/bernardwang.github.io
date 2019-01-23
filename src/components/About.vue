<template lang="pug">
  section#about
    section
      h2.ml-fifth.hl About
      div.cf
        aside.fl.w-100.w-20-ns
          p.mt0 Interested in my resume? Grab a copy #[a(:href="resumeSrc" target="_blank" alt="resume") here]!
        div.fl.w-100.w-80-ns
          div.fl.w-100.w-50-ns
            p.mt0 My work is shaped by my interests in technology, design, and social good. Whether it's in public works, activism or the arts, I'm excited to create experiences that are empathetic, accessible, and mission driven.
          div.fl.w-100.w-50-ns
            p.mt0 Most recently, I built #[a(href="http://grove.ai" target="_blank" alt="Grove AI") Grove AI], a tool to help progressive campaigns and nonprofits organize using Facebook Messenger chatbots.
            p.mt0 Check out more of my work on my #[a(href="https://github.com/bernardwang" target="_blank" alt="github") Github]!
      div.ml-fifth.w-100-ns.mt3
        CoreButton(:onClick="btnClick" :text="btnText()" variant="link")
    transition(name="fade")
      AboutMore(v-if="showFun")
</template>

<script>
import CoreButton from './core/Button'
import AboutMore from './AboutMore'
import resumeSrc from '../assets/img/resume.pdf'

export default {
  name: 'About',
  components: {
    CoreButton,
    AboutMore
  },
  methods: {
    btnText: function () {
      return this.showFun ? '-  less fun' : '+ more fun '
    },
    btnClick: function () {
      this.showFun = !this.showFun
    }
  },
  data () {
    return {
      resumeSrc,
      showFun: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
