<template lang="pug">
  section#work
    h2.ml-fifth.hl Work
    div.cf
      article(v-for="proj in works").fl.w-100.mb4.mt2
        h4.ml-fifth.mv0(v-if="proj.url") #[a(:href="proj.url" target="_blank") {{ proj.title }}]
        h4.ml-fifth.mv0.link(v-else) {{ proj.title }}
        div.flex.flex-row.item-start.mt3.mb2.ml-fifth
          WorkGallery(:gallery="proj.gallery" :title="proj.title")
        div(v-for="(value, key) in proj.details" v-if="value")
          aside.fl.w-100.w-20-ns
            p.mb1.mt2-ns.mt1.lh-title {{ key+":" }}
          div.fl.w-100.w-80-ns
            p.mb1.mt2-ns.mt1.lh-title {{ value }}
</template>

<script>
import WorkGallery from './WorkGallery'
import works from '../Works'

export default {
  name: 'Work',
  components: { WorkGallery },
  data () {
    return { works }
  }
}
</script>

<style lang="scss" scoped>
article:last-child{
  margin-bottom: 0;
}
</style>
