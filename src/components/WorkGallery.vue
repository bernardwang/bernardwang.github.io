<template lang="pug">
  div(v-if="gallerySize > 0").w-100.h-100.flex.items-start.flex-wrap
    figure(@click="galleryClick").w-50-l.ma0.mr3.mb3.gallery
      img(v-for="(image, i) in gallery" :src="image.src" :alt="title + ' Screen ' + galleryLabel(i)" :class="{ show: (i === index) }").gallery-img
      img(:src="gallery[0].src").background
    CoreButton(:onClick="galleryNext" variant="link" text='→').arrow-btn
    transition(name="fade")
      WorkGalleryZoom(v-if="zoom" :index="index" :title="title" :gallery="gallery" :galleryNext="galleryNext" :galleryClick="galleryClick" :galleryLabel="galleryLabel")
</template>

<script>
import CoreButton from './core/Button'
import WorkGalleryZoom from './WorkGalleryZoom'
import _ from 'lodash'

export default {
  name: 'WorkGallery',
  props: ['title', 'gallery'],
  components: { CoreButton, WorkGalleryZoom },
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
.gallery {
  position: relative;
  cursor: zoom-in;
}
.arrow-btn {
  margin-top: -0.75rem;
  cursor: e-resize;
}
.gallery-img {
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity 1s;
}
.show {
  opacity: 1;
}
.background {
  display: hidden;
  z-index: -1;
}
.gallery-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 3;

  .gallery-zoom {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: auto;
  }
  .gallery-img {
    height: auto;
    outline: none !important; // TODO: oooopppppssss fix
  }
  .gallery-caption {
    word-break: break-word;
  }
  img {
    max-width: 60rem;
    height: auto;
    cursor: e-resize;
  }
}
.close-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
}
</style>
