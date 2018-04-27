<template lang="html">
    <a :href="card.href" :title="'Visit ' + card.title" target="_blank" class="portfolio-card">
        <div v-if="card.img" :style="{ backgroundImage: 'url(' + imgRequire(card.img) + ')' }" class="img">
            <div class="ar"></div>
        </div>
        <h3>{{ card.title }}</h3>
        <span v-if="card.scope" class="item">
      <label for="scope" class="scope">Scope of Work:</label>
      <p id="scope" v-html="card.scope" class="scope"></p>
    </span>
        <span v-if="card.scope" class="item">
      <label for="skills">Skill Improvement:</label>
      <p id="skills" v-html="card.skills"></p>
            </span>
        <p v-else v-html="card.desc"></p>
    </a>
</template>
<script>
	export default {
		name: 'portfolio-card',
		data: _this => _this.$parent.$data,
		computed: {
			// a computed getter
			card: function () {
				return this.jobs.filter(job => job.machine_name === this.active)[0];
			}
		},
		methods: {
			imgRequire: function (img) {
				return require(`../../img/${img}`)
			}
		}
	}
</script>
<style lang="scss">
    .portfolio-card {
        //@include set-max-width;
        width: 100%;
        flex: 1;
        .img {
            background-position: top center;
            background-size: cover;
            overflow: hidden;
            transition: all 0s linear;
            .ar {
                display: block;
                margin: 0;
                padding: 0 0 42%;
                width: 100%;
                height: 0;
            }
        }
        @media(min-width: 480px) {
            p {
                font-size: 18px;
            }
        }
    }
</style>