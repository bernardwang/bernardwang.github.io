<template lang="pug">
  section.mt3.cf
    div.fl.w-60-ns.w-100
      h3.f3.lh-title.mb0 Pictures with facts
      div.flex.flex-row
        figure(v-for="pics in pictures").w-100.w-third-ns.mr5.ml0.mt3
          a(v-bind:href="pics.link" target="_blank")
            img(v-bind:src="pics.src").w-100
            figcaption {{pics.caption}}
    div.fl.w-40-ns.w-100.relative
      h3.f3.lh-title.mb0 Current favorites
      div.w-100.flex.flex-column
        p.f5.lh-copy.mb0 📚 #[span.ml1 Book: {{ favorites.book }}]
        p.f5.lh-copy.mb0 🎵 #[span.ml1 Album: {{ favorites.album }}]
        p.f5.lh-copy.mb0 🎙️ #[span.ml1 Podcast: {{ favorites.podcast }}]
</template>

<script>
import hkSrc from '../assets/img/hk.png'
import baoSrc from '../assets/img/bao.png'
import dogSrc from '../assets/img/dog.png'

const pictures = [{
  src: hkSrc,
  link: 'https://www.instagram.com/p/BGlj2LfgW_g/',
  caption: 'I studied abroad in Hong Kong in 2016.'
}, {
  src: baoSrc,
  link: 'https://www.instagram.com/p/BIUNhwiDwFy/',
  caption: 'XiaoLongBao. I love cooking.'
}, {
  src: dogSrc,
  link: 'https://www.instagram.com/p/BOwOhpPjsqt/',
  caption: 'I love dogs and they love me back.'
}]
const favorites = {
  book: 'Orientalism - Edward Said',
  album: 'Exchange - The JuJu',
  podcast: 'Code Switch - NPR'
}

export default {
  name: 'fun',
  data () {
    return {
      pictures,
      favorites
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
