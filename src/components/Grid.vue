<template lang="pug">
  div.grid.w-100.h-100.absolute.absolute--fill.cf
    div.fl.w-100.w-third-ns.h-100.ba.b--near-white
      div.fl.w-100.w-50-ns.h-100.ba.b--near-white
      div.fl.w-100.w-50-ns.h-100.ba.b--near-white
    div.fl.w-100.w-third-ns.h-100.ba.b--near-white
    div.fl.w-100.w-third-ns.h-100.ba.b--near-white
</template>

<script>
export default {
  name: 'grid'
}
</script>

<style lang="scss" scoped>
.grid{
  z-index: -1;
}
</style>
