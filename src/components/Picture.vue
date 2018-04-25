<template lang="pug">
  figure(@mouseover="hover=true" @mouseleave="hover=false").w-80.h-100.ma0.mr4-l.mr3.flex.flex-column.justify-center
    a(:href="pic.link" target="_blank")
      transition(name="fade" mode="out-in")
        img(:src="pic.src" v-if="!hover").db
        figcaption(v-else).tc.f5.ph1 {{pic.caption}}
</template>

<script>
export default {
  name: 'pic',
  props: ['pic'],
  data () {
    return {
      hover: false
    }
  }
}
</script>

