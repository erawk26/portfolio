import Vue from 'vue';
import App from './App.vue';
Vue.component('portfolio-card', function (resolve) {//this is loading asynchronously so the images don't slow the site down
	require(['./components/Card.vue'], resolve)
});
new Vue({
	render: h => h(App),
}).$mount('#portApp');
console.log('Vue Rocks!');