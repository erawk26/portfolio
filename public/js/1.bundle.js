(window.webpackJsonp=window.webpackJsonp||[]).push([[1],Array(20).concat([function(o,i,t){"use strict";t.r(i);var n=t(21),p=t.n(n);for(var r in n)"default"!==r&&function(o){t.d(i,o,function(){return n[o]})}(r);var e=t(52),c=t(3);var s=function(o){t(23)},g=Object(c.a)(p.a,e.a,e.b,!1,s,null,null);i.default=g.exports},function(o,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"portfolio-card",data:function(o){return o.$parent.$data},computed:{card:function(){var o=this;return this.jobs.map(function(o){return(new Image).src=t(22)("./"+o.img),o}).filter(function(i){return i.machine_name===o.active})[0]}},methods:{imgRequire:function(o){return t(22)("./"+o)}}}},function(o,i,t){var n={"./0.jpg":25,"./1.jpg":26,"./2.jpg":27,"./3.jpg":28,"./4sight.jpg":29,"./cbv.png":30,"./hark.png":31,"./headshot.png":32,"./headshot2.jpg":33,"./healthnet.jpg":34,"./labrea.jpg":35,"./logos/4sight-logo.png":36,"./logos/baristas-logo.png":37,"./logos/cbv-logo.png":38,"./logos/hark-logo.png":39,"./logos/labrea-logo.png":40,"./logos/mbf-logo.png":41,"./logos/nsb-logo.png":42,"./logos/otis-logo.png":43,"./logos/zevia-logo.png":44,"./mbf.jpg":45,"./nsb.jpg":46,"./otis.jpg":47,"./port1.jpg":48,"./portfolio.png":49,"./tybee.png":50,"./zevia.jpg":51};function p(o){var i=r(o);return t(i)}function r(o){if(!t.o(n,o)){var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}return n[o]}p.keys=function(){return Object.keys(n)},p.resolve=r,o.exports=p,p.id=22},function(o,i,t){var n=t(24);"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);(0,t(5).default)("1e45d388",n,!0,{})},function(o,i,t){(o.exports=t(4)(!1)).push([o.i,".portfolio-card{width:100%;flex:1}.portfolio-card .img{background-position:top;background-size:cover;overflow:hidden;transition:all 0s linear}.portfolio-card .img .ar{display:block;margin:0;padding:0 0 57%;width:100%;height:0}@media (min-width:480px){.portfolio-card p{font-size:18px}}",""])},function(o,i){o.exports="public/img/1pWxgpG.jpg"},function(o,i){o.exports="public/img/3ra0jLF.jpg"},function(o,i){o.exports="public/img/1OJzO1s.jpg"},function(o,i){o.exports="public/img/1_Xs9WM.jpg"},function(o,i){o.exports="public/img/VZHLbOF.jpg"},function(o,i){o.exports="public/img/1Z-z4YG.png"},function(o,i){o.exports="public/img/2FXEh4O.png"},function(o,i){o.exports="public/img/S5bX1pY.png"},function(o,i){o.exports="public/img/1475CTm.jpg"},function(o,i){o.exports="public/img/3lf5Md9.jpg"},function(o,i){o.exports="public/img/1EpGnku.jpg"},function(o,i){o.exports="public/img/3i9zSed.png"},function(o,i){o.exports="public/img/5jFMEur.png"},function(o,i){o.exports="public/img/yv0hfbD.png"},function(o,i){o.exports="public/img/3MFeW50.png"},function(o,i){o.exports="public/img/157RVOu.png"},function(o,i){o.exports="public/img/1SlocGR.png"},function(o,i){o.exports="public/img/1UvYOgG.png"},function(o,i){o.exports="public/img/3G0BGXq.png"},function(o,i){o.exports="public/img/2NGntVB.png"},function(o,i){o.exports="public/img/cPuqjoJ.jpg"},function(o,i){o.exports="public/img/5p3ja7T.jpg"},function(o,i){o.exports="public/img/30tj3i_.jpg"},function(o,i){o.exports="public/img/1YJn0f_.jpg"},function(o,i){o.exports="public/img/3YBi2ry.png"},function(o,i){o.exports="public/img/uCvVEY3.png"},function(o,i){o.exports="public/img/1ws0u1Q.jpg"},function(o,i,t){"use strict";t.d(i,"a",function(){return n}),t.d(i,"b",function(){return p});var n=function(){var o=this,i=o.$createElement,t=o._self._c||i;return t("a",{staticClass:"portfolio-card",attrs:{href:o.card.href,title:"Visit "+o.card.title,target:"_blank"}},[o.card.img?t("div",{staticClass:"img",style:{backgroundImage:"url("+o.imgRequire(o.card.img)+")"}},[t("div",{staticClass:"ar"})]):o._e(),t("h3",[o._v(o._s(o.card.title))]),o.card.scope?t("span",{staticClass:"item"},[t("label",{staticClass:"scope",attrs:{for:"scope"}},[o._v("Scope of Work:")]),t("p",{staticClass:"scope",attrs:{id:"scope"},domProps:{innerHTML:o._s(o.card.scope)}})]):o._e(),o.card.scope?t("span",{staticClass:"item"},[t("label",{attrs:{for:"skills"}},[o._v("Skill Improvement:")]),t("p",{attrs:{id:"skills"},domProps:{innerHTML:o._s(o.card.skills)}})]):t("p",{domProps:{innerHTML:o._s(o.card.desc)}})])},p=[]}])]);