<template lang="pug">
  section#about
    section
      h2.ml-fifth.hl About
      div.cf
        aside.fl.w-100.w-20-ns
          p.mt0 Interested in my resume? Grab a copy #[a(:href="resumeSrc" target="_blank" alt="resume") here]!
        div.fl.w-100.w-80-ns
          div.fl.w-100.w-50-ns
            p.mt0 I care about building empathetic, socially conscious communities in tech. Specifically, I'm interested in applying my background in development and design to empower organizing and advance #[a(href="https://civichall.org/civicist/an-education-in-community-technology/" target="_blank" alt="community tech") community tech].
          div.fl.w-100.w-50-ns
            p.mt0 Most recently, I've been building  #[a(href="http://grove.ai" target="_blank" alt="Grove AI") Grove AI], which helps progressive campaigns and nonprofits organize using Facebook Messenger chatbots.
            p.mt0 Check out more of my work on my #[a(href="https://github.com/bernardwang" target="_blank" alt="github") Github]!
      div.ml-fifth.w-100-ns.mt3
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
