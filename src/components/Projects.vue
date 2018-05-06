<template lang="pug">
  section#work
    h2.ml-fifth.hl Work
    div.cf
      article(v-for="proj in projects").fl.w-100.mb4
        h4.ml-fifth.mv0(v-if="proj.url") #[a(:href="proj.url" target="_blank") {{ proj.title }}]
        h4.ml-fifth.mv0(v-else) {{ proj.title }}
        div(v-for="(value, key) in proj.list" v-if="value").cf
          aside.fl.w-100.w-20-ns
            p.mb0.mt2-ns.mt1 {{ key+":" }}
          div.fl.w-100.w-80-ns
            p.mb0.mt2-ns.mt1 {{ value }}
</template>

<script>
const projects = [{
  title: 'Grove AI',
  url: 'http://grove.ai',
  list: {
    Expertise: 'Full-stack / UI & UX Design / Product Vision',
    Details: 'Platform for progressive campaigns and nonprofits to organize online through Facebook Messenger chatbots',
    Credits: 'Product Vision & Backend: Vishal Disawar',
    Year: '2017 - 2018'
  }
}, {
  title: 'Explorations',
  url: 'http://bernard.wang/explorations',
  list: {
    Expertise: 'Front-end / Web Design',
    Details: 'Personal project showcasing my work in Art & Design classes throughout college. Uses Flickr to host images and a Handlebars to build the page.',
    Credits: '',
    Year: '2017'
  }
}, {
  title: 'Lisa Vuong Portfolio',
  url: 'http://bernard.wang/lisa-irl-copy/',
  list: {
    Expertise: 'Front-end',
    Details: 'Portfolio site for my dear friend and fellow shiba fan. Coded entirely in vanilla JS and Sass, the site also uses custom built gallery sliders.',
    Credits: 'Web Design: Lisa Vuong',
    Year: '2015'
  }
}, {
  title: 'IBM Maelstrom',
  url: 'http://bernard.wang/mael-nano/',
  list: {
    Expertise: 'Project Management / Web Design / Front-end',
    Details: 'Website built for IBM Maelstrom, a ten week design program in Austin, TX. Part of a week long micro-project involving other branding and style deliverables.',
    Credits: 'Web Design: Meme Betadam, Kei Yumino / Project Management: Tobi Oyadiran',
    Year: '2016'
  }
}, {
  title: 'This site!',
  list: {
    Expertise: 'Front-end / Web Design',
    Details: 'Personal site and portfolio built with Vue.js, Webpack, Tachyons and PugJS. Visit archive.bernard.wang to view previous versions of this site!',
    Credits: '',
    Year: '2017'
  }
}]

export default {
  name: 'projects',
  data () {
    return {
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
article:last-child{
  margin-bottom: 0;
}
</style>
