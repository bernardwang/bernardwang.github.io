<template lang="pug">
  nav#navbar.fixed.mt5-ns.ph0.pr0.w-auto-ns.w-100
    ul.flex.flex-column-ns.flex-row.items-center.pv2-ns.pt3.pb4.ma0
      li.w-100-ns.mb3-ns.pr3
        h1.f3.mv0 #[span(@click="emitToggle").pointer 🌺]
      li.w-100-ns.mb3-ns.pr2
        router-link(@click.native="scroll('#home')" to="/" :class="(index==0)?'active':''").lh-solid.mv0.f4 Home
      li.w-100-ns.mb3-ns.pr2
        router-link(@click.native="scroll('#about')" to="/#about" :class="(index==1)?'active':''").lh-solid.mv0.f4 About
      li.w-100-ns.mb3-ns.pr2
        router-link(@click.native="scroll('#projects')" to="/#projects" :class="(index==2)?'active':''").lh-solid.mv0.f4 Projects
      li.w-100-ns.mb3-ns.pr2
        router-link(@click.native="scroll('#contact')" to="/#contact" :class="(index==3)?'active':''").lh-solid.mv0.f4 Contact
</template>

<script>
export default {
  name: 'navbar',
  props: ['index'],
  methods: {
    emitToggle: function () {
      this.$emit('toggle')
    },
    scroll: function (hash) {
      const linkElem = document.querySelector(hash)
      if (linkElem) {
        linkElem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
