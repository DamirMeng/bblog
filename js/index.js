//页面属性
function loadApp() {

    // Create the flipbook

    $('.flipbook').turn({
        // Width

        width: 922,

        // Height

        height: 600,

        // Elevation

        elevation: 50,

        // Enable gradients

        gradients: true,

        // Auto center this flipbook

        autoCenter: true

    });
}

// Load the HTML4 version if there's not CSS transform
$(".flipbook").bind("end", function (event, pageObject, turned) { //翻页后回调函数
    //   alert("turn.end:" +pageObject.page);
});
//加载文件
yepnope({
    test: Modernizr.csstransforms,
    yep: ['js/turn.js'],
    nope: ['js/turn.html4.min.js'],
    both: ['css/basic.css'],
    complete: loadApp
});
$(".flipbook").bind("first", function (event) {
    // alert("You are at the beginning of the flipbook");d第一页回调函数
});
$(".flipbook").bind("last", function (event) {
    // alert("You are at the end of the flipbook");最后一页回调函数
});
$(window).bind('keydown', function (e) {


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
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                //var obj = eval ("(" + txt + ")");
                document.querySelector(".div1").innerHTML = this.responseText;
                document.querySelector(".div2").innerHTML = myObj.class

            }
        };
        xmlhttp.open("GET", "json/template.json", true);


        xmlhttp.send();



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
        $(".flipbook").turn("page", 7); //跳转到首页
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
console.log("x")













//　　　　AJAX设置
var First = 6
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj.pages.length)

        // console.log(contentlength)

        var length = myObj.pages.length
        createPages(length)
        var daily = $(".flipbook").children()
        setFooter()
        setTop()
        //生成日记页面的主载体div   class="flipbook"的子元素div
        function createPages(pageNumber) { //总的页数
            pageNumber++
            if (pageNumber % 2 == 0) {
                pageNumber++
            }
            for (let index = 0; index < pageNumber; index++) {
                var element = document.querySelector('.flipbook')
                var div = document.createElement('div')
                element.insertBefore(div, document.querySelector('.last-page'));
            }
        }
        //设置下方页码div与class  为上方页眉的笔添加div与class   
        function setFooter() {
            for (let index = First; index < First + length; index++) {
                const element = daily[index];
                var points = document.createElement('div')
                var img = document.createElement('img')
                element.appendChild(img)
                element.appendChild(points)
                img.classList.add('title-image')
                points.classList.add('page-number')
                if (index > 0) {
                    document.querySelectorAll('.title-image')[index - First].src = "image/title.png"
                    if (index < 10) document.querySelectorAll('.page-number')[index - First].innerHTML = "0" + index - First + 1
                    else document.querySelectorAll('.page-number')[index - First].innerHTML = index - First + 1
                }
            }
        }
        //设置上方的date与tag  
        function setTop() {
            //var First = 3
            for (let index = First; index < First + length; index++) {
                const element = daily[index];
                var div = document.createElement('div')
                var div1 = document.createElement('div')
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
                document.querySelectorAll('.date')[index].innerHTML = date
                document.querySelectorAll('.tag')[index].innerHTML = tag

                //    var contentlength = myObj.pages[index].content.length
                //  createElements(contentlength)

                // for (let index1 = 0; index1 < contentlength; index1++) { //设置文章内容
                //     const element = document.querySelectorAll('.daily-content')
                //     element[index1].innerHTML = myObj.pages[index].content[index1]
                // }

            }
        }
        console.log(content)

        function createElements() {
            for (let index = First; index < First + length; index++) { //每页都创建	<div class="content">
            if (1) {//判断字数，跳过一页不加内容
                
            }
                const element = daily[index];
                var div = document.createElement('div')
                element.appendChild(div)
                div.classList.add('content')
            }
            var content = document.querySelectorAll('.content')
            for (let index = 0; index < content.length; index++) { //遍历每一个	<div class="content">
                var div1 = document.createElement('div')
                const element = content[index];
                element.appendChild(div1)
                div1.classList.add('daily-title')

                // content[index].


            }
        }

        createElements()




        var GetLength = function (str) {
            ///<summary>获得字符串实际长度，中文2，英文1</summary>
            ///<param name="str">要获得长度的字符串</param>
            var realLength = 0, len = str.length, charCode = -1;
            for (var i = 0; i < len; i++) {
              charCode = str.charCodeAt(i);
              if (charCode >= 0 && charCode <= 128) realLength += 1;
              else realLength += 2;
            }
            return realLength;
          };
         
//如果字数超出   添加一页
// if(GetLength>)



























        //遍历所有的pages
        for (let index = 0; index < length; index++) {

            //获取json中content的段数
            var contents = myObj.pages[index].content.length
            //选择P元素的数组
            for (let i = 0; i < contents; i++) { //设置p的数量
                var p = document.createElement('p')
                document.querySelectorAll('.content')[index].appendChild(p)
                p.classList.add('daily-content')
                // p.innerHTML="ffffff"
              var title=  document.querySelectorAll('.content')[index].querySelector('.daily-title')
             var jsontitle=myObj.pages[index].title
             title.innerHTML=jsontitle
                var paragraph = document.querySelectorAll('.content')[index].querySelectorAll('.daily-content')[i]
                var jsonparagraph=myObj.pages[index].content[i]
                    paragraph.innerHTML = jsonparagraph
            }
        }



        function setContentText(ps) {
            document.querySelectorAll('.content')

            // for (let index = 0; index < ps; index++) {
            //     // const element = ps[index];
            //     var p = document.createElement('p')
            //     element.appendChild(p)
            //     p.classList.add('daily-content')
            // }

        }
        //选择指定的p
        var w = document.querySelectorAll('.content')[0].querySelectorAll('.daily-content')[0]
        // var o = document.querySelectorAll(w)
        console.log(w)
    }
};
xmlhttp.open("GET", "json/template.json", true);
xmlhttp.send();




























//封装AJAX加载JSON函数
function setMyjson(filename) { //选择器 ，json文件名，json的key，数组的序号
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var date1 = myObj.pages[0].date
            var tag = myObj.pages[0].tag
            setTop(date1, tag)

        }
    };
    xmlhttp.open("GET", "json/" + filename + ".json", true);
    xmlhttp.send();
}
$("button").click(function () {


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            //var obj = eval ("(" + txt + ")");
            document.querySelector(".div1").innerHTML = this.responseText;
            document.querySelector(".div2").innerHTML = myObj.class

        }
    };

    xmlhttp.open("GET", "json/test.json", true);
    xmlhttp.send();
});
$(window).bind('keydown', function (e) {
    if (e.keyCode == 65) {
        element = $("<div />").html("Loading...");
        $(".flipbook").turn("addPage", element, 10);
    }



})
// console.log(k)