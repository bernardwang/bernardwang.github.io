<template lang="pug">
  a(href="#home").skip-nav Skip to content
</template>

<style lang="scss" scoped>
@import '../sass/base/color';

.skip-nav {
  font-size: 1.5rem;
  color: $cl-bg-main;
  background-color: nth($cl-text-hl, 1);
  padding: 1rem 2rem;
  position: absolute;
  left: 0;
  top: -9999px;
}

.skip-nav:focus {
  outline-offset: 0 !important;
  left: 2px;
  top: 2px;
}
</style>
