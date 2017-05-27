<template lang="pug">
  nav#navbar.fixed.mt5-ns.ph0.pr0.w-auto-ns.w-100
    ul.flex.flex-column-ns.flex-row.items-center.pv2-ns.pt3.pb4.ma0
      li.w-100-ns.mb3-ns.pr3
        h1.f3.mv0 #[span(v-on:click="emitToggle").pointer 🌺]
      li(v-bind:class="(index==1) ? 'target' : ''").w-100-ns.mb3-ns.pr2
        router-link(to="/#home").lh-solid.mv0 Home
      li(v-bind:class="(index==2) ? 'target' : ''").w-100-ns.mb3-ns.pr2
        router-link(to="/#about").lh-solid.mv0 About
      li(v-bind:class="(index==3) ? 'target' : ''").w-100-ns.mb3-ns.pr2
        router-link(to="/#projects").lh-solid.mv0 Projects
      li(v-bind:class="(index==4) ? 'target' : ''").w-100-ns.mb3-ns.pr2
        router-link(to="/#contact").lh-solid.mv0 Contact
</template>

<script>
export default {
  name: 'navbar',
  props: ['pageIndex'],
  data: function () {
    return {
      index: this.pageIndex
    }
  },
  methods: {
    emitToggle: function () {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
