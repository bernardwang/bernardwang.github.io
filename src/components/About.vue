<template lang="pug">
  section#about
    section
      h2.pl-fifth About
      div.cf
        aside.fl.w-100.w-20-ns
          p.mt0 Interested in my resume? Grab a copy #[a(:href="resumeSrc" target="_blank" alt="resume") here]!
        div.fl.w-100.w-80-ns
          div.fl.w-100.w-50-ns
            p.mt0 I'm excited about applying my background in development and design to advance #[a(href="https://  civichall.org/civicist/an-education-in-community-technology/" target="_blank" alt="community technology")   community tech]. Specifically, I care about using technology to improve public works and empower community  organizing.
          div.fl.w-100.w-50-ns
            p.mt0 Most recently, I contributed to #[a(href="https://5calls.org" target="_blank" alt="5calls.org")   5calls.org], an open source app that increases civic engagement through constituent calls.
            p.mt0 Check out more of my work on my #[a(href="https://github.com/bernardwang" target="_blank" alt="github")   Github]!
      div.pl-fifth.w-100-ns.mt3
        button(@click="showFun = !showFun").f5.lh-copy.mt0.pa0.bn.b.tl.pointer.bg-transparent.link {{ showFun?"-  less":"+ more" }} fun
    transition(name="fade")
      fun(v-if="showFun")
</template>

<script>
import fun from './Fun'
import resumeSrc from '../assets/img/resume.pdf'

export default {
  name: 'about',
  components: {
    fun
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
