<template lang="pug">
  section.mt5.pl-sixth
    h2.pl-fifth.f2.lh-title Contact
    div.cf
      aside.fl.w-100.w-20-ns
        p.f6.lh-copy.w-90-ns.mt4.pt1 I’m currently available for projects, lets work together!
      form(accept-charset="utf-8").fl.w-100.w-80-ns
        fieldset(action="msg_submit").ba.b--transparent.pa0.ma0.cf
          legend.ph0.mh0.fw6.clip Submit Message
          div.form-name.fl.w-100.w-50-ns.mt3
            label(for="name").f6.b.db.mb2 Name
            input(id="name" placeholder="Cool person" type="text" name="name" aria-describedby="name-desc").w-90-ns.w-100.pa3.ba.b--black.bg-transparent
          div.form-email.fl.w-100.w-50-ns.mt3
            label(for="email-address").f6.b.db.mb2 Email address
            input(id="email" placeholder="cool@person.com" type="email" name="email-address" aria-describedby="email-desc").w-90-ns.w-100.pa3.ba.b--black.bg-transparent
          div.form-msg.fl.w-100.mt3
            label(for="message").f6.b.db.mb2 Message
            textarea(id="message" placeholder="Hey! blah blah!" name="message" aria-describedby="message-desc").pa3.mb2.ba.b--black.bg-transparent.w-100
        div.mt3.w-100.w-50-ns
          input(id="submit" value="SEND →" type="submit").b.pa3.ba.b--black.bg-transparent.pointer.f5.w-90-ns.w-100
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style lang="scss" scoped>
#name {

}

#email {

}

#message {
  @media screen and (min-width: 30em) {
    width: 95%;
  }
}

#submit {

}
</style>
