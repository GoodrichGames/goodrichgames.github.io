(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{9835:function(e,a,t){"use strict";t(7294);var n=t(1163),i=t(9008),s=t.n(i),r=t(3239),l=t.n(r),o=t(5893);a.Z=function(e){var a=e.name,t=e.description,i=e.image,r=void 0===i?l().shareImage:i,c=e.isArticle,m="https://www.manasourcegame.com"+(0,n.useRouter)().pathname,d=a;return(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:d}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"canonical",href:m}),(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,o.jsx)("meta",{name:"application-name",content:d}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:m}),(0,o.jsx)("meta",{name:"twitter:title",content:d}),(0,o.jsx)("meta",{name:"twitter:description",content:t}),(0,o.jsx)("meta",{name:"twitter:image",content:r}),(0,o.jsx)("meta",{property:"og:title",content:d}),(0,o.jsx)("meta",{property:"og:image",content:r}),(0,o.jsx)("meta",{property:"og:site_name",content:l().name}),(0,o.jsx)("meta",{property:"og:description",content:t}),(0,o.jsx)("meta",{property:"og:url",content:m}),c&&(0,o.jsx)("meta",{property:"og:type",content:"article"})]})}},5821:function(e,a,t){"use strict";t(5675);var n=t(1664),i=t.n(n),s=t(1163),r=(t(7294),t(3239),t(7643)),l=t.n(r),o=t(5893),c="/about",m="/news",d="/resources",_="/contactus";a.Z=function(e){var a=(0,s.useRouter)(),t="/".concat(a.pathname.split("/")[1]);return(0,o.jsx)("nav",{className:l().navigation,children:(0,o.jsx)("div",{className:l().navigation,children:(0,o.jsxs)("div",{className:l().navigationTop,children:[(0,o.jsx)(i(),{href:"/",children:(0,o.jsx)("h1",{children:(0,o.jsx)("a",{className:l().logo,children:"Mana Source"})})}),(0,o.jsx)("div",{className:l().navigationOverlay,children:!e.disableLinks&&(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"/"===t?l().selected:"",children:(0,o.jsx)(i(),{href:"/",children:(0,o.jsx)("a",{className:l().menu1,children:"Home"})})},"home"),(0,o.jsx)("li",{className:t===c?l().selected:"",children:(0,o.jsx)(i(),{href:c,children:(0,o.jsx)("a",{className:l().menu2,children:"About"})})},"about"),(0,o.jsx)("li",{className:t===m?l().selected:"",children:(0,o.jsx)(i(),{href:m,children:(0,o.jsx)("a",{className:l().menu3,children:"News"})})},"news"),(0,o.jsx)("li",{className:t===d?l().selected:"",children:(0,o.jsx)(i(),{href:d,children:(0,o.jsx)("a",{className:l().menu4,children:"Resources"})})},"resources"),(0,o.jsx)("li",{className:t===_?l().selected:"",children:(0,o.jsx)(i(),{href:_,children:(0,o.jsx)("a",{className:l().menu5,children:"Contact Us"})})},"contactus")]})})]})})})}},5591:function(e,a,t){"use strict";var n=t(1163),i=(t(7294),t(4777)),s=t.n(i),r=t(5858),l=t(5893);a.Z=function(e){var a=e.children,t=e.useImage,i=(0,n.useRouter)(),o=s().find((function(e){return e.link===i.pathname}));return(0,l.jsx)(r.Z,{title:o.title,image:t&&o.image,isArticle:!0,children:(0,l.jsx)("section",{children:a})})}},5858:function(e,a,t){"use strict";var n=t(4623),i=t(9835),s=t(5821),r=t(1459),l=t.n(r),o=t(1058),c=t(2279),m=t(5893);a.Z=function(e){var a=e.children,t=e.title,r=e.date,d=e.description,_=e.image,p=e.isArticle;return(0,m.jsxs)("div",{className:l().backgroundWrap,children:[(0,m.jsx)(i.Z,{name:t,description:d,image:_,isArticle:p}),(0,m.jsx)(s.Z,{}),(0,m.jsx)("main",{className:l().main,children:(0,m.jsx)("div",{className:l().bodyWrapper,children:(0,m.jsxs)("div",{className:l().bodyContent,children:[p&&(0,m.jsx)(n.Z,{title:t,date:r,description:d,image:_}),a]})})}),(0,m.jsx)("footer",{className:l().footer,children:(0,m.jsxs)("div",{className:l().footerContent,children:[(0,m.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2023. All rights reserved."}),(0,m.jsx)("br",{}),(0,m.jsx)(o.Z,{src:c.Z+"/images/GG-Logo-dark-bg.webp",alt:"Goodrich Games Logo",width:"100%",height:"5%",layout:"responsive",objectFit:"contain",priority:!0})]})})]})}},5099:function(e,a,t){"use strict";var n=t(5893);a.Z=function(e){var a=e.children,t=e.title;return(0,n.jsxs)("li",{children:[t&&(0,n.jsx)("h3",{children:t}),(0,n.jsx)("div",{children:a})]})}},9401:function(e,a,t){"use strict";var n=t(5893);a.Z=function(e){var a=e.children;return(0,n.jsx)("section",{children:(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:a})})})}},4623:function(e,a,t){"use strict";var n=t(7156),i=t.n(n),s=t(1058),r=t(2279),l=t(5893);a.Z=function(e){var a=e.title,t=e.description,n=e.image;return(0,l.jsxs)("header",{className:n?i().imageHeader:i().header,children:[n&&(0,l.jsx)(s.Z,{src:r.Z+n,alt:a,layout:"fill"}),(0,l.jsx)("h1",{className:i().title,children:a}),(0,l.jsx)("p",{className:i().description,children:t})]})}},4777:function(e){e.exports=[{title:"July / August 2023 Update",description:"",image:"/images/articles/road-1072823_1920.webp",link:"/articles/aug2023update",categories:["all","devnotes","announcements"],date:"Sept 12, 2023"},{title:"May / June 2023 Update",description:"",image:"/images/articles/sunset-3325080_1920.webp",link:"/articles/june2023update",categories:["all","devnotes","announcements"],date:"June 27, 2023"},{title:"March / April 2023 Update",description:"",image:"/images/articles/planet-1702788_1280.webp",link:"/articles/mar2023update",categories:["all","devnotes","announcements"],date:"Mar 28, 2023"},{title:"February 2023 Update",description:"",image:"/images/articles/painting-3995999_1280.webp",link:"/articles/feb2023update",categories:["all","devnotes","announcements"],date:"Feb 13, 2023"},{title:"January 2023 Update",description:"Start of 2023 Newsletter",image:"/images/timbatia-small.webp",imageVAlign:"vAlignTop",link:"/articles/jan2023update",categories:["all","devnotes","announcements"],date:"Jan 22, 2023"},{title:"New Teaser Trailer!",description:"Mana Source - Teaser Trailer",image:"/images/cave.webp",link:"/articles/firstpromo",categories:["all","devnotes","announcements"],date:"Nov 29, 2022"},{title:"Introduction",description:"What is Mana Source?",image:"/images/cave.webp",link:"/articles/introduction",categories:["all","devnotes","announcements"],date:"May 22, 2022"},{title:"Release Notes 5-24-22",description:"Patches the Llama delivers release notes",image:"/images/articles/llama-time.webp",imageVAlign:"vAlignTop",link:"/articles/releasenotes-5-24-22",categories:[],date:"May 24, 2022"}]},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an adventure board game focuses around arena-style combat you&apos;ll need to survive in the mysterious fantasy world of Kainan.",shareImage:"/share.webp",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},8871:function(e,a,t){"use strict";t.r(a);var n=t(5099),i=t(9401),s=t(5591),r=t(1058),l=t(2279),o=t(5893);a.default=function(){return(0,o.jsx)(s.Z,{useImage:!0,children:(0,o.jsx)(i.Z,{children:(0,o.jsxs)(n.Z,{children:[(0,o.jsx)("p",{children:"This is an example set of Release notes."}),(0,o.jsx)("br",{}),(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{className:"cardShortDetails",style:{position:"relative"},children:[(0,o.jsx)(r.Z,{src:l.Z+"/images/cards/trick%20of%20the%20light.jpg",alt:"Trick of the Light card",layout:"intrinsic",objectFit:"contain",width:"150px",height:"100px"}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Trick of the Light"})}),(0,o.jsx)("p",{children:"Mana cost increased 1 >> 2"})]})})]})})})}},2279:function(e,a){"use strict";a.Z=""},9106:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/releasenotes-5-24-22",function(){return t(8871)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",mainNoLinks:"BaseTemplate_mainNoLinks__cFENf",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs",flex:"BaseTemplate_flex__pmXR4",mR10:"BaseTemplate_mR10__KFLm7",mL10:"BaseTemplate_mL10__I7h__",mL20:"BaseTemplate_mL20__OqsQe",mB10:"BaseTemplate_mB10__nzJQ2",vAlignTop:"BaseTemplate_vAlignTop__J5yfr",thirtyW:"BaseTemplate_thirtyW__xv_gG",thirdW:"BaseTemplate_thirdW__a_avi",fourtyW:"BaseTemplate_fourtyW__L8FZX",fiftyW:"BaseTemplate_fiftyW__s0Kom",seventyW:"BaseTemplate_seventyW__bnNCQ",fullW:"BaseTemplate_fullW__nMPDt",minHeight250:"BaseTemplate_minHeight250__PoT8i",miniGrid:"BaseTemplate_miniGrid__MY_E_",center:"BaseTemplate_center__1FEac",tCenter:"BaseTemplate_tCenter__tHJSf",inline:"BaseTemplate_inline__4xc5V",fontArkhip:"BaseTemplate_fontArkhip__Catmv",fontPhilosopher:"BaseTemplate_fontPhilosopher__hkuIa",emphasisCtn:"BaseTemplate_emphasisCtn__Jzn5s",medWPadding:"BaseTemplate_medWPadding__ISurX",xsWPadding:"BaseTemplate_xsWPadding__WJ5bk",darkThinBorder:"BaseTemplate_darkThinBorder__cHTRI",lightThinBorder:"BaseTemplate_lightThinBorder__Zy116"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,774,888,179],(function(){return a=9106,e(e.s=a);var a}));var a=e.O();_N_E=a}]);