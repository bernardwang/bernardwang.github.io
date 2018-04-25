<template lang="pug">
  div.w-100.v-100.ph-page.relative
    main#notfound.pt5
      h1 Oops, theres's nothing here!
      video(autoplay loop)
        source(src="https://media.giphy.com/media/tsIFjie7obBM4/giphy.mp4" type="video/mp4")
      p Maybe you meant to go to my #[a(href="/" alt="homepage") homepage]? If not and something is broken, please send me an email at #[a(href="mailto:bernard@bernard.wang" target="_blank" alt="email") bernard@bernard.wang] to get this sorted out!
</template>

<script>

export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
$color: #FF548F;
h1 {
  color: $color;
}
a {
  color: $color;
  &:hover {
    color: black;
  }
}
</style>
