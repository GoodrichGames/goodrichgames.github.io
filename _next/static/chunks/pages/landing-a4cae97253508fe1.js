(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{9835:function(e,a,t){"use strict";t(7294);var n=t(1163),s=t(9008),i=t.n(s),r=t(3239),o=t.n(r),l=t(5893);a.Z=function(e){var a=e.name,t=e.description,s=e.image,r=void 0===s?o().shareImage:s,c=e.isArticle,d="https://www.manasourcegame.com"+(0,n.useRouter)().pathname,m=a;return(0,l.jsxs)(i(),{children:[(0,l.jsx)("title",{children:m}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,l.jsx)("link",{rel:"canonical",href:d}),(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,l.jsx)("meta",{name:"application-name",content:m}),(0,l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,l.jsx)("meta",{name:"twitter:site",content:d}),(0,l.jsx)("meta",{name:"twitter:title",content:m}),(0,l.jsx)("meta",{name:"twitter:description",content:t}),(0,l.jsx)("meta",{name:"twitter:image",content:r}),(0,l.jsx)("meta",{property:"og:title",content:m}),(0,l.jsx)("meta",{property:"og:image",content:r}),(0,l.jsx)("meta",{property:"og:site_name",content:o().name}),(0,l.jsx)("meta",{property:"og:description",content:t}),(0,l.jsx)("meta",{property:"og:url",content:d}),c&&(0,l.jsx)("meta",{property:"og:type",content:"article"})]})}},5821:function(e,a,t){"use strict";t(5675);var n=t(1664),s=t.n(n),i=t(1163),r=(t(7294),t(3239),t(7643)),o=t.n(r),l=t(5893),c="/about",d="/news",m="/resources",u="/contactus";a.Z=function(e){var a=(0,i.useRouter)(),t="/".concat(a.pathname.split("/")[1]);return(0,l.jsx)("nav",{className:o().navigation,children:(0,l.jsx)("div",{className:o().navigation,children:(0,l.jsxs)("div",{className:o().navigationTop,children:[(0,l.jsx)(s(),{href:"/",children:(0,l.jsx)("h1",{children:(0,l.jsx)("a",{className:o().logo,children:"Mana Source"})})}),(0,l.jsx)("div",{className:o().navigationOverlay,children:!e.disableLinks&&(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"/"===t?o().selected:"",children:(0,l.jsx)(s(),{href:"/",children:(0,l.jsx)("a",{className:o().menu1,children:"Home"})})},"home"),(0,l.jsx)("li",{className:t===c?o().selected:"",children:(0,l.jsx)(s(),{href:c,children:(0,l.jsx)("a",{className:o().menu2,children:"About"})})},"about"),(0,l.jsx)("li",{className:t===d?o().selected:"",children:(0,l.jsx)(s(),{href:d,children:(0,l.jsx)("a",{className:o().menu3,children:"News"})})},"news"),(0,l.jsx)("li",{className:t===m?o().selected:"",children:(0,l.jsx)(s(),{href:m,children:(0,l.jsx)("a",{className:o().menu4,children:"Resources"})})},"resources"),(0,l.jsx)("li",{className:t===u?o().selected:"",children:(0,l.jsx)(s(),{href:u,children:(0,l.jsx)("a",{className:o().menu5,children:"Contact Us"})})},"contactus")]})})]})})})}},8394:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}t.d(a,{Z:function(){return r}});var s=t(5893),i=["children"],r=function(e){var a=e.children,t=n(e,i);return(0,s.jsx)("div",{className:t.classes,children:a})}},5099:function(e,a,t){"use strict";var n=t(5893);a.Z=function(e){var a=e.children,t=e.title;return(0,n.jsxs)("li",{children:[t&&(0,n.jsx)("h3",{children:t}),(0,n.jsx)("div",{children:a})]})}},9401:function(e,a,t){"use strict";var n=t(5893);a.Z=function(e){var a=e.children;return(0,n.jsx)("section",{children:(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:a})})})}},7580:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var n=t(4711),s=t(453),i=t.n(s),r=t(7294),o=t(5893),l=function(e){return/[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)},c=function(e){var a=e.ctaText,t=e.status,n=(e.message,e.onValidated),s=(0,r.useState)(""),c=s[0],d=s[1],m=(0,r.useRef)(),u=(0,r.useRef)();return(0,o.jsxs)("div",{className:i().emailSignup,children:[(0,o.jsx)("h2",{children:"Sign up for updates"}),(0,o.jsxs)("div",{className:i().emailFieldGroup,children:[(0,o.jsxs)("label",{htmlFor:"mce-EMAIL",children:["Email Address  ",(0,o.jsx)("span",{className:i().asterisk,children:"*"})]}),(0,o.jsx)("input",{type:"email",name:"EMAIL",className:i().required+" "+i().email,value:c,onChange:function(e){d(e.target.value),e.target.value&&!l(e.target.value)||u.current.classList.add(i().hidden)},onBlur:function(e){e.target.value&&!l(e.target.value)&&u.current.classList.remove(i().hidden)}})]}),(0,o.jsx)("div",{ref:u,className:i().errorBlock+" "+i().hidden,children:"You have entered an invalid email address.  Please check your entry and try again."}),"error"===t&&(0,o.jsx)("div",{ref:m,className:i().errorBlock+" "+i().hidden,children:"An error occurred in submission, please try again later."}),(0,o.jsx)("div",{className:i().notName,"aria-hidden":"true",children:(0,o.jsx)("input",{type:"text",name:"b_a2c1595175259c6cf93c9b708_70002bf500",tabIndex:"-1",defaultValue:""})}),(0,o.jsx)("div",{className:i().optionalParent,children:(0,o.jsx)("div",{className:i().foot,children:(0,o.jsx)("input",{type:"submit",value:a,name:"subscribe",className:i().button,onClick:function(){l(c)&&n({EMAIL:c})}})})})]})},d=function(e){return(0,o.jsx)(n.Z,{url:"https://github.us10.list-manage.com/subscribe/post?u=a2c1595175259c6cf93c9b708&amp;id=70002bf500",render:function(a){var t=a.subscribe,n=a.status,s=a.message;return(0,o.jsxs)("div",{children:["success"!==n&&(0,o.jsx)(c,{ctaText:e.ctaText,status:n,message:s,onValidated:function(e){return t(e)}}),"success"===n&&(0,o.jsx)("div",{className:i().subscribedMsg,children:"Thank you!  We'll be in touch soon!"})]})}})}},4623:function(e,a,t){"use strict";var n=t(7156),s=t.n(n),i=t(1058),r=t(2279),o=t(5893);a.Z=function(e){var a=e.title,t=e.description,n=e.image;return(0,o.jsxs)("header",{className:n?s().imageHeader:s().header,children:[n&&(0,o.jsx)(i.Z,{src:r.Z+n,alt:a,layout:"fill"}),(0,o.jsx)("h1",{className:s().title,children:a}),(0,o.jsx)("p",{className:s().description,children:t})]})}},4677:function(e,a,t){"use strict";var n=t(3913),s=t(5893);a.Z=function(e){var a=e.videoId,t=e.height,i=e.width,r=e.isAutoplay,o={height:t,width:i,playerVars:{autoplay:r?1:0}};return(0,s.jsx)(n.Z,{videoId:a,opts:o,onReady:function(e){r||e.target.pauseVideo()}})}},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an adventure board game focuses around arena-style combat you&apos;ll need to survive in the mysterious fantasy world of Kainan.",shareImage:"/share.webp",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},2732:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return v}});var n=t(1058),s=t(7580),i=t(9401),r=t(5099),o=t(1459),l=t.n(o),c=t(2279),d=t(4623),m=t(9835),u=t(5821),_=t(5893),h=function(e){var a=e.children,t=e.title,n=e.date,s=e.description,i=e.image,r=e.isArticle;return(0,_.jsxs)("div",{className:l().backgroundWrap,children:[(0,_.jsx)(m.Z,{name:t,description:s,image:i,isArticle:r}),(0,_.jsx)(u.Z,{disableLinks:!0}),(0,_.jsx)("main",{className:l().main+" "+l().mainNoLinks,children:(0,_.jsx)("div",{className:l().bodyWrapper,children:(0,_.jsxs)("div",{className:l().bodyContent,children:[r&&(0,_.jsx)(d.Z,{title:t,date:n,description:s,image:i}),a]})})}),(0,_.jsx)("footer",{className:l().footer,children:(0,_.jsx)("div",{className:l().footerContent,children:(0,_.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2023. All rights reserved."})})})]})},p=t(1392),x=t.n(p),g=function(e){return(0,_.jsx)("button",{type:e.type||"button",className:x().button+" "+e.classes,onClick:e.onClick,children:e.text})},f=t(8394),j=t(4677);function v(){return(0,_.jsxs)(h,{children:[(0,_.jsx)("div",{className:l().heroImage,children:(0,_.jsx)(n.Z,{src:c.Z+"/images/featured-game.webp",alt:"mana well in cave",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",priority:!0})}),(0,_.jsxs)(i.Z,{children:[(0,_.jsx)(s.Z,{ctaText:"Start your adventure!"}),(0,_.jsx)(j.Z,{videoId:"h9tHSCE1T84",width:"960",height:"540",isAutoplay:!1}),(0,_.jsxs)(r.Z,{children:[(0,_.jsx)("h4",{children:"A discovery at an ancient vault has the potential to upend the nations..."}),(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{className:l().fontArkhip,children:"Mana Source"})," is an upcoming adventure board game. It focuses around arena-style combat you'll need to survive in the mysterious fantasy world of Kainan. It features five playable primary classes, one exclusively secondary class, and over 300 unique cards in the release set."]}),(0,_.jsx)("br",{}),(0,_.jsx)("p",{children:"Experiment, strategize, and mindgame to reduce your opponent's health to zero and win!"}),(0,_.jsx)("br",{}),(0,_.jsx)(f.Z,{classes:l().darkThinBorder+" "+l().seventyW+" "+l().center,children:(0,_.jsx)(n.Z,{src:c.Z+"/images/Game-attributes.webp",alt:"1 - 4 players.  60 - 180 minutes Cooperative.  20 - 30 minutes Competitve.  Ages 13 and up.",width:"100%",height:"43%",layout:"responsive",priority:!0})}),(0,_.jsx)("br",{}),(0,_.jsxs)(f.Z,{classes:l().flex,children:[(0,_.jsxs)(f.Z,{classes:l().emphasisCtn+" "+l().fourtyW+" "+l().inline+" "+l().mR10+" "+l().minHeight250+" "+l().vAlignTop,children:[(0,_.jsx)("h4",{children:"Game Modes"}),(0,_.jsx)("p",{children:"Cooperative Campaign - 1-4 players"}),(0,_.jsx)("p",{children:"Constructed - 1v1, 1v2, 2v2"}),(0,_.jsx)("p",{children:"Draft - 1v1"}),(0,_.jsx)("p",{children:"Limited - 1v1"}),(0,_.jsx)("p",{children:"More to come!"})]}),(0,_.jsxs)(f.Z,{classes:l().emphasisCtn+" "+l().fourtyW+" "+l().inline+" "+l().minHeight250+" "+l().vAlignTop,children:[(0,_.jsx)("h4",{children:"Features"}),"\u2022 Simultaneous turns for low downtime",(0,_.jsx)("br",{}),"\u2022 First of its kind update system using push notifications and sticker modifiers",(0,_.jsx)("br",{}),"\u2022 Easy for newcomers, depth for strategists",(0,_.jsx)("br",{}),"\u2022 Minimal Randomness, every action counts",(0,_.jsx)("br",{}),"\u2022 Story-driven content",(0,_.jsx)("br",{})]})]})]}),(0,_.jsx)(s.Z,{ctaText:"Start your adventure!"}),(0,_.jsx)(f.Z,{classes:l().darkThinBorder,children:(0,_.jsx)(n.Z,{src:c.Z+"/images/Exploring-cavern-ruins.webp",alt:"Exploring-cavern-ruins",width:"100%",height:"59%",layout:"responsive",priority:!0})}),(0,_.jsxs)(r.Z,{children:["Join the ",(0,_.jsx)("a",{href:"https://discord.com/invite/drQDa7MQ3e",children:"official Discord"})," to chat with the community or ask questions. Follow us on ",(0,_.jsx)("a",{href:"https://www.facebook.com/Mana-Source-102398542746103%C2%A0",children:"Facebook"}),". ",(0,_.jsx)("br",{})]}),(0,_.jsx)(s.Z,{ctaText:"Start your adventure!"}),(0,_.jsx)("br",{}),(0,_.jsx)(g,{text:"Learn More",classes:l().center+" "+l().fiftyW,onClick:function(){window.location=c.Z+"/"}}),(0,_.jsx)(n.Z,{src:c.Z+"/images/GG-Logo-dark-bg.webp",alt:"Goodrich Games Logo",width:"100%",height:"10%",layout:"responsive",objectFit:"contain",priority:!0}),(0,_.jsx)("br",{})]})]})}},2279:function(e,a){"use strict";a.Z=""},8505:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/landing",function(){return t(2732)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",mainNoLinks:"BaseTemplate_mainNoLinks__cFENf",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs",flex:"BaseTemplate_flex__pmXR4",mR10:"BaseTemplate_mR10__KFLm7",mL10:"BaseTemplate_mL10__I7h__",mL20:"BaseTemplate_mL20__OqsQe",mB10:"BaseTemplate_mB10__nzJQ2",vAlignTop:"BaseTemplate_vAlignTop__J5yfr",thirtyW:"BaseTemplate_thirtyW__xv_gG",thirdW:"BaseTemplate_thirdW__a_avi",fourtyW:"BaseTemplate_fourtyW__L8FZX",fiftyW:"BaseTemplate_fiftyW__s0Kom",seventyW:"BaseTemplate_seventyW__bnNCQ",fullW:"BaseTemplate_fullW__nMPDt",minHeight250:"BaseTemplate_minHeight250__PoT8i",miniGrid:"BaseTemplate_miniGrid__MY_E_",center:"BaseTemplate_center__1FEac",tCenter:"BaseTemplate_tCenter__tHJSf",inline:"BaseTemplate_inline__4xc5V",fontArkhip:"BaseTemplate_fontArkhip__Catmv",fontPhilosopher:"BaseTemplate_fontPhilosopher__hkuIa",emphasisCtn:"BaseTemplate_emphasisCtn__Jzn5s",medWPadding:"BaseTemplate_medWPadding__ISurX",xsWPadding:"BaseTemplate_xsWPadding__WJ5bk",darkThinBorder:"BaseTemplate_darkThinBorder__cHTRI",lightThinBorder:"BaseTemplate_lightThinBorder__Zy116"}},1392:function(e){e.exports={button:"Button_button__5931j"}},453:function(e){e.exports={emailSignup:"EmailSignup_emailSignup__vLpln",email:"EmailSignup_email__YI2o6",emailFieldGroup:"EmailSignup_emailFieldGroup__GXoXM",asterisk:"EmailSignup_asterisk__OgPws",response:"EmailSignup_response__ZzUq9",button:"EmailSignup_button__ZED7e",notName:"EmailSignup_notName___Ck5D",errorBlock:"EmailSignup_errorBlock__Meniz",subscribedMsg:"EmailSignup_subscribedMsg__mPZQi",hidden:"EmailSignup_hidden__lgNDg"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,711,913,774,888,179],(function(){return a=8505,e(e.s=a);var a}));var a=e.O();_N_E=a}]);