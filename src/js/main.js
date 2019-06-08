import Vue from "vue";
import VModal from "vue-js-modal";
import VeeValidate from "vee-validate";
import portfolio from "./Portfolio.vue";
import contactForm from "./components/Contact.vue";
// Vue.component("portfolio-card", function(resolve) {
//   //this is loading asynchronously so the images don't slow the site down
//   require(["./components/Card.vue"], resolve);
// });
const PortfolioApp = new Vue({
  render: h => h(portfolio)
}).$mount("section#portApp");
Vue.use(VeeValidate, { events: "blur" }).use(VModal, { dynamic: true });
new Vue({
  render: h => h(contactForm)
}).$mount("section.contact");
console.log("Vue Rocks!");

var anchors = document.getElementsByTagName("a");
for (var z = 0; z < anchors.length; z++) {
  var elem = anchors[z];
  elem.onclick = function() {
    console.log(PortfolioApp.$children[0].menuOpened);
    PortfolioApp.$children[0].menuOpened = false

  };
}