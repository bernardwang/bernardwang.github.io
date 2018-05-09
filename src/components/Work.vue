<template lang="pug">
  section#work
    h2.ml-fifth.hl Work
    div.cf
      article(v-for="proj in works").fl.w-100.mb4.mt2
        h4.ml-fifth.mv0(v-if="proj.url") #[a(:href="proj.url" target="_blank") {{ proj.title }}]
        h4.ml-fifth.mv0(v-else) {{ proj.title }}
        div.flex.flex-row.item-start.mt3.mb2.ml-fifth
          WorkGallery(:images="proj.images" :title="proj.title")
        div(v-for="(value, key) in proj.details" v-if="value")
          aside.fl.w-100.w-20-ns
            p.mb0.mt2-ns.mt1 {{ key+":" }}
          div.fl.w-100.w-80-ns
            p.mb0.mt2-ns.mt1 {{ value }}
</template>

<script>
import WorkGallery from './WorkGallery'
import grove1 from '../assets/img/grove1.png'
import grove2 from '../assets/img/grove2.png'
import grove3 from '../assets/img/grove3.png'
import explorations1 from '../assets/img/explorations1.png'
import explorations2 from '../assets/img/explorations2.png'
import lisa1 from '../assets/img/lisa1.png'
import lisa2 from '../assets/img/lisa2.png'
import mael1 from '../assets/img/mael1.png'
import mael2 from '../assets/img/mael2.png'

const works = [{
  title: 'Grove AI',
  url: 'http://grove.ai',
  images: [ grove1, grove2, grove3 ],
  details: {
    Expertise: 'Full-stack / UI & UX Design / Product Vision',
    Details: 'Platform for progressive campaigns and nonprofits to organize online through Facebook Messenger chatbots',
    Credits: 'Product Vision & Backend: Vishal Disawar',
    Year: '2017 - 2018'
  }
}, {
  title: 'Explorations',
  url: 'http://bernard.wang/explorations',
  images: [ explorations1, explorations2 ],
  details: {
    Expertise: 'Front-end / Web Design',
    Details: 'Personal project showcasing my work in Art & Design classes throughout college. Uses Flickr to host images and a Handlebars to build the page.',
    Credits: '',
    Year: '2017'
  }
}, {
  title: 'Lisa Vuong Portfolio',
  url: 'http://bernard.wang/lisa-irl-copy/',
  images: [ lisa1, lisa2 ],
  details: {
    Expertise: 'Front-end',
    Details: 'Portfolio site for my dear friend and fellow shiba fan. Coded entirely in vanilla JS and Sass, the site also uses custom built gallery sliders.',
    Credits: 'Web Design: Lisa Vuong',
    Year: '2015'
  }
}, {
  title: 'IBM Maelstrom',
  url: 'http://bernard.wang/mael-nano/',
  images: [ mael1, mael2 ],
  details: {
    Expertise: 'Project Management / Web Design / Front-end',
    Details: 'Website built for IBM Maelstrom, a ten week design program in Austin, TX. Part of a week long micro-project involving other branding and style deliverables.',
    Credits: 'Web Design: Meme Betadam, Kei Yumino / Project Management: Tobi Oyadiran',
    Year: '2016'
  }
}, {
  title: 'This site!',
  details: {
    Expertise: 'Front-end / Web Design',
    Details: 'Personal site and portfolio built with Vue.js, Webpack, Tachyons and PugJS. Visit archive.bernard.wang to view previous versions of this site!',
    Credits: '',
    Year: '2017'
  }
}]

export default {
  name: 'Work',
  components: { WorkGallery },
  data () {
    return {
      works
    }
  }
}
</script>

<style lang="scss" scoped>
article:last-child{
  margin-bottom: 0;
}
</style>
