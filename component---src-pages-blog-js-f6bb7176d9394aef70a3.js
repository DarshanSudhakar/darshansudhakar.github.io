(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{PBHM:function(e,t){e.exports=e=>e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(e=>e.toLowerCase()).join("-")},cgSC:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a("q1tI"),n=a.n(r),l=a("+ZDr"),o=a.n(l),i=a("vOnD"),c=a("IP2g"),d=a("kByy"),s=a("PBHM"),m=a.n(s);const u=i.d.article.withConfig({displayName:"BlogCard__PostWrapper",componentId:"sc-14xdj7j-0"})(["overflow:auto;margin-bottom:70px;padding:30px 30px;border-top:5px solid ",";border-radius:10px;box-shadow:",";background-color:",";&:hover{box-shadow:0 5px 10px rgba(0,0,0,0.1);}span{font-size:13px;color:gray;}"],e=>e.theme.dark?e.theme.accentColor:e.theme.primaryColor,e=>e.theme.shadowSmall,e=>e.theme.secondaryColor),p=e=>{let{date:t,readtime:a}=e;return n.a.createElement("span",{style:{fontSize:13,color:"gray"}},n.a.createElement("span",{"aria-label":"publish date "+t},n.a.createElement(c.a,{color:"gray",icon:"calendar-alt"}),"  ",t),"   ",n.a.createElement("span",{"aria-label":a+" minutes read"},n.a.createElement(c.a,{color:"gray",icon:"clock"}),"  ",a,"min read"))};t.b=e=>{let{date:t,readtime:a,title:r,excerpt:l,slug:i,tags:c}=e;return n.a.createElement(o.a,{to:i,"aria-label":r+" - read time "+a+" minutes"},n.a.createElement(u,null,n.a.createElement(p,{date:t,readtime:a}),n.a.createElement("h2",null,r),n.a.createElement("p",null,l),n.a.createElement("div",{style:{marginTop:20}},c.map(e=>n.a.createElement(d.a,{key:e,"aria-label":e+" tag",to:"/blog/tags/"+m()(e)+"/"},e)))))}},how0:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);const l=a("vOnD").d.section.withConfig({displayName:"SplitLayout__SplitLayoutWrapper",componentId:"sc-7t8ffl-0"})(["",";& article:first-of-type{margin-top:15px;}display:grid;grid-template-columns:minmax(750px,1fr) 1fr;grid-column-gap:30px;grid-template-areas:'post side';.layout__content{grid-area:post;}.layout__aside{grid-area:side;}@media ","{grid-template-columns:1fr 1fr;grid-column-gap:0px;grid-row-gap:30px;grid-template-areas:'post post' 'side side';}.sticky__aside{position:sticky;top:100px;}"],e=>e.theme.spacing.sectionBottom,e=>e.theme.media.fablet);t.a=e=>{let{content:t,aside:a}=e;return n.a.createElement(l,null,n.a.createElement("section",{className:"layout__content"},t&&t),n.a.createElement("section",{className:"layout__aside"},n.a.createElement("aside",{className:"sticky__aside"},a&&a)))}},kByy:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("q1tI"),n=a.n(r),l=a("vOnD"),o=a("Wbzz"),i=a("PBHM"),c=a.n(i);const d=Object(l.d)(o.Link).withConfig({displayName:"Tags__TagBreadcrumb",componentId:"sc-1m1kgch-0"})(["float:left;border:1px solid ",";border-radius:50px;padding:8px 13px;line-height:10px;margin:5px;font-size:12px;&:hover{background:",";color:",";}"],e=>e.theme.dark?e.theme.primaryColor:"#d9e0ff",e=>e.theme.dark?e.theme.primaryColor:"#d9e0ff",e=>e.theme.dark?"#d9e0ff":"#6D83F2");t.b=()=>{const e=Object(o.useStaticQuery)("550521386");return n.a.createElement("section",{style:{overflow:"auto"}},e.allMarkdownRemark.group.map(e=>n.a.createElement(d,{key:e.fieldValue,to:"/blog/tags/"+c()(e.fieldValue)+"/","aria-label":e.totalCount+" posts tagged with "+e.fieldValue},e.fieldValue,", ",e.totalCount)))}},u2mt:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("+ZDr"),o=a.n(l),i=a("kByy"),c=a("how0"),d=a("Wbzz");const s=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var m=()=>{const e=Object(d.useStaticQuery)("3435786681");let t=e.allMarkdownRemark.edges[s(0,e.allMarkdownRemark.totalCount-1)];if("undefined"!=typeof window)for(;t.node.fields.slug===window.location.pathname;){t=e.allMarkdownRemark.edges[s(0,e.allMarkdownRemark.totalCount-1)];break}return{randomSlug:t.node.fields.slug,randomTitle:t.node.frontmatter.title}};t.a=e=>{let{children:t,sharerSection:a}=e;const{randomSlug:r,randomTitle:l}=m();return n.a.createElement(c.a,{content:t,aside:n.a.createElement(n.a.Fragment,null,n.a.createElement("section",null,n.a.createElement("h4",null,"Random post"),n.a.createElement(o.a,{style:{fontSize:"16px"},to:r},l),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("section",null,n.a.createElement("h4",null,"Tags"),n.a.createElement(i.b,null),n.a.createElement("br",null)),a&&a)})}},vx99:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("yBb5"),i=a("vrFN"),c=a("cgSC"),d=a("u2mt");t.default=()=>{const e=Object(l.useStaticQuery)("1048528189");return n.a.createElement(o.a,null,n.a.createElement(i.a,{title:"Blog | Darshan Sudhakar"}),n.a.createElement(d.a,null,e.allMarkdownRemark.edges.map(e=>{let{node:t}=e;return n.a.createElement(c.b,{key:t.id,slug:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.date,tags:t.frontmatter.tags,readtime:t.timeToRead,excerpt:t.excerpt})})))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-f6bb7176d9394aef70a3.js.map