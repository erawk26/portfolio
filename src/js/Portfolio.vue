<template lang="pug">
	section#portApp.vue-portfolio.max-pg-width
		.grid
			span.fill.white.col-full.row-1.mobile-toggle.flex.start(@click="menuOpened = !menuOpened" :class="{'is-active':menuOpened==true}" type="button" aria-label="Menu" aria-controls="navigation")
				h2 Recent Projects
				i.fa.fa-caret-right
			ul.story-nav#navigation.col-full.row-2(:class="{'is-active':menuOpened==true}")
				li.menu-item(:class="{active:active==key}" v-for="(item, key, index) in jobs" @click="setActive(key)") {{item.title}}
			ul.story-panels.col-full.row-2.scroll-wrapper
				li.panel-item.flex.col.start.scroll-container(:class="{active:active==key}" v-for="(item, key, index) in jobs" :id="'panel-'+key")
					.scroll-content
						.bg-img(v-if='item.img', :style="{ backgroundImage: 'url(' + imgRequire(item.img) + ')',backgroundSize:'cover',backgroundPosition:'center' }")
						.panel-content.grid.add-top
							h3.color.secondary.col-left.row-1.remove-top {{ item.title }}
							.skills.flex-start.col-right.row-1(v-if='item.skills')
								h5.color.secondary Skill Improvement:
								.tag(v-for='(skill,index) in item.skills') {{skill}}
								//- 	p#skills(v-html='item.skills')
							.body.color.secondary.col-left.row-2.span-2
								span(v-text="item.desc")
								br
								br
								span.site-link(v-if="item.href||item.links.main")
									a(:href='item.href||item.links.main.href', :title="'Visit ' + item.title", target='_blank')
										i.fa.fa-link(aria-hidden="true") &nbsp;
										| Website
								span.more-links(v-if="item.links")
									a.another-link(v-for='(link,index) in item.links.other' :href='link.href', :title='link.title',:target='link.target')
										i.fa.fa-link(aria-hidden="true") &nbsp;
										| {{ link.text }}
			a.fa.fa-chevron-down.col-full.row-3(href="#contactForm")
</template>

<script>
import Projects from "./projects.js";
import { TweenMax, ScrollToPlugin } from "gsap/all";
import SmoothScroll from "smoothscroll";
// const WheelIndicator = require("wheel-indicator");
//import Card from './components/Card.vue';

export default {
  name: "portfolio",
  data: () => ({
    message: "You loaded this page on " + new Date().toLocaleString(),
    jobs: Projects.jobs,
    active: null,
    menuOpened: null,
    isFirst: true,
    isLast: false,
    timeoutId: null,
    timeoutScroll: null,
    lorem: null,
    navType: null,
    focusPortfolio: false,
    loopSlides: { set: true, flag: false },
    scroll: {
      type: null,
      data: null,
      Y: null
    }
  }),
  watch: {
    active: function(newVal, oldVal) {
      const newInd = this.keys.indexOf(newVal),
        oldInd = this.keys.indexOf(oldVal);
      const dir = newInd < oldInd ? "next" : "prev";
      this.checkPanel(newVal);
      this.loadTransition("#panel-" + oldVal, "#panel-" + newVal, dir);
    },
    menuOpened: function(opened) {
      if (opened) {
        TweenMax.to(".story-nav", 0.4, { opacity: 1, yPercent: 0, scaleY: 1 });
        if (window.innerWidth < 768) {
          this.goToPortfolio();
        }
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
    setActive: function(id, type) {
      type = type || "click";
      // console.log('setting '+id+' to active!');
      this.active = id;
      this.navType = type;
      this.menuOpened = window.innerWidth > 767 ? true : false;
    },
    loadTransition: function(oldDiv, newDiv, dir, axis) {
      axis = axis || "y";
      this.goToPortfolio();
      if (this.loopSlides.flag) {
        this.loopSlides.flag = false;
        dir = dir != "next" ? "next" : "prev";
      }
      TweenMax.fromTo(
        oldDiv,
        1,
        { opacity: 1, scale: 1, yPercent: 0 },
        {
          opacity: 0,
          yPercent: dir == "next" ? 100 : -100,
          scale: 0.8,
          zIndex: -10
        }
      );
      TweenMax.fromTo(
        newDiv,
        1,
        { opacity: 0, yPercent: dir == "next" ? -100 : 100, scale: 0.8 },
        { opacity: 1, yPercent: 0, scale: 1, zIndex: 10 }
      );
      if (this.navType == "click") {
        document.getElementById(newDiv.substr(1)).scrollTop = 0;
      }
    },
    scrollChange: function(dir, id) {
      this.menuOpened = window.innerWidth > 767 ? true : false;
      let newInd = null,
        i = this.keys.indexOf(id);
      //animate to prev/next slide if done scrolling or unable to scroll
      if (dir == "prev" && i > 0) {
        //if theres a previous panel set it to active
        newInd = --i;
      }
      if (dir == "next" && i < this.keys.length - 1) {
        //if theres another panel set it to active
        newInd = ++i;
      }
      if (this.loopSlides.set && newInd == null) {
        this.loopSlides.flag = true;
        newInd = dir == "next" ? 0 : this.keys.length - 1;
      }
      if (newInd != null) {
        this.setActive(this.keys[newInd], "scroll");
      }

      console.log("scroll change", dir, newInd);
    },
    scrollPosition: function(selector) {
      //outer div		.scroll-wrapper
      //container 		.scroll-container
      //inner content 	.scroll-content
      var outerContainer = document.querySelector(selector),
        innerContent = document.querySelector(selector + " .scroll-content"),
        needsToScroll =
          this.elementHeight(innerContent) >
          this.elementHeight(outerContainer) + 1,
        atTop = outerContainer.scrollTop < 1,
        atBottom =
          outerContainer.clientHeight + outerContainer.scrollTop + 1 >
          outerContainer.scrollHeight;
      const pos = !needsToScroll
        ? null //doesnt need to scroll
        : atTop
        ? "top" //scrolled to top
        : atBottom
        ? "bottom" //scrolled to bottom
        : "middle"; //somewhere in the middle
      console.log(pos);
      return pos;
    },
    elementHeight: function(ele) {
      const computedStyle = getComputedStyle(ele);
      let eleHeight = ele.clientHeight; // height with padding
      eleHeight =
        eleHeight -
        (parseFloat(computedStyle.paddingTop) +
          parseFloat(computedStyle.paddingBottom));
      return eleHeight;
    },
    checkPanel: function(id) {
      const i = this.keys.indexOf(id);
      // console.log(i, id);
      this.isLast = i == this.keys.length - 1;
      this.isFirst = i == 0;
    },
    checkEvent: function checkEvent(dir, ts, delay) {
      delay = delay || 0.35;
      const sel = ".scroll-container.active",
        pos = this.scrollPosition(sel),
        doneScrolling =
          pos == null ||
          (dir == "next" && pos == "bottom") ||
          (dir == "prev" && pos == "top"),
        lastEvent = parseInt((ts - this.timeoutScroll) / 100) / 10;
      if (!doneScrolling) {
        this.timeoutScroll = ts;
      } //reset ts
      console.log(lastEvent);
      if (doneScrolling && lastEvent > delay) {
        //0.35 second delay before checking to transition
        this.timeoutScroll = ts;
        this.scrollChange(dir, this.active);
        // e.preventDefault();
      }
    },
    onResize: function(params) {
      // console.log('resized');
      this.menuOpened = window.innerWidth > 767 ? true : false;
    },
    wheelDirection: function(selector) {
      var that = this,
        wheelEvt =
          "onwheel" in document.createElement("div")
            ? "wheel" //     Modern browsers support "wheel"
            : document.onmousewheel !== undefined
            ? "mousewheel" // Webkit and IE support at least "mousewheel"
            : "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox
      document.querySelector(selector).addEventListener(
        wheelEvt,
        e => {
          event.preventDefault();
          var dir = e.deltaY < 0 ? "prev" : "next";
          this.checkEvent(dir, e.timeStamp, 1);
        },
        false
      );
    },
    touchDirection: function(ele, th) {
      th = th || 30; //set a default threshhold if not defined
      var touchstartY = 0,
        touchstartX = 0,
        touchendY = 0,
        touchendX = 0,
        gestureZone = document.querySelector(ele);
      if (gestureZone) {
        gestureZone.addEventListener(
          "touchstart",
          e => {
            event.preventDefault();
            touchstartY = e.changedTouches[0].screenY;
            touchstartX = e.changedTouches[0].screenX;
          },
          false
        );
        gestureZone.addEventListener(
          "touchend",
          e => {
            touchendY = e.changedTouches[0].screenY;
            var distance = touchendY - touchstartY,
              dir = distance > th ? "prev" : distance < th * -1 ? "next" : null;
            this.checkEvent(dir, e.timeStamp, 0.75);
          },
          false
        );
      }
    },
    debounce: function(fnc, debounceDuration = 300) {
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(_ => {
        fnc();
      }, debounceDuration);
    },
    getText: function(paras) {
      var pAmount = paras || 5;
      var ipsumUrl =
        "https://baconipsum.com/api/?type=meat-and-filler&paras=" +
        pAmount +
        "&format=text";
      var request = new XMLHttpRequest();
      request.open("GET", ipsumUrl, true);
      request.send();
      request.onload = function() {
        // console.log("request.responseText", request.responseText);
        return (app.lorem = request.responseText);
      };
    },
    goToPortfolio: function() {
      if (this.focusPortfolio) {
        TweenMax.to(window, 1, {
          scrollTo: { y: "#portfolio", autoKill: false }
        });
      }
      this.focusPortfolio = true;
    },
    machine_readable: function(str) {
      return str
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    },
    imgRequire: img => require(`../img/${img}`)
  },
  beforeDestroy: function() {
    // window.removeEventListener("resize", this.onResize);
  },
  mounted: function() {
    this.setActive(this.keys[0]);
    window.addEventListener("resize", e => {
      this.debounce(this.onResize);
    });
    this.touchDirection(".scroll-wrapper");
    this.wheelDirection(".scroll-wrapper");
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
  /* padding-top: 65px;
	height: calc(100vh - 85px); */
  overflow: hidden;
  a {
    display: block;
    box-sizing: border-box;
    text-decoration: none;
    color: black;
  }
  > .grid {
    grid-template-rows: 55px auto 55px;
    height: 100%;
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
    height: 100%;
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
  .body p {
    font-size: 18px;
  }
}
.story-nav {
  @extend %ul-nostyle;
  position: relative;
  z-index: 99;
  height: 0;
  overflow: visible;
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
    /* a { */
    color: $secondary;
    /* } */
    background: $primary;
    transition: background 600ms ease, color 600ms ease;
    &.active {
      /* a { */
      color: $primary;
      /* } */
      background: $secondary;
    }
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
  }
}
.scroll-wrapper {
  // border:10px inset rgba(blue,.4);
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.scroll-container {
  @include flexchild(1, 1); // border:10px inset rgba(green,.4);
  /* position: absolute; */
  /* padding: calc(7% + 50px) 5%; */
  width: 100%;
  /* height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0; */
  overflow-y: auto;
  /* .webkit.not-mobile & { */
  //padding: calc(7% + 50px) calc(5% - 17px) calc(7% + 50px) 5%;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
  /* } */
}
.scroll-content {
  margin: 0 !important;
  padding: 0 !important;
  // border:10px inset rgba(red,.4);
  width: 100%;
  height: auto;
}
</style>