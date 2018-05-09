<template lang="pug">
  button(@click="onClick").lh-copy.mt0.pa0.pv1.bn.tl.pointer.bg-transparent.btn
    p.b.mv1.link.w-100 {{ text }}
</template>

<script>
export default {
  name: 'CoreButton',
  props: [ 'onClick', 'text' ]
}
</script>

<style lang="scss" scoped>
.btn {

}
</style>

