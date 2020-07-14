(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{847:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"模块概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块概述"}},[t._v("#")]),t._v(" 模块概述")]),t._v(" "),a("p",[t._v("nodejs中，提供了"),a("strong",[t._v("url")]),t._v("这个非常实用的模块，用来做URL的解析。在做node服务端的开发时会经常用到。使用很简单，总共只有3个方法。")]),t._v(" "),a("p",[t._v("正式讲解前，各位同学先把下面这个图记在心上（来自nodejs官网），先对URL有一个直观的认识。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/url.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"模块方法概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块方法概述"}},[t._v("#")]),t._v(" 模块方法概述")]),t._v(" "),a("p",[t._v("url模块三个方法分别是：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v(".parse(urlString)")]),t._v("：将url字符串，解析成object，便于开发者进行操作。")]),t._v(" "),a("li",[a("strong",[t._v(".format(urlObj)")]),t._v("：.parse() 方法的反向操作。")]),t._v(" "),a("li",[a("strong",[t._v(".resove(from, to)")]),t._v("：以from作为起始地址，解析出完整的目标地址（还是看直接看例子好些）")])]),t._v(" "),a("h2",{attrs:{id:"url解析：url-parse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url解析：url-parse"}},[t._v("#")]),t._v(" url解析：url.parse()")]),t._v(" "),a("blockquote",[a("p",[t._v("完整语法：url.parse(urlString[, parseQueryString[, slashesDenoteHost]])")])]),t._v(" "),a("p",[t._v("使用比较简单，几个要点备忘如下。")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("parseQueryString")]),t._v("：（默认为false）如为false，则"),a("code",[t._v("urlObject.query")]),t._v("为未解析的字符串，比如"),a("code",[t._v("nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1")]),t._v("，且对应的值不会decode；如果"),a("code",[t._v("parseQueryString")]),t._v("为true，则"),a("code",[t._v("urlObject.query")]),t._v("为object，比如"),a("code",[t._v("{ nick: '程序猿小卡' }")]),t._v("，且值会被decode；")]),t._v(" "),a("li",[a("strong",[t._v("slashesDenoteHos")]),t._v("：（默认为false）如果为true，那么类似"),a("code",[t._v("//foo/bar")]),t._v("里的"),a("code",[t._v("foo")]),t._v("就会被认为是"),a("code",[t._v("hostname")]),t._v("；如果为false，则"),a("code",[t._v("foo")]),t._v("被认为是pathname的一部分。")]),t._v(" "),a("li",[t._v("关于解析得到的 urlObject ，会在下一小节进行详细介绍。")])]),t._v(" "),a("h3",{attrs:{id:"例子1：参数值不进行解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子1：参数值不进行解析"}},[t._v("#")]),t._v(" 例子1：参数值不进行解析")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输出如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  slashes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chyingp:HelloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ke.qq.com:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ke.qq.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#part=1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"例子2：对参数值进行decode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子2：对参数值进行decode"}},[t._v("#")]),t._v(" 例子2：对参数值进行decode")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输出如下，对比上面的例子会发现，"),a("strong",[t._v("query")]),t._v(" 字段被解析成了object，并且decode过。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  protocol: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http:'")]),t._v(",\n  slashes: true,\n  auth: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chyingp:HelloWorld'")]),t._v(",\n  host: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ke.qq.com:8080'")]),t._v(",\n  port: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8080'")]),t._v(",\n  hostname: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ke.qq.com'")]),t._v(",\n  hash: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#part=1'")]),t._v(",\n  search: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),t._v(",\n  query: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nick: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'程序猿小卡'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  pathname: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index.html'")]),t._v(",\n  path: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),t._v(",\n  href: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"例子3：针对路径-foo-bar-的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子3：针对路径-foo-bar-的处理"}},[t._v("#")]),t._v(" 例子3：针对路径 //foo/bar 的处理")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var url = require('url');\nvar str = '//foo/bar';\n\nvar obj = url.parse(str, true, false);\nconsole.log(obj);\n\nobj = url.parse(str, true, true);\nconsole.log(obj);\n")])])]),a("p",[t._v("输出如下，自行对比两者之间的差异：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  protocol: null,\n  slashes: null,\n  auth: null,\n  host: null,\n  port: null,\n  hostname: null,\n  hash: null,\n  search: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(",\n  query: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  pathname: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//foo/bar'")]),t._v(",\n  path: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//foo/bar'")]),t._v(",\n  href: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//foo/bar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nUrl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  protocol: null,\n  slashes: true,\n  auth: null,\n  host: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v(",\n  port: null,\n  hostname: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v(",\n  hash: null,\n  search: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(",\n  query: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  pathname: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bar'")]),t._v(",\n  path: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bar'")]),t._v(",\n  href: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//foo/bar'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"关于urlobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于urlobject"}},[t._v("#")]),t._v(" 关于urlObject")]),t._v(" "),a("p",[t._v("以上面的作为例子，粗略讲解下"),a("code",[t._v("urlObject")]),t._v("。更多细节可参考"),a("a",{attrs:{href:"https://nodejs.org/api/url.html#url_url_strings_and_url_objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("protocol：协议，需要注意的是包含了"),a("code",[t._v(":")]),t._v("，并且是小写的。")]),t._v(" "),a("li",[t._v("slashes：如果"),a("code",[t._v(":")]),t._v("后面跟了两个"),a("code",[t._v("//")]),t._v("，那么为true。")]),t._v(" "),a("li",[t._v("auth：认证信息，如果有密码，为"),a("code",[t._v("usrname:passwd")]),t._v("，如果没有，则为"),a("code",[t._v("usrname")]),t._v("。注意，这里区分大小写。")]),t._v(" "),a("li",[t._v("host：主机名。注意包含了端口，比如"),a("code",[t._v("ke.qq.com:8080")]),t._v("，并且是小写的。")]),t._v(" "),a("li",[t._v("hostname：主机名，不包含端口，并且是小写的。")]),t._v(" "),a("li",[t._v("hash：哈希部分，注意包含了"),a("code",[t._v("#")]),t._v("。")]),t._v(" "),a("li",[t._v("search：查询字符串，注意，包含了"),a("code",[t._v("?")]),t._v("，此外，值是没有经过decode的。")]),t._v(" "),a("li",[t._v("query：字符串 或者 对象。如果是字符串，则是"),a("code",[t._v("search")]),t._v("去掉"),a("code",[t._v("?")]),t._v("，其余一样；如果是对象，那么是decode过的。")]),t._v(" "),a("li",[t._v("path：路径部分，包含search部分。")]),t._v(" "),a("li",[t._v("pathname：路径部分，不包含search部分。")]),t._v(" "),a("li",[t._v("href：原始的地址。不过需要注意的是，"),a("code",[t._v("protocol")]),t._v("、"),a("code",[t._v("host")]),t._v("会被转成小写字母。")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  slashes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chyingp:HelloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ke.qq.com:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ke.qq.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#part=1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'程序猿小卡'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"url拼接：url-format-urlobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url拼接：url-format-urlobject"}},[t._v("#")]),t._v(" url拼接：url.format(urlObject)")]),t._v(" "),a("blockquote",[a("p",[t._v("完整语法：url.format(urlObject)")])]),t._v(" "),a("p",[a("code",[t._v("url.parse(str)")]),t._v("的反向操作，没什么好说的。"),a("code",[t._v("urlObject")]),t._v("包含了很多字段，比如"),a("code",[t._v("protocol")]),t._v("、"),a("code",[t._v("slashes")]),t._v("、"),a("code",[t._v("protocol")]),t._v("等，且不一定需要全部传，所以有一套解析逻辑。")]),t._v(" "),a("p",[t._v("过程比较冗长，大部分时候不需要用到，直接贴"),a("a",{attrs:{href:"https://nodejs.org/api/url.html#url_url_format_urlobject",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("的链接，有需要再看。")]),t._v(" "),a("h2",{attrs:{id:"url-resolve-from-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-resolve-from-to"}},[t._v("#")]),t._v(" url.resolve(from, to)")]),t._v(" "),a("p",[t._v("用法比较简单，直接贴官方文档的例子")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/one/two/three'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'four'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '/one/two/four'")]),t._v("\nurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'http://example.com/one'")]),t._v("\nurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/two'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'http://example.com/two'")]),t._v("\n")])])]),a("h2",{attrs:{id:"非法字符转义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非法字符转义"}},[t._v("#")]),t._v(" 非法字符转义")]),t._v(" "),a("p",[t._v("url字符如果有下面的字符会被转义（非法字符）")]),t._v(" "),a("blockquote",[a("p",[t._v("< > \" ` \\r \\n \\t { } | \\ ^ '")])]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("p",[t._v("官方文档："),a("a",{attrs:{href:"https://nodejs.org/api/url.html#url_url",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/api/url.html#url_url"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);