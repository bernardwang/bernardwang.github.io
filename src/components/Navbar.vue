<template lang="pug">
  nav.fixed.w-100.mt5-ns.ph0
    ul.flex.flex-column-ns.flex-row.items-center
      li.w-100-ns.w-auto.mb3.pr3
        h1.mv0 🌺
      li.w-100-ns.w-auto.mb3.pr3
        p.f5.mv0 #[a(href="#home" alt="Home") Home]
      li.w-100-ns.w-auto.mb3.pr3
        p.f5.mv0 #[a(href="#about" alt="About") About]
      li.w-100-ns.w-auto.mb3.pr3
        p.f5.mv0 #[a(href="#projects" alt="Projects") Projects]
      li.w-100-ns.w-auto.mb3.pr3
        p.f5.mv0 #[a(href="#contact" alt="Contact") Contact]
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 30em) {
  nav{
    width: calc((74%)/6); // 1/6 of width - padding, hardcoded, fix later
  }
}
</style>
