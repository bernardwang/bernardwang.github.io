<template lang="pug">
  section#about
    section
      h2.ml-fifth.hl About
      div.cf
        aside.fl.w-100.w-20-ns
          p.mt0 Interested in my resume? Email me to get a copy!
        div.fl.w-100.w-80-ns
          div.fl.w-100.w-50-ns
            p.mt0 I'm excited to create experiences that are accessible, empathetic, and mission driven. In the past I've worked in civic tech and in the federal health space, most recently with the #[a(href="http://design.cms.gov" target="_blank" alt="CMS.gov Design System") CMS.gov Design System].
          div.fl.w-100.w-50-ns
            p.mt0 Currently, I'm working to improve Wikipedia's web experience at the #[a(href="https://wikimediafoundation.org" target="_blank" alt="Wikimedia Foundation") Wikimedia Foundation].
            p.mt0 Check out more of my work on my #[a(href="https://github.com/bernardwang" target="_blank" alt="github") Github]!
      div.ml-fifth.w-100-ns.mt3
        CoreButton(:onClick="btnClick" :text="btnText()" variant="link")
    transition(name="fade")
      AboutMore(v-if="showFun")
</template>

<script>
import CoreButton from './core/Button'
import AboutMore from './AboutMore'

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
      showFun: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
