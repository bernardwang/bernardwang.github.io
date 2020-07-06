<template lang="pug">
  section.mt4.cf
    div.fl.w-60-l.w-100.ma0-l.mb4
      div.puck
      h4.mt3.mb0 Pictures with facts
      div.flex.flex-row.item-start.mt3
        div(v-for="picObj in pictures").w-100.w-third-l
          AboutMorePic(:pic="picObj")
    div.fl.w-40-l.w-100.relative
      div.puck
      h4.mt3.mb0 Current favorites
      div.w-100.flex.flex-column
        p.f5.mb0.w-100 📚 #[span.ml1 Book: {{ favorites.book }}]
        p.f5.mb0.w-100 🎵 #[span.ml1 Album: {{ favorites.album }}]
        p.f5.mb0.w-100 🎙️ #[span.ml1 Podcast: {{ favorites.podcast }}]
</template>

<script>
import AboutMorePic from './AboutMorePic'
import hkSrc from '../assets/img/hk.png'
import baoSrc from '../assets/img/bao.png'
import dogSrc from '../assets/img/dog.png'

const pictures = [{
  src: hkSrc,
  alt: 'Graffiti of an astronaut with chinese characters on a power box in Hong Kong.',
  caption: 'I lived in Hong Kong in 2016.'
}, {
  src: baoSrc,
  alt: 'Three handmade xiao long bao in my hand.',
  caption: 'Xiao Long Bao (小笼包). I love cooking.'
}, {
  src: dogSrc,
  alt: 'Me cuddling with a tan and white doggie.',
  caption: 'I love dogs and they love me back.'
}]
const favorites = {
  book: 'All About Love - bellhooks',
  album: 'XS - Rina Sawayama',
  podcast: 'Code Switch - NPR'
}

export default {
  name: 'AboutMore',
  components: {
    AboutMorePic
  },
  data () {
    return {
      pictures,
      favorites
    }
  }
}
</script>
