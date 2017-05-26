<template lang="pug">
  section.mt5
    div.w-100.w-two-thirds-l
      h1.w-90-l.f1.lh-title Hi 👋, I’m Bernard! <br/> Welcome to my little space on the internet.
      p.w-90-l.f4.lh-copy I’m a developer and designer based in Urbana, IL. <br/> Currently I am studying Statistics & Computer Science at the University of Illinois at Urbana Champaign.
      p.w-50-l.f4.lh-copy Say hi on #[a(href="") Twitter] or email me at #[a(href="") bernard@bernard.wang] 😁.
</template>

<script>
export default {
  name: 'intro'
}
</script>

<style lang="scss" scoped>
// Fix later
// Copied from tachyon -ns media query
@media screen and (min-width: 30em) {
  section{
    padding-left: calc(100% / 3);
  }
}
</style>
