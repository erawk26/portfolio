/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n__webpack_require__(/*! ./js/work.js */ \"./src/js/work.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9qcy9tYWluLmpzJyk7XHJcbnJlcXVpcmUoJy4vanMvd29yay5qcycpOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n///// Back to Top /////\n$(\".back-to-top\").hide();\n$(window).on('scroll', function () {\n\tif ($(this).scrollTop() > 100) {\n\t\t$(\".back-to-top\").fadeIn(\"slow\");\n\t} else {\n\t\t$(\".back-to-top\").fadeOut(\"slow\");\n\t}\n});\n$(\".back-to-top\").on('click', function () {\n\t$(\"html, body\").animate({ scrollTop: 0 }, 750);\n});\n///// smooth scroll /////\n$('a[href*=\"#\"]:not([href=\"#\"])').click(function () {\n\tif (location.pathname.replace(/^\\//, '') == this.pathname.replace(/^\\//, '') && location.hostname == this.hostname) {\n\t\tvar target = $(this.hash);\n\t\ttarget = target.length ? target : $('[name=' + this.hash.slice(1) + ']');\n\t\tif (target.length) {\n\t\t\t$('html, body').animate({\n\t\t\t\tscrollTop: target.offset().top\n\t\t\t}, 1000);\n\t\t\treturn false;\n\t\t}\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbWFpbi5qcz84NGUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8vIEJhY2sgdG8gVG9wIC8vLy8vXHJcbiQoXCIuYmFjay10by10b3BcIikuaGlkZSgpO1xyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG5cdGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcblx0XHQkKFwiLmJhY2stdG8tdG9wXCIpLmZhZGVJbihcInNsb3dcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoXCIuYmFjay10by10b3BcIikuZmFkZU91dChcInNsb3dcIik7XHJcblx0fVxyXG59KTtcclxuJChcIi5iYWNrLXRvLXRvcFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA3NTApO1xyXG59KTtcclxuLy8vLy8gc21vb3RoIHNjcm9sbCAvLy8vL1xyXG4kKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG5cdFx0dmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuXHRcdHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xyXG5cdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcclxuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/work.js":
/*!************************!*\
  !*** ./src/js/work.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar vm_data = {\n\tmessage: 'You loaded this page on ' + new Date().toLocaleString(),\n\tactive: 'otis',\n\tjobs: [{\n\t\t// -----------JOB-otis-----------\n\t\tmachine_name: \"otis\",\n\t\thref: \"//www.otisspunkmeyer.com\",\n\t\timg: \"otis.jpg\",\n\t\tlogo: \"otis-logo.png\",\n\t\ttitle: \"Otis Spunkmeyer\",\n\t\t// scope: \"I replatformed the entire site from their old custom CMS into Drupal 8 in May 2017. They needed an easier way to manage their SEO and content and Drupal fit the bill. In November of 2017, I built off the same backend but rethemed the site. This was a massive undertaking. The PSD mockup was 37 pages for mobile/desktop.\",\n\t\t// skills: \"CMS Structuring, Custom PHP, TWIG Templating, CSS Positioning, Flex Layout\",\n\t\t//tags: [\"Drupal 8\"],\n\t\t// imgs: [],\n\t\tdesc: \"While working at Hark, I replatformed the entire site from their old custom CMS into Drupal 8 in May 2017. They needed an easier way to manage their SEO and content and Drupal fit the bill. In November of 2017, I built off the same backend but rethemed the site. This was a massive undertaking. The PSD mockup was 37 pages for mobile/desktop.\"\n\t}, {\n\t\t// -----------JOB-labrea-----------\n\t\tmachine_name: \"labrea\",\n\t\thref: \"//www.labreabakery.com/kroger\",\n\t\timg: \"labrea.jpg\",\n\t\tlogo: \"labrea-logo.png\",\n\t\ttitle: \"La Brea Bakery\",\n\t\tdesc: \"I coded images galleries to the Bread sections. Re-Templated the Recipes pages. I also developed 5 different landing pages for various product promotions.\"\n\t}, {\n\t\t// -----------JOB-zevia-----------\n\t\tmachine_name: \"zevia\",\n\t\thref: \"//www.zevia.com/sugar-reduction\",\n\t\timg: \"zevia.jpg\",\n\t\tlogo: \"zevia-logo.png\",\n\t\ttitle: \"Zevia\",\n\t\tdesc: \"I developed multiple landing pages to promote things like Ferdinand the movie, Health, etc. The Sugar Reduction landing page featured the youtube API and needed to maintain a borderless aspect ratio, as well as working across all mobile and desktop devices. I redid their current blog pages (teaser & full template). I also created bi-monthly Mailchimp templates for them in HTML from their PSDs.\"\n\t}, {\n\t\t// -----------JOB-hark-----------\n\t\tmachine_name: \"hark\",\n\t\thref: \"//www.hark.bz\",\n\t\timg: \"hark.png\",\n\t\tlogo: \"hark-logo.png\",\n\t\ttitle: \"Hark Digital\",\n\t\tdesc: \"I helped replatform the current version of their site on Wordpress using wordpressify a node compiler for WP. I leveraged Masonry/Infinite scroll together to manage larger lists of content. I coded this site with limited modules and lots of custom queries/templating. The contact page has a nice label slide up effect when entering input.\"\n\t}, {\n\t\t// -----------JOB-nsb-----------\n\t\tmachine_name: \"nsb\",\n\t\thref: \"//www.nsbvt.com/mortgages/first-time-homebuying\",\n\t\timg: \"nsb.jpg\",\n\t\tlogo: \"nsb-logo.png\",\n\t\ttitle: \"Northfield Savings Bank\",\n\t\tdesc: \"I coded the Pathway Mortgage landing page. A fully responsive page to create a call to action for first time home buyers. Features a nicely styled jquery accordion list.\"\n\t}, {\n\t\t// -----------JOB-cbv-----------\n\t\tmachine_name: \"cbv\",\n\t\thref: \"//www.communitybarnventures.com/client-spotlight\",\n\t\timg: \"cbv.png\",\n\t\tlogo: \"cbv-logo.png\",\n\t\ttitle: \"Community Barn Ventures\",\n\t\tdesc: \"I coded the Client Landing Page, Individual Pages, sliders, client blocks, and Testimonials. The LP has a client grid that leverages CSS Grid and jQuery. I wrote some JS to arrange the bigger clients into predefined spaces then fills the smaller clients in around them, without any unwanted spaces. Its also completely responsive and will rearrange the grid based on screen size.<br><a target='_blank' href='//codepen.io/erawk26/pen/LQoXEw'>CodePen Example</a>\"\n\t}, {\n\t\t// -----------JOB-mbf-----------\n\t\tmachine_name: \"mbf\",\n\t\thref: \"//www.mbfbioscience.com\",\n\t\timg: \"mbf.jpg\",\n\t\tlogo: \"mbf-logo.png\",\n\t\ttitle: \"MBF Bioscience\",\n\t\tdesc: \"We Added a mobile menu to their site. This proved to be quite intensive due to the way their current menu plugin was working. We also reconfigured their content templates to give the author custom control of each sections background color, borders, etc.\"\n\t}, {\n\t\t// -----------JOB-4sight-----------\n\t\tmachine_name: \"foursight\",\n\t\thref: \"//www.go4sight.com/blog\",\n\t\timg: \"4sight.jpg\",\n\t\tlogo: \"4sight-logo.png\",\n\t\ttitle: \"4 Sight\",\n\t\tdesc: \"They had a Drupal 7 site with a lot of resources (articles, blog posts, case studies, etc) that needed to be filtered better. We added and improved upon their existing filters as well as reformatting their blog templates.\"\n\t}, {\n\t\t// -----------JOB-baristas-----------\n\t\tmachine_name: \"baristas\",\n\t\thref: \"//baristasbeans.com\",\n\t\timg: \"port1.jpg\",\n\t\tlogo: \"baristas-logo.png\",\n\t\ttitle: \"Barista's Beans\",\n\t\tdesc: \"My eCommerce mobile-first site built off of Drupal 7. It featured recurring coffee subscriptions. It was very secure and easy to maintain. Everything got backed up and updated through SSH/Drush.\"\n\t}]\n};\nVue.component('portfolio-card', {\n\ttemplate: '<a :href=\"card.href\" :title=\"\\'Visit \\' + card.title\" target=\"_blank\" class=\"portfolio-card\">\\n' + '<div class=\"img\" v-if=\"card.img\" :style=\"{ \\'background-image\\': \\'url(/assets/img/\\' + card.img + \\')\\' }\">\\n' + '<div class=\"ar\"></div>\\n' + '</div>\\n' + '<h3>{{ card.title }}</h3>\\n' + '<template v-if=\"card.skills\">\\n' + '<span class=\"item\" >\\n' + '<label class=\"scope\" for=\"scope\">Scope of Work:</label>\\n' + '<p id=\"scope\"  class=\"scope\" v-html=\"card.scope\"></p>\\n' + '</span>\\n' + '<span class=\"item\" >\\n' + '<label for=\"skills\">Skill Improvement:</label>\\n' + '<p id=\"skills\" v-html=\"card.skills\"></p>\\n' + '</span>\\n' + '</template>\\n' + '<p v-else v-html=\"card.desc\"></p>\\n' + '</a>',\n\tname: 'portfolio-card',\n\tdata: function data() {\n\t\treturn vm_data;\n\t},\n\tcomputed: {\n\t\t// a computed getter\n\t\tcard: function card() {\n\t\t\tvar data = this;\n\t\t\treturn this.jobs.filter(function (job) {\n\t\t\t\treturn job.machine_name === data.active;\n\t\t\t})[0];\n\t\t}\n\t}\n});\nvar app = new Vue({\n\n\tel: '#portApp',\n\tdata: vm_data,\n\tmethods: {\n\t\tcardFade: function cardFade(job) {\n\t\t\t// this.$set(this, 'active', job);\n\t\t}\n\t},\n\twatch: {\n\t\tactive: function active(newValue, oldValue) {\n\t\t\t// TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });\n\t\t\t// console.log('fired!',newValue);\n\t\t}\n\t}\n});\nvm_data.jobs.forEach(function (job) {\n\t//preload the images so they look normal during the transitions\n\tvar image = new Image();\n\timage.src = '/assets/img/' + job.img;\n});\nconsole.log('Vue Rocks!');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvd29yay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvd29yay5qcz85ZjcxIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB2bV9kYXRhPSB7XHJcblx0bWVzc2FnZTogJ1lvdSBsb2FkZWQgdGhpcyBwYWdlIG9uICcgKyBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXHJcblx0YWN0aXZlOiAnb3RpcycsXHJcblx0am9iczogW1xyXG5cdFx0e1xyXG5cdFx0XHQvLyAtLS0tLS0tLS0tLUpPQi1vdGlzLS0tLS0tLS0tLS1cclxuXHRcdFx0bWFjaGluZV9uYW1lOiBcIm90aXNcIixcclxuXHRcdFx0aHJlZjogXCIvL3d3dy5vdGlzc3B1bmttZXllci5jb21cIixcclxuXHRcdFx0aW1nOiBcIm90aXMuanBnXCIsXHJcblx0XHRcdGxvZ286IFwib3Rpcy1sb2dvLnBuZ1wiLFxyXG5cdFx0XHR0aXRsZTogXCJPdGlzIFNwdW5rbWV5ZXJcIixcclxuXHRcdFx0Ly8gc2NvcGU6IFwiSSByZXBsYXRmb3JtZWQgdGhlIGVudGlyZSBzaXRlIGZyb20gdGhlaXIgb2xkIGN1c3RvbSBDTVMgaW50byBEcnVwYWwgOCBpbiBNYXkgMjAxNy4gVGhleSBuZWVkZWQgYW4gZWFzaWVyIHdheSB0byBtYW5hZ2UgdGhlaXIgU0VPIGFuZCBjb250ZW50IGFuZCBEcnVwYWwgZml0IHRoZSBiaWxsLiBJbiBOb3ZlbWJlciBvZiAyMDE3LCBJIGJ1aWx0IG9mZiB0aGUgc2FtZSBiYWNrZW5kIGJ1dCByZXRoZW1lZCB0aGUgc2l0ZS4gVGhpcyB3YXMgYSBtYXNzaXZlIHVuZGVydGFraW5nLiBUaGUgUFNEIG1vY2t1cCB3YXMgMzcgcGFnZXMgZm9yIG1vYmlsZS9kZXNrdG9wLlwiLFxyXG5cdFx0XHQvLyBza2lsbHM6IFwiQ01TIFN0cnVjdHVyaW5nLCBDdXN0b20gUEhQLCBUV0lHIFRlbXBsYXRpbmcsIENTUyBQb3NpdGlvbmluZywgRmxleCBMYXlvdXRcIixcclxuXHRcdFx0Ly90YWdzOiBbXCJEcnVwYWwgOFwiXSxcclxuXHRcdFx0Ly8gaW1nczogW10sXHJcblx0XHRcdGRlc2M6XHJcblx0XHRcdFx0XCJXaGlsZSB3b3JraW5nIGF0IEhhcmssIEkgcmVwbGF0Zm9ybWVkIHRoZSBlbnRpcmUgc2l0ZSBmcm9tIHRoZWlyIG9sZCBjdXN0b20gQ01TIGludG8gRHJ1cGFsIDggaW4gTWF5IDIwMTcuIFRoZXkgbmVlZGVkIGFuIGVhc2llciB3YXkgdG8gbWFuYWdlIHRoZWlyIFNFTyBhbmQgY29udGVudCBhbmQgRHJ1cGFsIGZpdCB0aGUgYmlsbC4gSW4gTm92ZW1iZXIgb2YgMjAxNywgSSBidWlsdCBvZmYgdGhlIHNhbWUgYmFja2VuZCBidXQgcmV0aGVtZWQgdGhlIHNpdGUuIFRoaXMgd2FzIGEgbWFzc2l2ZSB1bmRlcnRha2luZy4gVGhlIFBTRCBtb2NrdXAgd2FzIDM3IHBhZ2VzIGZvciBtb2JpbGUvZGVza3RvcC5cIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0Ly8gLS0tLS0tLS0tLS1KT0ItbGFicmVhLS0tLS0tLS0tLS1cclxuXHRcdFx0bWFjaGluZV9uYW1lOiBcImxhYnJlYVwiLFxyXG5cdFx0XHRocmVmOiBcIi8vd3d3LmxhYnJlYWJha2VyeS5jb20va3JvZ2VyXCIsXHJcblx0XHRcdGltZzogXCJsYWJyZWEuanBnXCIsXHJcblx0XHRcdGxvZ286IFwibGFicmVhLWxvZ28ucG5nXCIsXHJcblx0XHRcdHRpdGxlOiBcIkxhIEJyZWEgQmFrZXJ5XCIsXHJcblx0XHRcdGRlc2M6XHJcblx0XHRcdFx0XCJJIGNvZGVkIGltYWdlcyBnYWxsZXJpZXMgdG8gdGhlIEJyZWFkIHNlY3Rpb25zLiBSZS1UZW1wbGF0ZWQgdGhlIFJlY2lwZXMgcGFnZXMuIEkgYWxzbyBkZXZlbG9wZWQgNSBkaWZmZXJlbnQgbGFuZGluZyBwYWdlcyBmb3IgdmFyaW91cyBwcm9kdWN0IHByb21vdGlvbnMuXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdC8vIC0tLS0tLS0tLS0tSk9CLXpldmlhLS0tLS0tLS0tLS1cclxuXHRcdFx0bWFjaGluZV9uYW1lOiBcInpldmlhXCIsXHJcblx0XHRcdGhyZWY6IFwiLy93d3cuemV2aWEuY29tL3N1Z2FyLXJlZHVjdGlvblwiLFxyXG5cdFx0XHRpbWc6IFwiemV2aWEuanBnXCIsXHJcblx0XHRcdGxvZ286IFwiemV2aWEtbG9nby5wbmdcIixcclxuXHRcdFx0dGl0bGU6IFwiWmV2aWFcIixcclxuXHRcdFx0ZGVzYzpcclxuXHRcdFx0XHRcIkkgZGV2ZWxvcGVkIG11bHRpcGxlIGxhbmRpbmcgcGFnZXMgdG8gcHJvbW90ZSB0aGluZ3MgbGlrZSBGZXJkaW5hbmQgdGhlIG1vdmllLCBIZWFsdGgsIGV0Yy4gVGhlIFN1Z2FyIFJlZHVjdGlvbiBsYW5kaW5nIHBhZ2UgZmVhdHVyZWQgdGhlIHlvdXR1YmUgQVBJIGFuZCBuZWVkZWQgdG8gbWFpbnRhaW4gYSBib3JkZXJsZXNzIGFzcGVjdCByYXRpbywgYXMgd2VsbCBhcyB3b3JraW5nIGFjcm9zcyBhbGwgbW9iaWxlIGFuZCBkZXNrdG9wIGRldmljZXMuIEkgcmVkaWQgdGhlaXIgY3VycmVudCBibG9nIHBhZ2VzICh0ZWFzZXIgJiBmdWxsIHRlbXBsYXRlKS4gSSBhbHNvIGNyZWF0ZWQgYmktbW9udGhseSBNYWlsY2hpbXAgdGVtcGxhdGVzIGZvciB0aGVtIGluIEhUTUwgZnJvbSB0aGVpciBQU0RzLlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHQvLyAtLS0tLS0tLS0tLUpPQi1oYXJrLS0tLS0tLS0tLS1cclxuXHRcdFx0bWFjaGluZV9uYW1lOiBcImhhcmtcIixcclxuXHRcdFx0aHJlZjogXCIvL3d3dy5oYXJrLmJ6XCIsXHJcblx0XHRcdGltZzogXCJoYXJrLnBuZ1wiLFxyXG5cdFx0XHRsb2dvOiBcImhhcmstbG9nby5wbmdcIixcclxuXHRcdFx0dGl0bGU6IFwiSGFyayBEaWdpdGFsXCIsXHJcblx0XHRcdGRlc2M6XHJcblx0XHRcdFx0XCJJIGhlbHBlZCByZXBsYXRmb3JtIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlaXIgc2l0ZSBvbiBXb3JkcHJlc3MgdXNpbmcgd29yZHByZXNzaWZ5IGEgbm9kZSBjb21waWxlciBmb3IgV1AuIEkgbGV2ZXJhZ2VkIE1hc29ucnkvSW5maW5pdGUgc2Nyb2xsIHRvZ2V0aGVyIHRvIG1hbmFnZSBsYXJnZXIgbGlzdHMgb2YgY29udGVudC4gSSBjb2RlZCB0aGlzIHNpdGUgd2l0aCBsaW1pdGVkIG1vZHVsZXMgYW5kIGxvdHMgb2YgY3VzdG9tIHF1ZXJpZXMvdGVtcGxhdGluZy4gVGhlIGNvbnRhY3QgcGFnZSBoYXMgYSBuaWNlIGxhYmVsIHNsaWRlIHVwIGVmZmVjdCB3aGVuIGVudGVyaW5nIGlucHV0LlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHQvLyAtLS0tLS0tLS0tLUpPQi1uc2ItLS0tLS0tLS0tLVxyXG5cdFx0XHRtYWNoaW5lX25hbWU6IFwibnNiXCIsXHJcblx0XHRcdGhyZWY6IFwiLy93d3cubnNidnQuY29tL21vcnRnYWdlcy9maXJzdC10aW1lLWhvbWVidXlpbmdcIixcclxuXHRcdFx0aW1nOiBcIm5zYi5qcGdcIixcclxuXHRcdFx0bG9nbzogXCJuc2ItbG9nby5wbmdcIixcclxuXHRcdFx0dGl0bGU6IFwiTm9ydGhmaWVsZCBTYXZpbmdzIEJhbmtcIixcclxuXHRcdFx0ZGVzYzpcclxuXHRcdFx0XHRcIkkgY29kZWQgdGhlIFBhdGh3YXkgTW9ydGdhZ2UgbGFuZGluZyBwYWdlLiBBIGZ1bGx5IHJlc3BvbnNpdmUgcGFnZSB0byBjcmVhdGUgYSBjYWxsIHRvIGFjdGlvbiBmb3IgZmlyc3QgdGltZSBob21lIGJ1eWVycy4gRmVhdHVyZXMgYSBuaWNlbHkgc3R5bGVkIGpxdWVyeSBhY2NvcmRpb24gbGlzdC5cIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0Ly8gLS0tLS0tLS0tLS1KT0ItY2J2LS0tLS0tLS0tLS1cclxuXHRcdFx0bWFjaGluZV9uYW1lOiBcImNidlwiLFxyXG5cdFx0XHRocmVmOiBcIi8vd3d3LmNvbW11bml0eWJhcm52ZW50dXJlcy5jb20vY2xpZW50LXNwb3RsaWdodFwiLFxyXG5cdFx0XHRpbWc6IFwiY2J2LnBuZ1wiLFxyXG5cdFx0XHRsb2dvOiBcImNidi1sb2dvLnBuZ1wiLFxyXG5cdFx0XHR0aXRsZTogXCJDb21tdW5pdHkgQmFybiBWZW50dXJlc1wiLFxyXG5cdFx0XHRkZXNjOlxyXG5cdFx0XHRcdFwiSSBjb2RlZCB0aGUgQ2xpZW50IExhbmRpbmcgUGFnZSwgSW5kaXZpZHVhbCBQYWdlcywgc2xpZGVycywgY2xpZW50IGJsb2NrcywgYW5kIFRlc3RpbW9uaWFscy4gVGhlIExQIGhhcyBhIGNsaWVudCBncmlkIHRoYXQgbGV2ZXJhZ2VzIENTUyBHcmlkIGFuZCBqUXVlcnkuIEkgd3JvdGUgc29tZSBKUyB0byBhcnJhbmdlIHRoZSBiaWdnZXIgY2xpZW50cyBpbnRvIHByZWRlZmluZWQgc3BhY2VzIHRoZW4gZmlsbHMgdGhlIHNtYWxsZXIgY2xpZW50cyBpbiBhcm91bmQgdGhlbSwgd2l0aG91dCBhbnkgdW53YW50ZWQgc3BhY2VzLiBJdHMgYWxzbyBjb21wbGV0ZWx5IHJlc3BvbnNpdmUgYW5kIHdpbGwgcmVhcnJhbmdlIHRoZSBncmlkIGJhc2VkIG9uIHNjcmVlbiBzaXplLjxicj48YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nLy9jb2RlcGVuLmlvL2VyYXdrMjYvcGVuL0xRb1hFdyc+Q29kZVBlbiBFeGFtcGxlPC9hPlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHQvLyAtLS0tLS0tLS0tLUpPQi1tYmYtLS0tLS0tLS0tLVxyXG5cdFx0XHRtYWNoaW5lX25hbWU6IFwibWJmXCIsXHJcblx0XHRcdGhyZWY6IFwiLy93d3cubWJmYmlvc2NpZW5jZS5jb21cIixcclxuXHRcdFx0aW1nOiBcIm1iZi5qcGdcIixcclxuXHRcdFx0bG9nbzogXCJtYmYtbG9nby5wbmdcIixcclxuXHRcdFx0dGl0bGU6IFwiTUJGIEJpb3NjaWVuY2VcIixcclxuXHRcdFx0ZGVzYzpcclxuXHRcdFx0XHRcIldlIEFkZGVkIGEgbW9iaWxlIG1lbnUgdG8gdGhlaXIgc2l0ZS4gVGhpcyBwcm92ZWQgdG8gYmUgcXVpdGUgaW50ZW5zaXZlIGR1ZSB0byB0aGUgd2F5IHRoZWlyIGN1cnJlbnQgbWVudSBwbHVnaW4gd2FzIHdvcmtpbmcuIFdlIGFsc28gcmVjb25maWd1cmVkIHRoZWlyIGNvbnRlbnQgdGVtcGxhdGVzIHRvIGdpdmUgdGhlIGF1dGhvciBjdXN0b20gY29udHJvbCBvZiBlYWNoIHNlY3Rpb25zIGJhY2tncm91bmQgY29sb3IsIGJvcmRlcnMsIGV0Yy5cIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0Ly8gLS0tLS0tLS0tLS1KT0ItNHNpZ2h0LS0tLS0tLS0tLS1cclxuXHRcdFx0bWFjaGluZV9uYW1lOiBcImZvdXJzaWdodFwiLFxyXG5cdFx0XHRocmVmOiBcIi8vd3d3LmdvNHNpZ2h0LmNvbS9ibG9nXCIsXHJcblx0XHRcdGltZzogXCI0c2lnaHQuanBnXCIsXHJcblx0XHRcdGxvZ286IFwiNHNpZ2h0LWxvZ28ucG5nXCIsXHJcblx0XHRcdHRpdGxlOiBcIjQgU2lnaHRcIixcclxuXHRcdFx0ZGVzYzogXCJUaGV5IGhhZCBhIERydXBhbCA3IHNpdGUgd2l0aCBhIGxvdCBvZiByZXNvdXJjZXMgKGFydGljbGVzLCBibG9nIHBvc3RzLCBjYXNlIHN0dWRpZXMsIGV0YykgdGhhdCBuZWVkZWQgdG8gYmUgZmlsdGVyZWQgYmV0dGVyLiBXZSBhZGRlZCBhbmQgaW1wcm92ZWQgdXBvbiB0aGVpciBleGlzdGluZyBmaWx0ZXJzIGFzIHdlbGwgYXMgcmVmb3JtYXR0aW5nIHRoZWlyIGJsb2cgdGVtcGxhdGVzLlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHQvLyAtLS0tLS0tLS0tLUpPQi1iYXJpc3Rhcy0tLS0tLS0tLS0tXHJcblx0XHRcdG1hY2hpbmVfbmFtZTogXCJiYXJpc3Rhc1wiLFxyXG5cdFx0XHRocmVmOiBcIi8vYmFyaXN0YXNiZWFucy5jb21cIixcclxuXHRcdFx0aW1nOiBcInBvcnQxLmpwZ1wiLFxyXG5cdFx0XHRsb2dvOiBcImJhcmlzdGFzLWxvZ28ucG5nXCIsXHJcblx0XHRcdHRpdGxlOiBcIkJhcmlzdGEncyBCZWFuc1wiLFxyXG5cdFx0XHRkZXNjOlxyXG5cdFx0XHRcdFwiTXkgZUNvbW1lcmNlIG1vYmlsZS1maXJzdCBzaXRlIGJ1aWx0IG9mZiBvZiBEcnVwYWwgNy4gSXQgZmVhdHVyZWQgcmVjdXJyaW5nIGNvZmZlZSBzdWJzY3JpcHRpb25zLiBJdCB3YXMgdmVyeSBzZWN1cmUgYW5kIGVhc3kgdG8gbWFpbnRhaW4uIEV2ZXJ5dGhpbmcgZ290IGJhY2tlZCB1cCBhbmQgdXBkYXRlZCB0aHJvdWdoIFNTSC9EcnVzaC5cIlxyXG5cdFx0fSxcclxuXHJcblx0XSxcclxufTtcclxuVnVlLmNvbXBvbmVudCgncG9ydGZvbGlvLWNhcmQnLCB7XHJcblx0dGVtcGxhdGU6ICAgJzxhIDpocmVmPVwiY2FyZC5ocmVmXCIgOnRpdGxlPVwiXFwnVmlzaXQgXFwnICsgY2FyZC50aXRsZVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwicG9ydGZvbGlvLWNhcmRcIj5cXG4nICtcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiaW1nXCIgdi1pZj1cImNhcmQuaW1nXCIgOnN0eWxlPVwieyBcXCdiYWNrZ3JvdW5kLWltYWdlXFwnOiBcXCd1cmwoL2Fzc2V0cy9pbWcvXFwnICsgY2FyZC5pbWcgKyBcXCcpXFwnIH1cIj5cXG4nICtcclxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJhclwiPjwvZGl2PlxcbicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2PlxcbicgK1xyXG5cdFx0XHRcdFx0JzxoMz57eyBjYXJkLnRpdGxlIH19PC9oMz5cXG4nICtcclxuXHRcdFx0XHRcdCc8dGVtcGxhdGUgdi1pZj1cImNhcmQuc2tpbGxzXCI+XFxuJyArXHJcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cIml0ZW1cIiA+XFxuJytcclxuXHRcdFx0XHRcdFx0XHQnPGxhYmVsIGNsYXNzPVwic2NvcGVcIiBmb3I9XCJzY29wZVwiPlNjb3BlIG9mIFdvcms6PC9sYWJlbD5cXG4nICtcclxuXHRcdFx0XHRcdFx0XHQnPHAgaWQ9XCJzY29wZVwiICBjbGFzcz1cInNjb3BlXCIgdi1odG1sPVwiY2FyZC5zY29wZVwiPjwvcD5cXG4nICtcclxuXHRcdFx0XHRcdFx0Jzwvc3Bhbj5cXG4nK1xyXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJpdGVtXCIgPlxcbicrXHJcblx0XHRcdFx0XHRcdFx0JzxsYWJlbCBmb3I9XCJza2lsbHNcIj5Ta2lsbCBJbXByb3ZlbWVudDo8L2xhYmVsPlxcbicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8cCBpZD1cInNraWxsc1wiIHYtaHRtbD1cImNhcmQuc2tpbGxzXCI+PC9wPlxcbicgK1xyXG5cdFx0XHRcdFx0XHQnPC9zcGFuPlxcbicrXHJcblx0XHRcdFx0XHQnPC90ZW1wbGF0ZT5cXG4nICtcclxuXHRcdFx0XHRcdCc8cCB2LWVsc2Ugdi1odG1sPVwiY2FyZC5kZXNjXCI+PC9wPlxcbicgK1xyXG5cdFx0XHRcdCc8L2E+JyxcclxuXHRuYW1lOiAncG9ydGZvbGlvLWNhcmQnLFxyXG5cdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB2bV9kYXRhXHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Ly8gYSBjb21wdXRlZCBnZXR0ZXJcclxuXHRcdGNhcmQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHRoaXM7XHJcblx0XHRcdHJldHVybiB0aGlzLmpvYnMuZmlsdGVyKGZ1bmN0aW9uIChqb2IpIHtcclxuXHRcdFx0XHRyZXR1cm4gam9iLm1hY2hpbmVfbmFtZSA9PT0gZGF0YS5hY3RpdmU7XHJcblx0XHRcdH0pWzBdO1xyXG5cdFx0fVxyXG5cdH0sXHJcbn0pO1xyXG5sZXQgYXBwID0gbmV3IFZ1ZSh7XHJcblxyXG5cdGVsOiAnI3BvcnRBcHAnLFxyXG5cdGRhdGE6dm1fZGF0YSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRjYXJkRmFkZTogZnVuY3Rpb24gKGpvYikge1xyXG5cdFx0XHQvLyB0aGlzLiRzZXQodGhpcywgJ2FjdGl2ZScsIGpvYik7XHJcblx0XHR9LFxyXG5cdH0sXHJcblx0d2F0Y2g6IHtcclxuXHRcdGFjdGl2ZTogZnVuY3Rpb24obmV3VmFsdWUsb2xkVmFsdWUpIHtcclxuXHRcdFx0Ly8gVHdlZW5MaXRlLnRvKHRoaXMuJGRhdGEsIDAuNSwgeyB0d2VlbmVkTnVtYmVyOiBuZXdWYWx1ZSB9KTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2ZpcmVkIScsbmV3VmFsdWUpO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcbnZtX2RhdGEuam9icy5mb3JFYWNoKGZ1bmN0aW9uKGpvYil7Ly9wcmVsb2FkIHRoZSBpbWFnZXMgc28gdGhleSBsb29rIG5vcm1hbCBkdXJpbmcgdGhlIHRyYW5zaXRpb25zXHJcblx0bGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0aW1hZ2Uuc3JjID0gJy9hc3NldHMvaW1nLycram9iLmltZztcclxufSk7XHJcbmNvbnNvbGUubG9nKCdWdWUgUm9ja3MhJyk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBdkZBO0FBb0dBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUF0QkE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVEE7QUFnQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/work.js\n");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"style.css\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz9jOWNhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0eWxlLmNzc1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });