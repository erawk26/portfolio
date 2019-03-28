<template lang="pug">
  section.contact
    .form-container
      form#contactForm
        h2 Drop me a Note!
        .flex-row.left.contact
          .col.flex-row.nowrap.fa.fa-phone
            span.screen-reader Phone Number
            img.txt(src='../../img/phone.png', alt="Phone Number")
          .col.flex-row.nowrap.fa.fa-envelope-o
            span.screen-reader E-Mail Address
            img.txt(src='../../img/email.png', alt="Email")
        .form-field.input-group
          input.caps(name='name', type='text', placeholder='Name' v-validate="{ required: true, regex: /^[a-z,.'-]+\\s?[a-z,.'-]+$/i }" v-model="visitor.name" @focus='checkField' @blur='checkField')
          label Name
        .form-field.input-group
          input.caps(type="phone", name="phone", id="visitor-phone", v-model="visitor.phone", v-validate="{ required: false, regex: /^(?:1|1 )*(\\([2-9]{1}\\d{2}\\)|[2-9]{1}\\d{2})[- ]*(\\d{3})[- ]*(\\d{4})$/ }" @focus='checkField' @blur='checkField')
          label Phone Number
        .form-field.input-group
          input(name='email', type='email', placeholder='Email Address' formnovalidate="true" v-validate="'required|email'" v-model="visitor.email" @focus='checkField' @blur='checkField')
          label Email Address
        .form-field.input-group
          textarea(name='message', rows='5', placeholder='Message' v-model="visitor.message" v-validate="{ required: true, min:10 }" @focus='checkField' @blur='checkField')
          label Message

        ul.is-danger(v-if="errors.items.length >0")
          li.error-item(v-for="error in errors.items")
            p.is-danger.help {{ error.msg }}
        #status-message
          p {{ status }}
        button#submit(type='submit' @click="validateForm") Send
</template>

<script>
// export default {
//   name: "contactForm",
//   data: () => ({
//     form: document.getElementById("contactForm"),
//     toast: document.getElementById("toast"),
//     submit: document.getElementById("submit"),
//     url:
//       "https://8wg7saz294.execute-api.us-east-1.amazonaws.com/dev/email/send",
//     message: "You loaded this page on " + new Date().toLocaleString()
//   }),
//   methods: {
//     post(url, body, callback) {
//       var req = new XMLHttpRequest();
//       req.addEventListener("load", checkStatus);
//       req.addEventListener("error", checkStatus);
//       req.open("POST", url, true);
//       req.setRequestHeader("Content-Type", "application/json");
//       function checkStatus() {
//         console.log("fired", this, req);
//         if (req.status < 400) {
//           callback(null, JSON.parse(req.responseText));
//           req.send(JSON.stringify(body));
//         } else {
//           callback(new Error("Request failed: " + req.statusText));
//         }
//       }
//     },
//     success() {
//       this.toast.innerHTML =
//         "Thanks for sending me a message! I'll get in touch with you ASAP. :)";
//       this.submit.disabled = false;
//       this.submit.blur();
//       this.form.name.focus();
//       this.form.name.value = "";
//       this.form.email.value = "";
//       this.form.content.value = "";
//     },
//     error(err) {
//       this.toast.innerHTML =
//         "There was an error with sending your message, hold up until I fix it. Thanks for waiting.";
//       this.submit.disabled = false;
//       console.log(err);
//     },
//     submitForm(e) {
//       e.preventDefault();
//       this.toast.innerHTML = "Sending";
//       this.submit.disabled = true;

//       const payload = {
//         name: this.form.name.value,
//         email: this.form.email.value,
//         content: this.form.content.value
//       };
//       this.post(url, payload, function(err, res) {
//         if (err) {
//           return this.error(err);
//         }
//         this.success();
//       });
//     }
//   },
//   computed: {}
// };
export default {
  name: "contactForm",
  data: d => ({
    visitor: { name: "", email: "", message: "", phone: "" },
    url:
      "https://8wg7saz294.execute-api.us-east-1.amazonaws.com/dev/email/send",
    showErrors: false,
    status: ""
  }),
  methods: {
    validateForm(e) {
      e.preventDefault();
      this.$validator.validateAll().then(result => {
        if (result) {
          this.sendEmail(
            this.visitor.email + "sent you an email from your website!",
            {
              name: this.visitor.name,
              email: this.visitor.email,
              content: this.visitor.message + "\n" + this.visitor.phone
            }
          );
          console.log("Form Submitted!");
        } else {
          this.showErrors = true;
        }
      });
    },
    sendEmail(subject, body) {
      console.log("sendmail fired", subject, body);
      const that = this;
      return fetch(this.url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(res => {
          that.status =
            "Thanks for sending me a message! I'll get in touch with you ASAP. :)";
          that.resetForm();
        })
        .catch(err => {
          that.status =
            "I'm sorry There was an error with sending your message. :(";
          console.log(err);
          that.resetForm();
        });
    },
    resetForm() {
      this.visitor = { name: "", email: "", message: "", phone: "" };
      this.showErrors = false;
      const that = this;
      setTimeout(() => {
        that.status = "";
      }, 10000);
    },
    checkField(e) {
      // console.log(_invalid, _val);
      // fields.phone && fields.phone.invalid
      if (e.type == "focus") e.target.nextSibling.classList.add("slide-up");
      if (e.type == "blur" && e.target.value == "")
        e.target.nextSibling.classList.remove("slide-up");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/init";
$rvt-dealer-bp-max: $bp-sm;
$formRed: $dk-red;

.is-danger {
  border: 1px solid $formRed;
  border-radius: 4px;
  &.help {
    border: none;
    color: $formRed;
  }
}

.error-item {
  margin: 0 10px;
  p {
    margin: 5px 0;
  }
  > p:before {
    content: "*";
    position: relative;
    padding-right: 0.25em;
  }
}

/* input,
textarea,
select {
  &.invalid,
  &[aria-invalid="true"] {
    border-color: $formRed;
  }
} */

input[type="phone"] {
  display: block;
  margin-right: auto;
}

input[type="radio"] {
  + label {
  }
  @media (max-width: $bp-md) {
    display: none;
    + label {
      font-size: 0.95em;
      margin: 0 15px 15px 0;
      @include flex($display: inline-flex);
      &:before {
        margin-right: 0.35em;
        border-radius: 2px;
        border: 1px solid $dk-gray-rvt;
        background: $md-gray-rvt;
        width: 18px;
        height: 18px;
        position: relative;
        content: "";
      }
    }
    &:checked + label {
      font-weight: bold;
      &:before {
        background: #fff;
        border: 6px solid $md-blue-rvt;
      }
    }
  }
  @media (min-width: $bp-sm) {
    display: none;
    + label {
      display: inline-block;
      border: 0.5px solid #333;
      margin: 5px 10px 5px 0;
      padding: 3px 20px;
      border-radius: 5px;
    }
    &:checked + label {
      color: white;
      background: $aqua-rvt;
    }
  }
}

.helper {
  @include flex(flex-end);
  position: absolute;
  text-align: right;
  height: 20px;
  min-width: 20px;
  overflow: visible;
  top: 10px;
  right: 1px;
  small {
    font-style: italic;
    color: #999;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
