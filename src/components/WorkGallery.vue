<template lang="pug">
  div(v-if="gallerySize > 0").w-100.h-100.flex.items-start.flex-wrap
    figure(@mouseover="hover=true" @mouseleave="hover=false").w-50-l.w-100.h-100.ma0.mr3.mb3.gallery
      img(v-for="(image, i) in images" :src="image" :alt="title + ' Screen ' + i" :class="{ show: (i === galleryIndex) }").image
      img(:src="images[0]").background
    CoreButton(:onClick="galleryNext" text='→').arrow
</template>

<script>
import CoreButton from './core/Button'
import _ from 'lodash'

export default {
  name: 'WorkGallery',
  props: ['title', 'images'],
  components: {
    CoreButton
  },
  methods: {
    galleryNext: function () {
      this.galleryIndex = (this.galleryIndex + 1) % this.gallerySize
    }
  },
  data () {
    return {
      gallerySize: 0,
      galleryIndex: 0,
      hover: false
    }
  },
  mounted () {
    this.gallerySize = _.get(this.images, 'length', 0)
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
}
.arrow {
  margin-top: -1rem;
}
.image {
  position: absolute;
  opacity: 0;
  height: 100%;
  transition: opacity 1s;
}
.show {
  opacity: 1;
}
.background {
  display: hidden;
  z-index: -1;
}
</style>
