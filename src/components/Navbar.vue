<template lang="pug">
  nav.fixed.w-20-ns.w-100.mt5
    h1.mt2 🌺
    ul.cf
      li.fl.w-100-ns.w-auto
        p.f5.mt0 #[a(href="#home" alt="Home") Home]
      li.fl.w-100-ns.w-auto
        p.f5.mt0 #[a(href="#about" alt="About") About]
      li.fl.w-100-ns.w-auto
        p.f5.mt0 #[a(href="#projects" alt="Projects") Projects]
      li.fl.w-100-ns.w-auto
        p.f5.mt0 #[a(href="#contact" alt="Contact") Contact]
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>
</style>
