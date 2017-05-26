<template lang="pug">
  section.mt6
    h1.title.w-80-ns.f2.lh-title About
    div
      div.fl.w-100.w-20-ns
        div.fl.w-100
          p.f6.lh-copy.w-90-ns Interested in my resume? Grab a copy here.
      div.fl.w-100.w-80-ns
        div.fl.w-100.w-50-ns
          p.f5.lh-copy.w-90-ns I am excited about applying my background in Front-end Engineering and product design to social good. Specifically, I care about using technology to improve public works and empower grassroots organizing.
        div.fl.w-100.w-50-ns
          p.f5.lh-copy.w-90-ns Most recently, I contributed to 5calls.org— an open source app that tackles civic engagement through constituent calls.
          p.f5.lh-copy.w-90-ns Check out more of my work on my Github!
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="scss" scoped>
// Fix later
// Copied from tachyon -ns media query
@media screen and (min-width: 30em) {
  section{
    padding-left: calc(100% / 6);
  }

  .title{
    padding-left: calc(100% / 5);
  }
}
</style>
