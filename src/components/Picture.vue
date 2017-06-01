<template lang="pug">
  figure(v-on:mouseover="hover=true" v-on:mouseleave="hover=false").w-80.h-100.ma0.mr4-l.mr3.flex.flex-column.justify-center
    a(v-bind:href="pic.link" target="_blank")
      transition(name="fade" mode="out-in")
        img(v-bind:src="pic.src" v-if="!hover").db
        figcaption(v-else).tc.f5.ph1 {{pic.caption}}
</template>

<script>
export default {
  name: 'picture',
  props: ['pic'],
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
