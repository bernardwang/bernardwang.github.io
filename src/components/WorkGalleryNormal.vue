<template lang="pug">
  div.flex.items-start.flex-wrap.mb1
    figure(@click="galleryClick").w-50-l.ma0.mr3.gallery
      img(v-for="(image, i) in gallery" :src="image.src" :alt="title + ' Screen ' + galleryLabel(i)" :class="{ show: (i === index) }").image
      img(:src="gallery[0].src").background
    CoreButton(:onClick="galleryNext" variant="link" text='→').pv3.pv1-l.arrow-btn
</template>

<script>
import CoreButton from './core/Button'

export default {
  name: 'WorkGalleryNormal',
  props: [
    'index',
    'title',
    'gallery',
    'galleryNext',
    'galleryClick',
    'galleryLabel'
  ],
  components: { CoreButton }
}
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  cursor: zoom-in;
}
.image {
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
.arrow-btn {
  margin-top: -0.75rem;
  cursor: e-resize;
}
</style>
