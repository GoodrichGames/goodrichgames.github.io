(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{9835:function(e,a,t){"use strict";t(7294);var n=t(1163),i=t(9008),s=t.n(i),r=t(3239),c=t.n(r),l=t(5893);a.Z=function(e){var a=e.name,t=e.description,i=e.image,r=void 0===i?c().shareImage:i,o=e.isArticle,m="https://www.manasourcegame.com"+(0,n.useRouter)().pathname,d=a;return(0,l.jsxs)(s(),{children:[(0,l.jsx)("title",{children:d}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,l.jsx)("link",{rel:"canonical",href:m}),(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,l.jsx)("meta",{name:"application-name",content:d}),(0,l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,l.jsx)("meta",{name:"twitter:site",content:m}),(0,l.jsx)("meta",{name:"twitter:title",content:d}),(0,l.jsx)("meta",{name:"twitter:description",content:t}),(0,l.jsx)("meta",{name:"twitter:image",content:r}),(0,l.jsx)("meta",{property:"og:title",content:d}),(0,l.jsx)("meta",{property:"og:image",content:r}),(0,l.jsx)("meta",{property:"og:site_name",content:c().name}),(0,l.jsx)("meta",{property:"og:description",content:t}),(0,l.jsx)("meta",{property:"og:url",content:m}),o&&(0,l.jsx)("meta",{property:"og:type",content:"article"})]})}},5821:function(e,a,t){"use strict";t(5675);var n=t(1664),i=t.n(n),s=t(1163),r=(t(7294),t(3239),t(7643)),c=t.n(r),l=t(5893),o="/about",m="/news",d="/resources",_="/contactus";a.Z=function(e){var a=(0,s.useRouter)(),t="/".concat(a.pathname.split("/")[1]);return(0,l.jsx)("nav",{className:c().navigation,children:(0,l.jsx)("div",{className:c().navigation,children:(0,l.jsxs)("div",{className:c().navigationTop,children:[(0,l.jsx)(i(),{href:"/",children:(0,l.jsx)("a",{className:c().logo,children:"Mana Source"})}),(0,l.jsx)("div",{className:c().navigationOverlay,children:!e.disableLinks&&(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"/"===t?c().selected:"",children:(0,l.jsx)(i(),{href:"/",children:(0,l.jsx)("a",{className:c().menu1,children:"Home"})})},"home"),(0,l.jsx)("li",{className:t===o?c().selected:"",children:(0,l.jsx)(i(),{href:o,children:(0,l.jsx)("a",{className:c().menu2,children:"About"})})},"about"),(0,l.jsx)("li",{className:t===m?c().selected:"",children:(0,l.jsx)(i(),{href:m,children:(0,l.jsx)("a",{className:c().menu3,children:"News"})})},"news"),(0,l.jsx)("li",{className:t===d?c().selected:"",children:(0,l.jsx)(i(),{href:d,children:(0,l.jsx)("a",{className:c().menu4,children:"Resources"})})},"resources"),(0,l.jsx)("li",{className:t===_?c().selected:"",children:(0,l.jsx)(i(),{href:_,children:(0,l.jsx)("a",{className:c().menu5,children:"Contact Us"})})},"contactus")]})})]})})})}},5858:function(e,a,t){"use strict";var n=t(4623),i=t(9835),s=t(5821),r=t(1459),c=t.n(r),l=t(5893);a.Z=function(e){var a=e.children,t=e.title,r=e.date,o=e.description,m=e.image,d=e.isArticle;return(0,l.jsxs)("div",{className:c().backgroundWrap,children:[(0,l.jsx)(i.Z,{name:t,description:o,image:m,isArticle:d}),(0,l.jsx)(s.Z,{}),(0,l.jsx)("main",{className:c().main,children:(0,l.jsx)("div",{className:c().bodyWrapper,children:(0,l.jsxs)("div",{className:c().bodyContent,children:[d&&(0,l.jsx)(n.Z,{title:t,date:r,description:o,image:m}),a]})})}),(0,l.jsx)("footer",{className:c().footer,children:(0,l.jsx)("div",{className:c().footerContent,children:(0,l.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2023. All rights reserved."})})})]})}},2214:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var n=t(4777),i=t.n(n),s=t(287),r=t.n(s),c=t(1664),l=t.n(c),o=t(1058),m=t(2279),d=t(5893),_=function(e){var a=e.article;return(0,d.jsx)(l(),{href:a.link,children:(0,d.jsxs)("a",{className:r().articleLink,children:[(0,d.jsx)("div",{className:r().imageContainer,children:(0,d.jsx)(o.Z,{src:m.Z+a.image,alt:a.title,layout:"fill",className:a.imageVAlign})}),(0,d.jsxs)("div",{className:r().articleContent,children:[a.date&&(0,d.jsx)("date",{children:a.date}),(0,d.jsx)("div",{className:r().articleTitle,children:a.title}),(0,d.jsx)("p",{children:a.description})]})]})})},u=function(e){var a=e.category,t=e.max,n=i().filter((function(e){return e.categories.includes(a)})).slice(0,t);return(0,d.jsx)("section",{children:n.map((function(e){return(0,d.jsx)("div",{className:r().article,children:(0,d.jsx)(_,{article:e})},e.title)}))})}},4623:function(e,a,t){"use strict";var n=t(7156),i=t.n(n),s=t(1058),r=t(2279),c=t(5893);a.Z=function(e){var a=e.title,t=e.description,n=e.image;return(0,c.jsxs)("header",{className:n?i().imageHeader:i().header,children:[n&&(0,c.jsx)(s.Z,{src:r.Z+n,alt:a,layout:"fill"}),(0,c.jsx)("h1",{className:i().title,children:a}),(0,c.jsx)("p",{className:i().description,children:t})]})}},4777:function(e){e.exports=[{title:"March / April 2023 Update",description:"",image:"/images/articles/planet-1702788_1280.webp",link:"/articles/mar2023update",categories:["all","devnotes","announcements"],date:"Mar 28, 2023"},{title:"February 2023 Update",description:"",image:"/images/articles/painting-3995999_1280.webp",link:"/articles/feb2023update",categories:["all","devnotes","announcements"],date:"Feb 13, 2023"},{title:"January 2023 Update",description:"Start of 2023 Newsletter",image:"/images/timbatia-small.webp",imageVAlign:"vAlignTop",link:"/articles/jan2023update",categories:["all","devnotes","announcements"],date:"Jan 22, 2023"},{title:"New Teaser Trailer!",description:"Mana Source - Teaser Trailer",image:"/images/cave.webp",link:"/articles/firstpromo",categories:["all","devnotes","announcements"],date:"Nov 29, 2022"},{title:"Introduction",description:"What is Mana Source?",image:"/images/cave.webp",link:"/articles/introduction",categories:["all","devnotes","announcements"],date:"May 22, 2022"},{title:"Release Notes 5-24-22",description:"Patches the Llama delivers release notes",image:"/images/articles/llama-time.webp",imageVAlign:"vAlignTop",link:"/articles/releasenotes-5-24-22",categories:["all","patchnotes"],date:"May 24, 2022"}]},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an arena-style card game where players battle for control of Mana Wells scattered throughout the mysterious fantasy world of Kainan.",shareImage:"/share.webp",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},3206:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return r}});var n=t(5858),i=t(2214),s=t(5893);function r(){return(0,s.jsx)(n.Z,{title:"News",description:"Latest Mana Source updates, news, balance changes",children:(0,s.jsx)(i.Z,{category:"all"})})}},2279:function(e,a){"use strict";a.Z=""},5115:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return t(3206)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",mainNoLinks:"BaseTemplate_mainNoLinks__cFENf",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs",fiftyW:"BaseTemplate_fiftyW__s0Kom",seventyW:"BaseTemplate_seventyW__bnNCQ",center:"BaseTemplate_center__1FEac",emphasisCtn:"BaseTemplate_emphasisCtn__Jzn5s",darkThinBorder:"BaseTemplate_darkThinBorder__cHTRI",lightThinBorder:"BaseTemplate_lightThinBorder__Zy116"}},287:function(e){e.exports={articleLink:"ArticleList_articleLink__aV2EH",imageContainer:"ArticleList_imageContainer__t6JZq",articleTitle:"ArticleList_articleTitle__hnQSs",articleContent:"ArticleList_articleContent__qnKhN"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,774,888,179],(function(){return a=5115,e(e.s=a);var a}));var a=e.O();_N_E=a}]);