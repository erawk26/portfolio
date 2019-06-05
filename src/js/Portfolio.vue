<template lang="pug">
	//- section#portApp.vue-portfolio
	//- 	.flex-wrapper
	//- 		.port-head
	//- 			h4 Portfolio
	//- 			hr
	//- 			h2 Recent Projects
	//- 		ul.portfolio-list
	//- 			li.project(v-for='job in jobs', :class='job.machine_name')
	//- 				a.wrapper(:class='{active: job.machine_name === active}', @click='active = job.machine_name')
	//- 					span.title {{job.title}}
	//- 					.hov
	//- 		ul.job-panels
	//- 			li.panel-item.flex-middle(:class="{active:active==item.machine_name}" v-for="(item, index) in jobs" :id="'panel-'+item.machine_name")
	//- 				a.portfolio-card(:href='item.href', :title="'Visit ' + item.title", target='_blank')
	//- 					.img(v-if='item.img', :style="{ backgroundImage: 'url(' + imgRequire(item.img) + ')' }")
	//- 						.ar
	//- 					h3 {{ item.title }}
	//- 					span.item(v-if='item.scope')
	//- 						label.scope(for='scope') Scope of Work:
	//- 						p#scope.scope(v-html='item.scope')
	//- 					span.item(v-if='item.scope')
	//- 						label(for='skills') Skill Improvement:
	//- 						p#skills(v-html='item.skills')
	//- 					p(v-else='', v-html='item.desc')
	section#portApp.vue-portfolio.max-pg-width
		.grid
			span.fill.white.col-full.row-1.mobile-toggle.flex.start(@click="menuOpened = !menuOpened" :class="{'is-active':menuOpened==true}" type="button" aria-label="Menu" aria-controls="navigation")
				h2 Recent Projects
				i.fa.fa-caret-right
			ul.story-nav#navigation.col-full.row-2(:class="{'is-active':menuOpened==true}")
				li.menu-item(:class="{active:active==key}" v-for="(item, key, index) in jobs" @click="setActive(key)") {{item.title}}
			ul.story-panels.col-full.row-3
				li.panel-item.flex.col.start(:class="{active:active==key}" v-for="(item, key, index) in jobs" :id="'panel-'+key")
					a.portfolio-card(:href='item.href', :title="'Visit ' + item.title", target='_blank')
						.bg-img(v-if='item.img', :style="{ backgroundImage: 'url(' + imgRequire(item.img) + ')',backgroundSize:'cover',backgroundPosition:'center' }")
						.panel-content.grid.add-top
							h3.color.secondary.col-left.row-1.remove-top {{ item.title }}
							.skills.flex-start.col-right.row-1(v-if='item.skills')
								h5 Skill Improvement:
								.tag(v-for='(skill,index) in item.skills') {{skill}}
								//- 	p#skills(v-html='item.skills')
							.body.color.secondary.col-left.row-2.span-2
								span(v-html="item.desc")
</template>

<script>
import Projects from "./projects.js";
import TweenMax from "gsap/TweenMax";
var WheelIndicator = require("wheel-indicator");
//import Card from './components/Card.vue';

export default {
  name: "portfolio",
  data: () => ({
    message: "You loaded this page on " + new Date().toLocaleString(),
    active: null,
    menuOpened: null,
    loopSlides: { set: true, flag: false },
    scroll: {
      type: null,
      Y: null
    },
    jobs: Projects.jobs
  }),
  watch: {
    active: function(newVal, oldVal) {
      const newInd = this.keys.indexOf(newVal),
        oldInd = this.keys.indexOf(oldVal);
      const dir = newInd < oldInd ? "down" : "up";
      this.loadTransition(oldVal, newVal, dir);
    },
    menuOpened: function(opened) {
      if (opened) {
        TweenMax.to(".story-nav", 0.4, { opacity: 1, yPercent: 0, scaleY: 1 });
      } else {
        TweenMax.to(".story-nav", 0.4, {
          opacity: 0,
          transformOrigin: "0 0",
          yPercent: 0,
          scaleY: 0
        });
      }
    }
  },
  computed: {
    keys: d => Object.keys(d.jobs)
  },
  methods: {
    setActive: function(id) {
      console.log(id);
      this.active = id;
      this.menuOpened = window.innerWidth > 767 ? true : false;
    },
    loadTransition: function(oldVal, newVal, dir) {
      var oldDiv = "#panel-" + oldVal;
      var newDiv = "#panel-" + newVal;
      if (this.loopSlides.flag) {
        this.loopSlides.flag = false;
        dir = dir != "down" ? "down" : "up";
      }
      TweenMax.fromTo(
        oldDiv,
        1,
        { opacity: 1, yPercent: 0 },
        {
          opacity: 0,
          yPercent: dir == "down" ? 100 : -100,
          scale: 0.8,
          zIndex: -10
        }
      );
      TweenMax.fromTo(
        newDiv,
        1,
        { opacity: 0, yPercent: dir == "down" ? -100 : 100, scale: 0.8 },
        { opacity: 1, yPercent: 0, scale: 1, zIndex: 10 }
      );
    },
    scrollChange: function(dir) {
      this.menuOpened = window.innerWidth > 767 ? true : false;
      var newInd = null;
      if (dir == "up" && this.keys.indexOf(this.active) > 0) {
        //if theres a previous panel set it to active
        newInd = this.keys.indexOf(this.active) - 1;
      }
      if (
        dir == "down" &&
        this.keys.indexOf(this.active) < this.keys.length - 1
      ) {
        //if theres another panel set it to active
        newInd = this.keys.indexOf(this.active) + 1;
      }
      if (this.loopSlides.set) {
        if (newInd == null) {
          this.loopSlides.flag = true;
          newInd = dir == "down" ? 0 : this.keys.length - 1;
        }
        this.setActive(this.keys[newInd]);
      } else if (newInd != null) {
        this.setActive(this.keys[newInd]);
      }
    },
    touchDirection: function(gestureZone, cb, th) {
      // ARGS (selector, callback, distance threshold)
      th = th || 30; //set a default threshhold if not defined
      let touchstartY = 0;
      let touchendY = 0;
      gestureZone.addEventListener(
        "touchstart",
        function(e) {
          e.preventDefault();
          touchstartY = e.changedTouches[0].screenY;
        },
        false
      );
      gestureZone.addEventListener(
        "touchend",
        function(e) {
          touchendY = e.changedTouches[0].screenY;
          const distance = touchendY - touchstartY;
          const direction =
            distance > th ? "up" : distance < th * -1 ? "down" : null;
          cb(direction, distance);
        },
        false
      );
    },
    imgRequire: img => require(`../img/${img}`)
  },
  mounted: function() {
    const that = this,
      ele = document.querySelector(".story-panels");
    this.menuOpened = window.innerWidth > 767 ? true : false;
    this.setActive("tybee");
    this.touchDirection(ele, function(direction, distance) {
      //bind touch
      that.scrollChange(direction);
      that.scroll.type = "touchmove";
      that.scroll.Y = direction + ", " + distance;
    });
    var indicator = new WheelIndicator({
      elem: ele,
      callback: function(e) {
        that.scrollChange(e.direction);
        that.scroll.type = "wheel";
        that.scroll.Y = e.direction;
        console.log(e.direction); // "up" or "down"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/init";
.vue-portfolio {
  @media (max-width: $page-max-width + 50px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  position: relative;
  width: 100%;
  padding-top: 65px;
  height: 100vh;
  overflow: hidden;
  a {
    display: block;
    box-sizing: border-box;
    text-decoration: none;
    color: black;
  }
  .port-head {
    background: white;
    hr {
      border: none;
      border-bottom: 1px solid $secondary;
      width: 130px;
    }
    text-align: center;
    width: 100%;
    > * {
      margin: 0;
    }
  }
}
.mobile-toggle {
  cursor: pointer;
  outline: none;
  border: none;
  .fa-caret-right {
    font-size: 1.75em;
    padding-left: 0.4em;
    transition: transform 250ms linear;
  }
  &.is-active .fa-caret-right {
    transform: translateX(5px) rotate(90deg);
    @media (min-width: 768px) {
      display: none;
    }
  }
}
.story-panels {
  position: relative;
  /* overflow-y: auto; */
  list-style: none;
  padding-left: 0;
  display: block;
  width: 100%; //calc(100% + 17px);
  /* height: 100%; */
  li {
    color: $primary;
    position: absolute;
    /* transform: translateY(100%); */
    width: 100%;
    height: auto;
    top: 0;
    opacity: 0;
    &.active {
      opacity: 1;
      z-index: 1;
    }
    .bg-img {
      z-index: -1;
      /* opacity: 0.5; */
      /* position: absolute; */
      width: 100%;
      padding-top: 57%;
      height: 0;
    }
    &:first-child {
    }
    &.active {
    }
  }
}
.panel-content.grid {
  grid-column-gap: 40px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
}
.portfolio-card {
  width: 100%;
  padding: 10px 0;
  .body {
    /* order: 1;
		flex: 1; */
  }
  .skills {
    grid-row-end: span 2;
    @media (max-width: 767px) {
      order: 3;
      margin-top: 22px;
    }
    .tag {
      border-radius: 5px;
      background: #444;
      color: white;
      @include marding(0 5px 5px 0, 3px 6px);
      white-space: nowrap;
      display: inline-block;
    }
    h5 {
      display: block;
      width: 100%;
      margin: 0 0 5px;
    }
  }
  .img {
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
.story-nav {
  @extend %ul-nostyle;
  position: relative;
  z-index: 99;
  margin: 1px 0 0 1px;
  @media (max-width: 767px) {
    margin: 0;
    top: 130px;
    left: 0;
    z-index: 99;
    text-align: center;
    position: fixed;
    li.menu-item {
      display: block;
    }
  }
  li {
    outline: inset 1px $secondary;
    color: $secondary;
    background: $primary;
    transition: background 600ms ease, color 600ms ease;
    &.active {
      color: $primary;
      background: $secondary;
    }
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
  }
}
</style>