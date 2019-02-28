<template lang="pug">
	a.portfolio-card(:href='card.href', :title="'Visit ' + card.title", target='_blank')
		.img(v-if='card.img', :style="{ backgroundImage: 'url(' + imgRequire(card.img) + ')' }")
			.ar
		h3 {{ card.title }}
		span.item(v-if='card.scope')
			label.scope(for='scope') Scope of Work:
			p#scope.scope(v-html='card.scope')
		span.item(v-if='card.scope')
			label(for='skills') Skill Improvement:
			p#skills(v-html='card.skills')
		p(v-else='', v-html='card.desc')
</template>
<script>
export default {
  name: "portfolio-card",
  data: _this => _this.$parent.$data,
  computed: {
    card: function() {
      return this.jobs
        .map(job => {
          //preload the images
          let image = new Image();
          image.src = require(`../../img/${job.img}`);
          return job;
        })
        .filter(job => job.machine_name === this.active)[0];
    }
  },
  methods: {
    imgRequire: img => require(`../../img/${img}`)
  }
};
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
      padding: 0 0 57%;
      width: 100%;
      height: 0;
    }
  }
  @media (min-width: 480px) {
    p {
      font-size: 18px;
    }
  }
}
</style>