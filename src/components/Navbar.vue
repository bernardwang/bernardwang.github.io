<template lang="pug">
  nav(role="navigation")#navbar.fixed.mt5-l.pr0.w-auto-l.w-100
    ul(:class="classObj").flex.flex-column-l.flex-row.items-center.pv2-l.pt3.pb3.ma0
      li.w-100-l.mb3-l.pr3
        h1.f3.mv0 #[span(@click="emitToggle" aria-hidden="true").pointer 🌺]
      li.w-100-l.mb3-l.pr2
        router-link(@click.native="scroll('#home', 0)" to="/" :class="(index==0)?'active':''").link.lh-solid.mv0.f4 Home
      li.w-100-l.mb3-l.pr2
        router-link(@click.native="scroll('#about', 1)" to="/#about" :class="(index==1)?'active':''").link.lh-solid.mv0.f4 About
      li.w-100-l.mb3-l.pr2
        router-link(@click.native="scroll('#work', 2)" to="/#work" :class="(index==2)?'active':''").link.lh-solid.mv0.f4 Work
      li.w-100-l.mb3-l.pr2
        router-link(@click.native="scroll('#contact', 3)" to="/#contact" :class="(index==3)?'active':''").link.lh-solid.mv0.f4 Contact
</template>

<script>
export default {
  name: 'Navbar',
  props: ['index'],
  methods: {
    emitToggle: function () {
      this.$emit('toggle')
    },
    scroll: function (hash, index) {
      const linkElem = document.querySelector(hash)
      if (linkElem) {
        // TODO: temporarily disable smooth scroll
        // linkElem.scrollIntoView({ behavior: 'smooth' })
        linkElem.scrollIntoView()
      }
      this.$emit('update', index)
    }
  },
  computed: {
    classObj: function () {
      return 'border' + (this.index + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/base/color";
  @import "../sass/base/utils";

  @media screen and (max-width: 60em) {
    #navbar {
      background: $cl-bg-main;
      left: 0;
      ul {
        padding-left: 6%;
        &.border1 { @include set-nav-color(1); }
        &.border2 { @include set-nav-color(2); }
        &.border3 { @include set-nav-color(3); }
        &.border4 { @include set-nav-color(4); }
      }
    }
  }

  #navbar {
    z-index: 2;

    a {
      color: $cl-text-main;
      text-decoration: none;
      transition: color .15s ease-in;
    }

    .active {
      text-decoration: underline;
    }

    li:nth-of-type(2) { @include set-nav-link-color(1); }
    li:nth-of-type(3) { @include set-nav-link-color(2); }
    li:nth-of-type(4) { @include set-nav-link-color(3); }
    li:nth-of-type(5) { @include set-nav-link-color(4); }
  }
</style>
