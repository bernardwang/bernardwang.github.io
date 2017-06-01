<template lang="pug">
  figure(v-on:mouseover="hover=true" v-on:mouseleave="hover=false").w-80.h-100.ma0.mr4-l.mr3.relative
    a(v-bind:href="pic.link" target="_blank")
      transition(name="fadepic")
        img(v-bind:src="pic.src" v-if="!hover").db
      transition(name="fadepic")
        figcaption(v-if="hover").tc.f5.ph1 {{pic.caption}}
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
figcaption {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.fadepic-enter-active, .fadepic-leave-active {
  transition: opacity .15s;
}
.fadepic-enter-active {
  transition-delay: 0.15s;
}
.fadepic-enter, .fadepic-leave-to {
  position: absolute;
  opacity: 0;
}
</style>
