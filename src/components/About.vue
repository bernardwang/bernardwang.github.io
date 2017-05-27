<template lang="pug">
  section.mt6.pl-sixth
    section
      h2.pl-fifth About
      div.cf
        aside.fl.w-100.w-20-ns
          p Interested in my resume? Grab a copy #[a(v-bind:href="resumeSrc" target="_blank" alt="resume") here]!
        div.fl.w-100.w-80-ns
          div.fl.w-100.w-50-ns
            p.mt2 I am excited about applying my background in Front-end Engineering and product design to social good. Specifically, I care about using technology to improve public works and empower grassroots  organizing.
          div.fl.w-100.w-50-ns
            p.mt2 Most recently, I contributed to 5calls.org, an open source app that tackles civic  engagement through constituent calls.
            p.mt2 Check out more of my work on my #[a(href="https://github.com/bernardwang" target="_blank" alt="github") Github]!
      div.pl-fifth.w-100-ns
        button(v-on:click="showFun = !showFun").f5.lh-copy.mt0.pa0.bn.b.tl.pointer.bg-transparent {{ showFun?"- less":"+ more" }} fun
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
