<template lang="pug">
  section#contact
    h2.ml-fifth.f2.lh-title.hl Contact
    div.cf
      aside.fl.w-100.w-20-ns
        p.mt3-ns.pt1-ns I'm available for contract or freelance work!
      form(accept-charset="utf-8" action="https://formspree.io/bernard@bernard.wang"
      method="POST").fl.w-100.w-80-ns
        fieldset.ba.b--transparent.pa0.ma0.cf
          legend.ph0.mh0.fw6.clip Submit Message
          div.form-name.fl.w-100.w-50-ns.mb3
            label(for="name").f6.b.db.mb2 Name
            input(id="name" placeholder="That's you!" type="text" name="name" aria-describedby="name-desc" required).w-90-ns.w-100.pa3.ba.bg-transparent
          div.form-email.fl.w-100.w-50-ns.mb3
            label(for="email-address").f6.b.db.mb2 Email address
            input(id="email" placeholder="hello@email.com" type="email" name="email" aria-describedby="email-desc" required).w-90-ns.w-100.pa3.ba.bg-transparent
          div.form-msg.fl.w-100.mb3
            label(for="message").f6.b.db.mb2 Message
            textarea(id="message" placeholder="Hey Bernard..." name="message" aria-describedby="message-desc" required).pa3.mb2.ba.w-100
        div.w-100.w-50-ns
          input(id="submit" value="SEND →" type="submit").b.pa3.ba.bg-transparent.pointer.f5.w-90-ns.w-100
          input(type="hidden" name="_next" value="//")
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
