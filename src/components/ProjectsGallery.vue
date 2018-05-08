<template lang="pug">
  figure(@mouseover="hover=true" @mouseleave="hover=false" v-if="gallerySize > 0").w-50-l.w-100.h-100.ma0.mr4-l.mr3.gallery
    img(v-for="(image, i) in images" :src="image" :alt="title + ' Screen ' + i" :class="{ show: (i === galleryIndex) }").image
    img(:src="images[0]").background
</template>

<script>
export default {
  name: 'ProjectsGallery',
  props: ['title', 'images'],
  methods: {
    galleryNext: function () {
      this.galleryIndex = (this.galleryIndex + 1) % this.gallerySize
    }
  },
  data () {
    return {
      gallerySize: this.images.length,
      galleryIndex: 0,
      hover: false,
      loop: null
    }
  },
  mounted () {
    if (this.gallerySize > 1) {
      this.loop = setInterval(this.galleryNext, 3000)
    }
  },
  destroyed () {
    clearInterval(this.loop)
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  overflow: hidden;
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
