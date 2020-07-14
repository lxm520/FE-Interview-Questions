(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{813:function(v,_,t){"use strict";t.r(_);var e=t(10),o=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"重定向的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向的过程"}},[v._v("#")]),v._v(" 重定向的过程")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("301")]),v._v(" 是“永久重定向”，"),t("code",[v._v("302")]),v._v(" 是“临时重定向”，浏览器收到这两个状态码就会跳转到新的 "),t("code",[v._v("URI")]),v._v("。")]),v._v(" "),t("li",[v._v("那么，它们是怎么做到的呢？难道仅仅用这两个代码就能够实现跳转页面吗")]),v._v(" "),t("li",[v._v("“重定向”实际上发送了两次 "),t("code",[v._v("HTTP")]),v._v(" 请求，第一个请求返回了 "),t("code",[v._v("302")]),v._v("，然后第二个请求就被重定向到了“"),t("code",[v._v("/index.html")]),v._v("”。但如果不用开发者工具的话，你是完全看不到这个跳转过程的，也就是说，重定向是“用户无感知”的")])]),v._v(" "),t("p",[v._v("我们再来看看第一个请求返回的响应报文：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://blog.poetries.top/img-repo/2019/12/23.png",alt:""}})]),v._v(" "),t("p",[v._v("这里出现了一个新的头字段“Location: /index.html”，它就是 301/302 重定向跳转的秘密所在。")]),v._v(" "),t("p",[v._v("“Location”字段属于响应字段，必须出现在响应报文里。但只有配合 301/302 状态码才有意义，它标记了服务器要求重定向的 URI，这里就是要求浏览器跳转到“index.html”。")]),v._v(" "),t("p",[v._v("浏览器收到 301/302 报文，会检查响应头里有没有“Location”。如果有，就从字段值里提取出 URI，发出新的 HTTP 请求，相当于自动替我们点击了这个链接。")]),v._v(" "),t("p",[v._v("在“Location”里的 URI 既可以使用绝对 URI，也可以使用相对 URI。所谓“绝对 URI”，就是完整形式的 URI，包括 scheme、host:port、path 等。所谓“相对 URI”，就是省略了 scheme 和 host:port，只有 path 和 query 部分，是不完整的，但可以从请求上下文里计算得到")]),v._v(" "),t("blockquote",[t("p",[v._v("注意，在重定向时如果只是在站内跳转，你可以放心地使用相对 URI。但如果要跳转到站外，就必须用绝对 URI。")])]),v._v(" "),t("p",[v._v("例如，如果想跳转到 Nginx 官网，就必须在“nginx.org”前把“http://”都写出来，否则浏览器会按照相对 URI 去理解，得到的就会是一个不存在的 URI“http://www.chrono.com/nginx.org”")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("http://www.chrono.com/18-1?dst=nginx.org           # 错误\nhttp://www.chrono.com/18-1?dst=http://nginx.org    # 正确\n")])])]),t("h2",{attrs:{id:"重定向状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向状态码"}},[v._v("#")]),v._v(" 重定向状态码")]),v._v(" "),t("p",[v._v("刚才我把重定向的过程基本讲完了，现在来说一下重定向用到的状态码。")]),v._v(" "),t("p",[v._v("最常见的重定向状态码就是 301 和 302，另外还有几个不太常见的，例如 303、307、308 等。它们最终的效果都差不多，让浏览器跳转到新的 URI，但语义上有一些细微的差别，使用的时候要特别注意。")]),v._v(" "),t("p",[v._v("301俗称“永久重定向”（Moved Permanently），意思是原 URI 已经“永久”性地不存在了，今后的所有请求都必须改用新的 URI。")]),v._v(" "),t("p",[v._v("浏览器看到 301，就知道原来的 URI“过时”了，就会做适当的优化。比如历史记录、更新书签，下次可能就会直接用新的 URI 访问，省去了再次跳转的成本。搜索引擎的爬虫看到 301，也会更新索引库，不再使用老的 URI。")]),v._v(" "),t("p",[v._v("302俗称“临时重定向”（“Moved Temporarily”），意思是原 URI 处于“临时维护”状态，新的 URI 是起“顶包”作用的“临时工”。")]),v._v(" "),t("p",[v._v("浏览器或者爬虫看到 302，会认为原来的 URI 仍然有效，但暂时不可用，所以只会执行简单的跳转页面，不记录新的 URI，也不会有其他的多余动作，下次访问还是用原 URI。")]),v._v(" "),t("p",[t("strong",[v._v("301/302 是最常用的重定向状态码，在 3××里剩下的几个还有：")])]),v._v(" "),t("ul",[t("li",[v._v("303 See Other：类似 302，但要求重定向后的请求改为 GET 方法，访问一个结果页面，避免 POST/PUT 重复操作；")]),v._v(" "),t("li",[v._v("307 Temporary Redirect：类似 302，但重定向后请求里的方法和实体不允许变动，含义比 302 更明确；")]),v._v(" "),t("li",[v._v("308 Permanent Redirect：类似 307，不允许重定向后的请求变动，但它是 - 301“永久重定向”的含义。")])]),v._v(" "),t("blockquote",[t("p",[v._v("不过这三个状态码的接受程度较低，有的浏览器和服务器可能不支持，开发时应当慎重，测试确认浏览器的实际效果后才能使用")])]),v._v(" "),t("h2",{attrs:{id:"重定向的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向的应用场景"}},[v._v("#")]),v._v(" 重定向的应用场景")]),v._v(" "),t("p",[v._v("理解了重定向的工作原理和状态码的含义，我们就可以在服务器端拥有主动权，控制浏览器的行为，不过要怎么利用重定向才好呢？")]),v._v(" "),t("p",[v._v("使用重定向跳转，核心是要理解“重定向”和“永久 / 临时”这两个关键词。")]),v._v(" "),t("p",[v._v("先来看什么时候需要重定向。")]),v._v(" "),t("p",[v._v("一个最常见的原因就是“资源不可用”，需要用另一个新的 URI 来代替。")]),v._v(" "),t("p",[v._v("至于不可用的原因那就很多了。例如域名变更、服务器变更、网站改版、系统维护，这些都会导致原 URI 指向的资源无法访问，为了避免出现 404，就需要用重定向跳转到新的 URI，继续为网民提供服务。")]),v._v(" "),t("p",[v._v("另一个原因就是“避免重复”，让多个网址都跳转到一个 URI，增加访问入口的同时还不会增加额外的工作量。")]),v._v(" "),t("p",[v._v("例如，有的网站都会申请多个名称类似的域名，然后把它们再重定向到主站上。比如，你可以访问一下“qq.com”“github.com ”“bing.com”（记得事先清理缓存），看看它是如何重定向的。")]),v._v(" "),t("p",[v._v("决定要实行重定向后接下来要考虑的就是“永久”和“临时”的问题了，也就是选择 301 还是 302")]),v._v(" "),t("p",[t("strong",[v._v("301 的含义是“永久”的")])]),v._v(" "),t("p",[v._v("如果域名、服务器、网站架构发生了大幅度的改变，比如启用了新域名、服务器切换到了新机房、网站目录层次重构，这些都算是“永久性”的改变。原来的 URI 已经不能用了，必须用 301“永久重定向”，通知浏览器和搜索引擎更新到新地址，这也是搜索引擎优化（SEO）要考虑的因素之一")]),v._v(" "),t("p",[t("strong",[v._v("302 的含义是“临时”的")])]),v._v(" "),t("p",[v._v("原来的 URI 在将来的某个时间点还会恢复正常，常见的应用场景就是系统维护，把网站重定向到一个通知页面，告诉用户过一会儿再来访问。另一种用法就是“服务降级”，比如在双十一促销的时候，把订单查询、领积分等不重要的功能入口暂时关闭，保证核心服务能够正常运行")]),v._v(" "),t("h2",{attrs:{id:"重定向的相关问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向的相关问题"}},[v._v("#")]),v._v(" 重定向的相关问题")]),v._v(" "),t("p",[v._v("重定向的用途很多，掌握了重定向，就能够在架设网站时获得更多的灵活性，不过在使用时还需要注意两个问题。")]),v._v(" "),t("p",[v._v("第一个问题是“性能损耗”。很明显，重定向的机制决定了一个跳转会有两次请求 - 应答，比正常的访问多了一次。")]),v._v(" "),t("p",[v._v("虽然 301/302 报文很小，但大量的跳转对服务器的影响也是不可忽视的。站内重定向还好说，可以长连接复用，站外重定向就要开两个连接，如果网络连接质量差，那成本可就高多了，会严重影响用户的体验。")]),v._v(" "),t("p",[v._v("所以重定向应当适度使用，决不能滥用。")]),v._v(" "),t("p",[v._v("第二个问题是“循环跳转”。如果重定向的策略设置欠考虑，可能会出现“A=>B=>C=>A”的无限循环，不停地在这个链路里转圈圈，后果可想而知。")]),v._v(" "),t("p",[v._v("所以 HTTP 协议特别规定，浏览器必须具有检测“循环跳转”的能力，在发现这种情况时应当停止发送请求并给出错误提示")]),v._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),t("ul",[t("li",[v._v("重定向是服务器发起的跳转，要求客户端改用新的 "),t("code",[v._v("URI")]),v._v(" 重新发送请求，通常会自动进行，用户是无感知的；")]),v._v(" "),t("li",[t("code",[v._v("301/302")]),v._v(" 是最常用的重定向状态码，分别是“永久重定向”和“临时重定向”；")]),v._v(" "),t("li",[v._v("响应头字段 "),t("code",[v._v("Location")]),v._v(" 指示了要跳转的 "),t("code",[v._v("URI")]),v._v("，可以用绝对或相对的形式；")]),v._v(" "),t("li",[v._v("重定向可以把一个 "),t("code",[v._v("URI")]),v._v(" 指向另一个 "),t("code",[v._v("URI")]),v._v("，也可以把多个 URI 指向同一个 "),t("code",[v._v("URI")]),v._v("，用途很多；")]),v._v(" "),t("li",[v._v("使用重定向时需要当心性能损耗，还要避免出现循环跳转。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"http://blog.poetries.top/img-repo/2019/12/103.png",alt:""}})])])}),[],!1,null,null,null);_.default=o.exports}}]);