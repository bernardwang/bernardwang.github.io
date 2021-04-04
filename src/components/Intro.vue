<template lang="pug">
  section#intro
    h1.w-80-l.w-100.display Hey 👋, my name is Bernard. I'm a <span class="hl">frontend</span><span class="hl">engineer</span> and <span class="hl">designer</span> based in Chicago.<br/>
    p.f4.w-90-l.w-100.mt0 Say hi on #[a(href="https://twitter.com/_bernardwang/" target="_blank" alt="twitter") Twitter] or email me at #[a(href="mailto:bw.vbnm@gmail.com" target="_blank" alt="email") bw.vbnm@gmail.com]! 😁
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
@media screen and (--breakpoint-medium){
  .display {
    font-size: 2.5rem;
  }
}
</style>
