<template>
    <div>
        <a :href="href" :title="'Visit ' + title" target="_blank" class="portfolio-card">
            <div v-if="img" :style="{ 'background-image': 'url(/assets/img/' + img + ')' }" class="img">
                <div class="ar"></div>
            </div>
            <h3>{{ title }}</h3>
            <span v-if="skills" class="item">
      <label for="scope" class="scope">Scope of Work:</label>
      <p id="scope" v-html="scope" class="scope"></p>
    </span>
            <span v-if="skills" class="item">
      <label for="skills">Skill Improvement:</label>
      <p id="skills" v-html="skills"></p></span>
        </a>
    </div>
</template>
<script>
    import Projects from './projects.js';
	module.exports = {
		name:'portfolio-card',
		data: function() {
			const card = Projects.projectArr.filter((job) => job.machine_name === active)[0];
			console.log(card);
			return card;
		}
	}
</script>
<style lang="scss">
.portfolio-card {
    width: 100%;
    .img {
        background-position: top center;
        background-size: cover;
        overflow: hidden;
        transition: all 0s linear;
        .ar {
            display: block;
            margin:0;
            padding:0;
            padding-bottom:42%;
            width: 100%;
            height: 0;
        }
    }
    @media (min-width:480px) {
        p {
            font-size: 18px;
        }
    }
}
</style>