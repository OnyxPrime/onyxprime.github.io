(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Bl7J:function(e,t,a){"use strict";var l=a("IRj2"),n=a("q1tI"),r=a.n(n),i=a("Wbzz"),m=(a("gVt7"),function(e){e.siteTitle;return r.a.createElement("header",{style:{marginBottom:"1.5rem",alignItems:"center"}},r.a.createElement("nav",{style:{height:"54px",backgroundColor:"lightgray"}},r.a.createElement("div",{className:"mdc-layout-grid",style:{padding:"0",height:"54px"}},r.a.createElement("div",{className:"mdc-layout-grid__inner",style:{height:"54px"}},r.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--align-middle"},r.a.createElement("div",{style:{marginLeft:"4rem",fontSize:"1.1rem",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',color:"darkslategray",fontWeight:"bold"}},r.a.createElement(i.Link,{to:"/",style:{textDecoration:"none",color:"darkslategray",fontStyle:"none"}},r.a.createElement("img",{style:{height:"42px",verticalAlign:"middle",marginBottom:"0"},src:"/me_small.png"}),"Ryan Overton"))),r.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--align-middle"},r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginRight:"4rem"}},r.a.createElement(i.Link,{to:"/about",style:{margin:"0 10px 0 10px",color:"darkslategray",textDecoration:"none",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:".9rem"}},"About"),r.a.createElement(i.Link,{to:"/blog",style:{margin:"0 10px 0 10px",color:"darkslategray",textDecoration:"none",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:".9rem"}},"Blog")))))),r.a.createElement("div",{style:{margin:"0 auto",padding:"3rem 4rem",backgroundImage:"url(/binary_wallpaper_green_1500_1000.jpg)"}},r.a.createElement("h1",{style:{margin:0,fontSize:"2.25rem",textAlign:"center"}},r.a.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none",fontWeight:"500",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}},"Developers Garage")),r.a.createElement("h2",{style:{color:"white",textDecoration:"none",textAlign:"center",fontSize:"1.15rem",fontWeight:"normal",opacity:".7",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}},"Exploring cool tech, dev practices and tools used in development")))});m.defaultProps={siteTitle:""};var o=m;a("8ypT"),t.a=function(e){var t=e.children,a=l.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}')},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));var l=a("q1tI"),n=a.n(l),r=a("Bl7J"),i=a("Wbzz"),m=a("ubkq"),o=a.n(m),s=a("pyUO"),c=a.n(s);t.default=function(e){var t=e.data;return n.a.createElement(r.a,null,n.a.createElement("div",{className:"mdc-layout-grid"},n.a.createElement("div",{className:"mdc-layout-grid__inner"},n.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 sectionHeader"},n.a.createElement("h2",null,"Blog"),n.a.createElement("ul",null,t.allKontentItemBlog.edges.map((function(e){var t=e.node;return n.a.createElement("li",null,n.a.createElement(i.Link,{className:"sectionLinks",to:t.fields.slug},n.a.createElement("h3",null,t.elements.blog_title.value),n.a.createElement("p",null,t.elements.publish_date.value)))})))),n.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 sectionHeader"},n.a.createElement("h2",null,"Speaking"),n.a.createElement("ul",null,t.allKontentItemSpeakingEngagements.edges.map((function(e){var t,a,l,r,i=e.node;return n.a.createElement("li",null,n.a.createElement("a",{className:"sectionLinks",href:i.elements.link_to_event_site.value},i.elements.name_of_event.value),n.a.createElement("p",null,n.a.createElement("i",null,i.elements.location.value),", ",(t=i.elements.start_date_of_event.value,a=i.elements.end_date_of_event.value,l=new Date(t),r=new Date(a),l.getTime()===r.getTime()?o()(l,"mmmm dd, yyyy"):o()(l,"mmmm dd-")+o()(r,"dd, yyyy"))))})))))),n.a.createElement("div",{className:"mdc-layout-grid"},n.a.createElement("div",{className:"mdc-layout-grid__inner"},n.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-12 sectionHeader "+c.a.liveStreamSection},n.a.createElement("h2",null,"Live Stream"),n.a.createElement("div",null,n.a.createElement("p",null,"Yep, you heard it right: I've started live streaming!"),n.a.createElement("p",null,"We'll be exploring tools, technologies and practices used in software development to make developers more productive ",n.a.createElement("b",null,n.a.createElement("i",null,n.a.createElement("u",null,"LIVE!")))),n.a.createElement("ul",null,n.a.createElement("li",null,"Desktop"),n.a.createElement("li",null,"Web"),n.a.createElement("li",null,"Mobile"),n.a.createElement("li",null,"Cloud"),n.a.createElement("li",null,"Agile"),n.a.createElement("li",null,"DevOps"),n.a.createElement("li",null,"...and so on")),n.a.createElement("span",null,"Come join me on this little adventure on ")," ",n.a.createElement("a",{href:"https://www.twitch.tv/developersgarage"},"Twitch")," ",n.a.createElement("span",null," every Wednesday at 12PM CST. I look forward to seeing you in the chat!"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"If you can't make it, check it out on-demand on ",n.a.createElement("a",{href:"https://www.youtube.com/channel/UCp7TjW2p43aNzkMEBYJ8inw"},"YouTube"),"."),n.a.createElement("p",null,"Intersted in contributing to the projects, or want to try them for yourself, here's a link to our ",n.a.createElement("a",{href:"https://github.com/devsgarage"},"GitHub")," repo where all our work is stored. Any, and all, help is greatly appreciated!"),n.a.createElement("ul",null,n.a.createElement("li",null,"Documetation"),n.a.createElement("li",null,"styling"),n.a.createElement("li",null,"coding"),n.a.createElement("li",null,"etc.")),n.a.createElement("p",null,"It's all fair game, and if you got suggestions for how to improve the stream, or questions in general, you can contact me at any of the methods at the bottom of the page."))))))};var d="2143542130"},ubkq:function(e,t,a){var l;a("a1Th"),a("h7Nl"),a("Btvt"),a("LK8F"),a("SRfc"),a("pIFo"),function(n){"use strict";var r,i,m,o=(r=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,m=/[^-+\dA-Z]/g,function(e,t,a,l){if(1!==arguments.length||"string"!==u(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var n=(t=String(o.masks[t]||t||o.masks.default)).slice(0,4);"UTC:"!==n&&"GMT:"!==n||(t=t.slice(4),a=!0,"GMT:"===n&&(l=!0));var y=a?"getUTC":"get",g=e[y+"Date"](),p=e[y+"Day"](),h=e[y+"Month"](),f=e[y+"FullYear"](),E=e[y+"Hours"](),v=e[y+"Minutes"](),M=e[y+"Seconds"](),T=e[y+"Milliseconds"](),_=a?0:e.getTimezoneOffset(),b=c(e),N=d(e),S={d:g,dd:s(g),ddd:o.i18n.dayNames[p],dddd:o.i18n.dayNames[p+7],m:h+1,mm:s(h+1),mmm:o.i18n.monthNames[h],mmmm:o.i18n.monthNames[h+12],yy:String(f).slice(2),yyyy:f,h:E%12||12,hh:s(E%12||12),H:E,HH:s(E),M:v,MM:s(v),s:M,ss:s(M),l:s(T,3),L:s(Math.round(T/10)),t:E<12?o.i18n.timeNames[0]:o.i18n.timeNames[1],tt:E<12?o.i18n.timeNames[2]:o.i18n.timeNames[3],T:E<12?o.i18n.timeNames[4]:o.i18n.timeNames[5],TT:E<12?o.i18n.timeNames[6]:o.i18n.timeNames[7],Z:l?"GMT":a?"UTC":(String(e).match(i)||[""]).pop().replace(m,""),o:(_>0?"-":"+")+s(100*Math.floor(Math.abs(_)/60)+Math.abs(_)%60,4),S:["th","st","nd","rd"][g%10>3?0:(g%100-g%10!=10)*g%10],W:b,N:N};return t.replace(r,(function(e){return e in S?S[e]:e.slice(1,e.length-1)}))});function s(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function c(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var l=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-l);var n=(t-a)/6048e5;return 1+Math.floor(n)}function d(e){var t=e.getDay();return 0===t&&(t=7),t}function u(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}o.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},o.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(l=function(){return o}.call(t,a,t,e))||(e.exports=l)}()}}]);
//# sourceMappingURL=component---src-pages-index-js-8ce37a0f60da9126d9c7.js.map