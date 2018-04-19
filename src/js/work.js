let vm_data= {
	message: 'You loaded this page on ' + new Date().toLocaleString(),
	active: 'otis',
	jobs: jobsArr,
};
Vue.component('portfolio-card', {
	template:   '<a :href="card.href" :title="\'Visit \' + card.title" target="_blank" class="portfolio-card">\n' +
					'<div class="img" v-if="card.img" :style="{ \'background-image\': \'url(/assets/img/\' + card.img + \')\' }">\n' +
						'<div class="ar"></div>\n' +
					'</div>\n' +
					'<h3>{{ card.title }}</h3>\n' +
					'<template v-if="card.skills">\n' +
						'<span class="item" >\n'+
							'<label class="scope" for="scope">Scope of Work:</label>\n' +
							'<p id="scope"  class="scope" v-html="card.scope"></p>\n' +
						'</span>\n'+
						'<span class="item" >\n'+
							'<label for="skills">Skill Improvement:</label>\n' +
							'<p id="skills" v-html="card.skills"></p>\n' +
						'</span>\n'+
					'</template>\n' +
					'<p v-else v-html="card.desc"></p>\n' +
				'</a>',
	name: 'portfolio-card',
	data: function () {
		return vm_data
	},
	computed: {
		// a computed getter
		card: function () {
			const data = this;
			return this.jobs.filter(function (job) {
				return job.machine_name == data.active;
			})[0];
		}
	},
});
let app = new Vue({

	el: '#portApp',
	data:vm_data,
	methods: {
		cardFade: function (job) {
			// this.$set(this, 'active', job);
		},
	},
	watch: {
		active: function(newValue,oldValue) {
			// TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
			// console.log('fired!',newValue);
		}
	}
});
vm_data.jobs.forEach(function(job){//preload the images so they look normal during the transitions
	"use strict";
	var image = new Image();
	image.src = '/img/'+job.img;
});
console.log('Vue Rocks!');
