<template lang="pug">
  section.mt4.cf
    div.fl.w-60-l.w-100
      h4.mb0 Pictures with facts
      div.flex.flex-row.item-start.mt3
        figure(v-for="pics in pictures").w-100.w-third-l.ma0.pr3
          a(v-bind:href="pics.link" target="_blank")
            img(v-bind:src="pics.src").w-80
            figcaption {{pics.caption}}
    div.fl.w-40-l.w-100.relative
      h4.mb0 Current favorites
      div.w-100.flex.flex-column
        p.f5.mb0.w-100 📚 #[span.ml1 Book: {{ favorites.book }}]
        p.f5.mb0.w-100 🎵 #[span.ml1 Album: {{ favorites.album }}]
        p.f5.mb0.w-100 🎙️ #[span.ml1 Podcast: {{ favorites.podcast }}]
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
