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
