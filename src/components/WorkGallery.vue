<template lang="pug">
  div(v-if="gallerySize > 0").w-100.h-100
    WorkGalleryNormal(:index="index" :title="title" :gallery="gallery" :galleryNext="galleryNext" :galleryClick="galleryClick" :galleryLabel="galleryLabel")
    transition(name="fade")
      WorkGalleryZoom(v-if="zoom" :index="index" :title="title" :gallery="gallery" :galleryNext="galleryNext" :galleryClick="galleryClick" :galleryLabel="galleryLabel")
</template>

<script>
import CoreButton from './core/Button'
import WorkGalleryNormal from './WorkGalleryNormal'
import WorkGalleryZoom from './WorkGalleryZoom'
import _ from 'lodash'

export default {
  name: 'WorkGallery',
  props: ['title', 'gallery'],
  components: { CoreButton, WorkGalleryNormal, WorkGalleryZoom },
  methods: {
    galleryNext: function () {
      this.index = (this.index + 1) % this.gallerySize
    },
    galleryClick: function () {
      this.zoom = !this.zoom
    },
    galleryLabel: function (i) {
      return ' (' + (i + 1) + '/' + this.gallerySize + ') '
    }
  },
  data () {
    return {
      gallerySize: 0,
      index: 0,
      zoom: false
    }
  },
  mounted () {
    this.gallerySize = _.get(this.gallery, 'length', 0)
  }
}
</script>

<style lang="scss" scoped>
</style>
