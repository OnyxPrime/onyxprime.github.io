(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Bl7J:function(e,t,a){"use strict";var n=a("IRj2"),l=a("q1tI"),r=a.n(l),i=a("Wbzz"),m=(a("gVt7"),function(e){e.siteTitle;return r.a.createElement("header",{style:{alignItems:"center"}},r.a.createElement("nav",{style:{height:"54px",backgroundColor:"#f05623"}},r.a.createElement("div",{className:"mdc-layout-grid",style:{padding:"0",height:"54px"}},r.a.createElement("div",{className:"mdc-layout-grid__inner",style:{height:"54px"}},r.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--align-middle"},r.a.createElement("div",{style:{marginLeft:"4rem",fontSize:"1.1rem",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',color:"black",fontWeight:"bold"}},r.a.createElement(i.Link,{to:"/",style:{textDecoration:"none",color:"black",fontStyle:"none"}},r.a.createElement("img",{style:{height:"42px",verticalAlign:"middle",marginBottom:"0"},src:"/me_small.png",alt:"hand drawn profile of Ryan"}),"Ryan Overton"))),r.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--align-middle"},r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginRight:"4rem"}},r.a.createElement(i.Link,{to:"/about",style:{margin:"0 10px 0 10px",color:"black",textDecoration:"none",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:".9rem"}},"About"),r.a.createElement(i.Link,{to:"/blog",style:{margin:"0 10px 0 10px",color:"black",textDecoration:"none",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:".9rem"}},"Blog")))))),r.a.createElement("div",{style:{margin:"0 auto",padding:"1rem 1rem",backgroundImage:"url(/assets/black-gray.png)",backgroundSize:"30rem"}},r.a.createElement("img",{style:{margin:"auto",display:"block",height:"8rem"},src:"/assets/developers-garage-color.png",alt:"Developers Garage Logo"}),r.a.createElement("h2",{style:{color:"white",textDecoration:"none",textAlign:"center",fontSize:"1.15rem",fontWeight:"normal",opacity:".85",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',margin:"0rem",padding:"1rem 0rem"}},"Exploring cool tech, dev practices and tools used in development")))});m.defaultProps={siteTitle:""};var o=m;a("8ypT"),t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:"60rem",padding:"0 1.0875rem 0"}},r.a.createElement("main",null,t)),r.a.createElement("footer",{style:{backgroundColor:"black",backgroundImage:"url(/assets/black-gray.png)",backgroundSize:"30rem",color:"white",height:"4rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 1.0875rem",fontSize:"80%"}},"© Copyright ",(new Date).getFullYear(),", ",r.a.createElement("span",{style:{color:"#f05623"}},"Developers Garage"),". all rights reserved."))}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}')},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return c}));var n=a("q1tI"),l=a.n(n),r=a("Bl7J"),i=a("Wbzz"),m=a("ubkq"),o=a.n(m),s=a("pyUO"),d=a.n(s);t.default=function(e){var t=e.data;return l.a.createElement(r.a,null,l.a.createElement("div",{className:"mdc-layout-grid "+d.a.topSection},l.a.createElement("div",{className:"mdc-layout-grid__inner"},l.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 sectionHeader",style:{borderStyle:"solid",borderWidth:"0px 1px 0px 0px",borderColor:"#f05623"}},l.a.createElement("h2",null,"Blog"),l.a.createElement("ul",null,t.allKontentItemBlog.edges.map((function(e){var t=e.node;return l.a.createElement("li",{key:t.id},l.a.createElement(i.Link,{className:"sectionLinks",to:"blog/"+t.elements.url_slug.value},l.a.createElement("h3",null,t.elements.blog_title.value),l.a.createElement("p",null,t.elements.publish_date.value)))})))),l.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 sectionHeader"},l.a.createElement("h2",null,"Speaking"),l.a.createElement("ul",null,t.allKontentItemSpeakingEngagements.edges.map((function(e){var t,a,n,r,i=e.node;return l.a.createElement("li",{key:i.id},l.a.createElement("a",{className:"sectionLinks",href:i.elements.link_to_event_site.value},i.elements.name_of_event.value),l.a.createElement("p",null,l.a.createElement("i",null,i.elements.location.value),", ",(t=i.elements.start_date_of_event.value,a=i.elements.end_date_of_event.value,n=new Date(t),r=new Date(a),n.getTime()===r.getTime()?o()(n,"mmmm dd, yyyy"):o()(n,"mmmm dd-")+o()(r,"dd, yyyy"))))})))))),l.a.createElement("hr",{style:{margin:"0px 1rem",opacity:"100%",height:"1px",background:"#f05623"}}),l.a.createElement("div",{className:"mdc-layout-grid"},l.a.createElement("div",{className:"mdc-layout-grid__inner"},l.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-12 sectionHeader "+d.a.liveStreamSection},l.a.createElement("h2",null,t.kontentItemPageContent.elements.title.value),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.kontentItemPageContent.elements.body.resolvedData.html}})))))};var c="155775157"},ubkq:function(e,t,a){var n;a("a1Th"),a("h7Nl"),a("Btvt"),a("LK8F"),a("SRfc"),a("pIFo"),function(l){"use strict";var r,i,m,o=(r=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,m=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==y(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var l=(t=String(o.masks[t]||t||o.masks.default)).slice(0,4);"UTC:"!==l&&"GMT:"!==l||(t=t.slice(4),a=!0,"GMT:"===l&&(n=!0));var u=a?"getUTC":"get",g=e[u+"Date"](),p=e[u+"Day"](),f=e[u+"Month"](),h=e[u+"FullYear"](),v=e[u+"Hours"](),M=e[u+"Minutes"](),E=e[u+"Seconds"](),b=e[u+"Milliseconds"](),_=a?0:e.getTimezoneOffset(),T=d(e),S=c(e),N={d:g,dd:s(g),ddd:o.i18n.dayNames[p],dddd:o.i18n.dayNames[p+7],m:f+1,mm:s(f+1),mmm:o.i18n.monthNames[f],mmmm:o.i18n.monthNames[f+12],yy:String(h).slice(2),yyyy:h,h:v%12||12,hh:s(v%12||12),H:v,HH:s(v),M:M,MM:s(M),s:E,ss:s(E),l:s(b,3),L:s(Math.round(b/10)),t:v<12?o.i18n.timeNames[0]:o.i18n.timeNames[1],tt:v<12?o.i18n.timeNames[2]:o.i18n.timeNames[3],T:v<12?o.i18n.timeNames[4]:o.i18n.timeNames[5],TT:v<12?o.i18n.timeNames[6]:o.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(i)||[""]).pop().replace(m,""),o:(_>0?"-":"+")+s(100*Math.floor(Math.abs(_)/60)+Math.abs(_)%60,4),S:["th","st","nd","rd"][g%10>3?0:(g%100-g%10!=10)*g%10],W:T,N:S};return t.replace(r,(function(e){return e in N?N[e]:e.slice(1,e.length-1)}))});function s(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function d(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var l=(t-a)/6048e5;return 1+Math.floor(l)}function c(e){var t=e.getDay();return 0===t&&(t=7),t}function y(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}o.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},o.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return o}.call(t,a,t,e))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-pages-index-js-66e7599b2248f6d8db7c.js.map