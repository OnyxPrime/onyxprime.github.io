(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8ypT":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=m(t);return p[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(z,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,I=e.draggable,L=p||h;if(!L)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,o.default)({opacity:N?1:0,transition:C?"opacity "+b+"ms":"none"},s),V="boolean"==typeof y?"lightgray":y,T={transitionDelay:b+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&T,s,f),W={title:t,alt:this.state.isVisible?"":a,style:j,className:m,itemProp:E},_=this.state.isHydrated?g(L):L[0];if(p)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:_.maxWidth?_.maxWidth+"px":null,maxHeight:_.maxHeight?_.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&T)}),_.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:W,imageVariants:L,generateSources:k}),_.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:W,imageVariants:L,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(L),d.default.createElement(z,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:w},_,{imageVariants:L}))}}));if(h){var F=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},n);return"inherit"===n.display&&delete F.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},C&&T)}),_.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:W,imageVariants:L,generateSources:k}),_.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:W,imageVariants:L,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(L),d.default.createElement(z,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:w},_,{imageVariants:L}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}N.propTypes={resolutions:C,sizes:H,fixed:V(c.default.oneOfType([C,c.default.arrayOf(C)])),fluid:V(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=N;t.default=T},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("9eSz"),s=a.n(l),o=(a("gVt7"),a("ma3e")),d=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"socialMedia"},i.a.createElement("div",null,i.a.createElement("a",{className:"fb",href:"https://www.facebook.com/DevelopersGarageHQ"},i.a.createElement(o.b,null),i.a.createElement("span",{class:"screen-reader-text"},"Facebook"))),i.a.createElement("div",null,i.a.createElement("a",{className:"twitter",href:"https://twitter.com/ryano9791"},i.a.createElement(o.f,null),i.a.createElement("span",{class:"screen-reader-text"},"Twitter"))),i.a.createElement("div",null,i.a.createElement("a",{className:"yt",href:"https://www.youtube.com/channel/UCp7TjW2p43aNzkMEBYJ8inw"},i.a.createElement(o.g,null),i.a.createElement("span",{class:"screen-reader-text"},"YouTube"))),i.a.createElement("div",null,i.a.createElement("a",{className:"twitch",href:"https://twitch.tv/developersgarage"},i.a.createElement(o.e,null),i.a.createElement("span",{class:"screen-reader-text"},"Twitch"))),i.a.createElement("div",null,i.a.createElement("a",{className:"discord",href:"https://discord.gg/KtjweFE"},i.a.createElement(o.a,null),i.a.createElement("span",{class:"screen-reader-text"},"Discord"))),i.a.createElement("div",null,i.a.createElement("a",{className:"gh",href:"https://github.com/devsgarage"},i.a.createElement(o.c,null),i.a.createElement("span",{class:"screen-reader-text"},"GitHub"))),i.a.createElement("div",null,i.a.createElement("a",{className:"linkedin",href:"https://linkedin.com/in/rpoverton"},i.a.createElement(o.d,null),i.a.createElement("span",{class:"screen-reader-text"},"LinkedIn")))))},c=function(e){var t=e.logo;return i.a.createElement("header",{style:{alignItems:"center"}},i.a.createElement("nav",{style:{height:"54px",backgroundColor:"#f05623"}},i.a.createElement("div",{className:"mdc-layout-grid",style:{padding:"0",height:"54px",maxWidth:"60rem"}},i.a.createElement("div",{className:"mdc-layout-grid__inner",style:{height:"54px"}},i.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--align-middle"},i.a.createElement("div",{style:{fontSize:"1.1rem",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',color:"black",fontWeight:"bold"}},i.a.createElement(n.Link,{to:"/",style:{textDecoration:"none",color:"black",fontStyle:"none"}},i.a.createElement(s.a,{fixed:t,style:{verticalAlign:"middle",marginBottom:"0"},alt:"Developers Garage logo"}),i.a.createElement("text",{style:{marginLeft:"10px"}},"Ryan Overton")))),i.a.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--align-middle"},i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement(n.Link,{to:"/about",style:{margin:"0 10px 0 10px",color:"black",textDecoration:"none",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:".9rem"}},"About"),i.a.createElement(n.Link,{to:"/blog",style:{margin:"0 10px 0 10px",color:"black",textDecoration:"none",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:".9rem"}},"Blog"),i.a.createElement("a",{href:"https://teespring.com/stores/developers-garage",style:{margin:"0 10px 0 10px",color:"black",textDecoration:"none",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:".9rem"}},"Shop")))))),i.a.createElement("div",{style:{margin:"0 auto",padding:"1rem 1rem",backgroundImage:"url(/assets/black-gray.png)",backgroundSize:"30rem"}},i.a.createElement("img",{style:{margin:"auto",display:"block",height:"8rem"},src:"/assets/developers-garage-color.png",alt:"Developers Garage Logo"}),i.a.createElement("h2",{style:{color:"white",textDecoration:"none",textAlign:"center",fontSize:"1.15rem",fontWeight:"normal",opacity:".85",fontFamily:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',margin:"0rem",padding:"1rem 0rem"}},"Exploring cool tech, dev practices and tools used in development"),i.a.createElement(d,null)))};c.defaultProps={siteTitle:""};var u=c;a("8ypT"),t.a=function(e){var t=e.children,a=Object(n.useStaticQuery)("4231329868");return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:a.site.siteMetadata.title,logo:a.mobileImage.childImageSharp.fixed}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"60rem",padding:"0 1.0875rem 0"}},i.a.createElement("main",null,t)),i.a.createElement("footer",{style:{backgroundColor:"black",backgroundImage:"url(/assets/black-gray.png)",backgroundSize:"30rem",color:"white",height:"4rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 1.0875rem",fontSize:"80%"}},"© Copyright ",(new Date).getFullYear(),", ",i.a.createElement("span",{style:{color:"#f05623"}},"Developers Garage"),". all rights reserved."))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(i),l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(a[r[i]]=e[r[i]])}return a};function o(e){return function(t){return r.createElement(d,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,l({key:a},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var a,i=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var n=e.attr,o=e.title,d=s(e,["attr","title"]);return r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:a,style:l({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(e){return t(e)})):t(i)}},gVt7:function(e,t,a){}}]);
//# sourceMappingURL=commons-9961045175730876e2b7.js.map