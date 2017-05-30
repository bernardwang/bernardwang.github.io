<template lang="pug">
  section#contact
    h2.pl-fifth.f2.lh-title Contact
    div.cf
      aside.fl.w-100.w-20-ns
        p.mt3-ns.pt1-ns I’m currently available for projects, lets work together!
      form(accept-charset="utf-8" action="https://formspree.io/bernard@bernard.wang"
      method="POST").fl.w-100.w-80-ns
        fieldset.ba.b--transparent.pa0.ma0.cf
          legend.ph0.mh0.fw6.clip Submit Message
          div.form-name.fl.w-100.w-50-ns.mb3
            label(for="name").f6.b.db.mb2 Name
            input(id="name" placeholder="Boaty McBoatface" type="text" name="name" aria-describedby="name-desc").w-90-ns.w-100.pa3.ba.bg-transparent
          div.form-email.fl.w-100.w-50-ns.mb3
            label(for="email-address").f6.b.db.mb2 Email address
            input(id="email" placeholder="hello@email.com" type="email" name="email" aria-describedby="email-desc").w-90-ns.w-100.pa3.ba.bg-transparent
          div.form-msg.fl.w-100.mb3
            label(for="message").f6.b.db.mb2 Message
            textarea(id="message" placeholder="Hi Bernard! I'm interested in..." name="message" aria-describedby="message-desc").pa3.mb2.ba.w-100
        div.w-100.w-50-ns
          input(id="submit" value="SEND →" type="submit").b.pa3.ba.bg-transparent.pointer.f5.w-90-ns.w-100
          input(type="hidden" name="_next" value="//#contact")
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style lang="scss" scoped>
#message {
  @media screen and (min-width: 30em) {
    width: 95%;
  }
}
</style>
