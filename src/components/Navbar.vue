<template lang="pug">
  nav.fixed.mt5-ns.ph0.pr0
    ul.flex.flex-column-ns.flex-row.items-center
      li.w-100-ns.mb3.pr3
        h1(v-on:click="emitToggle").f3.mv0.pointer 🌺
      li.w-100-ns.mb3.pr3
        p.lh-solid.mv0 #[router-link(to="/#intro") Home]
      li.w-100-ns.mb3.pr3
        p.lh-solid.mv0 #[router-link(to="/#about") About]
      li.w-100-ns.mb3.pr3
        p.lh-solid.mv0 #[router-link(to="/#projects") Projects]
      li.w-100-ns.mb3.pr3
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
@media screen and (min-width: 30em) {
  nav {
    width: calc((74%)/6); // 1/6 of width - padding, hardcoded, fix later
  }
}
</style>
