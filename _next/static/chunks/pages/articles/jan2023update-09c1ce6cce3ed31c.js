(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{9835:function(e,a,t){"use strict";t(7294);var n=t(1163),i=t(9008),s=t.n(i),r=t(3239),o=t.n(r),l=t(5893);a.Z=function(e){var a=e.name,t=e.description,i=e.image,r=void 0===i?o().shareImage:i,c=e.isArticle,m="https://www.manasourcegame.com"+(0,n.useRouter)().pathname,d=a;return(0,l.jsxs)(s(),{children:[(0,l.jsx)("title",{children:d}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,l.jsx)("link",{rel:"canonical",href:m}),(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,l.jsx)("meta",{name:"application-name",content:d}),(0,l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,l.jsx)("meta",{name:"twitter:site",content:m}),(0,l.jsx)("meta",{name:"twitter:title",content:d}),(0,l.jsx)("meta",{name:"twitter:description",content:t}),(0,l.jsx)("meta",{name:"twitter:image",content:r}),(0,l.jsx)("meta",{property:"og:title",content:d}),(0,l.jsx)("meta",{property:"og:image",content:r}),(0,l.jsx)("meta",{property:"og:site_name",content:o().name}),(0,l.jsx)("meta",{property:"og:description",content:t}),(0,l.jsx)("meta",{property:"og:url",content:m}),c&&(0,l.jsx)("meta",{property:"og:type",content:"article"})]})}},5821:function(e,a,t){"use strict";t(5675);var n=t(1664),i=t.n(n),s=t(1163),r=(t(7294),t(3239),t(7643)),o=t.n(r),l=t(5893),c="/about",m="/news",d="/resources",u="/contactus";a.Z=function(e){var a=(0,s.useRouter)(),t="/".concat(a.pathname.split("/")[1]);return(0,l.jsx)("nav",{className:o().navigation,children:(0,l.jsx)("div",{className:o().navigation,children:(0,l.jsxs)("div",{className:o().navigationTop,children:[(0,l.jsx)(i(),{href:"/",children:(0,l.jsx)("a",{className:o().logo,children:"Mana Source"})}),(0,l.jsx)("div",{className:o().navigationOverlay,children:!e.disableLinks&&(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"/"===t?o().selected:"",children:(0,l.jsx)(i(),{href:"/",children:(0,l.jsx)("a",{className:o().menu1,children:"Home"})})},"home"),(0,l.jsx)("li",{className:t===c?o().selected:"",children:(0,l.jsx)(i(),{href:c,children:(0,l.jsx)("a",{className:o().menu2,children:"About"})})},"about"),(0,l.jsx)("li",{className:t===m?o().selected:"",children:(0,l.jsx)(i(),{href:m,children:(0,l.jsx)("a",{className:o().menu3,children:"News"})})},"news"),(0,l.jsx)("li",{className:t===d?o().selected:"",children:(0,l.jsx)(i(),{href:d,children:(0,l.jsx)("a",{className:o().menu4,children:"Resources"})})},"resources"),(0,l.jsx)("li",{className:t===u?o().selected:"",children:(0,l.jsx)(i(),{href:u,children:(0,l.jsx)("a",{className:o().menu5,children:"Contact Us"})})},"contactus")]})})]})})})}},5591:function(e,a,t){"use strict";var n=t(1163),i=(t(7294),t(4777)),s=t.n(i),r=t(5858),o=t(5893);a.Z=function(e){var a=e.children,t=e.useImage,i=(0,n.useRouter)(),l=s().find((function(e){return e.link===i.pathname}));return(0,o.jsx)(r.Z,{title:l.title,image:t&&l.image,isArticle:!0,children:(0,o.jsx)("section",{children:a})})}},5858:function(e,a,t){"use strict";var n=t(4623),i=t(9835),s=t(5821),r=t(1459),o=t.n(r),l=t(5893);a.Z=function(e){var a=e.children,t=e.title,r=e.date,c=e.description,m=e.image,d=e.isArticle;return(0,l.jsxs)("div",{className:o().backgroundWrap,children:[(0,l.jsx)(i.Z,{name:t,description:c,image:m,isArticle:d}),(0,l.jsx)(s.Z,{}),(0,l.jsx)("main",{className:o().main,children:(0,l.jsx)("div",{className:o().bodyWrapper,children:(0,l.jsxs)("div",{className:o().bodyContent,children:[d&&(0,l.jsx)(n.Z,{title:t,date:r,description:c,image:m}),a]})})}),(0,l.jsx)("footer",{className:o().footer,children:(0,l.jsx)("div",{className:o().footerContent,children:(0,l.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2023. All rights reserved."})})})]})}},7580:function(e,a,t){"use strict";t.d(a,{Z:function(){return m}});var n=t(4711),i=t(453),s=t.n(i),r=t(7294),o=t(5893),l=function(e){return/[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)},c=function(e){var a=e.ctaText,t=e.status,n=(e.message,e.onValidated),i=(0,r.useState)(""),c=i[0],m=i[1],d=(0,r.useRef)(),u=(0,r.useRef)();return(0,o.jsxs)("div",{className:s().emailSignup,children:[(0,o.jsx)("h2",{children:"Sign up for updates"}),(0,o.jsxs)("div",{className:s().emailFieldGroup,children:[(0,o.jsxs)("label",{htmlFor:"mce-EMAIL",children:["Email Address  ",(0,o.jsx)("span",{className:s().asterisk,children:"*"})]}),(0,o.jsx)("input",{type:"email",name:"EMAIL",className:s().required+" "+s().email,value:c,onChange:function(e){m(e.target.value),e.target.value&&!l(e.target.value)||u.current.classList.add(s().hidden)},onBlur:function(e){e.target.value&&!l(e.target.value)&&u.current.classList.remove(s().hidden)}})]}),(0,o.jsx)("div",{ref:u,className:s().errorBlock+" "+s().hidden,children:"You have entered an invalid email address.  Please check your entry and try again."}),"error"===t&&(0,o.jsx)("div",{ref:d,className:s().errorBlock+" "+s().hidden,children:"An error occurred in submission, please try again later."}),(0,o.jsx)("div",{className:s().notName,"aria-hidden":"true",children:(0,o.jsx)("input",{type:"text",name:"b_a2c1595175259c6cf93c9b708_70002bf500",tabIndex:"-1",defaultValue:""})}),(0,o.jsx)("div",{className:s().optionalParent,children:(0,o.jsx)("div",{className:s().foot,children:(0,o.jsx)("input",{type:"submit",value:a,name:"subscribe",className:s().button,onClick:function(){l(c)&&n({EMAIL:c})}})})})]})},m=function(e){return(0,o.jsx)(n.Z,{url:"https://github.us10.list-manage.com/subscribe/post?u=a2c1595175259c6cf93c9b708&amp;id=70002bf500",render:function(a){var t=a.subscribe,n=a.status,i=a.message;return(0,o.jsxs)("div",{children:["success"!==n&&(0,o.jsx)(c,{ctaText:e.ctaText,status:n,message:i,onValidated:function(e){return t(e)}}),"success"===n&&(0,o.jsx)("div",{className:s().subscribedMsg,children:"Thank you!  We'll be in touch soon!"})]})}})}},4623:function(e,a,t){"use strict";var n=t(7156),i=t.n(n),s=t(1058),r=t(2279),o=t(5893);a.Z=function(e){var a=e.title,t=e.description,n=e.image;return(0,o.jsxs)("header",{className:n?i().imageHeader:i().header,children:[n&&(0,o.jsx)(s.Z,{src:r.Z+n,alt:a,layout:"fill"}),(0,o.jsx)("h1",{className:i().title,children:a}),(0,o.jsx)("p",{className:i().description,children:t})]})}},4777:function(e){e.exports=[{title:"March / April 2023 Update",description:"",image:"/images/timbatia-small.webp",link:"/articles/mar2023update",categories:["all","devnotes","announcements"],date:"Jan 22, 2023"},{title:"February 2023 Update",description:"",image:"/images/timbatia-small.webp",link:"/articles/feb2023update",categories:["all","devnotes","announcements"],date:"Jan 22, 2023"},{title:"January 2023 Update",description:"Start of 2023 Newsletter",image:"/images/timbatia-small.webp",link:"/articles/jan2023update",categories:["all","devnotes","announcements"],date:"Jan 22, 2023"},{title:"New Teaser Trailer!",description:"Mana Source - Teaser Trailer",image:"/images/cave.webp",link:"/articles/firstpromo",categories:["all","devnotes","announcements"],date:"Nov 29, 2022"},{title:"Introduction",description:"What is Mana Source?",image:"/images/cave.webp",link:"/articles/introduction",categories:["all","devnotes","announcements"],date:"May 22, 2022"},{title:"Release Notes 5-24-22",description:"Patches the Llama delivers release notes",image:"/images/articles/llama-time.webp",link:"/articles/releasenotes-5-24-22",categories:["all","patchnotes"],date:"May 24, 2022"}]},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an arena-style card game where players battle for control of Mana Wells scattered throughout the mysterious fantasy world of Kainan.",shareImage:"/share.webp",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},2113:function(e,a,t){"use strict";t.r(a);var n=t(1058),i=t(7580),s=t(5591),r=t(2279),o=t(5893);a.default=function(){return(0,o.jsx)(s.Z,{useImage:!0,children:(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:"January 2023 Update"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Happy new year everyone!"}),(0,o.jsxs)("p",{children:["I hope you had a relaxing and warm Christmas, Hanukkah, or other holiday you celebrate with friends and family.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"December included:",(0,o.jsx)("br",{}),"- Playtesting for Scenario 3 and NPC characters.  NPC characters are featured prominently in the story and optional as party members.  They are primarily used as party members for Solo players, to avoid having to actively manage multiple characters like other PvE games do, but can also be used for 2 or 3 player counts.  I am still playtesting the amount of flexibility and management for these characters to feel like they act on their own, but not in an unhelpful or time consuming way.",(0,o.jsx)("br",{}),"- Scenario 4 development.  Scenarios 1, 2, 3, 7, 18 out of 21~ are playtest complete and fairly stable.  I am aiming to develop at least 1 scenario every 2 weeks without additional support.",(0,o.jsx)("br",{}),"- New Art including the piece below."]}),(0,o.jsx)("br",{}),(0,o.jsx)(n.Z,{src:r.Z+"/images/timbatia-small.webp",alt:"Large tree growing out of rock under the moonlight",width:"100%",height:"50%",layout:"responsive",objectFit:"contain",priority:!0}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:(0,o.jsx)("em",{children:"The very top of the Warden city of Timbatia.  Most of the tree extends underground into a vast cavern where it is interwoven with homes, businesses, and a mana well at the base.  The Timbati and growing influx of refugees settle for crowding, few food options, and dim lighting over being hunted down by Knight factions in their endless wars."})}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["January is publisher contact month.  It's really starting to feel like the culmination of about 6 years of effort.  So far, I have 1 meeting scheduled the week of the 23rd so a large part of this month is sending emails and making sure I have all my Wrelkras in a row.  Hoping for more meetings scheduled soon.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Once I start initial publisher conversations and ideally get a commitment, I will know much more what is finalized versus still in progress. Until then, names, designs, images, and plans are all subject to drastic change.  I.e. I want to preview classes, abilities, skills, etc with you but much needs to wait.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("u",{children:"Goals for this month"}),(0,o.jsx)("br",{}),"- Complete development for Scenarios 4 and 5.",(0,o.jsx)("br",{}),"- Set up and attend publisher meetings.  This feedback will determine so much of our next steps and focus.",(0,o.jsx)("br",{}),"- Take questions from the community and get some more details on the website that I feel able to share."]}),"Thank you all for being a part of this game and process.  I'm really excited about bringing it to you, in whatever form it takes.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Until next time,",(0,o.jsx)("br",{}),(0,o.jsx)("em",{children:"Paul Goodrich"})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["Join the ",(0,o.jsx)("a",{href:"https://discord.com/invite/drQDa7MQ3e",children:"official Discord"})," to chat with the community or ask questions.  Other Social Media is coming soon. ",(0,o.jsx)("br",{}),(0,o.jsxs)("b",{children:["Actively seeking a publisher! Contact me at ",(0,o.jsx)("a",{href:"mailto:goodrichgames@pm.me",children:"goodrichgames@pm.me"}),"."]})]}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:(0,o.jsx)("em",{children:"To receive this update sooner along with some additional insider details, sign up for the email newsletter below!"})}),(0,o.jsx)(i.Z,{ctaText:"Start your adventure!"})]})]})})})})}},2279:function(e,a){"use strict";a.Z=""},9433:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/jan2023update",function(){return t(2113)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",mainNoLinks:"BaseTemplate_mainNoLinks__cFENf",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs",fiftyW:"BaseTemplate_fiftyW__s0Kom",seventyW:"BaseTemplate_seventyW__bnNCQ",center:"BaseTemplate_center__1FEac",emphasisCtn:"BaseTemplate_emphasisCtn__Jzn5s",darkThinBorder:"BaseTemplate_darkThinBorder__cHTRI",lightThinBorder:"BaseTemplate_lightThinBorder__Zy116"}},453:function(e){e.exports={emailSignup:"EmailSignup_emailSignup__vLpln",email:"EmailSignup_email__YI2o6",emailFieldGroup:"EmailSignup_emailFieldGroup__GXoXM",asterisk:"EmailSignup_asterisk__OgPws",response:"EmailSignup_response__ZzUq9",button:"EmailSignup_button__ZED7e",notName:"EmailSignup_notName___Ck5D",errorBlock:"EmailSignup_errorBlock__Meniz",subscribedMsg:"EmailSignup_subscribedMsg__mPZQi",hidden:"EmailSignup_hidden__lgNDg"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,711,774,888,179],(function(){return a=9433,e(e.s=a);var a}));var a=e.O();_N_E=a}]);