webpackJsonp(["styles"],{

/***/ "./Style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./Style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./Style.css", function() {
			var newContent = require("!!./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./Style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./Style.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);\n\n\n#logoh1 {\n    color: white;\n    display: block;\n    font-size: 3em;\n    margin: 0.6em 0;\n    font-weight: bold;\n    margin-top: 3px;\n    margin-bottom: -3px;\n    padding:0;\n}\n\n\n.glitch {\n    font-family: \"Press Start 2P\", cursive;\n    position: relative;\n    margin: 0 auto;\n}\n\n\n.glitch::before,\n    .glitch::after {\n        -webkit-animation-iteration-count: infinite;\n        animation-iteration-count: infinite;\n        -webkit-animation-timing-function: linear;\n        animation-timing-function: linear;\n        animation-direction: alternate-reverse;\n        overflow: hidden;\n        position: absolute;\n        top: 0;\n        clip: rect(0, 900px, 0, 0);\n        content: attr(data-text);\n        padding: 0;\n    }\n\n\n.glitch::after {\n        -webkit-animation-name: glitch-animation;\n        animation-name: glitch-animation;\n        -webkit-animation-duration: 4s;\n        animation-duration: 4s;\n        left: 4px;\n        text-shadow: -2px 0 #0057ff;\n        background: #191919;\n        padding: 0;\n    }\n\n\n.glitch::before {\n        -webkit-animation-name: glitch-animation-2;\n        animation-name: glitch-animation-2;\n        -webkit-animation-duration: 6s;\n        animation-duration: 6s;\n        left: -4px;\n        text-shadow: 3px 0 #0057ff;\n        background: #191919;\n        padding: 0;\n    }\n\n\n/* Expanded Animations */\n\n\n@-webkit-keyframes glitch-animation-2 {\n    0% {\n        clip: rect(65px, 9999px, 100px, 0);\n    }\n\n    5% {\n        clip: rect(52px, 9999px, 74px, 0);\n    }\n\n    10% {\n        clip: rect(79px, 9999px, 85px, 0);\n    }\n\n\n\n\n    60.0% {\n        clip: rect(30px, 9999px, 16px, 0);\n    }\n\n    65% {\n        clip: rect(59px, 9999px, 50px, 0);\n    }\n\n    70% {\n        clip: rect(41px, 9999px, 62px, 0);\n    }\n\n    75% {\n        clip: rect(2px, 9999px, 82px, 0);\n    }\n\n    80% {\n        clip: rect(47px, 9999px, 73px, 0);\n    }\n\n    85.0% {\n        clip: rect(3px, 9999px, 27px, 0);\n    }\n\n    90% {\n        clip: rect(26px, 9999px, 55px, 0);\n    }\n\n    95% {\n        clip: rect(42px, 9999px, 97px, 0);\n    }\n\n    100% {\n        clip: rect(38px, 9999px, 49px, 0);\n    }\n}\n\n\n@keyframes glitch-animation-2 {\n    0% {\n        clip: rect(65px, 9999px, 100px, 0);\n    }\n\n    5% {\n        clip: rect(52px, 9999px, 74px, 0);\n    }\n\n    10% {\n        clip: rect(79px, 9999px, 85px, 0);\n    }\n\n   \n\n\n    60.0% {\n        clip: rect(30px, 9999px, 16px, 0);\n    }\n\n    65% {\n        clip: rect(59px, 9999px, 50px, 0);\n    }\n\n    70% {\n        clip: rect(41px, 9999px, 62px, 0);\n    }\n\n    75% {\n        clip: rect(2px, 9999px, 82px, 0);\n    }\n\n    80% {\n        clip: rect(47px, 9999px, 73px, 0);\n    }\n\n    85.0% {\n        clip: rect(3px, 9999px, 27px, 0);\n    }\n\n    90% {\n        clip: rect(26px, 9999px, 55px, 0);\n    }\n\n    95% {\n        clip: rect(42px, 9999px, 97px, 0);\n    }\n\n    100% {\n        clip: rect(38px, 9999px, 49px, 0);\n    }\n}\n\n\nbody {\n    background-color: #f9f9f9;\n    font-family: 'Rubik', sans-serif;\n}\n\n\n#main_component{\n\n    margin-top:60px;\n}\n\n\n@font-face {\n    font-family: logofont;\n    src: url('logofont.ccb1dfce06ad3883f8e3.ttf');\n}\n\n\n.navbar-form {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-top: none;\n    border-bottom: none;\n}\n\n\n#Home_title {\n    font-size: 34px;\n}\n\n\n#title{\n    font-size: 30px;\n}\n\n\n#no_matching_post {\n    font-size: 16px;\n    padding-top: 44px;\n}\n\n\n.answerscore {\n    font-size: 25px;\n    margin-top: 15px;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    position: relative;\n    float: right;\n    bottom: 81px;\n}\n\n\n.answer_body {\n    background: white;\n    display: block;\n    color: black;\n    padding: 10px;\n    border-radius: 3px;\n}\n\n\n#date {\n    font-size: 10px;\n    margin-left: 10px;\n    position: relative;\n    bottom: 6px;\n}\n\n\n#annotation_text_field {\n    margin-bottom: 15px;\n    height: 70px;\n    width: 210px;\n}\n\n\n#url {\n    color: darkblue;\n    text-decoration: underline;\n    font-size: 10px;\n   \n}\n\n\n.navbar-brand {\n    float: left;\n    height: 50px;\n    padding: 12px 15px;\n    font-size: 42px;\n    line-height: 20px;\n    font-family: logofont;\n    color: white !important;\n    position: relative;\n    text-shadow: -3px -3px 0px #a0a0a0;\n}\n\n\n#aaid:before {\n    content: \"Accepted answer id: \";\n}\n\n\n#tags {\n    background-color: lightblue;\n    color: darkblue;\n}\n\n\n#answer {\n    margin-left: 0px;\n}\n\n\n/*Overriding*/\n\n\n.navbar-default {\n    background-color: #191919;\n}\n\n\n.navbar-default .navbar-nav > li > a {\n    color: #a4a4a4;\n    font-weight: 600;\n}\n\n\n.navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-nav > li > a:hover {\n    color: white;\n}\n\n\n.navbar-default .navbar-brand {\n        color: white;\n    }\n\n\n/*Questions*/\n\n\n.questions_container {\n    clear: both;\n    width: 100%;\n    float: left;\n}\n\n\n.question_container {\n    width: 220px;\n    min-height: 277px;\n    padding: 10px;\n    display: inline-block;\n    float: left;\n    margin: 14px;\n    -webkit-box-shadow: 0 1px 2px rgba(25,25,25,0.2);\n            box-shadow: 0 1px 2px rgba(25,25,25,0.2);\n    border-radius: 2px;\n    background-color: white;\n}\n\n\n.question_container:hover {\n        background-image: url('pageflip.b751320b94188a40b668.jpg');\n        background-size: 65px;\n        background-repeat: no-repeat;\n        background-position: 161px 217px;\n        cursor: pointer;\n    }\n\n\n.questions_title {\n    font-size: 15px;\n    padding-bottom: 9px;\n    border-bottom: 1px solid #f2f2f2;\n    overflow: hidden;\n}\n\n\n.questions_user {\n    width: 100%;\n    padding-left: 4px;\n    \n}\n\n\n.Questions_score_block {\n    margin-left: 4px;\n}\n\n\n.page_button {\n    background-color: #0057ff;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 50px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.25;\n    padding: 6px 15px 7px;\n    text-shadow: none;\n    -webkit-transition-duration: 300ms;\n            transition-duration: 300ms;\n    -webkit-transition-property: background, color, border;\n    transition-property: background, color, border;\n    -webkit-transition-timing-function: linear;\n            transition-timing-function: linear;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    vertical-align: top;\n    margin-left: 8px;\n    margin-bottom: 20px;\n}\n\n\n.user_icon {\n    background-image: url('user.92150e2aeadee6a5f585.png');\n    width: 21px;\n    height: 26px;\n    display: inline-block;\n    background-size: cover;\n    margin-top: 7px;\n}\n\n\n#score {\n    display: inline-block;\n    font-size: 21px;\n}\n\n\n.time_icon {\n    background-image: url('calendar.8753b6147573d6fc25eb.png');\n    width: 28px;\n    height: 28px;\n    display: inline-block;\n    background-size: cover;\n    margin-top: 0px;\n    margin-left: 4px;\n}\n\n\n.questions_user_name {\n    position: relative;\n    left: 8px;\n    bottom: 3px;\n}\n\n\n.questions_tags_container{\n    display:inline;\n}\n\n\n.questions_tags {\n    background-color: #0057ff;\n    color: white;\n    margin: 4px;\n    padding: 2px;\n    display: inline-block;\n}\n\n\n.tags_icon {\n    background-image: url('tags.f279205d8262b6358960.png');\n    width: 21px;\n    height: 26px;\n    display: inline-block;\n    background-size: cover;\n    margin-top: 2px;\n    position: relative;\n    top: 6px;\n}\n\n\n.page_status {\n    font-weight:600;\n    margin:10px;\n\n}\n\n\n#footer {\n    width: 100%;\n    height: 30px;\n    background-color: #191919;\n    margin-top: 20px;\n    position: fixed;\n    bottom: 0;\n}\n\n\n#annotation_box {\n    position: fixed;\n    background: white;\n    z-index: 1;\n    width: 100%;\n    min-height: 153px;\n    right: 0px;\n    text-align: center;\n    padding-top: 20px;\n    border: 1px solid grey;\n}\n\n\n#cancelAnnot {\n\n    position: relative;\n    left: 9px;\n    bottom: 16px;\n    float: left;\n    font-size: 22px;\n    margin-right: -20px;\n    cursor: pointer;\n}\n\n\n.each_answer {\n    display: block;\n    background: #0057ff;\n    color: white;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: 4px;\n}\n\n\n#question_date {\n    display: inline-block;\n    position: relative;\n    bottom: 7px;\n}\n\n\n.comments_block {\n    display: block;\n    border: 1px solid #0057ff;\n    margin: 10px;\n    padding: 10px;\n    border-radius: 10px;\n    background:white;\n    color:black;\n}\n\n\n.comments_opener {\n    display: block;\n    background-color: black;\n    color: white;\n    padding: 10px;\n    cursor: pointer;\n    height: 53px;\n}\n\n\n#comment_h1 {\n    display: inline-block;\n    line-height: 0px;\n}\n\n\n#triangle_down {\n    font-size: 20px;\n    float: right;\n    position: relative;\n    right: 5px;\n    top: 8px;\n}\n\n\n.question_score_sign {\n    display: inline-block;\n    font-size: 29px;\n    margin-right: 6px;\n}\n\n\n.score_sign {\n    margin-right: 8px;\n}\n\n\n.comments_total {\n    font-size: 21px;\n    margin-right: 6px;\n    position: relative;\n    bottom: 1px;\n}\n\n\n.linked_posts {\n    display: block;\n    width: 100%;\n    background: #0057ff;\n    color: white;\n    float: right;\n    clear: both;\n}\n\n\n#mySearchhistory {\n    width: 100%;\n}\n\n\n.linked_posts_title{\n    margin:10px;\n}\n\n\n.linked_posts_title:hover {\nbackground-color:white;\ncolor:black!important;\ncursor:pointer;\n}\n\n\n.annotations_text {\n    margin: 10px;\n}\n\n\n#linkposts_button {\n    width: 100%;\n    display: block;\n    background: black;\n    cursor: pointer;\n}\n\n\n#annotations_box_button {\n    width: 100%;\n    display: block;\n    background: #74badc;\n    cursor: pointer;\n}\n\n\n#linkposts_button h2, #annotations_box_button h2 {\n        display: inline-block;\n        line-height: 2px;\n        margin-left: 5px;\n        font-size: 26px;\n    }\n\n\n#linkposts_button span, #annotations_box_button span {\n        position: relative;\n        top: 8px;\n        float: right;\n        font-size: 18px;\n        right: 5px;\n    }\n\n\n.customefieldtitle {\n    font-weight: 600;\n    font-size: 16px;\n    color: #0057ff;\n}\n\n\n.btn-primary {\n    color: #fff;\n    background-color: #0057ff;\n    border-color: #0057ff;\n}\n\n\n#thsearchbar {\n    width: 90%;\n}\n\n\n#mySearchBar {\n    width: 100%;\n    height: 34px;\n}\n\n\n.searchTR {\n    text-align: center;\n    padding: 25px;\n    border-bottom: 1px solid #0057ff;\n}\n\n\n.searchTR:hover {\n    cursor: pointer;\n    background: #e2e2e2;\n}\n\n\n.word_cloud_container div {\n    margin:auto;\n}\n\n\n.my_searchbar_th {\n    border-bottom: 0 !important;\n}\n\n\n.searchedTitel {\n    padding-top: 20px !important;\n    font-size: 16px;\n}\n\n\n#getTermNetworks:disabled,\n#getTermNetworks[disabled] {\n    background-color: grey;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 50px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    color: #fff;\n    cursor: progress;\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.25;\n    padding: 6px 15px 7px;\n    text-shadow: none;\n    -webkit-transition-duration: 300ms;\n            transition-duration: 300ms;\n    -webkit-transition-property: background, color, border;\n    transition-property: background, color, border;\n    -webkit-transition-timing-function: linear;\n            transition-timing-function: linear;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    vertical-align: top;\n    margin-left: 8px;\n    margin-bottom: 20px;\n    width: 216px;\n    height: 40px;\n    margin: auto;\n    display: block;\n}\n\n\n#getTermNetworks {\n    background-color: #0057ff;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 50px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.25;\n    padding: 6px 15px 7px;\n    text-shadow: none;\n    -webkit-transition-duration: 300ms;\n            transition-duration: 300ms;\n    -webkit-transition-property: background, color, border;\n    transition-property: background, color, border;\n    -webkit-transition-timing-function: linear;\n            transition-timing-function: linear;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    vertical-align: top;\n    margin-left: 8px;\n    margin-bottom: 20px;\n    width: 216px;\n    height: 40px;\n    margin: auto;\n    display: block;\n}\n\n\n.myHtmlSmiley {\n    font-size:22px;\n}\n\n\nsvg {\n    display: none;\n}\n\n\n.marking_container {\n    width: 220px;\n    min-height: 127px;\n    padding: 10px;\n    display: inline-block;\n    float: left;\n    margin: 14px;\n    -webkit-box-shadow: 0 1px 2px rgba(25,25,25,0.2);\n            box-shadow: 0 1px 2px rgba(25,25,25,0.2);\n    border-radius: 2px;\n    background-color: white;\n\n}\n\n\n.marking_container:hover {\n    background-image: url('pageflip.b751320b94188a40b668.jpg');\n    background-size: 65px;\n    background-repeat: no-repeat;\n    background-position: 161px 67px;\n    cursor: pointer;\n}\n\n\n.marking_title {\n    font-size: 16px;\n    padding-bottom: 9px;\n}\n\n\n#loading {\n    width: 256px;\n    height: 49px;\n    position: fixed;\n    top: 30%;\n    margin: auto;\n    background: blue;\n    z-index: 1;\n    color: white;\n    font-size: 18px;\n    text-align: center;\n    font-family: logoFont;\n    right: 50%;\n    margin-right: -128px;\n}\n\n\n#loading span {\n    position: relative;\n    top: 12px;\n}\n\n\n#MarkButton {\n    width: 30px;\n    height: 30px;\n    position: fixed;\n    top: 63px;\n    right: 7px;\n    z-index: 100;\n    border-radius: 100%;\n    background: #efd838;\n    color: white;\n    font-size: 28px;\n    text-align: center;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 2px 41px -5px rgb(239, 216, 56);\n    box-shadow: 0px 2px 41px -5px rgb(239, 216, 56);\n}\n\n\n#MarkButton span {\n    position: relative;\n    bottom: 6px;\n}\n\n\n#UnMarkButton {\n    width: 30px;\n    height: 30px;\n    position: fixed;\n    top: 63px;\n    right: 7px;\n    z-index: 100;\n    border-radius: 100%;\n    background: #fb5300;\n    color: white;\n    font-size: 23px;\n    text-align: center;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 2px 41px -5px #fb5300;\n    box-shadow: 0px 2px 41px -5px #fb5300;\n}\n\n\n#UnMarkButton span {\n        position: relative;\n        bottom: 2px;\n    }\n\n\n#AnnotButton {\n    width: 30px;\n    height: 30px;\n    position: fixed;\n    top: 63px;\n    right: 48px;\n    z-index: 100;\n    border-radius: 100%;\n    background: #63a3c1;\n    color: white;\n    font-size: 23px;\n    text-align: center;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 2px 41px -5px #63a3c1;\n    box-shadow: 0px 2px 41px -5px #63a3c1;\n}\n\n\n#AnnotButton span {\n        position: relative;\n        bottom: 2px;\n    }\n\n\n.jqcloud {\n        font-family: logofont;\n        font: 6px \"logofont\", \"Arial\", sans-serif;\n    }\n\n\n.answer_body p img {\n        max-width: 100%;\n    }\n\n\nblockquote {\n        padding: 10px 20px;\n        margin: 0 0 20px;\n        font-size: 17.6px;\n        border-left: 0;\n    }\n\n\n.answer_body p a {\n        color: #9ce7ff;\n        text-decoration: none;\n    }\n\n\n.col-xs-offset-1 {\n    margin-left: 0; \n}\n\n\n.col-xs-11 {\n    width: 100%;\n}\n\n\n.spacer {\n    height: 90px;\n    display: block;\n    clear: both;\n}\n\n\n.annot_text {\n    background-color: white;\n    color: #0057ff;\n    padding: 5px;\n    border-radius: 1px;\n}\n\n\n/* PreLoader Animation Starts*/\n\n\n.dotsContainer {\n    display: inline-block;\n    position: relative;\n    top: 8px;\n    right: 7px;\n}\n\n\n.dot {\n    width: 8px;\n    height: 8px;\n    background: #ffffff;\n    float: left;\n    margin: 0 5px;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    -webkit-animation: fx 1000ms ease infinite 0ms;\n    animation: fx 1000ms ease infinite 0ms;\n}\n\n\n.dot:nth-child(2) {\n        -webkit-animation: fx 1000ms ease infinite 300ms;\n        animation: fx 1000ms ease infinite 300ms;\n    }\n\n\n.dot:nth-child(3) {\n        -webkit-animation: fx 1000ms ease infinite 600ms;\n        animation: fx 1000ms ease infinite 600ms;\n    }\n\n\n@-webkit-keyframes fx {\n    50% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n\n\n@keyframes fx {\n    50% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n\n\n#sovauser_icon_field {\n    float: right;\n    margin-right: 20px;\n}\n\n\n#sovauser_icon {\n    font-size: 68px;\n    font-family: impact;\n    color: #191919;\n}\n\n\n#sovauser_name {\n    font-size: 18px;\n    position: relative;\n    bottom: 7px;\n    right: 15px;\n    font-family: \"Press Start 2P\";\n    color: #0057ff;\n}\n\n\n/* PreLoader Animation Ends*/\n\n\n#annotations_box {\n    display: block;\n    width: 100%;\n    background: #0057ff;\n    color: white;\n    float: right;\n}\n\n\n#annotation_submit_button {\n  background-color: #63a3c1;\n}\n\n\n.edit_annot {\n    color: #B4DEF2;\n    float: right;\n    margin-right: 9px;\n    text-decoration: underline;\n    cursor:pointer;\n}\n\n\n.delete_annot {\n    color: #B4DEF2;\n    float: right;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n\n.myForm {\n    color: #0057ff;\n}\n\n\n#triangle{\n    display:none;\n}\n\n\n.user_container {\n    width: 220px;\n    min-height: 220px;\n    padding: 10px;\n    padding-top: 39px;\n    display: inline-block;\n    float: left;\n    margin: 14px;\n    -webkit-box-shadow: 0 1px 2px rgba(25,25,25,0.2);\n            box-shadow: 0 1px 2px rgba(25,25,25,0.2);\n    border-radius: 2px;\n    background-color: white;\n}\n\n\n.user_icon_users{\n\n    display:block;\n    margin:auto;\n}\n\n\n.users_displayname_users {\n    text-align: center;\n    display: block;\n}\n\n\n.location_icon {\n    background-image: url('location.f6a364e67c4cec320689.png');\n    background-repeat: no-repeat;\n    width: 24px;\n    height: 25px;\n    display: inline-block;\n    background-size: cover;\n    margin-right: 2px;\n}\n\n\n.location_container {\n    text-align: center;\n    display: block;\n    margin-top: 14px;\n}\n\n\n.users_see_questions {\n    margin-top: 10px;\n    color: #0057ff;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n\n/*Media Queries Mobile First*/\n\n\n@media screen and (min-width: 480px) {\n    #mySearchhistory {\n        width: 400px;\n    }\n    #annotation_box {\n        position: fixed;\n        background: white;\n        z-index: 1;\n        width: 358px;\n        min-height: 153px;\n        top: 144px;\n        right: 63px;\n        text-align: center;\n        padding-top: 20px;\n        border: 1px solid grey;\n    }\n    #triangle {\n        display:block;\n        height: 50px;\n        width: 30px;\n        position: relative;\n        margin-top: -50px;\n        top: -16px;\n        left: 327px;\n        background-image: url(data:image/png;base64,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);\n        background-repeat: no-repeat;\n        background-size: 100%;\n    }\n\n    .linked_posts {\n        width: 300px;\n    }\n    #annotations_box {\n        width: 300px;\n    }\n\n    #linkposts_button h2 {\n        font-size: 30px;\n    }\n    #annotations_box_button h2 {\n        font-size: 30px;\n    }\n    \n    \n    .col-xs-offset-1 {\n        margin-left: 8.33333333%;\n    }\n    .col-xs-11 {\n        width: 91.66666667%;\n    }\n  \n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./Style.css");


/***/ })

},[1]);
//# sourceMappingURL=styles.bundle.js.map