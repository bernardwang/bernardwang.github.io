<template lang="pug">
  section#about
    section
      h2.ml-fifth.hl About
      div.cf
        aside(role="complementary").fl.w-100.w-20-ns
          p.mt0 Interested in my resume? Grab a copy #[a(:href="resumeSrc" target="_blank" alt="resume") here]!
        div.fl.w-100.w-80-ns
          div.fl.w-100.w-50-ns
            p.mt0 My work is shaped by my interests in technology, design, and social justice. Whether it's with civic tech, nonprofits or the arts, I'm excited to apply my varied background to create experiences and products that are empathetic, engaging, and mission driven.
          div.fl.w-100.w-50-ns
            p.mt0 Most recently, I built #[a(href="http://grove.ai" target="_blank" alt="Grove AI") Grove AI], which helps progressive campaigns and nonprofits organize using Facebook Messenger chatbots.
            p.mt0 Check out more of my work on my #[a(href="https://github.com/bernardwang" target="_blank" alt="github") Github]!
      div.ml-fifth.w-100-ns.mt3
        button(@click="showFun = !showFun").lh-copy.mt0.pa0.bn.tl.pointer.bg-transparent.btn
          p.b.link {{ showFun ? "-  less" : "+ more" }} fun
    transition(name="fade")
      AboutMore(v-if="showFun")
</template>

<script>
import AboutMore from './AboutMore'
import resumeSrc from '../assets/img/resume.pdf'

export default {
  name: 'About',
  components: {
    AboutMore
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
.btn {
  width: 6rem;
}
</style>

