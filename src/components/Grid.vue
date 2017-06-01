<template lang="pug">
  div#grid.w-100.h-100.ph-page.absolute.absolute--fill.cf
    div.fl.w-100.w-third-ns.h-100
      span.fl.w-100.w-50-ns.h-100
      div.fl.w-100.w-50-ns.h-100
    div.fl.w-100.w-third-ns.h-100
    div.fl.w-100.w-third-ns.h-100.end
</template>

<script>
export default {
  name: 'grid'
}
</script>

<style lang="scss" scoped>
#grid {
  z-index: -1;

  div {
    border-left: 1px solid rgba(#FF548F, 0.1);
    &.end {
      border-right: 1px solid rgba(#FF548F, 0.1);
    }
  }
}

@media screen and (max-width: 30em) {
  #grid {
    div {
      display: none;
      &.end {
        display: block;
      }
    }
  }
}
</style>
