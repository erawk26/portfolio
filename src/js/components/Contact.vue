<template lang="pug">
  section.contact
    .form-container
      form#contactForm
        h2 Drop me a Note!
        ul.is-danger(v-if="errors.items.length >0")
          li.error-item(v-for="error in errors.items")
            p.is-danger.help {{ error.msg }}
        .flex-row.left.contact
          .col.flex-row.nowrap.fa.fa-phone
            span.screen-reader Phone Number
            img.txt(src='../../img/phone.png', alt="Phone Number")
          .col.flex-row.nowrap.fa.fa-envelope-o
            span.screen-reader E-Mail Address
            img.txt(src='../../img/email.png', alt="Email")
        .form-field.input-group
          label Name
          input.caps(name='name', type='text', placeholder='Name' :class="{'invalid': fields.name && showErrors && fields.name.invalid}"
          v-validate="{ required: true, regex: /^[a-z,.'-]+\\s?[a-z,.'-]+$/i }",
          v-model="visitor.name")
        .form-field.input-group
          label Phone Number
          input.caps(type="phone", name="phone", id="visitor-phone", :class="{'invalid': fields.phone && showErrors && fields.phone.invalid}", v-model="visitor.phone1", v-validate="{ required: false, regex: /^(?:1|1 )*(\\([2-9]{1}\\d{2}\\)|[2-9]{1}\\d{2})[- ]*(\\d{3})[- ]*(\\d{4})$/ }")
          .helper
            small optional
            img.invalid(src="../../img/circle-form.png",
            v-if="fields.phone && fields.phone.invalid")
            img.valid(src="../../img/checkmark-circle.png",
            v-else)
        .form-field.input-group
          label Email Address
          input(name='email', type='email', placeholder='Email Address' :class="{'invalid': fields.email && showErrors && fields.email.invalid}"
          formnovalidate="true",
          v-validate="'required|email'",
          v-model="visitor.email")
          .helper
            img.invalid(src="../../img/circle-form.png",
            v-if="fields.email && fields.email.invalid")
            img.valid(src="../../img/checkmark-circle.png",
            v-else)
        .form-field.input-group
          label Message
          textarea(name='content', rows='5', placeholder='Message' )
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
    visitor: { name: "", email: "", message: "", poolorspa: "", phone: "" },
    url:
      "https://8wg7saz294.execute-api.us-east-1.amazonaws.com/dev/email/send",
    showErrors: false
  }),
  methods: {
    validateForm(e) {
      e.preventDefault();
      this.$validator.validateAll().then(result => {
        if (result) {
          this.sendEmail(
            this.visitor.email + "sent you an email from your website!",
            this.visitor
          );
          console.log("Form Submitted!");
        } else {
          this.showErrors = true;
        }
      });
    },
    sendEmail(subject, body) {
      console.log(body);
      return fetch(this.url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ subject, body })
      })
        .then(function(response) {
          return response.blob();
        })
        .then(function(blob) {
          console.log(blob);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/init";
$rvt-dealer-bp-max: $bp-sm;
$formRed: $red;

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

input,
textarea,
select {
  &.invalid {
    background: rgba($formRed, 0.15);
  }
}

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
