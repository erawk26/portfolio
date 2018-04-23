import Vue from 'vue';
import Projects from './projects.js';
import CardComponent from './card.vue';
let vm_data = {
	message: 'You loaded this page on ' + new Date().toLocaleString(),
	active: 'otis',
	jobs: Projects.projectArr
};
new Vue({
	el: '#portApp',
	data: vm_data,
	components: { CardComponent },
	methods: {
		cardFade: function (job) {
			// this.$set(this, 'active', job);
		},
	},
	watch: {
		active: function (newValue, oldValue) {
			// TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
			// console.log('fired!',newValue);
		}
	}
});
Projects.projectArr.map((job) => {//preload the images so they look normal during the transitions
	let image = new Image();
	image.src = '/assets/img/' + job.img;
});
console.log('Vue Rocks!');
