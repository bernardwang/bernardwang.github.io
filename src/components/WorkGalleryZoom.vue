<template lang="pug">
  section.overlay.z-3
    div.gallery
      figure(v-for="(image, i) in gallery" :class="{ show: (i === index) }").ma0.fig
        img(@click="galleryNext" :src="image.src" :alt="title + ' Screen ' + i").image
        figcaption.ma0.mt2.w-50-l.w-100caption {{galleryLabel(i) + image.caption}}
    CoreButton(:onClick="galleryClick" text='X' variant="btn" aria-label="Close full gallery view").close-btn
</template>

<script>
import CoreButton from './core/Button'

export default {
  name: 'WorkGalleryZoom',
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
@import '../sass/base/color';

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}
.gallery {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: auto;
}
.fig {
  outline: none !important; // TODO: oooopppppssss this is temp fix
  position: absolute;
  opacity: 0;
  transition: opacity 1s;
}
.show {
  opacity: 1;
}
.image {
  outline: 3px solid nth($cl-text-hl, 3);
  max-width: 85vw;
  max-height: 90vh;
  cursor: e-resize;
}
.caption {
}
.close-btn {
  position: fixed;
  text-align: center;
  border-radius: 99px;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  line-height: 1;
  &:hover {
    color: white;
  }
}
</style>
