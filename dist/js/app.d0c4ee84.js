(function(t){function e(e){for(var s,r,_=e[0],l=e[1],n=e[2],c=0,h=[];c<_.length;c++)r=_[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);o&&o(e);while(h.length)h.shift()();return d.push.apply(d,n||[]),a()}function a(){for(var t,e=0;e<d.length;e++){for(var a=d[e],s=!0,_=1;_<a.length;_++){var l=a[_];0!==i[l]&&(s=!1)}s&&(d.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},d=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var _=window["webpackJsonp"]=window["webpackJsonp"]||[],l=_.push.bind(_);_.push=e,_=_.slice();for(var n=0;n<_.length;n++)e(_[n]);var o=l;d.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2395:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"min_div"}},[a("life-and-death-tencent")],1)])},d=[],r=a("5698"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[t._m(0),a("div",{attrs:{id:"total"}},[a("div",{staticClass:"title"},[t._v("各地区累计治愈/死亡病例数（"+t._s(t.date_list[t.select_date_id]?t.date_list[t.select_date_id].month:"")+"月"+t._s(t.date_list[t.select_date_id]?t.date_list[t.select_date_id].day:"")+"日）")]),t._m(1),a("div",{attrs:{id:"total_svg_div"}},[a("svg",{attrs:{id:"total_svg",width:"100%",height:"100%"}},[a("g",{staticClass:"label_line"},t._l(t.total_x_label[t.select_date_id],(function(e,s){return a("path",{key:e+""+s,staticClass:"total_label_line",attrs:{d:s===t.total_x_label[t.select_date_id].length-1?"M"+(t.total_x_begin+(s+.5)*t.total_x_step)+",5v"+.8*t.total_svg_height:"M"+(t.total_x_begin+s*t.total_x_step)+",5v"+.8*t.total_svg_height}})})),0),a("g",{staticClass:"x_label",style:"transform: translate("+t.total_x_begin+"px, "+t.total_svg_height+"px);"},[t._l(t.total_x_label[t.select_date_id],(function(e,s){return a("text",{key:e+""+s,staticClass:"label_text",style:"transform: translate("+(s===t.total_x_label[t.select_date_id].length-1?t.total_x_step*(s+.5):t.total_x_step*s)+"px, -5px)"},[t._v(t._s(t.num2text(e)))])})),a("text",{staticClass:"label_text",style:"transform: translate("+t.total_x_step*(t.total_x_label[t.select_date_id].length-2.5)+"px, -5px);"},[t._v("//")])],2),t._l(t.total_dataset[t.select_date_id],(function(e,s){return a("g",{key:e.title_1,style:"transform: translate(0, "+.4*t.total_svg_height*s+"px);"},[a("text",{staticStyle:{transform:"translate(2vw, 4vw)"},attrs:{"font-size":"3.2vw","font-weight":"500"}},[t._v(t._s(e.title_1))]),a("text",{staticStyle:{transform:"translate(1.2vw, 7vw)"},attrs:{"font-size":"2.1333vw",fill:"#888888"}},[t._v(t._s(e.title_2))]),a("rect",{staticClass:"diagnosis",attrs:{x:t.total_x_begin,y:"1.3vw",width:t.total_bar_width(e.diagnosis),height:"3vw"}}),a("text",{staticClass:"bar_text",style:"transform: translate("+(t.total_x_begin+1)+"px, 3.5vw);"},[t._v(t._s(t.num2text(e.diagnosis)))]),a("rect",{staticClass:"cure",attrs:{x:t.total_x_begin,y:"4.3vw",width:t.total_bar_width(e.cure),height:"3vw"}}),a("text",{staticClass:"bar_text",style:"transform: translate("+(t.total_x_begin+1)+"px, 6.6vw);"},[t._v(t._s(t.num2text(e.cure)))]),a("rect",{staticClass:"death",attrs:{x:t.total_x_begin+t.total_bar_width(e.cure),y:"4.3vw",width:t.total_bar_width(e.death),height:"3vw"}}),a("text",{staticClass:"bar_text",style:(e.death/t.total_x_label[t.select_date_id][5]<.1?"text-anchor: end; ":"")+" transform: translate("+(e.death/t.total_x_label[t.select_date_id][5]>.1?t.total_x_begin+t.total_bar_width(e.cure)+1:t.total_x_begin+t.total_bar_width(e.cure)+t.total_bar_width(e.death)-1)+"px, 6.6vw);",attrs:{transform:t.isiOS?"translate("+(e.death/t.total_x_label[t.select_date_id][5]>.1?t.total_x_begin+t.total_bar_width(e.cure)+1:t.total_x_begin+t.total_bar_width(e.cure)+t.total_bar_width(e.death)-1)+"px, 6.6vw)":""}},[t._v(t._s(t.num2text(e.death)))]),a("g",{style:"transform: translate("+(t.total_x_begin+t.total_x_step*(t.total_x_label[t.select_date_id].length-2.8))+"px, -0.5vw) scale("+t.total_svg_width/800+")",attrs:{id:"页面1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"手机",transform:"translate(-528.000000, -748.000000)",fill:"#FFFFFF"}},[a("g",{attrs:{id:"编组-35",transform:"translate(34.000000, 71.000000)"}},[a("g",{attrs:{id:"编组-36",transform:"translate(0.000000, 585.000000)"}},[a("g",{attrs:{id:"编组-26",transform:"translate(490.000000, 86.000000)"}},[a("g",{attrs:{id:"编组-25",transform:"translate(0.490312, 0.597389)"}},[a("g",{attrs:{id:"编组-24",transform:"translate(28.424015, 26.671522) rotate(23.000000) translate(-28.424015, -26.671522) translate(13.924015, 4.171522)"}},[a("g",{attrs:{id:"编组-22"}},[a("g",{attrs:{id:"编组-21"}},[a("g",{attrs:{id:"编组-20"}},[a("polygon",{attrs:{id:"路径-11",points:"13.9266941 1.26121336e-13 1.11910481e-13 8.64947511 14.1532193 16.1404361 28.3064386 8.64947511"}}),a("polygon",{attrs:{id:"路径-11",points:"13.9266941 7.05592105 -1.17239551e-13 15.7053962 14.1532193 23.1963572 28.3064386 15.7053962"}}),a("polygon",{attrs:{id:"路径-11",points:"13.9266941 21.1677632 -1.17239551e-13 29.8172383 14.1532193 37.3081993 28.3064386 29.8172383"}})]),a("polygon",{attrs:{id:"路径-11",points:"13.9266941 14.1118421 -1.17239551e-13 22.7613172 14.1532193 30.2522782 28.3064386 22.7613172"}})]),a("polygon",{attrs:{id:"路径-11",points:"13.9266941 28.2236842 1.10134124e-13 36.8731593 14.1532193 44.3641203 28.3064386 36.8731593"}})]),a("g",{attrs:{id:"路径-13",transform:"translate(0.000000, 21.167763)"}},[a("polygon",{attrs:{id:"路径-11",points:"13.9266941 1.26121336e-13 -1.17239551e-13 8.64947511 14.1532193 16.1404361 28.3064386 8.64947511"}})])]),a("g",{attrs:{id:"路径-12",transform:"translate(17.226836, 51.766822) rotate(23.000000) translate(-17.226836, -51.766822) translate(2.726836, 43.766822)"}},[a("polygon",{attrs:{id:"路径-11",points:"13.9266941 1.26121336e-13 -1.17239551e-13 8.53714427 14.1532193 15.9308201 28.3064386 8.53714427"}})])]),a("g",{attrs:{id:"路径-12",transform:"translate(19.825299, 46.693229) rotate(23.000000) translate(-19.825299, -46.693229) translate(5.325299, 38.693229)"}},[a("polygon",{attrs:{id:"路径-11",points:"13.9266941 1.26121336e-13 -1.17239551e-13 8.53714427 14.1532193 15.9308201 28.3064386 8.53714427"}})])])])])])])])}))],2)]),a("div",{staticClass:"description"},[t._v("*锯齿线用于数据差异过大时隔断坐标轴")])]),a("div",{staticStyle:{"margin-top":"6.67vw"},attrs:{id:"add"}},[a("div",{staticClass:"title"},[t._v("全国新增治愈/死亡病例数")]),t._m(2),a("div",{staticClass:"life_div"},[a("div",{staticClass:"y_label"},t._l(t.add_y_label,(function(e,s){return a("div",{key:e+"-"+s,style:"margin-bottom: "+(0===s?14.8:3.8)+"vw; font-weight: "+(0===e?600:400)+";"},[t._v(t._s(t.num2text(e))+t._s(0===s?"%":""))])})),0),a("div",{staticClass:"life_svg_div"},[a("div",{staticClass:"highlight_svg_div",staticStyle:{"pointer-events":"none"}},[a("svg",{attrs:{width:"100%",height:"100%"}},[a("defs",[a("linearGradient",{attrs:{id:"orange_red",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[a("stop",{staticStyle:{"stop-color":"rgb(0, 186, 209)","stop-opacity":"0.05"},attrs:{offset:"0%"}}),a("stop",{staticStyle:{"stop-color":"rgb(0, 186, 209)","stop-opacity":"0.25"},attrs:{offset:"100%"}})],1)],1),a("rect",{attrs:{x:t.hightlight_rect.x,y:t.hightlight_rect.y,width:t.hightlight_rect.width,height:t.hightlight_rect.height,fill:"url(#orange_red)"}})])]),a("div",{staticClass:"life_svg_div_big",style:"height: 100%; width: "+t.dataLens/t.showLens*100+"%"},[a("svg",{staticStyle:{background:"none"},attrs:{width:"100%",height:"100%"}},[a("g",{attrs:{id:"horizontal_line"}},t._l(t.add_y_label,(function(e,s){return a("path",{key:"add_y_line"+s,style:"stroke-width: "+(t.bold_line_index_list.includes(s)?.3:.08)+"vw; stroke: #6f6f6f;",attrs:{d:t.bold_line_index_list.includes(s)?"":"M0,"+(0===s?.5*t.add_y_step:(s+2)*t.add_y_step)+"h"+t.add_svg_width}})})),0),a("g",{attrs:{id:"line-chart"}},[a("path",{staticStyle:{stroke:"#62c298","stroke-width":"0.2vw",fill:"none"},attrs:{d:t.cure_rect_path,"stroke-dasharray":"3 3"}}),a("path",{staticStyle:{fill:"rgba(121, 192, 155, 0.14)"},attrs:{d:""===t.cure_rect_path?"":t.cure_rect_path+"L"+t.add_x_step*(2*t.country_dataset.length-1)+","+3*t.add_y_step+"H"+t.add_x_step}}),t._l(t.country_dataset,(function(e,s){return a("rect",{key:"line-chart-cure-rect-"+s,staticClass:"cure line_rect",attrs:{x:t.add_x_step*(2*s+1-.18),y:.5*t.add_y_step+(t.add_y_label[0]-100*e.cure_rate)/t.add_y_label[0]*t.add_y_step*2.5-.18*t.add_x_step,width:.36*t.add_x_step,height:.36*t.add_x_step,rx:.06*t.add_x_step,ry:.06*t.add_x_step}})})),a("path",{staticStyle:{stroke:"#333333","stroke-width":"0.2vw",fill:"none"},attrs:{d:t.death_rect_path,"stroke-dasharray":"3 3"}}),a("path",{staticStyle:{fill:"rgba(51, 51, 51, 0.1)"},attrs:{d:""===t.cure_rect_path?"":t.death_rect_path+"L"+t.add_x_step*(2*t.country_dataset.length-1)+","+3*t.add_y_step+"H"+t.add_x_step}}),t._l(t.country_dataset,(function(e,s){return a("rect",{key:"line-chart-death-rect-"+s,staticClass:"death line_rect",attrs:{x:t.add_x_step*(2*s+1-.18),y:.5*t.add_y_step+(t.add_y_label[0]-100*e.death_rate)/t.add_y_label[0]*t.add_y_step*2.5-.18*t.add_x_step,width:.36*t.add_x_step,height:.36*t.add_x_step,rx:.06*t.add_x_step,ry:.06*t.add_x_step}})}))],2),a("g",{attrs:{id:"line-char-highlight"}},[a("text",{staticClass:"label_text",attrs:{x:t.add_x_step*(2*t.select_date_id+1),y:t.country_dataset[t.select_date_id]?.5*t.add_y_step+(t.add_y_label[0]-100*t.country_dataset[t.select_date_id].death_rate)/t.add_y_label[0]*t.add_y_step*2.5+.4*t.add_y_step:0}},[t._v(t._s(t.country_dataset[t.select_date_id]?(100*t.country_dataset[t.select_date_id].death_rate).toFixed(1)+"%":""))]),a("text",{staticClass:"label_text",attrs:{x:t.add_x_step*(2*t.select_date_id+1),y:t.country_dataset[t.select_date_id]?.5*t.add_y_step+(t.add_y_label[0]-100*t.country_dataset[t.select_date_id].cure_rate)/t.add_y_label[0]*t.add_y_step*2.5-.2*t.add_y_step:0}},[t._v(t._s(t.country_dataset[t.select_date_id]?(100*t.country_dataset[t.select_date_id].cure_rate).toFixed(1)+"%":""))])]),a("g",{attrs:{id:"bar-chart"}},[a("g",{attrs:{id:"bar-chart-cure"}},[t._l(t.country_dataset,(function(e,s){return a("rect",{key:"bar-rect-cure-"+s,staticClass:"cure",attrs:{width:t.add_x_step,height:e.cure/t.add_y_label[2]*t.add_y_step*2,x:t.add_x_step*(2*s+.5),y:(1-e.cure/t.add_y_label[2])*t.add_y_step*2+4*t.add_y_step}})})),t._l(t.country_dataset,(function(e,s){return a("text",{key:"bar-label-cure-"+s,staticClass:"label_text",attrs:{x:t.add_x_step*(2*s+1),y:(1-e.cure/t.add_y_label[2])*t.add_y_step*2+3.9*t.add_y_step}},[t._v(t._s(t.num2text(e.cure)))])}))],2),a("g",{attrs:{id:"bar-chart-death"}},[t._l(t.country_dataset,(function(e,s){return a("rect",{key:"bar-rect-death-"+s,staticClass:"death",attrs:{width:t.add_x_step,height:e.death/t.add_y_label[7]*t.add_y_step*2,x:t.add_x_step*(2*s+.5),y:7*t.add_y_step}})})),t._l(t.country_dataset,(function(e,s){return a("text",{key:"bar-label-death-"+s,staticClass:"label_text",attrs:{x:t.add_x_step*(2*s+1),y:e.death/t.add_y_label[7]*t.add_y_step*2+7.35*t.add_y_step}},[t._v(t._s(t.num2text(e.death)))])}))],2)]),a("g",{attrs:{id:"horizontal_line"}},t._l(t.add_y_label,(function(e,s){return a("path",{key:"add_y_line"+s,style:"stroke-width: "+(t.bold_line_index_list.includes(s)?.3:.08)+"vw; stroke: #6f6f6f;",attrs:{d:t.bold_line_index_list.includes(s)?"M0,"+(0===s?.5*t.add_y_step:(s+2)*t.add_y_step)+"h"+t.add_svg_width:""}})})),0),a("g",{attrs:{id:"x-label"}},t._l(t.date_list,(function(e,s){return a("text",{key:e.month+"-"+e.day,style:s===t.select_date_id?"text-anchor: middle; font-size: 2.4vw; font-weight: 500; fill: '#333333'; transform: translate(0, 0.1vw); transition: ease 0.2s;":"text-anchor: middle; font-size: 2.1333333vw; font-weight: 400; fill: '#333333';",attrs:{x:t.add_x_step*(2*s+1),y:6.6*t.add_y_step}},[t._v(t._s(e.month+"/"+e.day))])})),0)])])])]),a("div",{attrs:{id:"slider"}},[a("svg",{attrs:{id:"slider_svg",width:"100%",height:"100%"}},[a("defs",[a("linearGradient",{attrs:{id:"slider_linear"}},[a("stop",{staticStyle:{"stop-color":"#60cad7","stop-opacity":"1"},attrs:{offset:"15%"}}),a("stop",{staticStyle:{"stop-color":"#00bad1","stop-opacity":"1"},attrs:{offset:"95%"}})],1),a("filter",{attrs:{id:"shadow",x:"-5%",y:"0%",width:"110%",height:"120%"}},[a("feDropShadow",{attrs:{dx:"0",dy:"0.6",stdDeviation:"1.2","flood-color":"#00B9D1","flood-opacity":"0.6"}})],1)],1)])]),a("div",{staticClass:"description",staticStyle:{"margin-left":"3vw","margin-bottom":"5vw"}},[t._v("*拖动图表查看更多时间范围数据，移动滑块选择日期，图表将同步变化")])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"head"}},[a("div",{attrs:{id:"left_border"}}),a("div",{attrs:{id:"title"}},[t._v("新冠肺炎疫情生命线")]),a("div",{attrs:{id:"description"}},[t._v("(7:00-10:00左右为数据更新高峰，显示可能略有滞后请谅解)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"legend"}},[a("div",{staticClass:"legend_part"},[a("div",{staticClass:"death icon"}),a("div",{staticClass:"legend_text"},[t._v("累计死亡")])]),a("div",{staticClass:"legend_part"},[a("div",{staticClass:"cure icon"}),a("div",{staticClass:"legend_text"},[t._v("累计治愈")])]),a("div",{staticClass:"legend_part"},[a("div",{staticClass:"diagnosis icon"}),a("div",{staticClass:"legend_text"},[t._v("累计确诊")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"3vw"},attrs:{id:"legend"}},[a("div",{staticClass:"legend_part"},[a("div",{staticClass:"legend_line_cure"}),a("div",{staticClass:"legend_icon_line cure"}),a("div",{staticClass:"legend_text_line"},[t._v("治愈率")])]),a("div",{staticClass:"legend_part"},[a("div",{staticClass:"legend_line_death"}),a("div",{staticClass:"legend_icon_line death"}),a("div",{staticClass:"legend_text_line"},[t._v("病死率")])]),a("div",{staticClass:"legend_part"},[a("div",{staticClass:"legend_icon cure"}),a("div",{staticClass:"legend_text"},[t._v("新增治愈")])]),a("div",{staticClass:"legend_part"},[a("div",{staticClass:"legend_icon death"}),a("div",{staticClass:"legend_text"},[t._v("新增死亡")])])])}],n=(a("99af"),a("4160"),a("a15b"),a("a434"),a("d3b7"),a("ac1f"),a("3ca3"),a("466d"),a("1276"),a("159b"),a("ddb0"),a("96cf"),a("1da1")),o=a("1157"),c=a.n(o),h={name:"life-line-phone",data:function(){return{wuhan_dataset:[],hubei_dataset:[],country_dataset:[],total_dataset:[],date_list:[],select_date_id:0,select_date_id_bar:0,select_date_id_slider:0,total_x_label:[[0,200,400,600,800,1e3,7e3,1e4]],total_x_begin:0,total_x_step:0,total_svg_width:0,total_svg_height:0,test:0,test2:0,dataViewWidth:0,dataLens:20,showLens:10,add_y_label:[],add_svg_width:0,add_svg_height:0,add_y_step:0,add_x_step:0,add_x_end:0,max_scroll_distance:0,gap:0,hightlight_rect:{},bold_line_index_list:[0,1,4,5],scroll_left:0,isiOS:0}},watch:{select_date_id_slider:function(){if(r["f"](".highlight_svg_div").node()){var t=r["f"](".highlight_svg_div").node().getBoundingClientRect(),e=t.width,a=2.6*this.add_x_step,s=8.5*this.add_y_step,i=e-this.add_x_end-a/2-2*(this.showLens-1-this.select_date_id_slider)*this.add_x_step-1*this.add_x_step,d=.5*this.add_y_step;this.hightlight_rect={x:i,y:d,width:a,height:s}}}},computed:{cure_rect_path:function(){var t=this,e="";return this.country_dataset.forEach((function(a,s){e+=0===s?"M":"L";var i=t.add_x_step*(2*s+1),d=.5*t.add_y_step+(t.add_y_label[0]-100*a.cure_rate)/t.add_y_label[0]*2.5*t.add_y_step;e+="".concat(i,",").concat(d)})),e},death_rect_path:function(){var t=this,e="";return this.country_dataset.forEach((function(a,s){e+=0===s?"M":"L";var i=t.add_x_step*(2*s+1),d=.5*t.add_y_step+(t.add_y_label[0]-100*a.death_rate)/t.add_y_label[0]*2.5*t.add_y_step;e+="".concat(i,",").concat(d)})),e}},methods:{total_bar_width:function(t){var e=this.total_x_label[this.select_date_id];if(t>=e[e.length-2]){var a=t-e[e.length-2],s=e[e.length-1]-e[e.length-2],i=1.5*this.total_x_step,d=a/s*i;return d+this.total_x_step*(e.length-2)}return t/e[e.length-3]*this.total_x_step*(e.length-3)},num2text:function(t){var e="";if(0===t)return"0";var a=0;while(t>0)3==a&&(e+=",",a=0),e+=t%10,t=parseInt(t/10),a++;return e.split("").reverse().join("")},set_total_svg_params:function(){var t=r["f"]("#total_svg_div").node().getBoundingClientRect();this.total_svg_width=t.width,this.total_svg_height=t.height,this.total_x_begin=.12*this.total_svg_width,this.total_x_step=(t.width-this.total_x_begin)/(this.total_x_label[0]?this.total_x_label[0].length:1)},set_add_svg_params:function(){var t=r["f"](".life_svg_div").node().getBoundingClientRect(),e=r["f"](".life_svg_div_big").node().getBoundingClientRect();this.add_svg_width=t.width*this.dataLens/this.showLens,this.add_svg_height=e.height,this.add_y_step=this.add_svg_height/9.5,this.add_x_step=this.add_svg_width/2/(this.dataLens+.2),this.add_x_end=this.add_svg_width-2*this.dataLens*this.add_x_step},compute_total_x_label:function(t){var e=[];t.forEach((function(t){var a=0,s=0,i=99999999;t.forEach((function(t){t.diagnosis>a&&(a=t.diagnosis),t.diagnosis<i&&(i=t.diagnosis);var e=t.cure+t.death;e>s&&(s=e)})),s=s>500?1e3*Math.ceil(s/1e3):500,a=a<1e4?1e3*Math.ceil(a/1e3):1e4*Math.ceil(a/1e4),s>i&&(i=Math.max(1e3*Math.ceil(s/1e3),a-1e4)),s<i&&(i=i>1e3?1e3*Math.floor(i/1e3):500),s===i&&(s+=1e3,i=Math.max(1e3*Math.ceil(s/1e3),a-1e4)),a=Math.max(a,i);for(var d=[0],r=1;r<=5;r++)d.push(s/5*r);d.push(i,a),e.push(d)})),this.total_x_label=e},compute_add_y_label:function(){var t=0,e=0,a=0;this.country_dataset.forEach((function(s){t<s.cure_rate&&(t=s.cure_rate),t<s.death_rate&&(t=s.death_rate),e<s.cure&&(e=s.cure),a<s.death&&(a=s.death)})),t=5*Math.ceil(100*t/5),e=400*Math.ceil(e/400),a=400*Math.ceil(a/400),this.add_y_label=[t,0,e,e/2,0,0,a/2,a]},initData_pku:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,i,d,_,l,n,o,c,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="https://tanshaocong.github.io/2019-nCoV/map.csv",e.next=3,r["a"](a);case 3:s=e.sent,i=10,d=1,_=[],s.forEach((function(t){if("国家级"===t["类别"]){var e=t["公开时间"].split("月")[0],a=t["公开时间"].split("日")[0].split("月")[1];if(e>d||e==d&&a>=i){_.push({cure:t["新增治愈出院数"]?+t["新增治愈出院数"]:0,death:t["新增死亡数"]?+t["新增死亡数"]:0,diagnosis:t["新增确诊病例"]?+t["新增确诊病例"]:0,hejian:t["核减"]?+t["核减"]:0,month:e,day:a});var s=_.length;_[s-1]["total_cure"]=s>1?_[s-2]["total_cure"]:0,_[s-1]["total_cure"]+=_[s-1]["cure"],_[s-1]["total_death"]=s>1?_[s-2]["total_death"]:0,_[s-1]["total_death"]+=_[s-1]["death"],_[s-1]["total_diagnosis"]=s>1?_[s-2]["total_diagnosis"]:0,_[s-1]["total_diagnosis"]+=_[s-1]["diagnosis"]+_[s-1]["hejian"],_[s-1]["cure_rate"]=_[s-1]["total_cure"]/_[s-1]["total_diagnosis"],_[s-1]["death_rate"]=_[s-1]["total_death"]/_[s-1]["total_diagnosis"]}}})),l=[],s.forEach((function(t){if("省级"===t["类别"]&&"湖北"===t["省份"]){var e=t["公开时间"].split("月")[0],a=t["公开时间"].split("日")[0].split("月")[1];if(e>d||e==d&&a>=i){l.push({cure:t["新增治愈出院数"]?+t["新增治愈出院数"]:0,death:t["新增死亡数"]?+t["新增死亡数"]:0,diagnosis:t["新增确诊病例"]?+t["新增确诊病例"]:0,hejian:t["核减"]?+t["核减"]:0,month:e,day:a});var s=l.length;l[s-1]["total_cure"]=s>1?l[s-2]["total_cure"]:0,l[s-1]["total_cure"]+=l[s-1]["cure"],l[s-1]["total_death"]=s>1?l[s-2]["total_death"]:0,l[s-1]["total_death"]+=l[s-1]["death"],l[s-1]["total_diagnosis"]=s>1?l[s-2]["total_diagnosis"]:0,l[s-1]["total_diagnosis"]+=l[s-1]["diagnosis"]+l[s-1]["hejian"]}}})),n=[],s.forEach((function(t){if("地区级"===t["类别"]&&"湖北"===t["省份"]&&"武汉"===t["城市"]){var e=t["公开时间"].split("月")[0],a=t["公开时间"].split("日")[0].split("月")[1];if(e>d||e==d&&a>=i){n.push({cure:t["新增治愈出院数"]?+t["新增治愈出院数"]:0,death:t["新增死亡数"]?+t["新增死亡数"]:0,diagnosis:t["新增确诊病例"]?+t["新增确诊病例"]:0,hejian:t["核减"]?+t["核减"]:0,month:e,day:a});var s=n.length;n[s-1]["total_cure"]=s>1?n[s-2]["total_cure"]:0,n[s-1]["total_cure"]+=n[s-1]["cure"],n[s-1]["total_death"]=s>1?n[s-2]["total_death"]:0,n[s-1]["total_death"]+=n[s-1]["death"],n[s-1]["total_diagnosis"]=s>1?n[s-2]["total_diagnosis"]:0,n[s-1]["total_diagnosis"]+=n[s-1]["diagnosis"]+n[s-1]["hejian"]}}})),o=t.dataLens,t.wuhan_dataset=n.splice(n.length-o,o),t.hubei_dataset=l.splice(l.length-o,o),t.country_dataset=_.splice(_.length-o,o),c=[],t.country_dataset.forEach((function(e,a){var s=t.wuhan_dataset[a],i=t.hubei_dataset[a],d={title_1:"武汉",title_2:"",death:s["total_death"],cure:s["total_cure"],diagnosis:s["total_diagnosis"]},r={title_1:"湖北",title_2:"(除武汉)",death:i["total_death"]-s["total_death"],cure:i["total_cure"]-s["total_cure"],diagnosis:i["total_diagnosis"]-s["total_diagnosis"]},_={title_1:"全国",title_2:"(除湖北)",death:e["total_death"]-i["total_death"],cure:e["total_cure"]-i["total_cure"],diagnosis:e["total_diagnosis"]-i["total_diagnosis"]};c.push([d,r,_])})),t.total_dataset=c,t.compute_total_x_label(c),t.compute_add_y_label(),h=[],t.country_dataset.forEach((function(t){h.push({month:t.month,day:t.day})})),t.date_list=h,t.select_date_id=h.length-1,t.set_total_svg_params(),t.set_add_svg_params();case 27:case"end":return e.stop()}}),e)})))()},getCountryDataset:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return Object(n["a"])(regeneratorRuntime.mark((function s(){var i,d,_,l,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i={args:{req:{none:""}},service:"THOuterDataServer",func:"getAreaInfo"},d={method:"POST",headers:[["Content-Type","application/json"]],body:JSON.stringify(i)},s.next=4,r["d"](t,d);case 4:return _=s.sent,l=_.args.rsp,n=[],l.chinaHistoryTotal.forEach((function(t){var s=+t["day"].split(".")[1],i=+t["day"].split(".")[0];(i>e||i==e&&s>=a)&&n.push({total_cure:t.heal,total_death:t.dead,total_diagnosis:t.confirm,cure_rate:t.heal/t.confirm,death_rate:t.dead/t.confirm,month:i,day:s})})),l.modifyHistoryTotal.forEach((function(t,s){var i=+t["day"].split(".")[1],d=+t["day"].split(".")[0];(d>e||d==e&&i>=a)&&(n[s]["cure"]=t.heal,n[s]["death"]=t.dead)})),s.abrupt("return",n);case 10:case"end":return s.stop()}}),s)})))()},getHubeiDataset:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Object(n["a"])(regeneratorRuntime.mark((function s(){var i,d,_,l;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i={args:{req:{area:"湖北"}},service:"THOuterDataServer",func:"getCityInfo"},d={method:"POST",headers:[["Content-Type","application/json"]],body:JSON.stringify(i)},s.next=4,r["d"](t,d);case 4:return _=s.sent,l=[],_.args.rsp.areaHistory.forEach((function(t){var s=+t["day"].split(".")[1],i=+t["day"].split(".")[0];(i>e||i==e&&s>=a)&&l.push({total_cure:t.heal,total_death:t.dead,total_diagnosis:t.confirm,month:i,day:s})})),s.abrupt("return",l);case 8:case"end":return s.stop()}}),s)})))()},getWuhanDataset:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Object(n["a"])(regeneratorRuntime.mark((function s(){var i,d,_,l;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i={args:{req:{area:"湖北"}},service:"THOuterDataServer",func:"getKeyCity"},d={method:"POST",headers:[["Content-Type","application/json"]],body:JSON.stringify(i)},s.next=4,r["d"](t,d);case 4:return _=s.sent,l=[],_.args.rsp.cityHistory[0].history.forEach((function(t){var s=+t["day"].split(".")[1],i=+t["day"].split(".")[0];(i>e||i==e&&s>=a)&&l.push({total_cure:t.heal,total_death:t.dead,total_diagnosis:t.confirm})})),s.abrupt("return",l);case 8:case"end":return s.stop()}}),s)})))()},getTotalDatatest:function(t,e){var a=[];return t.forEach((function(t,s){var i=e[s],d={title_1:"湖北",title_2:"",death:i["total_death"],cure:i["total_cure"],diagnosis:i["total_diagnosis"]},r={title_1:"全国",title_2:"(除湖北)",death:t["total_death"]-i["total_death"],cure:t["total_cure"]-i["total_cure"],diagnosis:t["total_diagnosis"]-i["total_diagnosis"]};a.push([d,r])})),a},initData_tencent:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a="https://ehcard-test.wecity.qq.com/api",s="https://wechat.wecity.qq.com/api",i=e?a:s;Promise.all([this.getCountryDataset(i),this.getHubeiDataset(i)]).then((function(e){t.dataLens=Math.min(e[0].length,e[1].length);var a=0,s=0,i=e[1][e[1].length-1],d=e[0][e[0].length-1];i.day-d.day===1&&(s=1),i.day-d.day===-1&&(a=1);var _=e[0].splice(e[0].length-t.dataLens-a,t.dataLens);t.country_dataset=_;var l=e[1].splice(e[1].length-t.dataLens-s,t.dataLens),n=t.getTotalDatatest(_,l);t.total_dataset=n,t.compute_total_x_label(n),t.compute_add_y_label();var o=[];t.country_dataset.forEach((function(t){o.push({month:t.month,day:t.day})})),t.date_list=o,t.select_date_id=o.length-1,t.set_total_svg_params(),t.set_add_svg_params(),t.set_slider(),t.set_scroll_by_addEvent(),t.dataViewWidth=r["f"](".life_svg_div").node().getBoundingClientRect().width}))},set_scroll_by_addEvent:function(){var t=this,e=null;document.querySelector(".life_svg_div").addEventListener("scroll",(function(a){if(!t.isiOS){t.scroll_left=a.target.scrollLeft,clearTimeout(e);var s=t.scroll_left;t.max_scroll_distance=-t.dataViewWidth+t.add_svg_width,t.gap=Math.min(t.max_scroll_distance,Math.max(t.max_scroll_distance-s,0));var i=Math.round(t.gap/(2*t.add_x_step));t.select_date_id_bar=t.dataLens-t.showLens-i,t.select_date_id=t.select_date_id_bar+t.select_date_id_slider,e=setTimeout((function(e){if(e===t.scroll_left){t.max_scroll_distance=-t.dataViewWidth+t.add_svg_width,t.gap=Math.min(t.max_scroll_distance,Math.max(t.max_scroll_distance-e,0));var s=Math.round(t.gap/(2*t.add_x_step)),i=t.max_scroll_distance-s*(2*t.add_x_step);a.target.scrollLeft=i}}),100,s)}if(t.isiOS){t.scroll_left=a.target.scrollLeft+a.target.scrollWidth-a.target.clientWidth,clearTimeout(e);var d=t.scroll_left;t.max_scroll_distance=-t.dataViewWidth+t.add_svg_width,t.gap=Math.min(t.max_scroll_distance,Math.max(t.max_scroll_distance-d,0));var r=Math.round(t.gap/(2*t.add_x_step));t.select_date_id_bar=t.dataLens-t.showLens-r,t.select_date_id=t.select_date_id_bar+t.select_date_id_slider,e=setTimeout((function(e){if(e===t.scroll_left){t.max_scroll_distance=-t.dataViewWidth+t.add_svg_width,t.gap=Math.min(t.max_scroll_distance,Math.max(t.max_scroll_distance-e,0));var s=Math.round(t.gap/(2*t.add_x_step)),i=t.max_scroll_distance-s*(2*t.add_x_step);a.target.scrollLeft=i-a.target.scrollWidth+a.target.clientWidth}}),100,d)}}))},set_scroll_by_jquery:function(){var t=this,e=null;c()(".life_svg_div").scroll((function(){var a=this;clearTimeout(e),t.scroll_left=this.scrollLeft;var s=this.scrollLeft;t.max_scroll_distance=-t.dataViewWidth+t.add_svg_width,t.gap=t.max_scroll_distance-s;var i=Math.round(t.gap/(2*t.add_x_step));t.select_date_id_bar=t.dataLens-t.showLens-i,t.select_date_id=t.select_date_id_bar+t.select_date_id_slider,e=setTimeout((function(e){if(e===t.scroll_left){t.max_scroll_distance=-t.dataViewWidth+t.add_svg_width,t.gap=t.max_scroll_distance-e;var s=Math.round(t.gap/(2*t.add_x_step)),i=t.max_scroll_distance-s*(2*t.add_x_step);a.scrollLeft=i}}),100,s)}))},set_slider:function(){var t=this,e=r["f"]("#slider").node().getBoundingClientRect().width,a=r["f"]("#slider").node().getBoundingClientRect().height,s={left:.03*e,right:.05*e,top:0,bottom:0},i=function(i,d){var _=r["f"]("#".concat(i));_.attr("height",a).attr("width",e);var l=_.append("g").attr("transform","translate(".concat(s.left,", ").concat(s.top,")")),n=e-s.left-s.right,o=a-s.top-s.bottom,c=n/d,h=.8*o,u=r["e"]().range([-.2*c,n-1.2*c]).domain([0,d-1]),g=l.append("g");g.append("line").attr("x1",.02*-n).attr("x2",n+.22*c).attr("y1",.5*o).attr("y2",.5*o).style("stroke","#ececec").style("stroke-width",.2*o).style("stroke-linecap","round");var p=g.append("g"),f=[0,1,2];p.append("rect").attr("x",c*d-1.2*c).attr("y",o/2-.25*h).attr("width",1.4*c).attr("height",.75*h).attr("class","bar_g").attr("rx",.12*c).attr("ry",.12*c).classed("slider-rect-shadow",!0);var v=g.append("rect").attr("x",c*d-1.2*c).attr("y",o/2-h/2).attr("width",1.4*c).attr("height",h).attr("rx",.12*c).attr("ry",.12*c).classed("slider-rect",!0);g.append("g").selectAll("rect").data(f).enter().append("rect").attr("class","bar_g").attr("x",(function(t,e){return c*d-1.2*c+.43*c+.25*e*c})).attr("y",o/2-.23*h).attr("width",.04*c).attr("height",.46*h).style("fill","#ffffff").attr("rx",.02*c).attr("ry",.02*c),v.call(r["b"]().on("drag",(function(){var e=Math.min(Math.max(-.2*c,r["c"].x),n-1.2*c),a=r["f"](this);a.attr("x",e);var s=Math.round(u.invert(e)),i=s*c-.2*c;a.attr("x",i),r["g"](".bar_g").attr("transform","translate(".concat((s-d+1)*c,", 0)")),t.select_date_id_slider=s,t.select_date_id=t.select_date_id_slider+t.select_date_id_bar})).on("end",(function(){})))};this.select_date_id_slider=this.showLens-1;var d="slider_svg";i(d,this.showLens),this.select_date_id_bar=this.dataLens-this.showLens}},mounted:function(){this.initData_tencent(),/(iPhone|iPad|iPod|iOS|Mac)/i.test(navigator.userAgent)&&(/Safari/.test(navigator.userAgent)&&/Chrome/.test(navigator.userAgent)?this.isiOS=0:this.isiOS=1);var t=navigator.userAgent,e=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);e&&(this.isiOS=1)}},u=h,g=(a("8a7c"),a("2877")),p=Object(g["a"])(u,_,l,!1,null,null,null),f=p.exports,v={name:"app",components:{LifeAndDeathTencent:f},data:function(){return{}},mounted:function(){var t=navigator.userAgent.toLowerCase(),e="Roboto, SourceHanSansCN, “思源黑体”, Noto Sans SC";/\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(t)&&(e="PingFang SC"),r["f"]("body").style("font-family",e)}},y=v,x=(a("7c55"),Object(g["a"])(y,i,d,!1,null,null,null)),b=x.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(b)}}).$mount("#app")},"7c55":function(t,e,a){"use strict";var s=a("2395"),i=a.n(s);i.a},"8a7c":function(t,e,a){"use strict";var s=a("dfd9"),i=a.n(s);i.a},dfd9:function(t,e,a){}});
//# sourceMappingURL=app.d0c4ee84.js.map