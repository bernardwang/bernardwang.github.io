<template lang="pug">
  section.mt4.cf
    div.fl.w-60-l.w-100.ma0-l.mb4
      h4.mb0 Pictures with facts
      div.flex.flex-row.item-start.mt3
        div(v-for="picObj in pictures").w-100.w-third-l
          pic(:pic="picObj")
    div.fl.w-40-l.w-100.relative
      h4.mb0 Current favorites
      div.w-100.flex.flex-column
        p.f5.mb0.w-100 📚 #[span.ml1 Book: {{ favorites.book }}]
        p.f5.mb0.w-100 🎵 #[span.ml1 Album: {{ favorites.album }}]
        p.f5.mb0.w-100 🎙️ #[span.ml1 Podcast: {{ favorites.podcast }}]
</template>

<script>
import pic from './Picture'
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
  caption: 'Xiao Long Bao (小笼包). I love cooking.'
}, {
  src: dogSrc,
  link: 'https://www.instagram.com/p/BOwOhpPjsqt/',
  caption: 'I love dogs and they love me back.'
}]
const favorites = {
  book: 'Queer Heartache - Kit Yan',
  album: 'Subluxe - Healy',
  podcast: 'Code Switch - NPR'
}

export default {
  name: 'fun',
  components: {
    pic
  },
  data () {
    return {
      pictures,
      favorites
    }
  }
}
</script>
