(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{9835:function(e,a,t){"use strict";t(7294);var n=t(1163),i=t(9008),s=t.n(i),r=t(3239),l=t.n(r),c=t(5893);a.Z=function(e){var a=e.name,t=e.description,i=e.image,r=void 0===i?l().shareImage:i,o=e.isArticle,m="https://www.manasourcegame.com"+(0,n.useRouter)().pathname,d=a;return(0,c.jsxs)(s(),{children:[(0,c.jsx)("title",{children:d}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,c.jsx)("link",{rel:"canonical",href:m}),(0,c.jsx)("meta",{charSet:"utf-8"}),(0,c.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,c.jsx)("meta",{name:"application-name",content:d}),(0,c.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,c.jsx)("meta",{name:"twitter:site",content:m}),(0,c.jsx)("meta",{name:"twitter:title",content:d}),(0,c.jsx)("meta",{name:"twitter:description",content:t}),(0,c.jsx)("meta",{name:"twitter:image",content:r}),(0,c.jsx)("meta",{property:"og:title",content:d}),(0,c.jsx)("meta",{property:"og:image",content:r}),(0,c.jsx)("meta",{property:"og:site_name",content:l().name}),(0,c.jsx)("meta",{property:"og:description",content:t}),(0,c.jsx)("meta",{property:"og:url",content:m}),o&&(0,c.jsx)("meta",{property:"og:type",content:"article"})]})}},5821:function(e,a,t){"use strict";t(5675);var n=t(1664),i=t.n(n),s=t(1163),r=(t(7294),t(3239),t(7643)),l=t.n(r),c=t(5893),o="/about",m="/news",d="/resources",_="/contactus";a.Z=function(e){var a=(0,s.useRouter)(),t="/".concat(a.pathname.split("/")[1]);return(0,c.jsx)("nav",{className:l().navigation,children:(0,c.jsx)("div",{className:l().navigation,children:(0,c.jsxs)("div",{className:l().navigationTop,children:[(0,c.jsx)(i(),{href:"/",children:(0,c.jsx)("a",{className:l().logo,children:"Mana Source"})}),(0,c.jsx)("div",{className:l().navigationOverlay,children:!e.disableLinks&&(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"/"===t?l().selected:"",children:(0,c.jsx)(i(),{href:"/",children:(0,c.jsx)("a",{className:l().menu1,children:"Home"})})},"home"),(0,c.jsx)("li",{className:t===o?l().selected:"",children:(0,c.jsx)(i(),{href:o,children:(0,c.jsx)("a",{className:l().menu2,children:"About"})})},"about"),(0,c.jsx)("li",{className:t===m?l().selected:"",children:(0,c.jsx)(i(),{href:m,children:(0,c.jsx)("a",{className:l().menu3,children:"News"})})},"news"),(0,c.jsx)("li",{className:t===d?l().selected:"",children:(0,c.jsx)(i(),{href:d,children:(0,c.jsx)("a",{className:l().menu4,children:"Resources"})})},"resources"),(0,c.jsx)("li",{className:t===_?l().selected:"",children:(0,c.jsx)(i(),{href:_,children:(0,c.jsx)("a",{className:l().menu5,children:"Contact Us"})})},"contactus")]})})]})})})}},5858:function(e,a,t){"use strict";var n=t(4623),i=t(9835),s=t(5821),r=t(1459),l=t.n(r),c=t(1058),o=t(2279),m=t(5893);a.Z=function(e){var a=e.children,t=e.title,r=e.date,d=e.description,_=e.image,u=e.isArticle;return(0,m.jsxs)("div",{className:l().backgroundWrap,children:[(0,m.jsx)(i.Z,{name:t,description:d,image:_,isArticle:u}),(0,m.jsx)(s.Z,{}),(0,m.jsx)("main",{className:l().main,children:(0,m.jsx)("div",{className:l().bodyWrapper,children:(0,m.jsxs)("div",{className:l().bodyContent,children:[u&&(0,m.jsx)(n.Z,{title:t,date:r,description:d,image:_}),a]})})}),(0,m.jsx)("footer",{className:l().footer,children:(0,m.jsxs)("div",{className:l().footerContent,children:[(0,m.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2023. All rights reserved."}),(0,m.jsx)("br",{}),(0,m.jsx)(c.Z,{src:o.Z+"/images/GG-Logo-dark-bg.webp",alt:"Goodrich Games Logo",width:"100%",height:"5%",layout:"responsive",objectFit:"contain",priority:!0})]})})]})}},2214:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var n=t(4777),i=t.n(n),s=t(287),r=t.n(s),l=t(1664),c=t.n(l),o=t(1058),m=t(2279),d=t(5893),_=function(e){var a=e.article;return(0,d.jsx)(c(),{href:a.link,children:(0,d.jsxs)("a",{className:r().articleLink,children:[(0,d.jsx)("div",{className:r().imageContainer,children:(0,d.jsx)(o.Z,{src:m.Z+a.image,alt:a.title,layout:"fill",className:a.imageVAlign})}),(0,d.jsxs)("div",{className:r().articleContent,children:[a.date&&(0,d.jsx)("date",{children:a.date}),(0,d.jsx)("div",{className:r().articleTitle,children:a.title}),(0,d.jsx)("p",{children:a.description})]})]})})},u=function(e){var a=e.category,t=e.max,n=i().filter((function(e){return e.categories.includes(a)})).slice(0,t);return(0,d.jsx)("section",{children:n.map((function(e){return(0,d.jsx)("div",{className:r().article,children:(0,d.jsx)(_,{article:e})},e.title)}))})}},4623:function(e,a,t){"use strict";var n=t(7156),i=t.n(n),s=t(1058),r=t(2279),l=t(5893);a.Z=function(e){var a=e.title,t=e.description,n=e.image;return(0,l.jsxs)("header",{className:n?i().imageHeader:i().header,children:[n&&(0,l.jsx)(s.Z,{src:r.Z+n,alt:a,layout:"fill"}),(0,l.jsx)("h1",{className:i().title,children:a}),(0,l.jsx)("p",{className:i().description,children:t})]})}},4777:function(e){e.exports=[{title:"July / August 2023 Update",description:"",image:"/images/articles/road-1072823_1920.webp",link:"/articles/aug2023update",categories:["all","devnotes","announcements"],date:"Sept 12, 2023"},{title:"May / June 2023 Update",description:"",image:"/images/articles/sunset-3325080_1920.webp",link:"/articles/june2023update",categories:["all","devnotes","announcements"],date:"June 27, 2023"},{title:"March / April 2023 Update",description:"",image:"/images/articles/planet-1702788_1280.webp",link:"/articles/mar2023update",categories:["all","devnotes","announcements"],date:"Mar 28, 2023"},{title:"February 2023 Update",description:"",image:"/images/articles/painting-3995999_1280.webp",link:"/articles/feb2023update",categories:["all","devnotes","announcements"],date:"Feb 13, 2023"},{title:"January 2023 Update",description:"Start of 2023 Newsletter",image:"/images/timbatia-small.webp",imageVAlign:"vAlignTop",link:"/articles/jan2023update",categories:["all","devnotes","announcements"],date:"Jan 22, 2023"},{title:"New Teaser Trailer!",description:"Mana Source - Teaser Trailer",image:"/images/cave.webp",link:"/articles/firstpromo",categories:["all","devnotes","announcements"],date:"Nov 29, 2022"},{title:"Introduction",description:"What is Mana Source?",image:"/images/cave.webp",link:"/articles/introduction",categories:["all","devnotes","announcements"],date:"May 22, 2022"},{title:"Release Notes 5-24-22",description:"Patches the Llama delivers release notes",image:"/images/articles/llama-time.webp",imageVAlign:"vAlignTop",link:"/articles/releasenotes-5-24-22",categories:[],date:"May 24, 2022"}]},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an arena-style card game where players battle for control of Mana Wells scattered throughout the mysterious fantasy world of Kainan.",shareImage:"/share.webp",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},3206:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return r}});var n=t(5858),i=t(2214),s=t(5893);function r(){return(0,s.jsx)(n.Z,{title:"News",description:"Latest Mana Source updates, news, balance changes",children:(0,s.jsx)(i.Z,{category:"all"})})}},2279:function(e,a){"use strict";a.Z=""},5115:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return t(3206)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",mainNoLinks:"BaseTemplate_mainNoLinks__cFENf",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs",flex:"BaseTemplate_flex__pmXR4",mR10:"BaseTemplate_mR10__KFLm7",vAlignTop:"BaseTemplate_vAlignTop__J5yfr",fourtyW:"BaseTemplate_fourtyW__L8FZX",fiftyW:"BaseTemplate_fiftyW__s0Kom",seventyW:"BaseTemplate_seventyW__bnNCQ",minHeight250:"BaseTemplate_minHeight250__PoT8i",center:"BaseTemplate_center__1FEac",tCenter:"BaseTemplate_tCenter__tHJSf",inline:"BaseTemplate_inline__4xc5V",emphasisCtn:"BaseTemplate_emphasisCtn__Jzn5s",darkThinBorder:"BaseTemplate_darkThinBorder__cHTRI",lightThinBorder:"BaseTemplate_lightThinBorder__Zy116"}},287:function(e){e.exports={articleLink:"ArticleList_articleLink__aV2EH",imageContainer:"ArticleList_imageContainer__t6JZq",articleTitle:"ArticleList_articleTitle__hnQSs",articleContent:"ArticleList_articleContent__qnKhN"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,774,888,179],(function(){return a=5115,e(e.s=a);var a}));var a=e.O();_N_E=a}]);