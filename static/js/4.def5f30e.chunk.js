(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[4],{91:function(e,i,t){"use strict";t.r(i),t.d(i,"ion_phaser",(function(){return o}));var n=t(36),a=t(9),s=t(10),r=t(18),c=t.n(r),u=t(37),o=function(){function e(i){var t=this;Object(a.a)(this,e),Object(u.d)(this,i),this.initialize=!0,this.initializeGame=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.game;if(null!==e&&void 0!==e){if(void 0!==e.instance&&null!==e.instance)throw new Error("A Phaser game already exist");e.parent=e.parent||t.el,e.instance=new Phaser.Game(e)}}}return Object(s.a)(e,[{key:"onGameChange",value:function(e){this.initialize&&!this.hasInitialized()&&this.initializeGame(e)}},{key:"onInitialize",value:function(e,i){e&&!i&&this.initializeGame()}},{key:"getInstance",value:function(){var e=Object(n.a)(c.a.mark((function e(){var i,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.game||{},t=i.instance,e.abrupt("return",Promise.resolve(t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){var e=Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.hasInitialized()&&(this.game.instance.destroy(!0),this.game.instance=null);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"connectedCallback",value:function(){!this.hasInitialized()&&this.initialize&&this.initializeGame()}},{key:"disconnectedCallback",value:function(){this.destroy()}},{key:"hasInitialized",value:function(){return this.game&&void 0!==this.game.instance&&null!==this.game.instance}},{key:"el",get:function(){return Object(u.b)(this)}}],[{key:"watchers",get:function(){return{game:["onGameChange"],initialize:["onInitialize"]}}}]),e}();o.style="ion-phaser{display:block}"}}]);
//# sourceMappingURL=4.def5f30e.chunk.js.map