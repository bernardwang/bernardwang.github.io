<template lang="pug">
  nav.fixed.mt5-ns.ph0.pr0.w-auto-ns.w-100
    ul.flex.flex-column-ns.flex-row.items-center.pv2-ns.pt3.pb4.ma0
      li.w-100-ns.mb3-ns.pr3
        h1.f3.mv0 #[span(v-on:click="emitToggle").pointer 🌺]
      li.w-100-ns.mb3-ns.pr2
        p.lh-solid.mv0 #[router-link(to="/#intro") Home]
      li.w-100-ns.mb3-ns.pr2
        p.lh-solid.mv0 #[router-link(to="/#about") About]
      li.w-100-ns.mb3-ns.pr2
        p.lh-solid.mv0 #[router-link(to="/#projects") Projects]
      li.w-100-ns.mb3-ns.pr2
        p.lh-solid.mv0 #[router-link(to="/#contact") Contact]
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    emitToggle: function () {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
