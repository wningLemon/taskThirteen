/**
 * Created by Administrator on 2017/4/18.
 */
$(function () {

    //盛放html的问题的数组
   var arrQ0=[
       {
           question:"XHTML和HTML有什么区别？",
           answer:"HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言<br/>" +
           "最主要的不同：XHTML 元素必须被正确地嵌套;XHTML 元素必须被关闭;标签名必须用小写字母;XHTML 文档必须拥有根元素。"
       },
       {
           question:"Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?",
           answer:"1.声明位于文档中的最前面，处于 标签之前。告知浏览器的解析器，用什么文档类型规范来解析这个文档。<br/>" +
           "2.严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。<br/>" +
           "3.在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。<br/>" +
           "4.DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。"
       },
       {
           question:"行内元素有哪些？块级元素有哪些？",
           answer:"CSS规范规定,每个元素都有display属性,确定该元素的类型,每个元素都有默认的display值,比如div默认display属性值为“block”，成为“块级”元素;span默认display属性值为“inline”,是“行内”元素。<br/>" +
           "行内元素有：a b span img input select strong（强调的语气）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p  "
       },
       {
           question:"link和@import 的区别是？",
           answer:"1.link属于XHTML标签，而@import是CSS提供的;<br/>" +
           "2.页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;<br/>" +
           "3.import只在IE5以上才能识别，而link是XHTML标签，无兼容问题;<br/>" +
           "4.link方式的样式的权重 高于@import的权重。"
       },
       {
            question:"浏览器的内核分别是什么?",
            answer:"IE: trident内核<br/>" +
            "Firefox：gecko内核<br/>" +
            "Safari：webkit内核<br/>" +
            "Opera：以前是presto内核，Opera现已改用Google Chrome的Blink内核<br/>" +
            "Chrome：Blink(基于webkit，Google与Opera Software共同开发)"
       },
       {
           question:"对语义化如何理解?",
           answer:"用正确的标签做正确的事情！<br/>" +
           "HTML语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；在没有样式CCS情况下也以一种文档格式显示，" +
           "并且是容易阅读的。搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。使阅读源代码的人对网站" +
           "更容易将网站分块，便于阅读维护理解。"
       },
       {
           question:"HTML5的离线储存有几种方式？",
           answer:"localStorage长期存储数据，浏览器关闭后数据不丢失；sessionStorage  数据在浏览器关闭后自动删除。"
       },
       {
           question:"iframe有那些缺点？",
           answer:"iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。使用iframe之前需要考虑这两个缺点。" +
           "如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以可以绕开以上两个问题。"
       },
       {
           question:"简述一下src与href的区别",
           answer:"href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。<br/>" +
           "src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，" +
           "例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架" +
           "等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。"
       },
       {
           question:"请描述一下 cookies，sessionStorage 和 localStorage 的区别？",
           answer:"cookie在浏览器和服务器间来回传递。 sessionStorage和localStorage不会sessionStorage和localStorage的存储空间更大；" +
           "sessionStorage和localStorage有更多丰富易用的接口；sessionStorage和localStorage各自独立的存储空间。"
       },
       {
           question:"一次完整的HTTP事务是怎样的一个过程？",
           answer:"a. 域名解析<br/>" +
           "b. 发起TCP的3次握手<br/>" +
           "c. 建立TCP连接后发起http请求<br/>" +
           "d. 服务器端响应http请求，浏览器得到html代码<br/>" +
           "e. 浏览器解析html代码，并请求html代码中的资源<br/>" +
           "f. 浏览器对页面进行渲染呈现给用户"
       },
       {
           question:"如何实现浏览器内多个标签页之间的通信?",
           answer:"WebSocket、SharedWorker;也可以调用 localstorge、cookies 等本地存储方式;localstorge " +
           "另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息" +
           "通信;注意 quirks：Safari 在无痕模式下设置 localstorge 值时会抛出QuotaExceededError 的异常;"
       },
       {
           question:"webSocket 如何兼容低浏览器？",
           answer:"Adobe Flash Socket 、ActiveX HTMLFile (IE) 、基于 multipart 编码发送 XHR 、基于长轮询的 XHR;"
       },
       {
           question:"页面可见性（Page Visibility API） 可以有哪些用途？",
           answer:"通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放;"

       },
       {
           question:"网页验证码是干什么的，是为了解决什么安全问题?",
           answer:"区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水;有效防止黑客对某一个" +
           "特定注册用户用特定程序暴力破解方式进行不断的登陆尝试;"
       }

       ];

   //盛放css问题的数组
    var arrQ1=[
        {
            question:"CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？CSS3新增伪类有那些？",
            answer:"id选择器(# myid);类选择器(.myclassname);标签选择器(div, h1, p);相邻选择器(h1 + p);子选择器(ul < li);后代选择器(li a)" +
            "通配符选择器(*);属性选择器(a[rel = 'attr']);伪类选择器(a: hover, li: nth - child);"+"<br/>"+
            "可继承的样式:font-size font-family color,UL LI DL DD DT;<br/>"+
            "不可继承的样式：border padding margin width height;<br/>"+
            "优先级就近原则，同权重情况下样式定义最近者为准;载入样式以最后载入的定位为准;<br/>"+
            "优先级为:!important >  id > class > tag <font color='red'>important比内联优先级高。</font>"
        },
        {
            question:"列出display的值，说明他们的作用",
            answer:"block 象块类型元素一样显示。  none 缺省值。象行内元素类型一样显示。  inline-block 象行内元素一样显示，" +
            "但其内容象块类型元素一样显示。  list-item 象块类型元素一样显示，并添加样式列表标记"
        },
        {
            question:"position的值，relative和absolute定位原点是？",
            answer:"absolute　生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位;<br/>" +
            "fixed （老IE不支持）生成绝对定位的元素，相对于浏览器窗口进行定位;<br/>" +
            "relative  生成相对定位的元素，相对于其正常位置进行定位;<br/>" +
            "static  默认值。没有定位，元素出现在正常的流中  *（忽略 top, bottom, left, right z-index 声明）;<br/>" +
            "inherit 规定从父元素继承 position 属性的值。"
        },
        {
            question:"为什么要初始化CSS样式？",
            answer:"因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。" +
            "当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。"
        },
        {
            question:"CSS3有哪些新特性？",
            answer:"CSS3实现圆角（border-radius:8px），阴影（box-shadow:10px）, " +
            "对文字加特效（text-shadow、）,线性渐变（gradient）,旋转（transform）" +
            "  transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);" +
            "//旋转,缩放,定位,倾斜  增加了更多的CSS选择器  多背景 rgba "
        },
        {
            question:"对WEB标准以及W3C的理解与认识？",
            answer:"标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外链css和js脚本、结构行为表现的分离、" +
            "文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所访问、更少的代码和组件，容易维护、" +
            "改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性。"
        },
        {
            question:"清除浮动的几种方式，各自的优缺点?",
            answer:"1.使用空标签清除浮动 clear:both(理论上能清楚任何标签，增加无意义的标签)+<br/>" +
            "2.使用overflow:auto(空标签元素清除浮动而不得不增加无意代码的弊端,,使用zoom:1用于兼容IE)" +
            "3.是用afert伪元素清除浮动(用于非IE浏览器)"
        },
        {
            question:"css hack",
            answer:"一般来说是针对不同的浏览器写不同的CSS,就是 CSS Hack。IE浏览器Hack一般又分为三种，条件Hack、属性级Hack、选择符Hack<br/>"+
                "以下是属性hack:"+
            "_marging \\IE 6<br/>" + "+margin \\IE 7<br/>"+"Marging:0 auto \9 所有Ie<br/>"+"Margin \0 \\IE 8"
        },
        {
            question:"CSS 优化、提高性能的方法有哪些？",
            answer:"1.加载性能:主要是从减少文件体积、减少阻塞加载、提高并发方面入手的，任何 hint 都逃不出这几个大方向;<br/>" +
            "2.选择器性能:selector 的对整体性能的影响可以忽略不计了，selector 的考察更多是规范化和可维护性、健壮性方面;<br/>" +
            "3.渲染性能:渲染性能是 CSS 优化最重要的关注对象,css动画是怎么实现的，有没有合理使用GPU加速，是否使用了太多text-shawdo等等<br/>" +
            "4.可维护性、健壮性：命名是否合理，结构层次设计是否足够健壮？对样式进行抽象复用了吗？优雅的 CSS 不仅仅会影响后期的维护成本，也会对加载性能等方面产生影响"
        },
        {
            question:"如果需要手动写动画，你认为最小时间间隔是多久，为什么？",
            answer:"多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms"
        },
        {
            question:"去除display:inline-block显示间隙？",
            answer:"移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing"
        }
    ];

   //盛放js问题的数组
    var arrQ2=[
        {
            question:"javascript的typeof返回哪些数据类型？",
            answer:"Object string number function boolean undefinded null"
        },
        {
            question:"split() join() 的区别?",
            answer:"前者是切割成数组的形式，后者是将数组转换成字符串"
        },
        {
            question:"IE和DOM事件流有什么区别?",
            answer:"1.执行顺序不一样、2.参数不一样、3.事件加不加on、4.this指向问题。"
        },
        {
            question:"IE和标准下有哪些兼容性的写法?",
            answer:"1.var ev = ev || window.event;<br/>" +
            "2.document.documentElement.clientWidth || document.body.clientWidth<br/>" +
            "3.var target = ev.srcElement||ev.target"
        },
        {
            question:"ajax请求的时候get 和post方式的区别?",
            answer:"一个在url后面一个放在虚拟载体里面、有大小限制、安全问题、应用不同 一个是论坛等只需要请求的，一个是类似修改密码的。"
        },
        {
            question:"call和apply的区别?",
            answer:"Object.call(this,obj1,obj2,obj3);Object.apply(this,arguments)"
        },
        {
            question:"事件委托是什么?",
            answer:"让利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！"
        },
        {
            question:"解释jsonp的原理，以及为什么不是真正的ajax?",
            answer:"动态创建script标签，回调函数;Ajax是页面无刷新请求数据操作。"
        },{
            question:"javascript的本地对象，内置对象和宿主对象",
            answer:"本地对象为array obj regexp等可以new实例化<br/>" +
            "内置对象为gload Math 等不可以实例化的<br/>" +
            "宿主为浏览器自带的document,window 等"
        },
        {
            question:"document load 和document ready的区别",
            answer:"Document.onload 是在结构和样式加载完才执行js;Document.ready原生种没有这个方法，jquery中有 $().ready(function)"
        },
        {
            question:"javascript的同源策略",
            answer:"一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合"
        },
        {
            question:"this 关键字的指向",
            answer:"obj.foo() == obj        //方法调用模式,this指向obj<br/>" +
            "foo() == window;         //函数调用模式,this指向window<br/>" +
            "new obj.foo() == obj    //构造器调用模式, this指向新建立对象" +
            "foo.call(obj) == obj;//APPLY调用模式,this指向obj"
        },
        {
            question:"事件是什么？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？",
            answer:"1.我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。<br/>" +
            "2.事件处理机制：IE是事件冒泡、火狐是 事件捕获;<br/>" +
            "3.ev.stopPropagation();"
        },

        {
            question:"简述同步和异步的区别?",
            answer:"同步是阻塞模式，异步是非阻塞模式。<br/>" +
            "同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，" +
            "直到收到返回信息才继续执行下去；异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。" +
            "当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。"
        },
        {
            question:"如何解决跨域问题?",
            answer:"sonp、 iframe、window.name、window.postMessage、服务器上设置代理页面"
        },
        {
            question:"针对 jQuery 的优化方法？",
            answer:"1.基于Class的选择性的性能相对于Id选择器开销很大，因为需遍历所有DOM元素。<br/>" +
            "2.频繁操作的DOM，先缓存起来再操作。用Jquery的链式调用更好。比如：var str=$('a').attr('href');<br/>" +
            "3.for 循环每一次循环都查找了数组 (arr) 的.length 属性，在开始循环的时候设置一个变量来存储这个数字，可以让循环跑得更快：" +
            "for (var i = size, length = arr.length; i < length; i++) {}<br/>"
        },
        {
            question:"那些操作会造成内存泄漏？",
            answer:"内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。<br/>" +
            "1.垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），" +
            "或对该对象的惟一引用是循环的，那么该对象的内存即可回收。<br/>" +
            "2.setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。<br/>" +
            "3.闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）"
        },
        {
            question:"如何判断当前脚本运行在浏览器还是node环境中？",
            answer:"通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中"
        },
        {
            question:"JavaScript 原型，原型链 ? 有什么特点？",
            answer:"原型:每个对象都会在其内部初始化一个属性，就是prototype(原型)。<br/>" +
            "原型链：当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又" +
            "会有自己的prototype，于是就这样一直找下去，也就是我们平时所说的原型链的概念。<br/>" +
            "特点：JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。<br/>" +
            "当我们需要一个属性的时，Javascript引擎会先看当前对象中是否有这个属性， 如果没有的话，就会查找他的Prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象。"
        },
        {
            question:"什么是闭包（closure），为什么要用它，以及使用闭包的注意点是什么？",
            answer:"闭包就是能够读取其他函数内部变量的函数，由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，" +
            "因此可以把闭包简单理解成‘定义在一个函数内部的函数’<br/>" +
            "闭包的用途：一个是可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。<br/>" +
            "注意点:<br/>(1)由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存" +
            "泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。<br/>" +
            "(2)闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。"

        },
        {
            question:"js延迟加载的方式有哪些？",
            answer:"defer和async、动态创建DOM方式（用得最多）、按需异步载入js"
        },
        {
            question:"Javascript作用链域?",
            answer:"在JavaScript中，函数也是对象，实际上，JavaScript里一切都是对象。函数对象和其它对象一样，拥有可以通过代码访问的属性" +
            "和一系列仅供JavaScript引擎访问的内部属性。其中一个内部属性是[[Scope]]，由ECMA-262标准第三版定义，该内部属性包含了函数被创" +
            "建的作用域中对象的集合，这个集合被称为函数的作用域链，它决定了哪些数据能被函数访问。"
        },
        // {
        //     question:"",
        //     answer:""
        // }
    ];


    var conDiv=$(".content");
    change(arrQ0);
    $(".banner li").click(function () {
       var index=$(this).index();
       $(".banner li").removeClass("active");
       $(this).addClass("active");
       switch(index){
           case 0:
               change(arrQ0);
               break;
           case 1:
               change(arrQ1);
               break;
           case 2:
               change(arrQ2);
               break;
       }
   });

   function change(arrQ) {
       conDiv.empty();
       for(var i=0,len=arrQ.length;i<len;i++){
           var divQ=$("<div>");
           divQ.addClass("question");
           var h4=$("<h4>");
           var divAnswer=$("<p>");
           h4.html(arrQ[i].question).appendTo(divQ);
           divAnswer.html(arrQ[i].answer).appendTo(divQ);
           divQ.appendTo(conDiv);
       }
   }

});