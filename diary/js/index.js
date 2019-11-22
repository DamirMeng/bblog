if (window.screen.availWidth < 600) {
    //页面属性
    function loadApp() {

        // Create the flipbook

        $('.flipbook').turn({
            // Width

            width: (document.documentElement.clientWidth) * 0.9,

            // Height

            height: (document.documentElement.clientHeight) * 0.8,

            // Elevation

            elevation: 50,
            // Enable gradients

            gradients: true,

            // Auto center this flipbook

            autoCenter: true

        });
    }
    //加载文件
    yepnope({
        test: Modernizr.csstransforms,
        yep: ['js/turn.js'],
        nope: ['js/turn.html4.min.js'],
        both: ['css/index_mobile.css'],
        complete: loadApp
    });
} else {
    //页面属性
    function loadApp() {

        // Create the flipbook

        $('.flipbook').turn({
            // Width

            width: (document.documentElement.clientWidth) * 0.7,

            // Height

            height: (document.documentElement.clientHeight) * 0.8,

            // Elevation

            elevation: 50,

            // Enable gradients

            gradients: true,

            // Auto center this flipbook

            autoCenter: true

        });
    }
    //加载文件
    yepnope({
        test: Modernizr.csstransforms,
        yep: ['js/turn.js'],
        nope: ['js/turn.html4.min.js'],
        both: ['css/index.css'],
        complete: loadApp
    });


}

String.prototype.byteLength = function () { //获取字符串的字节数，扩展string类型方法
    var b = 0;
    o = this.length; //初始化字节数递加变量并获取字符串参数的字符个数
    if (o) { //如果存在字符串，则执行计划
        for (var i = 0; i < o; i++) { //遍历字符串，枚举每个字符
            if (this.charCodeAt(i) > 255) { //字符编码大于255，说明是双字节字符
                b++; //则累加2个
            } else {
                b += 0.5; //否则递加一次
            }
        }
        return b; //返回字节数
    } else {
        return 0; //如果参数为空，则返回0个
    }
}


$(".flipbook").bind("start", function (event, pageObject, corner) {
    // displayNo()
});
// Load the HTML4 version if there's not CSS transform


$(".flipbook").bind("first", function (event) {
    // alert("You are at the beginning of the flipbook");d第一页回调函数
});
$(".flipbook").bind("last", function (event) {
    // alert("You are at the end of the flipbook");最后一页回调函数
});
//键盘事件
$(window).bind('keydown', function (e) {
    $(".flipbook").turn("display", "single"); //单页展示


    if (e.keyCode == 37) { //  左方向键
        $(".flipbook").turn("previous"); //上一页
    } else if (e.keyCode == 40) //下方向键
    {
        $(".flipbook").turn("display", "single"); //单页展示
    } else if (e.keyCode == 39) { //  右方向键
        $(".flipbook").turn("next"); //下一页
    } else if (e.keyCode == 38) { //上方向键
        $(".flipbook").turn("display", "double"); //双页展示
    } else if (e.keyCode == 96) { //number 0
        alert(".flipbook has " + $(".flipbook").turn("pages") + " pages"); //总的页数
    } else if (e.keyCode == 97) { //number 1
        displayYes1()

    } else if (e.keyCode == 98) { //number 2
        x = $(".flipbook").turn("page")
        alert(x)

        element = $("<div />", {
            "class": "p10"
        }).html(x);


    } else if (e.keyCode == 99) { //number 3
        // Reduce the size in half of the flipbook
        $(".flipbook").turn("zoom", 0.5); //缩放  可填数值
    } else if (e.keyCode == 100) { //number  4
        $(".flipbook").turn("peel", "br"); //边角特效
    } else if (e.keyCode == 101) { //number 5
        $(".flipbook").turn("pages", 5); //设置总页数
    } else if (e.keyCode == 102) { //number 6
        $(".flipbook").turn("page", 9); //跳转到首页
    } else if (e.keyCode == 103) { //number 7
        alert("The current page is: " + $(".flipbook").turn("page")) //当前页码  一个
    } else if (e.keyCode == 104) { //number 8
        //跳转页码
        $(".flipbook").turn("page", 13);
    } else if (e.keyCode == 105) { //number 9
        //当前页码  两个
        var view = $(".flipbook").turn("view").join(" and ");
        alert("Current view: " + view);
    }
});

//遗弃的函数
function displayNo() { //优化翻页时的代办事项栏的显示---不显示
    var view0 = $(".flipbook").turn("view")[0]; //左页
    var view1 = $(".flipbook").turn("view")[1]; //右边页面
    var even0 = ".page-wrapper[page=" + view0 + "]"
    var even1 = ".page-wrapper[page=" + view0 + "]>div"
    var odd0 = ".page-wrapper[page=" + view1 + "]"
    $("." + odd0).css('overflow', 'hidden');
    $("." + even0).css('overflow', 'hidden');
    $("." + even1).css('overflow', 'hidden');
    // $('.items-right').css('display', 'none') //全部取消显示
    // $('.items').css('height', '0%')
    $('.items-left').css('width', '0%')
    $('.items-left').css('height', '0%')
}

function displayYes() { //页面显示的设置
    if (k != $(".flipbook").turn("view")[0]) { //换页后页面全部不显示
        $('.page-wrapper').css('overflow', 'hidden');
        $('.items-right').css('width', '0%')
        $('.items-right').css('height', '0%')
        $('.items-left').css('width', '0%')
        $('.items-left').css('height', '0%')
    }
    var view0 = $(".flipbook").turn("view")[0]; //左页
    var view1 = $(".flipbook").turn("view")[1]; //右边页面
    k = view0
    var even0 = ".page-wrapper[page=" + view0 + "]"
    var even1 = ".page-wrapper[page=" + view0 + "]>div"
    var odd0 = ".page-wrapper[page=" + view1 + "]"
    // $('.items-right').css('display', 'block')
    $("." + odd0).css('overflow', 'visible');
    $("." + even0).css('overflow', 'visible');
    $("." + even1).css('overflow', 'visible');
    $('.items-right').css('width', '80%')
    $('.items-right').css('height', '80%')
    $('.items-left').css('width', '80%')
    $('.items-left').css('height', '80%')
}

function displayYes1() {
    $('.page-wrapper[page="3"]').css('overflow', 'visible');

}

function creatList(params) {
    // $("ol").append("<li>追加列表项</li>");
    // <div class="items-right">
    for (let index = First; index < First + length; index++) {
        const element = d
        var div = document.createElement('div')
        var div1 = document.createElement('div')
        element.appendChild(div)
        element.appendChild(div1)
        div1.classList.add('tag')
        div.classList.add('date')
    }

}
//遗弃的函数
//　　　　AJAX设置
var First = 8
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var length = myObj.pages.length //pages的长度，即json页数
        createPages(length)
        var diary = $(".flipbook").children() //总的页数
        setFooter()
        setTop()
        setContents()
        createElements()
        setArticle()
        //生成日记页面的主载体div   class="flipbook"的子元素div
        function createPages(pageNumber) { //总的页数pageNumber
            pageNumber++
            if (pageNumber % 2 == 0) {
                pageNumber++ //保证最后一页可以合上
            }
            for (let index = 0; index < pageNumber; index++) { //在 class="last-page"前插入页面
                var element = document.querySelector('.flipbook')
                var div = document.createElement('div')
                element.insertBefore(div, document.querySelector('.last-page'));
            }
        }

        function setContents() {
            for (let index = 0; index < length; index++) {
                var number = document.querySelector('.list-number')
                var li = document.createElement('li') //date
                var li2 = document.createElement('li') //date
                number.appendChild(li2)
                document.querySelector('.contents-list').appendChild(li)
                var title = document.querySelector('.contents-list').querySelectorAll('li')[index + 1]
                var jsontitle = myObj.pages[index].title
                var jsondate = myObj.pages[index].date
                title.innerHTML = jsontitle + "（" + jsondate + "）"
                if (index < 9) {
                    number.querySelectorAll('li')[index + 1].innerHTML = "0" + (index + 1)
                } else {
                    number.querySelectorAll('li')[index + 1].innerHTML = (index + 1)
                }
            }
        }
        //设置下方页码div与class  为上方页眉的笔添加div与class   和list  待办事项
        function setFooter() {
            for (let index = First; index < First + length; index++) {
                const element = diary[index];
                var div = document.createElement('div') //页码
                var img1 = document.createElement('img') //切换按钮
                var img = document.createElement('img') //上面的🖊
                element.appendChild(img)
                element.appendChild(div)
                element.appendChild(img1)
                img.classList.add('title-image')
                div.classList.add('page-number')
                if (index % 2 == 0) {
                    img1.classList.add('change', 'change-right')
                    img1.src = "image/turn.svg"
                } else {
                    img1.classList.add('change', 'change-left')
                    img1.src = "image/turn.svg"
                }
                if (index > 0) {
                    document.querySelectorAll('.title-image')[index - First].src = "image/title.png"
                    if (index - First < 9) {
                        var u = index - First + 1
                        document.querySelectorAll('.page-number')[index - First].innerHTML = "0" + u
                    } else {
                        document.querySelectorAll('.page-number')[index - First].innerHTML = index - First + 1
                    }
                }
            }
        }
        //设置上方的date与tag的div、添加class  
        function setTop() {
            for (let index = First; index < First + length; index++) {
                const element = diary[index];
                var div = document.createElement('div') //date
                var div1 = document.createElement('div') //tag
                element.appendChild(div)
                element.appendChild(div1)
                div1.classList.add('tag')
                div.classList.add('date')
            }
            //为date和tag加载json数据
            for (let index = 0; index < length; index++) {
                const element = myObj.pages[index];
                var date = element.date
                var tag = myObj.pages[index].tag
                document.querySelectorAll('.date')[index].innerHTML = "Date：" + date
                document.querySelectorAll('.tag')[index].innerHTML = "Tag：" + tag
            }
        }

        function createElements() {
            for (let index = First; index < First + length; index++) { //每页都创建	<div class="content">
                const element = diary[index];
                var div = document.createElement('div')
                var div1 = document.createElement('ul')
                element.appendChild(div1)
                element.appendChild(div)
                div.classList.add('content')
                div1.classList.add('items')
            }
            var content = document.querySelectorAll('.content')
            for (let index = 0; index < content.length; index++) { //遍历每一个	<div class="content">
                var div1 = document.createElement('div')
                const element = content[index];
                element.appendChild(div1)
                div1.classList.add('daily-title')
            }
        }
        //遍历所有的pages      设置文章的内容
        function setArticle() {
            for (let index = 0; index < length; index++) {
                //获取json中content的段数
                var contents = myObj.pages[index].content.length
                //选择P元素的数组
                for (let i = 0; i < contents; i++) { //设置p的数量
                    var p = document.createElement('p')
                    document.querySelectorAll('.content')[index].appendChild(p)
                    p.classList.add('daily-content')
                    var title = document.querySelectorAll('.content')[index].querySelector('.daily-title')
                    var jsontitle = myObj.pages[index].title
                    title.innerHTML = jsontitle
                    var paragraph = document.querySelectorAll('.content')[index].querySelectorAll('.daily-content')[i]
                    var jsonparagraph = myObj.pages[index].content[i]
                    paragraph.innerHTML = jsonparagraph
                }
            }

            // 遍历所有的pages    的  items-----事项
            for (let index = 0; index < length; index++) {
                //获取json中content的段数
                var dones = myObj.pages[index].done.length //选择li元素class=done的数组c长度
                var undones = myObj.pages[index].done.length
                // 设置done（已完成）de 的内容
                for (let i = 0; i < dones; i++) { //设置li的数量
                    var li = document.createElement('li')
                    document.querySelectorAll('.items')[index].appendChild(li)
                    li.classList.add('done')
                    var items_done = document.querySelectorAll('.items')[index].querySelectorAll('.done')[i]
                    var json_done = myObj.pages[index].done[i]
                    items_done.innerHTML = json_done
                }
                // 设置undone（未完成）de 的内容
                for (let i = 0; i < undones; i++) { //设置li的数量
                    var li = document.createElement('li')
                    document.querySelectorAll('.items')[index].appendChild(li)
                    li.classList.add('undone')
                    var items_undone = document.querySelectorAll('.items')[index].querySelectorAll('.undone')[i]
                    var json_undone = myObj.pages[index].undone[i]
                    items_undone.innerHTML = json_undone
                }
            }
        }
        //扉页的设置
        document.querySelector('#articles-number').innerHTML = "日记篇数：" + myObj.pages.length + " 篇"
        document.querySelector('#page-count').innerHTML = "总页数：" + (myObj.pages.length + 10) + " 页"
        //获取总字数：
        var words = 0
        for (let index = 0; index < length; index++) {
            var ContentLength = myObj.pages[index].content.length
            for (let i = 0; i < ContentLength; i++) {
                const element = myObj.pages[index].content[i];
                words += (element.byteLength())
            }
        }
        words = parseInt(words)
        document.querySelector('#word-number').innerHTML = "总字数：" + words + " 字"
    }
};
xmlhttp.open("GET", "json/template.json", true);
xmlhttp.send();
//切换页面
var change_index = 0

function setControl() {
    //切换按钮的设置
    $(document).on("click", ".change", function () {
        if (change_index % 2 == 0) {
            $(".content").css("display", "none");
            $(".items").css("display", "block");
            //可添加提示内容
        } else {
            $(".content").css("display", "block");
            $(".items").css("display", "none");
        }
        change_index++
    });
    // 改变QQ地址


    if (document.documentElement.clientWidth < 600) {

        document.querySelector('#qq').href = "mqqwpa://im/chat?chat_type=wpa&uin=790430354&version=1&src_type=web&web_src=oicqzone.com"
    }
    $(".flipbook").bind("end", function (event, pageObject, turned) { //翻页后回调函数
        $(".items").css("display", "none");
        $(".content").css("display", "block"); //优化换页后的页面
    });

    //目录设置
    $(document).on("click", ".contents-list", function () {
        var length2 = document.querySelector('.contents-list').querySelectorAll('li').length
        for (let index = 0; index < length2; index++) {
            var li = document.querySelector('.contents-list').querySelectorAll('li')[index]
            console.log(index)
            if ($(event.target).is($(li))) {
                if (index == 0) {
                    $(".flipbook").turn("page", 6)
                } else {
                    index += First
                    $(".flipbook").turn("page", index)
                }
            }
        }
    });
}
setControl()
window.onload = function () {
    console.log(document.documentElement.clientWidth)
    console.log(window.screen.availWidth)

}

var h = document.documentElement.clientHeight + "px"
$("#font-cover").css("height", h);

// $("#font-cover").css("display", "none")

document.querySelector("#val").onchange = function () {
    // $(document).on("click", "#font-cover", function () {
    // $("#font-cover").css("display", "none")

    // console.log(this.value)
    if (window.screen.availWidth < 600) {

        $(".flipbook").turn("display", "single"); //单页展示


    } else {
        // $(".flipbook").turn("zoom", 1.5);
        $(".flipbook").turn("display", "double"); //单页展示

    }
    var password = "mdming"
    if (this.value == password) {
        $("#font-cover").css("display", "none")

    }
}