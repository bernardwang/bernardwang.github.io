<template lang="pug">
  button(@click="onClick" :class="classObj").lh-copy.pa0.mv1.tl.pointer.bg-transparent
    span.b.mv0.w-100.lh-solid {{ text }}
</template>

<script>
export default {
  name: 'CoreButton',
  props: [ 'onClick', 'text', 'variant' ],
  computed: {
    classObj: function () {
      return {
        'bn': this.variant === 'link',
        'link': this.variant === 'link',
        'btn': this.variant === 'btn'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

