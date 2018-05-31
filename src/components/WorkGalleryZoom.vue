<template lang="pug">
  section
    div.z-3.gallery
      figure(v-for="(image, i) in gallery" :class="{ show: (i === index) }").ma0.fig
        img(@click="galleryNext" :src="image.src" :alt="title + ' Screen ' + i").image
        figcaption.ma0.mt2.w-50-l.w-100caption {{galleryLabel(i) + image.caption}}
    CoreButton(:onClick="galleryClick" text='X' variant="btn").z-3.close-btn
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
.gallery {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: auto;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
  }
}
.fig {
  outline: none !important; // TODO: oooopppppssss this is temp fix
  position: absolute;
  width: calc(100% - 26vw);
  opacity: 0;
  transition: opacity 1s;
  @media screen and (max-width: 50em){
    width: calc(100% - 12vw);
  }
}
.show {
  opacity: 1;
}
.image {
  width: 100%;
  height: auto;
  cursor: e-resize;
}
.caption {
}
.close-btn {
  position: fixed;
  text-align: center;
  border-radius: 99px;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  line-height: 1;
  &:hover {
    color: white;
  }
}
</style>
