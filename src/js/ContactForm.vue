<template lang="pug">
  section#contact
    form
      h2 Drop me a Note!
      .flex-row.left.contact
        .col.flex-row.nowrap.fa.fa-phone
          span.screen-reader Phone Number
          img.txt(src='../img/phone.png', alt="Phone Number")
        .col.flex-row.nowrap.fa.fa-envelope-o
          span.screen-reader E-Mail Address
          img.txt(src='../img/email.png', alt="Email")
      .form-field
        label Name
        input.caps(name='name', type='text', placeholder='Name', required='')
      .form-field
        label Email Address
        input(name='email', type='email', placeholder='Email Address', required='')
      .form-field
        label Message
        textarea(name='content', rows='5', placeholder='Message', required='')
      button#submit(type='submit') Send
      #toast
</template>

<script>
export default {
  name: "contactForm",
  data: () => ({
    form: document.getElementById("contactForm"),
    toast: document.getElementById("toast"),
    submit: document.getElementById("submit"),
    url:
      "https://8wg7saz294.execute-api.us-east-1.amazonaws.com/dev/email/send",
    message: "You loaded this page on " + new Date().toLocaleString()
  }),
  methods: {
    post(url, body, callback) {
      var req = new XMLHttpRequest();
      req.addEventListener("load", checkStatus);
      req.addEventListener("error", checkStatus);
      req.open("POST", url, true);
      req.setRequestHeader("Content-Type", "application/json");
      function checkStatus() {
        console.log("fired", this, req);
        if (req.status < 400) {
          callback(null, JSON.parse(req.responseText));
          req.send(JSON.stringify(body));
        } else {
          callback(new Error("Request failed: " + req.statusText));
        }
      }
    },
    success() {
      this.toast.innerHTML =
        "Thanks for sending me a message! I'll get in touch with you ASAP. :)";
      this.submit.disabled = false;
      this.submit.blur();
      this.form.name.focus();
      this.form.name.value = "";
      this.form.email.value = "";
      this.form.content.value = "";
    },
    error(err) {
      this.toast.innerHTML =
        "There was an error with sending your message, hold up until I fix it. Thanks for waiting.";
      this.submit.disabled = false;
      console.log(err);
    },
    submitForm(e) {
      e.preventDefault();
      this.toast.innerHTML = "Sending";
      this.submit.disabled = true;

      const payload = {
        name: this.form.name.value,
        email: this.form.email.value,
        content: this.form.content.value
      };
      this.post(url, payload, function(err, res) {
        if (err) {
          return this.error(err);
        }
        this.success();
      });
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "../scss/init";
</style>