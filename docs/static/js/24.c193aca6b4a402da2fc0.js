webpackJsonp([24],{cYcQ:function(t,i,n){var e=n("tb+E");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("23914a76",e,!0,{})},rmhw:function(t,i,n){"use strict";function e(t){n("cYcQ")}Object.defineProperty(i,"__esModule",{value:!0});var a={name:"sixin",data:function(){return{activeName:"quanbu",guizeshow:!1,liaotianshow:!1}},computed:{},methods:{handleClick:function(){},guizeShow:function(){this.guizeshow=!this.guizeshow},liaotianShow:function(){this.liaotianshow=!this.liaotianshow}},mounted:function(){}},r=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"sixin"}},[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"全部",name:"quanbu"}},[n("div",{staticClass:"tui-tab-panel tui-tab-panel-active",attrs:{role:"tabPanel"}},[n("div",{staticClass:"pgc-private-letter-all"},[n("div",{staticClass:"pgc-private-letter-all-userlist"},[n("div",{staticClass:"pgc-list-item-left pgc-private-letter-all-user-item",class:{active:t.liaotianshow},staticStyle:{padding:"17px 16px 17px 24px"},on:{click:function(i){t.liaotianShow()}}},[n("div",{staticClass:"pgc-list-item-left-head"},[n("span",{staticClass:"tui-badge",attrs:{title:"0"}},[n("img",{staticClass:"img-avatar",staticStyle:{height:"38px",width:"38px","background-color":"rgb(238, 238, 238)"},attrs:{src:"https://p1.pstatp.com/thumb/18a100187a56b3a04a10",alt:""}})])]),n("div",{staticClass:"pgc-list-item-left-content"},[n("div",{staticClass:"pgc-list-item-left-primary"},[n("div",{staticClass:"pgc-private-letter-all-user-primary"},[t._v("A-四年后154867775"),n("em",[t._v("04-09")])])]),n("div",{staticClass:"pgc-list-item-left-secondary"},[t._v("您好")])])])]),t._v(" "),t.liaotianshow?n("div",{staticClass:"pgc-private-letter-all-talkbox"},[n("div",{staticClass:"pgc-private-letter-all-talkbox-head"},[n("span",[t._v("与"),n("em",[t._v("A-四年后154867775")]),t._v("对话中")]),n("div",{staticClass:"pgc-hover-popup pgc-private-letter-all-talkbox-head-option"},[n("i",{staticClass:"iconfont icon-more ",attrs:{type:"more"}})])]),n("div",{staticClass:"pgc-private-letter-all-talkbox-body"},[n("div",[n("div",{staticClass:"pgc-message-stamp center"},[t._v("04-09 15:03")]),n("div",{staticClass:"pgc-info-item normal info-item"},[n("div",{staticClass:"pgc-info-item-head"},[n("img",{staticClass:"img-avatar",staticStyle:{height:"40px",width:"40px"},attrs:{src:"https://p1.pstatp.com/thumb/18a100187a56b3a04a10",alt:""}})]),n("div",{staticClass:"pgc-info-item-body"},[n("span",{staticClass:"pgc-info-item-content"},[t._v("您好"),n("span",{staticClass:"pgc-info-item-extra"},[n("div",{staticClass:"pgc-hover-popup "},[n("i",{staticClass:"iconfont icon-more ",attrs:{type:"more"}})])])])])])])]),n("div",{staticClass:"pgc-private-letter-all-talkbox-tail"},[n("div",{staticClass:"message-box"},[n("textarea",{staticClass:"editor",attrs:{maxlength:"300"}}),n("div",{staticClass:"toolbar"},[n("span",[t._v("0/300")]),n("em",{}),n("button",{staticClass:"tui-btn tui-btn-primary tui-btn-sm message-box-btn",attrs:{type:"button"}},[t._v("发 送")])])])])]):n("div",[n("div",{staticClass:"pgc-private-letter-all-talkbox"},[n("div",{staticClass:"pgc-private-letter-all-talkbox-body"},[n("i",{staticClass:"empty-tip"})])])]),t._v(" "),n("span"),n("span"),n("div",{staticClass:"tui-notification-container tui-notification-container-empty"},[n("div")])])])]),t._v(" "),n("el-tab-pane",{attrs:{label:"关键字自动回复",name:"second"}},[n("div",{staticClass:"tui-tab-panel tui-tab-panel-active",attrs:{role:"tabPanel"}},[n("div",{staticClass:"pgc-im-keyword-reply"},[n("div",{staticClass:"pgc-im-keyword-reply-header"},[n("button",{staticClass:"tui-btn tui-btn-secondary add-new-rule",attrs:{type:"button"},on:{click:function(i){t.guizeShow()}}},[n("i",{staticClass:"iconfont icon-add ",attrs:{type:"add"}}),t._v("添加规则")]),n("a",{staticClass:"pgc-im-keyword-reply-tip",attrs:{href:"//www.toutiao.com/i6429226935166960130/",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何设置关键词回复？")])]),t._v(" "),t.guizeshow?n("div",{staticClass:"pgc-im-keyword-reply-body"},[n("div",{staticClass:"private-letter-keyword-rule-item"},[n("div",{staticClass:"rule-header"},[n("p",{staticClass:"rule-name"},[t._v("新规则")]),n("a",{staticClass:"operate"},[t._v("收起")])]),n("div",{staticClass:"edit-body"},[n("div",{staticClass:"edit-item"},[n("div",{staticClass:"edit-label"},[t._v("规则名")]),n("div",{staticClass:"edit-content"},[n("div",{staticClass:"pgc-input-hint "},[n("span",{staticClass:"tui-input-wrapper"},[n("input",{staticClass:"tui-input",attrs:{value:"",minlength:"0",type:"text"}})]),n("span",{staticClass:"pgc-hint-text hint"},[t._v("0/12")])])])]),n("div",{staticClass:"edit-item"},[n("div",{staticClass:"edit-label top"},[t._v("关键字")]),n("div",{staticClass:"edit-content"},[n("span",{staticClass:"add-keyword"},[t._v("添加关键字")])])]),n("div",{staticClass:"edit-item"},[n("div",{staticClass:"edit-label top"},[t._v("回　复")]),n("div",{staticClass:"edit-content"},[n("div",{staticClass:"add-reply"},[n("i",{staticClass:"iconfont icon-add ",attrs:{type:"add"}}),t._v("回复")])])]),n("div",{staticClass:"edit-content"},[n("div",{staticClass:"footer"},[n("div",{staticClass:"reply-type"},[n("label",[n("div",{staticClass:"tui-checkbox"},[n("span",{staticClass:"tui-checkbox-inner"}),n("input",{staticClass:"tui-checkbox-input",attrs:{value:"on",type:"checkbox"}})]),n("span",{staticClass:"tui-checkbox-text"},[t._v("全部回复")])])]),n("div",{staticClass:"actions"},[n("span",{staticClass:"delete-rule"},[t._v("删除")]),n("button",{staticClass:"tui-btn tui-btn-secondary",attrs:{disabled:"",type:"button"}},[t._v("保 存")])])])])]),n("span")])]):t._e(),t._v(" "),n("div",{staticClass:"pgc-im-keyword-reply-footer"},[n("span",[t._v("暂无规则")])]),n("span"),n("div",{staticClass:"tui-notification-container tui-notification-container-empty"},[n("div")])])])])],1)],1)},o=[],l={render:r,staticRenderFns:o},s=l,p=n("VU/8"),c=e,d=p(a,s,!1,c,null,null);i.default=d.exports},"tb+E":function(t,i,n){i=t.exports=n("FZ+f")(!1),i.push([t.i,'\n@charset "UTF-8";\n/*文字通用设置*/\n#sixin .private-letter-keyword-rule-item {\n  font-size: 14px;\n  padding: 16px 0;\n  border-bottom: 1px solid #e8e8e8;\n}\n#sixin .private-letter-keyword-rule-item .display-body {\n  margin-top: 20px;\n}\n#sixin .private-letter-keyword-rule-item .display-item {\n  margin-top: 5px;\n}\n#sixin .private-letter-keyword-rule-item .display-item:first-child {\n  margin-top: 0;\n}\n#sixin .private-letter-keyword-rule-item .display-content, #sixin .private-letter-keyword-rule-item .display-label {\n  display: inline-block;\n}\n#sixin .private-letter-keyword-rule-item .rule-name {\n  display: inline-block;\n  font-weight: 700;\n}\n#sixin .private-letter-keyword-rule-item .operate {\n  float: right;\n  cursor: pointer;\n}\n#sixin .private-letter-keyword-rule-item .keyword {\n  color: #222;\n  padding: 0 6px;\n  background: #f4f5f6;\n  border-radius: 4px;\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  border: 1px solid #f4f5f6;\n  height: 28px;\n  line-height: 26px;\n}\n#sixin .private-letter-keyword-rule-item .edit-item {\n  margin-top: 16px;\n  position: relative;\n}\n#sixin .private-letter-keyword-rule-item .edit-label {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n#sixin .private-letter-keyword-rule-item .edit-label.top {\n  top: 5px;\n  -webkit-transform: none;\n  transform: none;\n}\n#sixin .private-letter-keyword-rule-item .edit-content {\n  margin-left: 100px;\n}\n#sixin .private-letter-keyword-rule-item .edit-content .keyword {\n  cursor: pointer;\n}\n#sixin .private-letter-keyword-rule-item .edit-content .keyword .iconfont {\n  font-size: 12px;\n  color: #999;\n  cursor: pointer;\n  margin-left: 3px;\n}\n#sixin .private-letter-keyword-rule-item .add-keyword {\n  color: #999;\n  cursor: pointer;\n  padding: 0 6px;\n  border-radius: 4px;\n  border: 1px dashed #ddd;\n  display: inline-block;\n  height: 28px;\n  line-height: 26px;\n}\n#sixin .private-letter-keyword-rule-item .reply-item {\n  margin: 6px 0;\n  position: relative;\n}\n#sixin .private-letter-keyword-rule-item .reply-item .iconfont {\n  position: absolute;\n  top: 5px;\n  right: 8px;\n  font-size: 12px;\n  color: #999;\n  cursor: pointer;\n}\n#sixin .private-letter-keyword-rule-item .reply-item .hint {\n  display: inline-block;\n  height: 28px;\n  line-height: 28px;\n  padding: 0 5px;\n  background: #fff;\n  border-radius: 5px;\n  bottom: 1px;\n  right: 11px;\n}\n#sixin .private-letter-keyword-rule-item .private-letter-keyword-input:first-child textarea {\n  margin-top: 0;\n}\n#sixin .private-letter-keyword-rule-item .add-reply {\n  color: #406599;\n  cursor: pointer;\n  height: 34px;\n  line-height: 34px;\n}\n#sixin .private-letter-keyword-rule-item .add-reply:hover {\n  opacity: .6;\n}\n#sixin .private-letter-keyword-rule-item .footer {\n  border-top: 1px dashed #e8e8e8;\n  padding-top: 16px;\n  height: 50px;\n  line-height: 32px;\n}\n#sixin .private-letter-keyword-rule-item .reply-type {\n  display: inline-block;\n}\n#sixin .private-letter-keyword-rule-item .reply-type .tui-checkbox-text, #sixin .private-letter-keyword-rule-item .reply-type label {\n  font-size: 14px;\n}\n#sixin .private-letter-keyword-rule-item .actions {\n  float: right;\n}\n#sixin .private-letter-keyword-rule-item .actions button {\n  padding: 0;\n  font-size: 14px;\n  width: 60px;\n  height: 32px;\n  line-height: 30px;\n}\n#sixin .private-letter-keyword-rule-item .actions button:not([disabled]) {\n  color: #60a3f5;\n  background-color: transparent;\n  border-color: #60a3f5;\n}\n#sixin .private-letter-keyword-rule-item .actions button:not([disabled]):focus, #sixin .private-letter-keyword-rule-item .actions button:not([disabled]):hover {\n  background-color: #4895f3;\n  color: #fff;\n  border-color: #4895f3;\n}\n#sixin .private-letter-keyword-rule-item .actions button:not([disabled]):active, #sixin .private-letter-keyword-rule-item .actions button:not([disabled]):active:focus, #sixin .private-letter-keyword-rule-item .actions button:not([disabled]):active:hover {\n  background-color: #3087f2;\n  color: #fff;\n  border-color: #3087f2;\n}\n#sixin .private-letter-keyword-rule-item .actions .delete-rule {\n  cursor: pointer;\n  color: #999;\n  display: inline-block;\n  margin-right: 17px;\n}\n#sixin .pgc-message-stamp {\n  font-size: 14px;\n  color: #999;\n  letter-spacing: 0;\n  line-height: 14px;\n}\n#sixin .pgc-message-stamp.center {\n  text-align: center;\n}\n#sixin .pgc-message-stamp.right {\n  text-align: right;\n}\n#sixin .pgc-info-item {\n  position: relative;\n  margin: 24px 16px;\n}\n#sixin .pgc-info-item .pgc-info-item-head {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n}\n#sixin .pgc-info-item .pgc-info-item-body {\n  padding-left: 52px;\n  padding-right: 64px;\n}\n#sixin .pgc-info-item .pgc-info-item-body .pgc-info-item-content {\n  position: relative;\n  background: #fff;\n  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 0 10px 10px 10px;\n  padding: 8px 12px;\n  font-size: 14px;\n  line-height: 24px;\n  color: #505050;\n  letter-spacing: 0;\n  display: inline-block;\n  white-space: normal;\n  word-break: break-all;\n}\n#sixin .pgc-info-item .pgc-info-item-body .pgc-info-item-extra {\n  position: absolute;\n  top: 50%;\n  right: -30px;\n  color: #999;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n#sixin .pgc-info-item.reverse .pgc-info-item-head {\n  right: 0;\n}\n#sixin .pgc-info-item.reverse .pgc-info-item-body {\n  padding-left: 64px;\n  padding-right: 52px;\n  text-align: right;\n}\n#sixin .pgc-info-item.reverse .pgc-info-item-body .pgc-info-item-content {\n  background: #60a3f5;\n  -webkit-box-shadow: 0 2px 4px 0 rgba(96, 162, 245, 0.4);\n  box-shadow: 0 2px 4px 0 rgba(96, 162, 245, 0.4);\n  border-radius: 10px 0 10px 10px;\n  color: #fff;\n  text-align: left;\n}\n#sixin .pgc-info-item.reverse .pgc-info-item-extra {\n  left: -30px;\n  right: inherit;\n}\n#sixin .message-box {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  height: 146px;\n  padding: 12px 16px 38px;\n  background: #fff;\n  font-size: 14px;\n  color: #505050;\n}\n#sixin .message-box .editor {\n  width: 100%;\n  height: 100%;\n  border: none;\n  padding: 0;\n  margin: 0;\n  resize: none;\n  outline: none;\n  vertical-align: middle;\n  font-size: 14px;\n  color: #505050;\n  letter-spacing: 0;\n}\n#sixin .message-box .editor:focus {\n  border: none;\n}\n#sixin .message-box .toolbar {\n  display: block;\n  color: #999;\n  position: relative;\n}\n#sixin .message-box .toolbar em {\n  color: #ed4040;\n  margin-left: 10px;\n  font-size: 12px;\n}\n#sixin .message-box .toolbar em.success {\n  color: #34c765;\n}\n#sixin .message-box .message-box-btn {\n  width: 60px;\n  height: 24px;\n  padding: 0;\n  position: absolute;\n  right: 0;\n}\n#sixin .pgc-list-item-left {\n  position: relative;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  cursor: pointer;\n}\n#sixin .pgc-list-item-left .pgc-list-item-left-head {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n}\n#sixin .pgc-list-item-left .pgc-list-item-left-content {\n  padding-left: 50px;\n}\n#sixin .pgc-list-item-left .pgc-list-item-left-primary {\n  font-size: 14px;\n  color: #222;\n  letter-spacing: 0;\n  margin-top: -2px;\n}\n#sixin .pgc-list-item-left .pgc-list-item-left-primary em {\n  color: #999;\n}\n#sixin .pgc-list-item-left .pgc-list-item-left-secondary {\n  font-size: 12px;\n  color: #999;\n  letter-spacing: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 2px;\n}\n#sixin .pgc-list-item-left:hover {\n  background: #e8e8e8;\n}\n#sixin .pgc-list-item-left.active {\n  background-color: #f4f5f8;\n  color: #fff;\n}\n#sixin .pgc-private-letter-all {\n  position: relative;\n}\n#sixin .pgc-private-letter-all-userlist {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 320px;\n  background: #fff;\n  overflow: auto;\n}\n#sixin .pgc-private-letter-all-userlist-getmore {\n  height: 30px;\n  line-height: 30px;\n  color: #999;\n  text-align: center;\n  cursor: pointer;\n}\n#sixin .pgc-private-letter-all-user-primary {\n  position: relative;\n  padding-right: 62px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#sixin .pgc-private-letter-all-user-primary em {\n  position: absolute;\n  right: 0;\n  font-size: 12px;\n  color: #999;\n  letter-spacing: 0;\n}\n#sixin .pgc-private-letter-all .tui-badge-count {\n  background: #ed4040;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: 100px;\n  -webkit-transform: translateX(-80%);\n  transform: translateX(-80%);\n  top: -8px;\n}\n#sixin .pgc-private-letter-all-talkbox {\n  position: relative;\n  margin-left: 320px;\n  height: 600px;\n  background-color: #f4f5f6;\n  border-left: 1px solid #e8e8e8;\n}\n#sixin .pgc-private-letter-all-talkbox-head {\n  height: 48px;\n  line-height: 48px;\n  padding: 0 21px 0 24px;\n  font-size: 16px;\n  color: #222;\n  letter-spacing: 0;\n}\n#sixin .pgc-private-letter-all-talkbox-head em {\n  margin: 0 10px;\n  font-weight: 700;\n}\n#sixin .pgc-private-letter-all-talkbox-head-option {\n  float: right;\n  margin-top: 14px;\n}\n#sixin .pgc-private-letter-all-talkbox-head-option i {\n  font-size: 20px;\n  color: #999;\n}\n#sixin .pgc-private-letter-all-talkbox-body {\n  overflow: auto;\n  height: 405px;\n  width: 100%;\n}\n#sixin .pgc-private-letter-all-talkbox-tail {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #e8e8e8;\n}\n#sixin .pgc-private-letter-all .img-avatar {\n  background-color: #f4f5f6;\n  border-radius: 4px;\n}\n#sixin .pgc-private-letter-all .pgc-message-stamp {\n  margin: 24px 0;\n}\n#sixin .pgc-private-letter-all .pgc-hover-popup {\n  line-height: 1;\n}\n#sixin .pgc-private-letter-all .hover-content {\n  padding: 0;\n}\n#sixin .pgc-private-letter-all-hover-item {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  cursor: pointer;\n}\n#sixin .pgc-private-letter-all-hover-item.user {\n  height: 30px;\n  line-height: 30px;\n}\n#sixin .pgc-private-letter-all .empty-tip {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 88px;\n  height: 30px;\n  background-image: url("//p3.pstatp.com/origin/243b00037a489e477144");\n  background-size: contain;\n}\n#sixin .pgc-private-letter-all .message-box, #sixin .pgc-private-letter-all .message-box .editor {\n  background: #f4f5f6;\n}\n#sixin .pgc-im-keyword-reply {\n  margin: 0 40px;\n  font-size: 14px;\n}\n#sixin .pgc-im-keyword-reply-header {\n  height: 64px;\n  line-height: 64px;\n  border-bottom: 1px solid #e8e8e8;\n}\n#sixin .pgc-im-keyword-reply .add-new-rule {\n  padding: 0 9px;\n  font-size: 14px;\n  height: 32px;\n  line-height: 30px;\n}\n#sixin .pgc-im-keyword-reply .icon-add {\n  display: inline-block;\n  font-size: 12px;\n  margin-right: 4px;\n}\n#sixin .pgc-im-keyword-reply-tip {\n  float: right;\n}\n#sixin .pgc-im-keyword-reply-footer {\n  height: 43px;\n  line-height: 43px;\n  text-align: center;\n  color: #999;\n}\n#sixin .pgc-im-keyword-reply .click-for-more {\n  cursor: pointer;\n  display: block;\n}\n#sixin .pgc-im-keyword-reply .icon-topback {\n  display: inline-block;\n  font-size: 12px;\n  margin-left: 4px;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n#sixin .pgc-im-keyword-reply .keyword-confirm-dialog .title:before {\n  content: "";\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  margin-right: 7px;\n  vertical-align: -4px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODA4MzhBOTY3NDdBOENCNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RUJGRjlEQUU5OEYxMUU0OEY1REY0QkNBQUYzNkU5OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RUJGRjlEOUU5OEYxMUU0OEY1REY0QkNBQUYzNkU5OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhhNmZlZDE4LTI0ZWUtNDU1Ni05MDhmLTIxZDFjOWIwY2IwZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmUzMjVlZjE4LTFlZmMtMTE3OC1hZWVjLWQyYjg5MDljNDJhOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr74figAAAEgUExURf////9lV//a2P/5+f92a/+RiP9mWP9qXf91av9+c//6+v/7+//29f/Bvf/9/P/Hw//f3P/d2v/p6P/q6f9tYv/r6//o5/9/df+Sif/Sz//l5P/8/P/49/+Ui//u7f++uv/z8/9nWf9nWv+yrP/19f9rXv94bP+CeP/+/v+GfP9rX/+Eev/4+P+zrv+vqf9zZ/+1sf+3s//Jxv/c2v+Wjf/Ewf+hmf91af+Qh/+XkP+9uf+8uP/g3v/f3f/Fwf+Hfv/EwP+VjP/w8P+wqf+Lgf+Def/T0P+im//19P+Ohf94bf+gmf/s6/+fl//t7P/AvP/w7/+up//i3/+Gff/08/9nWv98c/+Si/9sX//v7v+zrf+7t/97cP/z8v+0rv9uYRiq/2oAAAEVSURBVHjaZJHlloNADIVzi5dSoIW2262euqy7u7t0Xd7/LXaYgRU2P0jyTc4d5oaIR9PaOW1p7XL1mH4i2XhCGP1JKaLPPWCrmjOHResOyGcFrcjQx6KRQxlTGa7QweCa5fTR2ThLtR6MQGcG+m5w7ABukFNvuGHfTwiFBJDgxZyqvdMm9ukvJgWvtIKFOLah0AOycZzDEnlIx/EQI9KQjGOJYRmZ/yI6lTErGr9eDwe2UaArPIbvXnco+sFVanrqBm+6E40uLxzVuyd6ER5QEbjlFxqYZsnsYLkUWLV4EVhVOsGAj13KMNzIWDcPvSLK8wOoiu2bpm8r6vcamOUf/WhprT3p1zZT1nxbG8mFtZrovwQYACHoF9jmQCP5AAAAAElFTkSuQmCC) no-repeat;\n}\n#sixin .pgc-private-letter-all {\n  position: relative;\n}\n#sixin .pgc-private-letter-all-userlist {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 320px;\n  background: #fff;\n  overflow: auto;\n}\n#sixin .pgc-private-letter-all-userlist-getmore {\n  height: 30px;\n  line-height: 30px;\n  color: #999;\n  text-align: center;\n  cursor: pointer;\n}\n#sixin .pgc-private-letter-all-user-primary {\n  position: relative;\n  padding-right: 62px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#sixin .pgc-private-letter-all-user-primary em {\n  position: absolute;\n  right: 0;\n  font-size: 12px;\n  color: #999;\n  letter-spacing: 0;\n}\n#sixin .pgc-private-letter-all .tui-badge-count {\n  background: #ed4040;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: 100px;\n  -webkit-transform: translateX(-80%);\n  transform: translateX(-80%);\n  top: -8px;\n}\n#sixin .pgc-private-letter-all-talkbox {\n  position: relative;\n  margin-left: 320px;\n  height: 600px;\n  background-color: #f4f5f6;\n  border-left: 1px solid #e8e8e8;\n}\n#sixin .pgc-private-letter-all-talkbox-head {\n  height: 48px;\n  line-height: 48px;\n  padding: 0 21px 0 24px;\n  font-size: 16px;\n  color: #222;\n  letter-spacing: 0;\n}\n#sixin .pgc-private-letter-all-talkbox-head em {\n  margin: 0 10px;\n  font-weight: 700;\n}\n#sixin .pgc-private-letter-all-talkbox-head-option {\n  float: right;\n  margin-top: 14px;\n}\n#sixin .pgc-private-letter-all-talkbox-head-option i {\n  font-size: 20px;\n  color: #999;\n}\n#sixin .pgc-private-letter-all-talkbox-body {\n  overflow: auto;\n  height: 405px;\n  width: 100%;\n}\n#sixin .pgc-private-letter-all-talkbox-tail {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-top: 1px solid #e8e8e8;\n}\n#sixin .pgc-private-letter-all .img-avatar {\n  background-color: #f4f5f6;\n  border-radius: 4px;\n}\n#sixin .pgc-private-letter-all .pgc-message-stamp {\n  margin: 24px 0;\n}\n#sixin .pgc-private-letter-all .pgc-hover-popup {\n  line-height: 1;\n}\n#sixin .pgc-private-letter-all .hover-content {\n  padding: 0;\n}\n#sixin .pgc-private-letter-all-hover-item {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  cursor: pointer;\n}\n#sixin .pgc-private-letter-all-hover-item.user {\n  height: 30px;\n  line-height: 30px;\n}\n#sixin .pgc-private-letter-all .empty-tip {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 88px;\n  height: 30px;\n  background-image: url("//p3.pstatp.com/origin/243b00037a489e477144");\n  background-size: contain;\n}\n#sixin .pgc-private-letter-all .message-box, #sixin .pgc-private-letter-all .message-box .editor {\n  background: #f4f5f6;\n}\n',""])}});