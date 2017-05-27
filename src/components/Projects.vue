<template lang="pug">
  section.mt5.pl-sixth
    h2.pl-fifth Projects
    div.cf
      article(v-for="proj in projects").fl.w-100.mb3
        h3.pl-fifth.mb0 {{ proj.title }}
        div(v-for="(value, key) in proj.list" v-if="value").cf
          aside.fl.w-100.w-20-ns
            p.mb0 {{ key }}
          div.fl.w-100.w-80-ns
            p.mb0 {{ value }}
</template>

<script>
const projects = [{
  title: 'Explorations',
  list: {
    Expertise: 'Front-end / Web Design',
    Details: 'Personal project showcasing my work in Art & Design classes throughout college. Uses Flickr to host images and a Handlebars to build the page.',
    Credits: '',
    Year: '2017'
  }
}, {
  title: 'Lisa Vuong Portfolio',
  list: {
    Expertise: 'Front-end',
    Details: 'Portfolio site for my dear friend and fellow shiba fan. Coded entirely in vanilla JS and Sass, the site   also uses custom built gallery sliders.',
    Credits: 'Web Design: Lisa Vuong',
    Year: '2015'
  }
}, {
  title: 'IBM Maelstrom',
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
    Year: new Date().getFullYear()
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
</style>
