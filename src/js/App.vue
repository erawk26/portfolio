<template lang="pug">
	section#portApp.vue-portfolio
		.flex-wrapper
			.port-head
				h4 Portfolio
				hr
				h2 Recent Projects
			ul.portfolio-list
				li.project(v-for='job in jobs', :class='job.machine_name')
					a.wrapper(:class='{active: job.machine_name === active}', @click='active = job.machine_name')
						span.title {{job.title}}
						.hov
			transition(name='bounce', mode='out-in')
				portfolio-card#vue-card(:key='active')
</template>

<script>
	import Projects from './projects.js';
	//import Card from './components/Card.vue';

	export default {
		name: 'App',
		data: () => ({
			message: 'You loaded this page on ' + new Date().toLocaleString(),
			active: 'otis',
			jobs: Projects.jobs
		})
	};
</script>

<style lang="scss" scoped>
	@import '../scss/init';

	.vue-portfolio {
		min-height: 100vh;
		padding: 5%;
		.flex-wrapper {
			@include set-max-width;
			@include flex(center, flex-start, $wrap: wrap);
		}
		a {
			display: block;
			box-sizing: border-box;
			text-decoration: none;
			color: black;
		}
		.port-head {
			margin-bottom: 25px;
			hr {
				border: none;
				border-bottom: 1px solid #000;
				width: 130px;
				margin: 10px auto;
			}
			text-align: center;
			width: 100%;
			> * {
				margin: 0;
			}
		}
	}

	.portfolio-list {
		@extend %ul-nostyle;
		margin-bottom: 5px;
		@include flex($wrap: wrap);
		@media (min-width: 600px) {
			//margin-bottom: 15px;
			width: 175px;
			padding-right: 25px;
			@include flex(flex-start, stretch, $direction: column);
		}
		> h4 {
			display: block;
			width: 100%;
			//margin-bottom: 5px;
		}
		li {
			@include marding(5px, 0);
			display: inline-block;
			.wrapper {
				cursor: pointer;
				padding: 5px;
				position: relative;
				&.active {
					background-color: rgba($active, 0.5);
					color: white;
					transition: background 0.5s ease;
				}
				.hov {
					display: block;
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: -1;
					content: "";
				}

				&:hover {
					.title{color: white;}
					.hov{background-color: rgba($hover, 0.5);}
				}
			}
			img.logo {
				display: block;
				position: relative;
				z-index: 1;
				height: 75px;
				width: auto;
				max-width: 100%;
				margin: auto;
				padding: 15px;
			}
		}
	}
</style>