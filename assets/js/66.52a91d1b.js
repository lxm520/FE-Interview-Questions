(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{747:function(v,a,_){"use strict";_.r(a);var t=_(10),r=Object(t.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"分层和合成机制：为什么css动画比javascript高效"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分层和合成机制：为什么css动画比javascript高效"}},[v._v("#")]),v._v(" 分层和合成机制：为什么css动画比JavaScript高效")]),v._v(" "),_("p",[v._v("本文我们主要讲解渲染引擎的分层和合成机制，因为分层和合成机制代表了浏览器最为先进的合成技术，Chrome 团队为了做到这一点，做了大量的优化工作。了解其工作原理，有助于拓宽你的视野，而且也有助于你更加深刻地理解 CSS 动画和 JavaScript 底层工作机制。")]),v._v(" "),_("h2",{attrs:{id:"显示器是怎么显示图像的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#显示器是怎么显示图像的"}},[v._v("#")]),v._v(" 显示器是怎么显示图像的")]),v._v(" "),_("p",[v._v("每个显示器都有固定的刷新频率，通常是 60HZ，也就是每秒更新 60 张图片，更新的图片都来自于显卡中一个叫前缓冲区的地方，显示器所做的任务很简单，就是每秒固定读取 60 次前缓冲区中的图像，并将读取的图像显示到显示器上。")]),v._v(" "),_("p",[_("strong",[v._v("那么这里显卡做什么呢？")])]),v._v(" "),_("p",[v._v("显卡的职责就是合成新的图像，并将图像保存到后缓冲区中，一旦显卡把合成的图像写到后缓冲区，系统就会让后缓冲区和前缓冲区互换，这样就能保证显示器能读取到最新显卡合成的图像。通常情况下，显卡的更新频率和显示器的刷新频率是一致的。但有时候，在一些复杂的场景中，显卡处理一张图片的速度会变慢，这样就会造成视觉上的卡顿。")]),v._v(" "),_("h2",{attrs:{id:"帧-vs-帧率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#帧-vs-帧率"}},[v._v("#")]),v._v(" 帧 VS 帧率")]),v._v(" "),_("p",[v._v("了解了显示器是怎么显示图像的之后，下面我们再来明确下帧和帧率的概念，因为这是后续一切分析的基础。")]),v._v(" "),_("p",[v._v("当你通过滚动条滚动页面，或者通过手势缩放页面时，屏幕上就会产生动画的效果。之所以你能感觉到有动画的效果，是因为在滚动或者缩放操作时，渲染引擎会通过渲染流水线生成新的图片，并发送到显卡的后缓冲区。")]),v._v(" "),_("p",[v._v("大多数设备屏幕的更新频率是 60 次 / 秒，这也就意味着正常情况下要实现流畅的动画效果，渲染引擎需要每秒更新 60 张图片到显卡的后缓冲区。")]),v._v(" "),_("p",[v._v("我们把渲染流水线生成的每一副图片称为一帧，把渲染流水线每秒更新了多少帧称为帧率，比如滚动过程中 1 秒更新了 60 帧，那么帧率就是 60Hz（或者 60FPS）。")]),v._v(" "),_("p",[v._v("由于用户很容易观察到那些丢失的帧，如果在一次动画过程中，渲染引擎生成某些帧的时间过久，那么用户就会感受到卡顿，这会给用户造成非常不好的印象。")]),v._v(" "),_("p",[v._v("要解决卡顿问题，就要解决每帧生成时间过久的问题，为此 Chrome 对浏览器渲染方式做了大量的工作，其中最卓有成效的策略就是引入了分层和合成机制。分层和合成机制代表了当今最先进的渲染技术，所以接下来我们就来分析下什么是合成和渲染技术")]),v._v(" "),_("h2",{attrs:{id:"如何生成一帧图像"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何生成一帧图像"}},[v._v("#")]),v._v(" 如何生成一帧图像")]),v._v(" "),_("p",[v._v("不过在开始之前，我们还需要聊一聊渲染引擎是如何生成一帧图像的。这需要回顾下我们前面《06 | 渲染流程（下）：HTML、CSS 和 JavaScript 文件，是如何变成页面的？》介绍的渲染流水线。关于其中任意一帧的生成方式，有重排、重绘和合成三种方式")]),v._v(" "),_("p",[v._v("这三种方式的渲染路径是不同的，通常渲染路径越长，生成图像花费的时间就越多。比如重排，它需要重新根据 CSSOM 和 DOM 来计算布局树，这样生成一幅图片时，会让整个渲染流水线的每个阶段都执行一遍，如果布局复杂的话，就很难保证渲染的效率了。而重绘因为没有了重新布局的阶段，操作效率稍微高点，但是依然需要重新计算绘制信息，并触发绘制操作之后的一系列操作。")]),v._v(" "),_("p",[v._v("相较于重排和重绘，合成操作的路径就显得非常短了，并不需要触发布局和绘制两个阶段，如果采用了 GPU，那么合成的效率会非常高。")]),v._v(" "),_("p",[v._v("所以，关于渲染引擎生成一帧图像的几种方式，按照效率我们推荐合成方式优先，若实在不能满足需求，那么就再退后一步使用重绘或者重排的方式。")]),v._v(" "),_("p",[v._v("本文我们的焦点在合成上，所以接下来我们就来深入分析下 Chrome 浏览器是怎么实现合成操作的。Chrome 中的合成技术，可以用三个词来概括总结：分层、分块和合成")]),v._v(" "),_("h2",{attrs:{id:"分层和合成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分层和合成"}},[v._v("#")]),v._v(" 分层和合成")]),v._v(" "),_("p",[v._v("通常页面的组成是非常复杂的，有的页面里要实现一些复杂的动画效果，比如点击菜单时弹出菜单的动画特效，滚动鼠标滚轮时页面滚动的动画效果，当然还有一些炫酷的 3D 动画特效。如果没有采用分层机制，从布局树直接生成目标图片的话，那么每次页面有很小的变化时，都会触发重排或者重绘机制，这种“牵一发而动全身”的绘制策略会严重影响页面的渲染效率。")]),v._v(" "),_("p",[v._v("为了提升每帧的渲染效率，Chrome 引入了分层和合成的机制。那该怎么来理解分层和合成机制呢？")]),v._v(" "),_("p",[v._v("你可以把一张网页想象成是由很多个图片叠加在一起的，每个图片就对应一个图层，Chrome 合成器最终将这些图层合成了用于显示页面的图片。如果你熟悉 PhotoShop 的话，就能很好地理解这个过程了，PhotoShop 中一个项目是由很多图层构成的，每个图层都可以是一张单独图片，可以设置透明度、边框阴影，可以旋转或者设置图层的上下位置，将这些图层叠加在一起后，就能呈现出最终的图片了。")]),v._v(" "),_("p",[v._v("在这个过程中，将素材分解为多个图层的操作就称为分层，最后将这些图层合并到一起的操作就称为合成。所以，分层和合成通常是一起使用的。")]),v._v(" "),_("p",[v._v("考虑到一个页面被划分为两个层，当进行到下一帧的渲染时，上面的一帧可能需要实现某些变换，如平移、旋转、缩放、阴影或者 Alpha 渐变，这时候合成器只需要将两个层进行相应的变化操作就可以了，显卡处理这些操作驾轻就熟，所以这个合成过程时间非常短。")]),v._v(" "),_("p",[v._v("理解了为什么要引入合成和分层机制，下面我们再来看看 Chrome 是怎么实现分层和合成机制的。")]),v._v(" "),_("p",[v._v("在 Chrome 的渲染流水线中，分层体现在生成布局树之后，渲染引擎会根据布局树的特点将其转换为层树（Layer Tree），层树是渲染流水线后续流程的基础结构。")]),v._v(" "),_("p",[v._v("层树中的每个节点都对应着一个图层，下一步的绘制阶段就依赖于层树中的节点。在《06 | 渲染流程（下）：HTML、CSS 和 JavaScript 文件，是如何变成页面的？》中我们介绍过，绘制阶段其实并不是真正地绘出图片，而是将绘制指令组合成一个列表，比如一个图层要设置的背景为黑色，并且还要在中间画一个圆形，那么绘制过程会生成|Paint BackGroundColor:Black | Paint Circle|这样的绘制指令列表，绘制过程就完成了。")]),v._v(" "),_("p",[v._v("有了绘制列表之后，就需要进入光栅化阶段了，光栅化就是按照绘制列表中的指令生成图片。每一个图层都对应一张图片，合成线程有了这些图片之后，会将这些图片合成为“一张”图片，并最终将生成的图片发送到后缓冲区。这就是一个大致的分层、合成流程。")]),v._v(" "),_("p",[v._v("需要重点关注的是，合成操作是在合成线程上完成的，这也就意味着在执行合成操作时，是不会影响到主线程执行的。这就是为什么经常主线程卡住了，但是 CSS 动画依然能执行的原因。")]),v._v(" "),_("h2",{attrs:{id:"分块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分块"}},[v._v("#")]),v._v(" 分块")]),v._v(" "),_("p",[v._v("如果说分层是从宏观上提升了渲染效率，那么分块则是从微观层面提升了渲染效率。")]),v._v(" "),_("p",[v._v("通常情况下，页面的内容都要比屏幕大得多，显示一个页面时，如果等待所有的图层都生成完毕，再进行合成的话，会产生一些不必要的开销，也会让合成图片的时间变得更久。")]),v._v(" "),_("p",[v._v("因此，合成线程会将每个图层分割为大小固定的图块，然后优先绘制靠近视口的图块，这样就可以大大加速页面的显示速度。不过有时候， 即使只绘制那些优先级最高的图块，也要耗费不少的时间，因为涉及到一个很关键的因素——纹理上传，这是因为从计算机内存上传到 GPU 内存的操作会比较慢。")]),v._v(" "),_("p",[v._v("为了解决这个问题，Chrome 又采取了一个策略：在首次合成图块的时候使用一个低分辨率的图片。比如可以是正常分辨率的一半，分辨率减少一半，纹理就减少了四分之三。在首次显示页面内容的时候，将这个低分辨率的图片显示出来，然后合成器继续绘制正常比例的网页内容，当正常比例的网页内容绘制完成后，再替换掉当前显示的低分辨率内容。这种方式尽管会让用户在开始时看到的是低分辨率的内容，但是也比用户在开始时什么都看不到要好")]),v._v(" "),_("h2",{attrs:{id:"如何利用分层技术优化代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何利用分层技术优化代码"}},[v._v("#")]),v._v(" 如何利用分层技术优化代码")]),v._v(" "),_("p",[v._v("通过上面的介绍，相信你已经理解了渲染引擎是怎么将布局树转换为漂亮图片的，理解其中原理之后，你就可以利用分层和合成技术来优化代码了。")]),v._v(" "),_("p",[v._v("在写 Web 应用的时候，你可能经常需要对某个元素做几何形状变换、透明度变换或者一些缩放操作，如果使用 JavaScript 来写这些效果，会牵涉到整个渲染流水线，所以 JavaScript 的绘制效率会非常低下。")]),v._v(" "),_("p",[v._v("这时你可以使用 will-change 来告诉渲染引擎你会对该元素做一些特效变换，CSS 代码如下：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v(".box {\nwill-change: transform, opacity;\n}\n")])])]),_("p",[v._v("这段代码就是提前告诉渲染引擎 box 元素将要做几何变换和透明度变换操作，这时候渲染引擎会将该元素单独实现一帧，等这些变换发生时，渲染引擎会通过合成线程直接去处理变换，这些变换并没有涉及到主线程，这样就大大提升了渲染的效率。这也是 CSS 动画比 JavaScript 动画高效的原因。")]),v._v(" "),_("p",[v._v("所以，如果涉及到一些可以使用合成线程来处理 CSS 特效或者动画的情况，就尽量使用 will-change 来提前告诉渲染引擎，让它为该元素准备独立的层。但是凡事都有两面性，每当渲染引擎为一个元素准备一个独立层的时候，它占用的内存也会大大增加，因为从层树开始，后续每个阶段都会多一个层结构，这些都需要额外的内存，所以你需要恰当地使用 will-change。")]),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("好了，今天就介绍到这里，下面我来总结下今天的内容。")]),v._v(" "),_("ul",[_("li",[v._v("首先我们介绍了显示器显示图像的原理，以及帧和帧率的概念，然后基于帧和帧率我们又介绍渲染引擎是如何实现一帧图像的。通常渲染引擎生成一帧图像有三种方式：重排、重绘和合成。其中重排和重绘操作都是在渲染进程的主线程上执行的，比较耗时；而合成操作是在渲染进程的合成线程上执行的，执行速度快，且不占用主线程。")]),v._v(" "),_("li",[v._v("然后我们重点介绍了浏览器是怎么实现合成的，其技术细节主要可以使用三个词来概括：分层、分块和合成。")]),v._v(" "),_("li",[v._v("最后我们还讲解了 CSS 动画比 JavaScript 动画高效的原因，以及怎么使用 will-change 来优化动画或特效。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);