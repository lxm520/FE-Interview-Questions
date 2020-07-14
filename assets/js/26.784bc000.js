(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{505:function(t,a,s){t.exports=s.p+"assets/img/start-result-01.b2e9bed6.png"},879:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"koa2-快速开始"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#koa2-快速开始"}},[t._v("#")]),t._v(" koa2 快速开始")]),t._v(" "),n("h2",{attrs:{id:"环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),n("ul",[n("li",[t._v("因为node.js v7.6.0开始完全支持async/await，不需要加flag，所以node.js环境都要7.6.0以上")]),t._v(" "),n("li",[t._v("node.js环境 版本v7.6以上\n"),n("ul",[n("li",[t._v("直接安装node.js 7.6：node.js官网地址"),n("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("nvm管理多版本node.js：可以用nvm 进行node版本进行管理\n"),n("ul",[n("li",[t._v("Mac系统安装nvm "),n("a",{attrs:{href:"https://github.com/creationix/nvm#manual-install",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/creationix/nvm#manual-install"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("windows系统安装nvm "),n("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/coreybutler/nvm-windows"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Ubuntu系统安装nvm "),n("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/creationix/nvm"),n("OutboundLink")],1)])])])])]),t._v(" "),n("li",[t._v("npm 版本3.x以上")])]),t._v(" "),n("h2",{attrs:{id:"快速开始"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),n("h3",{attrs:{id:"安装koa2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装koa2"}},[t._v("#")]),t._v(" 安装koa2")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化package.json")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装koa2 ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" koa\n\n")])])]),n("h3",{attrs:{id:"hello-world-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-代码"}},[t._v("#")]),t._v(" hello world 代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Koa "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Koa")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello koa2'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[demo] start-quick is starting at port 3000'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"启动demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动demo"}},[t._v("#")]),t._v(" 启动demo")]),t._v(" "),n("p",[t._v("由于koa2是基于async/await操作中间件，目前node.js 7.x的harmony模式下才能使用，所以启动的时的脚本如下：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("node index.js\n")])])]),n("p",[t._v("访问"),n("a",{attrs:{href:"http:localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http:localhost:3000"),n("OutboundLink")],1),t._v("，效果如下")]),t._v(" "),n("p",[n("img",{attrs:{src:s(505),alt:"start-result-01"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);