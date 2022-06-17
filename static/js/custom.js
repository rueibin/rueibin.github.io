//---path
var pathName=window.document.location.pathname;
var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
//include data
var headerIncludeHtmlStr='<div class="ui container"><div class="ui secondary stackable menu header-menu"><h2 class="ui orange header item">RueiBin\'s Blog</h2></div></div><a href="#" class="ui menu-toggle black icon button c-top-right c-mobile-show"><i class="sidebar icon"></i></a>';
var rightContentIncludeStr='<div class="ui segments"><div class="ui secondary segment aboutme"><i class="bookmark icon"></i></div></div><div class="ui segments c-margin-top-large"><div class="ui secondary segment"><div class="ui two column grid"><div class="column"><i class="idea icon"></i>分類</div><div class="right aligned column"><a href="#">more<i class="angle double right icon"></i></a></div></div></div><div class="ui blue segment"><div class="ui fluid vertical menu right-content-type"></div></div></div><div class="ui segments c-margin-top-large"><div class="ui secondary segment"><div class="ui two column grid"><div class="column"><i class="tags icon"></i>基礎學習</div><div class="right aligned column"><a href="#">more<i class="angle double right icon"></i></a></div></div></div><div class="ui blue segment basicLearn"></div></div>';
var footerIncludeStr='<div class="ui center aligned container"><div class="ui inverted divided stackable grid"><div class="four wide column"><h4 class="ui inverted header c-text-thin c-text-spaced c-opacity-mini">最新博客</h4><div class="ui inverted link list footer-news"></div></div><div class="four wide column"><h4 class="ui inverted header c-text-thin c-text-spaced c-opacity-mini">聯絡我</h4><div class="ui inverted link list"><a href="#" class="item c-opacity-mini">Email:swallow952002@gmail.com</a></div></div><div class="eight wide column"><h4 class="ui inverted header c-text-thin c-text-spaced c-opacity-mini">Rueibin</h4><p class="c-opacity-mini">這個我的個人博客、會分享關於程式、寫作和思考相關的任何內容，希望可以給來到這裡的人有所幫助...</p></div></div><div class="ui inverted section divider"></div><p class="c-text-thin c-text-spaced c-padded-tb-mini c-opacity-mini">Copyright © 2021 Rueibin All Rights Reserved Rueibin</p></div>';
//raw data
var headerDataObj=[{"title":"首頁","titleUrl":"/index.html","id":0 },{"title":"網頁程式APP","titleUrl":"/program.html","id":1 },{"title":"DB&OS","titleUrl":"/dbos.html","id":2 },{"title":"美工繪圖","titleUrl":"/artcad.html","id":3 },{"title":"作品","titleUrl":"/project.html","id":4 },{"title":"雜記","titleUrl":"/memo.html","id":5 },{"title":"歷史記錄","titleUrl":"/history.html","id":6 },{"title":"關於我","titleUrl":"/about.html","id":7 },{"title":"搜尋","titleUrl":"/search.html","id":8 },{"title":"Java","titleUrl":"/java.html","num":2,"id":9 },{"title":"Vue","titleUrl":"/vue.html","num":1,"id":10 },{"title":"Android","titleUrl":"/android.html","num":0,"id":11 },{"title":"PHP","titleUrl":"/php.html","num":5,"id":12 },{"title":"Node.js","titleUrl":"/node.html","num":0,"id":13 },{"title":"Python","titleUrl":"/python.html","num":0,"id":14 },{"title":"前端","titleUrl":"/web.html","num":1,"id":15 },{"title":"資料庫","titleUrl":"/db.html","num":0,"id":16 },{"title":"作業系統","titleUrl":"/os.html","num":0,"id":17 },{"title":"美工","titleUrl":"/art.html","num":0,"id":18 },{"title":"AutoCAD","titleUrl":"/autocad.html","num":5,"id":19 },{"title":"作品","titleUrl":"/project.html","num":4,"id":20 },{"title":"雜記","titleUrl":"/memo.html","num":0,"id":21 },{"title":"Java入門","titleUrl":"/basic-java.html","id":22 },{"title":"PHP入門","titleUrl":"/basic-php.html","id":23 },{"title":"Vue入門","titleUrl":"/basic-vue.html","id":24 },{"title":"MySQL入門","titleUrl":"/basic-mysql.html","id":25 },{"title":"JavaScript入門","titleUrl":"/basic-javascript.html","id":26 },{"title":"Node.js入門","titleUrl":"/basic-node.html","id":27 }];
var rightContentTypeDataObj=[{"title":"Java","titleUrl":"/java.html","num":2,"id":9 },{"title":"Vue","titleUrl":"/vue.html","num":1,"id":10 },{"title":"Android","titleUrl":"/android.html","num":0,"id":11 },{"title":"PHP","titleUrl":"/php.html","num":5,"id":12 },{"title":"Node.js","titleUrl":"/node.html","num":0,"id":13 },{"title":"Python","titleUrl":"/python.html","num":0,"id":14 },{"title":"前端","titleUrl":"/web.html","num":2,"id":15 },{"title":"資料庫","titleUrl":"/db.html","num":0,"id":16 },{"title":"作業系統","titleUrl":"/os.html","num":0,"id":17 },{"title":"美工","titleUrl":"/art.html","num":0,"id":18 },{"title":"AutoCAD","titleUrl":"/autocad.html","num":5,"id":19 },{"title":"作品","titleUrl":"/project.html","num":5,"id":20 },{"title":"雜記","titleUrl":"/memo.html","num":0,"id":21 }];
var dataBasciLearn=[{"title":"Java入門","titleUrl":"/basic-java.html","id":22 },{"title":"PHP入門","titleUrl":"/basic-php.html","id":23 },{"title":"Vue入門","titleUrl":"/basic-vue.html","id":24 },{"title":"MySQL入門","titleUrl":"/basic-mysql.html","id":25 },{"title":"JavaScript入門","titleUrl":"/basic-javascript.html","id":26 },{"title":"Node.js入門","titleUrl":"/basic-node.html","id":27 }];
var indexDataObj=[{"title":"PS從0到1系列：奇幻圖片製作","content":"使用Photoshop來繪製奇幻圖片，使用了色相飽和度和濾鏡。...","author":"RueiBin","date":"2022-06-16","view":"1000","titleUrl":"/pages/photoshop/ps021-001.html","contentImageUrl":"/static/images/ps021-001-9.jpg","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"美工繪圖","tag2":"Photoshop","type1":3,"type2":99,"tutorial":0 },{"title":"Semantic-ui個人Blog網站","content":"使用Semantic-ui來建置個人Blog網站，這個網站是靜態網站，沒有使用到後端程式與資料庫，因為放在GitHub上面，只有使用Html+JS+jQuery，不過，這樣也就夠了。 一個網站中有很多共用的資料，依本專案的網頁舉例，如：導覽列，分類，基礎學習，頁尾....","author":"RueiBin","date":"2022-06-14","view":"1000","titleUrl":"/pages/project/semantic-blog.html","contentImageUrl":"/static/images/semantic-index.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"作品","tag2":"前端","type1":4,"type2":15,"tutorial":0 },{"title":"簡單的Vue2.x CRUD應用","content":"使用Vue2.x來快速開發一個員工管理系統，採前後分離的方式，前端使用Vue....","author":"RueiBin","date":"2021-11-10","view":"1000","titleUrl":"/pages/web/vue2-crud.html","contentImageUrl":"/static/images/vue2xcurd-list.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"網頁程式APP","tag2":"Vue","type1":1,"type2":10,"tutorial":0 },{"title":"AutoCAD廠房專案繪製","content":"老闆要蓋廠房，但要有圖跟建築師討論，於是我就被叫去繪圖，依照老闆的想法繪製，然後交給建給....","author":"RueiBin","date":"2021-09-07","view":"1000","titleUrl":"/pages/autocad/architectural.html","contentImageUrl":"/static/images/architectural-1.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"美工繪圖","tag2":"AutoCAD","type1":3,"type2":19,"tutorial":0 },{"title":"AutoCAD噴字印板繪製","content":"那時候要在牆上噴上標語，例如：嚴禁人員乘坐。最快的方法就是在WORD輸入想要的字，列印....","author":"RueiBin","date":"2021-09-06","view":"1000","titleUrl":"/pages/autocad/laser-cutting.html","contentImageUrl":"/static/images/laser-cutting-1.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"美工繪圖","tag2":"AutoCAD","type1":3,"type2":19,"tutorial":0 },{"title":"簡單的Laravel 7 CRUD應用","content":"使用Laravel來快速開發一個員工管理系統，前端使用blade模版，後端使用Model，Controller...","author":"RueiBin","date":"2021-09-06","view":"1000","titleUrl":"/pages/php/laravel7crud.html","contentImageUrl":"/static/images/laravel7crud-list.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"網頁程式APP","tag2":"PHP","type1":1,"type2":12,"tutorial":0 },{"title":"AutoCAD捲料機繪製","content":"管芯成型機是十幾年前，在我任職作業員期間繪製的。之前繪製的管芯成型機後，好像吃了在大補丹....","author":"RueiBin","date":"2021-09-03","view":"1000","titleUrl":"/pages/autocad/coiler.html","contentImageUrl":"/static/images/coiler-three-view.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"美工繪圖","tag2":"AutoCAD","type1":3,"type2":19,"tutorial":0 },{"title":"AutoCAD管芯成型機繪製","content":"管芯成型機是十幾年前，在我任職作業員期間繪製的。這個專案難度不小，當作磨練，沒有壓力哪來的....","author":"RueiBin","date":"2021-09-03","view":"1000","titleUrl":"/pages/autocad/fire-tube-core-forming-machine.html","contentImageUrl":"/static/images/fire-tube-core-forming-machine-three-view.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"美工繪圖","tag2":"AutoCAD","type1":3,"type2":19,"tutorial":0 },{"title":"AutoCAD料架繪製","content":"料架是十幾年前，在我任職作業員期間使用AutoCAD繪製的。蛤，作業員也要會AutoCAD，真誇張....","author":"RueiBin","date":"2021-09-03","view":"1000","titleUrl":"/pages/autocad/rack.html","contentImageUrl":"/static/images/rack-3d-1.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"美工繪圖","tag2":"AutoCAD","type1":3,"type2":19,"tutorial":0 },{"title":"快來學，將Markdown嵌入到HTML","content":"最近在寫學習筆記，正在煩惱如何將程碼嵌入到網頁中，在谷哥的幫助下，終於讓我找到....","author":"RueiBin","date":"2021-08-31","view":"1000","titleUrl":"/pages/web/markdown.html","contentImageUrl":"https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"網頁程式APP","tag2":"前端","type1":1,"type2":15,"tutorial":0 },{"title":"簡單的Java Servlet CRUD應用","content":"使用Java Servlet來開發一個員工管理系統。包含Servelet、JSP、Filter、GSON、DBUtil與C3P0等。 抽取出一個BaseServet減少系統Servlet數量，以及獨立出DAO層與Service層， 使用單例模式來連接MySQL，與DBUtil簡化...","author":"RueiBin","date":"2021-08-27","view":"1000","titleUrl":"/pages/java/java-servlet-crud.html","contentImageUrl":"/static/images/javaservletcrud-list.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"網頁程式APP","tag2":"Java","type1":1,"type2":9,"tutorial":0 },{"title":"Laravel 5 專案管理系統","content":"使用Laravel來開發一個專案管理系統。可以新增專案，並指定專案負責人（1人或多人）與專案成員， 專案在新增任務時，可以設定規定完成日期與預計完成日期，並指派任務給成員。 專案是以列表呈現，而專案任務是以甘...","author":"RueiBin","date":"2021-08-24","view":"1000","titleUrl":"/pages/project/laveral5-project.html","contentImageUrl":"/static/images/lp-p-t-create-result.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"作品","tag2":"PHP","type1":4,"type2":12,"tutorial":0 },{"title":"Laravel 5 圖書借閱歸還管理系統","content":"使用Laravel來開發一個圖書借閱歸還管理系統。因剛學了Laravel，來測試學完Laravel的熟悉度。 跟CodeIgniter比較起來Laravel，Laravel學習曲線長， Laravel具有驗證，路由，Session，緩存，資料庫遷移，單元測試常用...","author":"RueiBin","date":"2021-08-24","view":"1000","titleUrl":"/pages/project/laveral5-library.html","contentImageUrl":"/static/images/ll-permission.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"作品","tag2":"PHP","type1":4,"type2":12,"tutorial":0 },{"title":"簡單的Java Swing CRUD應用","content":"使用Java Swing來開發一個圖形界面的員工管理系統。 涉及Swing裡常用的元件與監廳器，包括JFrame、JPanel、JTable、JLabel、JButton與各種Layout等。 本專案採用分層結構設計，有dao層，entity層...","author":"RueiBin","date":"2021-08-18","view":"1000","titleUrl":"/pages/java/java-swing-crud.html","contentImageUrl":"/static/images/sw-list.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"網頁程式APP","tag2":"Java","type1":1,"type2":9,"tutorial":0 },{"title":"同泰電子企業形象網站","content":"這是我轉職後的第二個PHP專案，企業形象網站建置，擔任兩個角色，網頁開發（前後端）角色+美工設計角色。 要從網管工程師轉到軟體工程師其實是一項大挑戰，也需要一個機會，會來了就要把握住。 那一陣子想換工作都在104人力...","author":"RueiBin","date":"2021-08-18","view":"1000","titleUrl":"/pages/project/uniflex.html","contentImageUrl":"/static/images/uniflex-index.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"作品","tag2":"PHP","type1":4,"type2":12,"tutorial":0 },{"title":"早期第一個PHP專案，人車管制系統","content":"這個專案是我任職網管期間，使用原生PHP開發的小系統，包含前後端，也是我的第一個PHP專案，值得紀念。 那個時候公司有改善提案的制度，資訊隸屬於管理部底下，每個月每個部門都要提2件改善提案， 其實如果站在資訊的角度要...","author":"RueiBin","date":"2021-08-18","view":"1000","titleUrl":"/pages/project/peopleandcar.html","contentImageUrl":"/static/images/p1-1.PNG","authorImageUrl":"https://picsum.photos/id/48/100/100","tag1":"作品","tag2":"PHP","type1":4,"type2":12,"tutorial":0 }];
//---
var count = indexDataObj.length;
var pageSize=5;
var pageCount=Math.ceil(count/pageSize);
var currentPage =1;
var startPage=0;
var endPage=pageSize;
//---
$(".header-include").append($(headerIncludeHtmlStr));
$(".right-content-include").append($(rightContentIncludeStr));
$(".footer-include").append($(footerIncludeStr));

//----
var RueiBinTools={
    getHrefPath:function(titleUrl){
        let hrefPath=projectName+titleUrl;
        if(pathName.indexOf('pages')>=0){
            hrefPath=titleUrl;
        }
        return hrefPath;
    }
}

//--
var RueiBin={
    init:function(type){
        RueiBin.initPublicData(type);
        RueiBin.initContent(type);
        $(".header-include").on( "click", ".menu-toggle", function() {
            $('.c-item').toggleClass('c-mobile-hide');
        });
        $('title').html("ReuiBin's Blog");
    },
    initContent:function (type) {
        if(type==-1  || type==7){
            return false;
        }
        if(type==6){
            RueiBin.buildHistoryData();
            return false;
        }
        if(type==8){
            RueiBin.buildSearchData();
            return false;
        }

        if(type==0){
            for(var i=startPage; i<endPage;i++){
                RueiBin.buildData(indexDataObj[i]);
            }
            RueiBin.showPreNextBtn(type);
        }else{
            let countItem=0;
            for(let i=0; i<count;i++){

                let typeNum=indexDataObj[i].type1;

                if(type>8){
                    typeNum=indexDataObj[i].type2;
                }

                if(typeNum==type && countItem<pageSize && indexDataObj[i].tutorial==0){
                    RueiBin.buildData(indexDataObj[i]);
                }
                if(typeNum==type && countItem<pageSize && indexDataObj[i].tutorial==1){
                    RueiBin.buildData(indexDataObj[i]);
                }
                if(typeNum==type){
                    countItem++;
                }
            }
            if(countItem>pageSize){
                RueiBin.showPreNextBtn(type);
            }
        }
    },
    initPublicData:function (type) {
        RueiBin.initHeaderMenu(type);
        RueiBin.initRightContentTypeData();
        RueiBin.buildRightContentBasicLearn();
        $.each(indexDataObj, function (index, item) {
            // if(index<10) {
            //     RueiBin.buildRightContentNewsData(item);
            // }
            if(index<3){
                RueiBin.buildFooterData(item);
            }
        });
        RueiBin.addAboutMeA();
    },
    initHeaderMenu:function(type){
        let title= null;
        let titleUrl= null;
        $.each(headerDataObj, function(index, item){
            if(index<7){
                RueiBin.buildHeaderMenuData(item,type);
            }
            if(type==index && type!=0){
                title=item.title;
                titleUrl=item.titleUrl;
            }
        });

        let searchInput=$("<input>").addClass("searchTxt").attr('type','type').attr('placeholder','Search...');
        let searchIcon=$("<i></i>").addClass("search link icon");
        let inputDiv=$("<div></div>").addClass("ui icon input").append(searchInput,searchIcon);
        let itemDiv=$("<div></div>").addClass("right item").append(inputDiv);
        $(".header-menu").append(itemDiv)

        //set breadcrumb
        let breadcrumb=$('<div></div>').addClass('ui small breadcrumb');
        breadcrumb.append($('<a href="/index.html" class="section">Home</a>'));
        if(type>0){
            breadcrumb.append($('<i class="right chevron icon divider"></i>'));
            breadcrumb.append($('<a href="'+titleUrl+'" class="section">'+ title +'</a>'));
        }
        let breadcrumbSegment=$("<div></div>").addClass("ui top segment").append(breadcrumb)
        $(".left-conent-segment").append(breadcrumbSegment);
    },
    initRightContentTypeData:function(){
        $.each(rightContentTypeDataObj, function(index, item){
            RueiBin.buildRightContentTypeData(item);
        });
    },
    buildData:function(result){
        let authorImage=$('<img>').addClass("ui avatar image").attr('src',result.authorImageUrl);
        let author=$("<div></div>").addClass("content").append( $("<a></a>").addClass("header").attr('href','#').text(result.author));

        let authorItem = $("<div></div>").addClass("item").append(authorImage,author);
        let dateItem = $("<div></div>").addClass("item").append($('<i></i>').addClass('clock outline icon'),result.date);

        let authorInfo = $("<div></div>").addClass("ui horizontal link list").append(authorItem,dateItem);

        let authorCoumn = $("<div></div>").addClass("eleven wide column").append(authorInfo);
        let tag1=$("<a></a>").addClass("ui pink basic label c-padded-mini c-text").attr('href','#').text(result.tag1);
        let tag2=$("<a></a>").addClass("ui pink basic label c-padded-mini c-text").attr('href','#').text(result.tag2);
        let tagCoumn = $("<div></div>").addClass("right aligned five wide column").append(tag1,tag2);

        let buttomGrid = $("<div></div>").addClass("ui grid").append(authorCoumn,tagCoumn);

        let titleH3=$("<H2></H2>").addClass("ui blue header").append( $("<a></a>").attr('href',projectName+result.titleUrl).text(result.title));
        let contentP=$("<p></p>").addClass("c-text-16").text(result.content);

        let contentCoumn = $("<div></div>").addClass("eleven wide column").append(titleH3,contentP,buttomGrid);

        let contentImageStr=result.contentImageUrl;
        let contentImage=null;
        if(contentImageStr.indexOf('static')>=0){
            contentImage=$('<img>').addClass("ui rounded bordered image").attr('src',projectName+result.contentImageUrl);
        }else{
            contentImage=$('<img>').addClass("ui rounded bordered image").attr('src',result.contentImageUrl);
        }
        let imageCoumn = $("<div></div>").addClass("five wide column").append($("<a></a>").attr('href',projectName+result.titleUrl).append(contentImage));

        let aGrid = $("<div></div>").addClass("ui mobile reversed stackable grid").append(contentCoumn,imageCoumn);
        let totalInfo = $("<div></div>").addClass("ui padded vertical segment").append(aGrid);

        let listContentSegment = $("<div></div>").addClass("ui segment").append(totalInfo);

        $(".left-conent-segment").append(listContentSegment);
    },
    buildHistoryData:function(){
        let checkHeaderNum=0;
        let preYM=null;
        $.each(indexDataObj, function (index, item) {
            let yyyyMM=item.date.split('-');
            let newYYYYMM=yyyyMM[0]+'年'+yyyyMM[1]+'月';
            let MMDD=yyyyMM[1]+'月'+yyyyMM[2]+'日';
            let ym=item.date.substr(0,7);

            if(item.date.includes(ym)){
                if(preYM!=ym){
                    checkHeaderNum=0;
                    preYM=null;
                }
                if(checkHeaderNum==0){
                    $(".left-conent-segment").append( $('<h2 class="ui center aligned header">'+newYYYYMM+'</h2>'));
                    checkHeaderNum++;
                    preYM=ym;
                }
            }
            let spanContent=$('<span></span>').append(
                $('<div class="ui pink basic left label c-padded-mini">'+item.tag1+'</div>'),
                $('<div class="ui pink basic left label c-padded-mini">'+item.tag2+'</div>'),
                $('<div class="ui blue basic left pointing label c-padded-mini">'+MMDD+'</div>'));

            let aContent=$('<a></a>').addClass('item').attr('href',projectName+item.titleUrl).text(item.title+" ").append(
                spanContent,
                $('<div class="ui orange left label c-padded-mini">原創</div>')
            );

            $(".left-conent-segment").append($('<div class="ui fluid vertical menu"></div>').append(aContent));
        });
    },
    buildSearchData:function(){
        let data=JSON.parse(localStorage.getItem(('searchObj')));
        $.each(data, function (index, item) {
            RueiBin.buildData(item);
        });
        localStorage.clear();;
    },
    buildPreNextBtn:function(){
        let preBtn=$("<div></div>").addClass("column").append('<button class="ui mini blue button preBtn">上一頁</button>');
        let nextBtn=$("<div></div>").addClass("right aligned column").append('<button class="ui mini blue button nextBtn">下一頁</button>');

        let btnGrid=$("<div></div>").addClass("ui middle aligned two column grid").append(preBtn,nextBtn);
        let btnSegment=$("<div></div>").addClass("ui bottom segment").append(btnGrid);

        $(".left-conent-segment").append(btnSegment);
    },
    setPreNextBtnType:function(type){
        $('.nextBtn').attr('type',type);
        $('.preBtn').attr('type',type);
    },
    showPreNextBtn:function(type){
        RueiBin.buildPreNextBtn();
        $('.preBtn').attr('disabled','disabled').attr('type',type);
        $('.nextBtn').attr('type',type);
    },
    buildFooterData:function(result){
        let newA=$("<a></a>").addClass("item c-opacity-mini").attr('href',RueiBinTools.getHrefPath(result.titleUrl)).text(result.title);
        $(".footer-news").append(newA);
    },
    buildRightContentTypeData:function(result){
        let numDiv = $("<div></div>").addClass("ui teal basic left pointing label").text(result.num);
        let typeA=$("<a></a>").addClass("item").attr('href',RueiBinTools.getHrefPath(result.titleUrl)).text(result.title).append(numDiv);
        $(".right-content-type").append(typeA);
    },
    buildRightContentBasicLearn:function(){
        $.each(dataBasciLearn, function(index, item){
            let aBasic=$('<a href="'+RueiBinTools.getHrefPath(item.titleUrl)+'" class="ui blue basic label c-margin-tb-tiny">'+item.title+'</a>');
            $('.basicLearn').append(aBasic);
        });
    },
    buildRightContentNewsData:function(result){
        let newA=$("<a></a>").addClass("c-black c-text-thin").attr('href',RueiBinTools.getHrefPath(result.titleUrl)).text(result.title);
        let newSegment = $("<div></div>").addClass("ui segment").append(newA);
        $(".right-content-news").append(newSegment);
    },
    addAboutMeA:function(){
        let txtAbout='About Me';
        let aboutA=$("<a></a>").attr('href',RueiBinTools.getHrefPath('/about.html')).text(txtAbout);
        $(".aboutme").append(aboutA);
    },
    buildHeaderMenuData:function(result,type){
        let menuA=$("<a></a>").addClass("c-item c-mobile-hide item").attr('data-id',result.id).attr('href',RueiBinTools.getHrefPath(result.titleUrl)).text(result.title);
        if(result.id==type){
            menuA.addClass('active');
        }
        $(".header-menu").append(menuA);
    },
    goToTop:function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    getMenuType:function(type){
        let newObj=[];
        $.each(indexDataObj, function(index, item){
            let currType=null
            if(type<8){
                currType=item.type1;
            }else{
                currType=item.type2;
            }
            if(currType==type){
                newObj.push(item);
            }
        });
        pageCount=Math.ceil(newObj.length/pageSize);
        return newObj;
    },
}
let bb=pathName.substring(pathName.substr(1).indexOf('/')+1);
//run
$.each(headerDataObj, function(index, item){
    if(pathName.indexOf(item.titleUrl)>=0){
        RueiBin.init(index);
        return false;
    }
    if(pathName=='/'){
        RueiBin.init(0);
        return false;
    }
});

if(pathName.indexOf('pages')>=0){
    RueiBin.init(-1);
}

$('.left-conent-segment').on('click', '.nextBtn', function () {
    let type=$(this).attr('type');
    currentPage+=1;
    startPage=startPage+pageSize;
    endPage=endPage+pageSize;
    if(endPage>count){
        endPage=count;
    }
    $(".left-conent-segment").empty();
    if(type==0){
        for(let i=startPage; i<endPage;i++){
            RueiBin.buildData(indexDataObj[i]);
        }
    }else{
        let newObj=RueiBin.getMenuType(type);
        if(endPage>newObj.length){
            endPage=newObj.length;
        }
        for(let i=startPage; i<endPage;i++){
            RueiBin.buildData(newObj[i]);
        }
    }

    RueiBin.buildPreNextBtn();
    RueiBin.setPreNextBtnType(type);
    if(currentPage>=pageCount){
        $('.nextBtn').attr('disabled','disabled');
    }
    if(currentPage<=pageCount){
        $('.preBtn').removeAttr('disabled','disabled');
    }
    RueiBin.goToTop();
});
//
$('.left-conent-segment').on('click', '.preBtn', function () {
    let type=$(this).attr('type');
    currentPage-=1;
    if(endPage==count){
        endPage=startPage;
    }else{
        endPage=endPage-pageSize;
    }
    startPage=startPage-pageSize;
    $(".left-conent-segment").empty();
    if(type==0){
        for(var i=startPage; i<endPage;i++){
            RueiBin.buildData(indexDataObj[i]);
        }
    }else {
        let newObj=RueiBin.getMenuType(type);
        if(endPage%pageSize!=0){
            endPage=startPage+pageSize;
        }
        for(let i=startPage; i<endPage;i++){
            RueiBin.buildData(newObj[i]);
        }
    }
    RueiBin.buildPreNextBtn();
    RueiBin.setPreNextBtnType(type);
    if(currentPage<pageCount){
        $('.nextBtn').removeAttr('disabled','disabled');
    }
    if(currentPage==1){
        $('.preBtn').attr('disabled','disabled');
    }
    RueiBin.goToTop();
});


$('.header-menu').on('click', '.search ', function () {
    localStorage.clear();
    let keyword=$('.searchTxt').val();
    let searchObj=[];
    $.each(indexDataObj, function (index, item) {
        if(item.title.includes(keyword)){
            searchObj.push(item);
        }
    });
    localStorage.setItem('searchObj', JSON.stringify(searchObj));
    location.replace( RueiBinTools.getHrefPath('/search.html'));
});
