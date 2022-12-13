(function(){"use strict";var t={9567:function(t,e,s){var a=s(144),i=s(998),n=s(3059),r=s(5554),l=function(){var t=this,e=t._self._c;return e(i.Z,{staticClass:"d-flex",attrs:{id:"v-app"}},[e("SystemBar"),e(r.Z,{staticClass:"nav-drawer d-none d-sm-flex",attrs:{permanent:"",app:"",width:"30vw",height:"100%"}},[e("UserList")],1),e(n.Z,{staticClass:"main pb-0"},[e("router-view")],1)],1)},o=[],c=s(6190),u=s(4324),d=s(3687),p=s(7823),g=function(){var t=this,e=t._self._c;return e("div",[e(p.Z,{staticClass:"horizontal-gradient",attrs:{app:"",window:"",dark:""}},[e("span",{staticClass:"ps-2"},[t._v("Chats App")]),e(d.Z),e(c.Z,{staticClass:"text-center",attrs:{small:"",text:"",rounded:"",href:"https://github.com/jKai-Hw/chat-app#readme",target:"_blank"}},[t._v(" Readme"),e(u.Z,{staticClass:"ma-0 ps-1"},[t._v("mdi-github")])],1)],1)],1)},m=[],f={},v=f,h=s(1001),x=(0,h.Z)(v,g,m,!1,null,null,null),_=x.exports,C=s(1474),Z=function(){var t=this,e=t._self._c;return e("div",{},[e(p.Z,{staticClass:"top-nav",attrs:{fixed:"",light:"",color:"#EAE0C7"}},[e("span",{staticClass:"ps-2"},[t._v(t._s(this.value))])]),e("div",{staticClass:"nav-main",class:t.homeDisplay},t._l(t.getUsers,(function(t){return e("UserListCard",{key:t.login.uuid,ref:"userCardList",refInFor:!0,attrs:{user:t}})})),1),e("div",{staticClass:"nav-main",class:t.talkDisplay},[e("TalkList")],1),e(C.Z,{staticClass:"d-none d-sm-flex",attrs:{app:"",fixed:"",grow:"",shift:"",height:"52px","background-color":"#EAE0C7"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e(c.Z,{attrs:{value:"Home",color:"#EAE0C7"}},[e("span",[t._v("Home")]),e(u.Z,[t._v("mdi-home-outline")])],1),e(c.Z,{attrs:{value:"Talk",color:"#EAE0C7"}},[e("span",[t._v("talk")]),e(u.Z,[t._v("mdi-chat-processing-outline")])],1)],1),e(C.Z,{staticClass:"d-flex d-sm-none",attrs:{app:"",fixed:"",grow:"",shift:"","background-color":"#EAE0C7"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e(c.Z,{attrs:{value:"Home",color:"#EAE0C7"}},[e("span",[t._v("Home")]),e(u.Z,[t._v("mdi-home-outline")])],1),e(c.Z,{attrs:{value:"Talk",color:"#EAE0C7",to:"/talk-view"}},[e("span",[t._v("talk")]),e(u.Z,[t._v("mdi-chat-processing-outline")])],1)],1)],1)},y=[],k=s(3423),b=s(9582),w=s(4886),D=s(2733),j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(D.Z,{staticClass:"height70",attrs:{dark:"","max-width":"70%",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e("div",t._g(t._b({staticClass:"d-flex ps-2 py-2 align-center"},"div",a,!1),s),[e(k.Z,{attrs:{color:"indigo"}},[e("img",{attrs:{src:t.user.picture.large,alt:""}})]),e("h3",{staticClass:"ps-2 f-black"},[t._v(t._s(t.user.name.first+" "+t.user.name.last))])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(b.Z,{class:t.profileDisplay,attrs:{img:t.bgList[t.user.index]}},[e("div",{staticClass:"height70 d-flex align-center justify-center flex-column"},[e("div",{staticClass:"close-btn"},[e(c.Z,{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[e(u.Z,[t._v("mdi-close")])],1)],1),e("div",{staticClass:"userDetail-btn"},[e(c.Z,{attrs:{icon:""},on:{click:function(e){t.value="Detail"}}},[e(u.Z,[t._v("mdi-account")])],1)],1),e("div",{staticClass:"width100"},[e("div",{staticClass:"d-flex justify-center"},[e(k.Z,{attrs:{size:"100"}},[e("img",{attrs:{src:t.user.picture.large,alt:""}})])],1),e(w.EB,{staticClass:"d-flex justify-center"},[t._v(" "+t._s(t.user.name.first+" "+t.user.name.last)+" ")]),e(w.Qq,{staticClass:"d-flex justify-center"},[e(u.Z,[t._v("mdi-map-marker")]),t._v(t._s(t.user.location.country)+" ")],1),e(w.h7,{staticClass:"d-flex justify-center"},[e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"60",to:{name:"chatScreen",params:{id:t.user.login.uuid}}},on:{click:function(e){t.dialog=!1}}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-chat-processing")]),t._v("Talk")],1)]),e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"60"},on:{click:function(e){t.phoneDialog=!0}}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-phone")]),t._v("Phone")],1)]),e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"60"}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-video")]),t._v("Video call")],1)])],1)],1)])]),e(b.Z,{staticClass:"card-detail",class:t.detailDisplay,attrs:{color:"#3A5475"}},[e("div",{staticClass:"width100 height70"},[e("div",{staticClass:"close-btn"},[e(c.Z,{attrs:{icon:""},on:{click:function(e){t.value="Profile"}}},[e(u.Z,[t._v("mdi-arrow-left")])],1)],1),e("div",{staticClass:"d-flex flex-column justify-center justify-space-around height100p"},[e("div",{staticClass:"d-flex flex-column flex-sm-row justify-center align-center pt-6"},[e("div",{staticClass:"d-flex justify-center order-sm-1"},[e(k.Z,{attrs:{size:"150"}},[e("img",{attrs:{src:t.user.picture.large,alt:""}})])],1),e("div",{staticClass:"pe-sm-7 order-sm-0"},[e(w.EB,{staticClass:"d-flex justify-center"},[t._v(" "+t._s(t.user.name.first+" "+t.user.name.last)+" ")]),e(w.Qq,{staticClass:"d-flex justify-center pb-2"},[e(u.Z,[t._v("mdi-map-marker")]),t._v(t._s(t.user.location.country)+" ")],1),e(w.h7,{staticClass:"d-flex justify-center pa-0"},[e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"40",to:{name:"chatScreen",params:{id:t.user.login.uuid}}},on:{click:function(e){t.dialog=!1}}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-chat-processing")])],1)]),e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"40"},on:{click:function(e){t.phoneDialog=!0}}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-phone")])],1)]),e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"40"}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-video")])],1)])],1)],1)]),e(w.ZB,{staticClass:"userData-con"},[e("div",{staticClass:"d-flex userData"},[e("p",[t._v("gender")]),e(d.Z),e("p",[t._v(t._s(t.user.gender))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("age")]),e(d.Z),e("p",[t._v(t._s(t.user.dob.age))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("country")]),e(d.Z),e("p",[t._v(t._s(t.user.location.country))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("state")]),e(d.Z),e("p",[t._v(t._s(t.user.location.state))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("city")]),e(d.Z),e("p",[t._v(t._s(t.user.location.city))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("email")]),e(d.Z),e("p",[t._v(t._s(t.user.email))])],1)])],1)])])],1),e(D.Z,{attrs:{"max-width":"500px"},model:{value:t.phoneDialog,callback:function(e){t.phoneDialog=e},expression:"phoneDialog"}},[e(b.Z,[e(w.EB,[t._v(" Call ")]),e("h4",{staticClass:"px-6 pt-3"},[e(u.Z,{staticClass:"pe-6"},[t._v("mdi-phone")]),e("span",{staticClass:"text-decoration-underline grey--text text--darken-3"},[t._v(t._s(t.user.cell))])],1),e("h4",{staticClass:"pt-10 px-6"},[e(u.Z,[t._v("mdi-alert")]),t._v(" This is not a real telephone number. Please note that we cannot be held responsible for any problems that may arise from calling this number. ")],1),e(w.h7,[e(c.Z,{attrs:{color:"primary",text:""},on:{click:function(e){t.phoneDialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)},U=[],E=s.p+"img/background-img1.f45640af.jpeg",L=s.p+"img/background-img2.fb2938e9.jpeg",P=s.p+"img/background-img3.2b0be5d3.jpeg",M=s.p+"img/background-img4.f76a2f79.jpeg",S=s.p+"img/background-img5.dc7e51ef.jpeg",T=s.p+"img/background-img6.237cb54c.jpeg",O=s.p+"img/background-img7.03f23fd5.jpeg",B=s.p+"img/background-img8.1e14d711.jpeg",$=s.p+"img/background-img9.77874bed.jpeg",A=s.p+"img/background-img10.60783b1a.jpeg",I={data(){return{dialog:!1,phoneDialog:!1,value:"Profile",bgList:[E,L,P,M,S,T,O,B,$,A]}},props:{user:Object},computed:{profileDisplay(){return"Detail"==this.value?"d-none":""},detailDisplay(){return"Profile"==this.value?"d-none":""}}},K=I,R=(0,h.Z)(K,j,U,!1,null,null,null),H=R.exports,q=s(8231),z=s(5808),N=function(){var t=this,e=t._self._c;return e(q.Z,[e(z.Z,{staticClass:"pa-0",attrs:{"three-line":""}},t._l(t.getLastMsgId,(function(t){return e("TalkListBox",{key:t,attrs:{uuid:t}})})),1)],1)},F=[],Q=s(4525),J=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"chatScreen",params:{id:t.getUser.login.uuid}}}},[e(Q.Z,{staticClass:"px-2 py-2 min-height-"},[e(k.Z,{staticClass:"me-2"},[e("img",{attrs:{src:t.getUser.picture.large}})]),e("div",{staticClass:"width100"},[e("div",{staticClass:"d-flex align-center text-center pb-1 width100"},[e("h4",{staticClass:"font-name pe-5 f-black"},[t._v(t._s(t.getUser.name.last))]),e(d.Z),e("p",{staticClass:"font-date"},[t._v(t._s(t.getLastMsg.date))])],1),e("div",{staticClass:"ma-0"},[e("p",{staticClass:"font-text ma-0"},[t._v(t._s(t.getLastMsg.text))])])])],1)],1)},V=[],Y={data(){return{messages:Object,order:0,text:"",keyDownCode:0,dialog:!1}},props:{uuid:String},computed:{getLastMsg(){return this.$store.getters["messages/getLatestMessageById"](this.uuid)},getUser(){return this.$store.getters.getUserById(this.uuid)}}},W=Y,X=(0,h.Z)(W,J,V,!1,null,null,null),G=X.exports,tt={computed:{getLastMsgId(){return this.$store.getters["messages/getLatestMsgIdList"]}},components:{TalkListBox:G}},et=tt,st=(0,h.Z)(et,N,F,!1,null,null,null),at=st.exports,it={data:()=>({value:"Home"}),computed:{getUsers(){return Object.values(this.$store.getters.getAllUsers)},homeDisplay(){return"Talk"==this.value?"d-none":""},talkDisplay(){return"Home"==this.value?"d-none":""}},components:{UserListCard:H,TalkList:at}},nt=it,rt=(0,h.Z)(nt,Z,y,!1,null,null,null),lt=rt.exports,ot={name:"App",components:{SystemBar:_,UserList:lt},data:()=>({})},ct=ot,ut=(0,h.Z)(ct,l,o,!1,null,null,null),dt=ut.exports,pt=s(8345),gt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex d-sm-none",attrs:{id:"xs-index"}},[e("UserList")],1)])},mt=[],ft={name:"index",created:function(){0==Object.keys(this.$store.getters.getAllUsers).length&&this.$store.dispatch("fetchUsers","https://randomuser.me/api/?results=10")},computed:{getUsers(){return Object.values(this.$store.getters.getAllUsers)}},components:{UserList:lt}},vt=ft,ht=(0,h.Z)(vt,gt,mt,!1,null,null,null),xt=ht.exports,_t=s(5174),Ct=s(266),Zt=s(8271),yt=s(1713),kt=s(7399),bt=s(7953),wt=function(){var t=this,e=t._self._c;return e("div",{ref:"scroll",staticClass:"pa-0 ma-0 overflow-y-auto height100 hull-width"},[e(_t.Z,{attrs:{app:"",dense:"",flat:"",color:"#EAE0C7"}},[e(u.Z,{staticClass:"d-sm-none rotate-180 pl-5",on:{click:function(e){return t.$router.back()}}},[t._v("mdi-logout")]),e(bt.qW,{staticClass:"pl-1 f-black"},[t._v(t._s(t.getUser.name.first+" "+t.getUser.name.last))]),e(d.Z)],1),e("div",{staticClass:"chat-screen__name-bar pb-10"},[e(yt.Z,{staticClass:"pt-5 pa-2 ma-0"},[e(Ct.Z,{staticClass:"pa-2",attrs:{xs:"12"}},t._l(t.getMsgList,(function(t){return e("MessageBox",{key:t.order,attrs:{messages:t}})})),1)],1)],1),e(Zt.Z,{staticClass:"mx-0 footer",attrs:{outlined:"",color:"#EAE0C7"}},[e(yt.Z,{staticClass:"d-flex align-center justify-center",attrs:{"no-gutters":""}},[e(Ct.Z,{staticClass:"pr-2"},[e(kt.Z,{attrs:{"auto-grow":"",dense:"",outlined:"",rows:"1","hide-details":"false",label:"Enter message...",color:"#093353"},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.keyDownEnter.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.shiftKey?t.keyEnterShift.apply(null,arguments):null}],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.keyUpEnter.apply(null,arguments)}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),e(c.Z,{staticClass:"px-0 d-flex align-center",attrs:{icon:"",color:"gray lighten-4","min-width":"0"},on:{click:function(e){return t.sendMessage()}}},[e(u.Z,{attrs:{large:""}},[t._v("mdi-send-circle-outline")])],1)],1)],1)],1)},Dt=[],jt=function(){var t=this,e=t._self._c;return e("div",[0==t.messages.didISent?e(yt.Z,{staticClass:"ma-0 d-flex",attrs:{wrap:""}},[e("div",[e(D.Z,{staticClass:"height70",attrs:{dark:"","max-width":"70%",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(k.Z,t._g(t._b({staticClass:"me-1"},"v-avatar",a,!1),s),[e("img",{attrs:{src:t.getUser.picture.large}})])]}}],null,!1,4135611113),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(b.Z,{class:t.profileDisplay,attrs:{img:t.bgList[t.getUser.index]}},[e("div",{staticClass:"height70 d-flex align-center justify-center flex-column"},[e("div",{staticClass:"close-btn"},[e(c.Z,{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[e(u.Z,[t._v("mdi-close")])],1)],1),e("div",{staticClass:"userDetail-btn"},[e(c.Z,{attrs:{icon:""},on:{click:function(e){t.value="Detail"}}},[e(u.Z,[t._v("mdi-account")])],1)],1),e("div",{staticClass:"width100"},[e("div",{staticClass:"d-flex justify-center"},[e(k.Z,{attrs:{size:"100"}},[e("img",{attrs:{src:t.getUser.picture.large,alt:""}})])],1),e(w.EB,{staticClass:"d-flex justify-center"},[t._v(" "+t._s(t.getUser.name.first+" "+t.getUser.name.last)+" ")]),e(w.Qq,{staticClass:"d-flex justify-center"},[e(u.Z,[t._v("mdi-map-marker")]),t._v(t._s(t.getUser.location.country)+" ")],1),e(w.h7,{staticClass:"d-flex justify-center"},[e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"60",to:{name:"chatScreen",params:{id:t.getUser.login.uuid}}},on:{click:function(e){t.dialog=!1}}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-chat-processing")]),t._v("Talk")],1)]),e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"60"},on:{click:function(e){t.phoneDialog=!0}}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-phone")]),t._v("Phone")],1)]),e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"60"}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-video")]),t._v("Video call")],1)])],1)],1)])]),e(b.Z,{staticClass:"card",class:t.detailDisplay,attrs:{color:"#3A5475"}},[e("div",{staticClass:"width100 height70"},[e("div",{staticClass:"close-btn"},[e(c.Z,{attrs:{icon:""},on:{click:function(e){t.value="Profile"}}},[e(u.Z,[t._v("mdi-arrow-left")])],1)],1),e("div",{staticClass:"d-flex flex-column justify-center justify-space-around height100p"},[e("div",{staticClass:"d-flex flex-column flex-sm-row justify-center align-center pt-6"},[e("div",{staticClass:"d-flex justify-center order-sm-1"},[e(k.Z,{attrs:{size:"150"}},[e("img",{attrs:{src:t.getUser.picture.large,alt:""}})])],1),e("div",{staticClass:"pe-sm-7 order-sm-0"},[e(w.EB,{staticClass:"d-flex justify-center"},[t._v(" "+t._s(t.getUser.name.first+" "+t.getUser.name.last)+" ")]),e(w.Qq,{staticClass:"d-flex justify-center pb-2"},[e(u.Z,[t._v("mdi-map-marker")]),t._v(t._s(t.getUser.location.country)+" ")],1),e(w.h7,{staticClass:"d-flex justify-center pa-0"},[e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"40",to:{name:"chatScreen",params:{id:t.getUser.login.uuid}}},on:{click:function(e){t.dialog=!1}}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-chat-processing")])],1)]),e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"40"},on:{click:function(e){t.phoneDialog=!0}}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-phone")])],1)]),e(c.Z,{staticClass:"btn-multiline text-center",attrs:{text:"",width:"50",height:"40"}},[e("span",{staticClass:"text-wrap"},[e(u.Z,[t._v("mdi-video")])],1)])],1)],1)]),e(w.ZB,{staticClass:"userData-con"},[e("div",{staticClass:"d-flex userData"},[e("p",[t._v("gender")]),e(d.Z),e("p",[t._v(t._s(t.getUser.gender))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("age")]),e(d.Z),e("p",[t._v(t._s(t.getUser.dob.age))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("country")]),e(d.Z),e("p",[t._v(t._s(t.getUser.location.country))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("state")]),e(d.Z),e("p",[t._v(t._s(t.getUser.location.state))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("city")]),e(d.Z),e("p",[t._v(t._s(t.getUser.location.city))])],1),e("div",{staticClass:"d-flex userData"},[e("p",[t._v("email")]),e(d.Z),e("p",[t._v(t._s(t.getUser.email))])],1)])],1)])])],1),e(D.Z,{attrs:{"max-width":"500px"},model:{value:t.phoneDialog,callback:function(e){t.phoneDialog=e},expression:"phoneDialog"}},[e(b.Z,[e(w.EB,[t._v(" Call ")]),e("h4",{staticClass:"px-6 pt-3"},[e(u.Z,{staticClass:"pe-6"},[t._v("mdi-phone")]),e("span",{staticClass:"text-decoration-underline grey--text text--darken-3"},[t._v(t._s(t.getUser.cell))])],1),e("h4",{staticClass:"pt-10 px-6"},[e(u.Z,[t._v("mdi-alert")]),t._v(" This is not a real telephone number. Please note that we cannot be held responsible for any problems that may arise from calling this number. ")],1),e(w.h7,[e(c.Z,{attrs:{color:"primary",text:""},on:{click:function(e){t.phoneDialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1),e("div",[e(b.Z,{staticClass:"mb-1 ms-1 card-opponent"},[e(w.ZB,{staticClass:"pa-2"},[e("p",{staticClass:"font-message f-NSJ"},[t._v(t._s(t.messages.text))])])],1),e(yt.Z,{staticClass:"ms-1 ma-0"},[e("p",{staticClass:"font-date ma-0 pl-1"},[t._v(t._s(t.messages.date))])])],1)]):e(yt.Z,{staticClass:"justify-end ma-0",attrs:{wrap:""}},[e("div",{},[e(b.Z,{staticClass:"mb-1 card-mine",attrs:{color:"#3A5475"}},[e(w.ZB,{staticClass:"pa-2"},[e("p",{staticClass:"font-message white--text f-NSJ fw-300"},[t._v(t._s(t.messages.text))])])],1),e(yt.Z,{staticClass:"justify-end ma-0"},[e("p",{staticClass:"font-date ma-0 pr-1"},[t._v(t._s(t.messages.date))])])],1)])],1)},Ut=[],Et={name:"MessageBox",data(){return{dialog:!1,phoneDialog:!1,value:"Profile",bgList:[E,L,P,M,S,T,O,B,$,A]}},props:{messages:Object,user:Object},computed:{getUser(){return this.$store.getters.getUserById(this.$route.params.id)},profileDisplay(){return"Detail"==this.value?"d-none":""},detailDisplay(){return"Profile"==this.value?"d-none":""}}},Lt=Et,Pt=(0,h.Z)(Lt,jt,Ut,!1,null,null,null),Mt=Pt.exports;class St{constructor(t,e,s,a){this.order=t,this.id=e,this.text=s,this.didISent=a,this.date="",this.dateNum=0}static getDateString(){let t=new Date,e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),i=t.getHours(),n=t.getMinutes(),r=`${e}/${s}/${a}/ ${i}:${n}`;return r}}var Tt={name:"chatScreen",data(){return{order:0,text:"",keyDownCode:0,links:[{icon:"mdi-logout",text:"Logout",route:"/"},{icon:"mdi-forum",text:"Talk",route:"/message-list"}]}},computed:{getMsgList(){return this.$store.getters["messages/getMessagesById"](this.$route.params.id)},getUser(){return this.$store.getters.getUserById(this.$route.params.id)}},methods:{sendMessage:function(){if(""==this.text)return void alert("Type the message you want to send.");let t=new St(this.order,this.$route.params.id,this.text,!0);this.text="",t.date=St.getDateString();let e=(new Date).getTime();t.dateNum=e,this.$store.commit("messages/setMessages",t),this.$store.dispatch("messages/setReply",t),this.order+=2},keyDownEnter(t){this.keyDownCode=t.keyCode,t.preventDefault()},keyUpEnter(t){229!==this.keyDownCode&&(t.preventDefault(),this.sendMessage())},keyEnterShift(){console.log("shift,enter")}},components:{MessageBox:Mt}},Ot=Tt,Bt=(0,h.Z)(Ot,wt,Dt,!1,null,null,null),$t=Bt.exports,At=function(){var t=this,e=t._self._c;return e("div",{},[e(p.Z,{staticClass:"top-nav",attrs:{fixed:"",light:"",color:"#EAE0C7"}},[e("span",{staticClass:"ps-2"},[t._v("Talk")])]),e("div",{staticClass:"nav-main"},[e("TalkList")],1),e(C.Z,{attrs:{app:"",fixed:"",grow:"",shift:"","background-color":"#EAE0C7"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e(c.Z,{attrs:{to:"/"}},[e("span",[t._v("Home")]),e(u.Z,[t._v("mdi-home-outline")])],1),e(c.Z,{attrs:{value:"Talk",color:"#EAE0C7"}},[e("span",[t._v("talk")]),e(u.Z,[t._v("mdi-chat-processing-outline")])],1)],1)],1)},It=[],Kt={name:"talk-view",data:()=>({value:"Talk"}),computed:{getLastMsgId(){return this.$store.getters["messages/getLatestMsgIdList"]}},components:{TalkList:at}},Rt=Kt,Ht=(0,h.Z)(Rt,At,It,!1,null,null,null),qt=Ht.exports;a.ZP.use(pt.ZP);const zt=[{path:"/",name:"index",component:xt},{path:"/user/:id/chat",name:"chatScreen",component:$t},{path:"/talk-view",name:"talk-view",component:qt}],Nt=new pt.ZP({mode:"history",base:"/chats-app/",routes:zt});var Ft=Nt,Qt=s(629);const Jt={state:{users:{}},getters:{getAllUsers(t){return t.users},getUserById:t=>e=>t.users[e]},mutations:{setUsers(t,e){let s={};for(let a=0;a<e.length;a++)s[e[a].login.uuid]=e[a],s[e[a].login.uuid]["index"]=a.toString();t.users=s}},actions:{async fetchUsers(t,e){const s=await fetch(e),a=await s.json();t.commit("setUsers",a.results)}}};s(7658);const Vt={namespaced:!0,state:{msgListPerRecipient:{}},getters:{getMessagesById:t=>e=>t.msgListPerRecipient[e],getLatestMessageById:t=>e=>t.msgListPerRecipient[e][t.msgListPerRecipient[e].length-1],getLatestMsgIdList(t){let e=t.msgListPerRecipient,s=Object.keys(e).map((t=>({key:t,value:e[t][e[t].length-1].dateNum})));s.sort(((t,e)=>e.value-t.value));let a=[];for(let i=0;i<s.length;i++)a.push(s[i].key);return a}},mutations:{setMessages(t,e){let s=t.msgListPerRecipient;null==s[e.id]?s[e.id]=[e]:s[e.id].push(e),t.msgListPerRecipient=Object.assign({},s)}},actions:{setReply(t,e){setTimeout((()=>{let s=new FormData;s.append("apikey","DZZtDiyVYJmlqXaj77rMdSeCC2TI9hz0"),s.append("query",e.text),fetch("https://api.a3rt.recruit.co.jp/talk/v1/smalltalk",{method:"POST",body:s}).then((t=>t.json())).then((s=>{let a=s.results[0].reply,i=new St(e.order+1,e.id,a,!1);i.date=St.getDateString();let n=(new Date).getTime();i.dateNum=n,t.commit("setMessages",i)}))}),100)}}};a.ZP.use(Qt.ZP);var Yt=new Qt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{users:Jt,messages:Vt}}),Wt=s(8864);a.ZP.use(Wt.Z);var Xt=new Wt.Z({});a.ZP.config.productionTip=!1,new a.ZP({router:Ft,store:Yt,vuetify:Xt,render:t=>t(dt)}).$mount("#app")}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,n){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],n=t[u][2];for(var l=!0,o=0;o<a.length;o++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[o])}))?a.splice(o--,1):(l=!1,n<r&&(r=n));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/chats-app/"}(),function(){var t={826:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,r=a[0],l=a[1],o=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(o)var u=o(s)}for(e&&e(a);c<r.length;c++)n=r[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},a=self["webpackChunkchat_app"]=self["webpackChunkchat_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(9567)}));a=s.O(a)})();
//# sourceMappingURL=index.26dd1e42.js.map