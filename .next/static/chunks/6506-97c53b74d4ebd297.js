(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6506],{7942:function(e,n,a){"use strict";var s=a(63038);n.default=void 0;var t,r=(t=a(67294))&&t.__esModule?t:{default:t},l=a(64957),i=a(69898),c=a(90639);var o={};function d(e,n,a,s){if(e&&l.isLocalURL(n)){e.prefetch(n,a,s).catch((function(e){0}));var t=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;o[n+"%"+a+(t?"%"+t:"")]=!0}}var u=function(e){var n,a=!1!==e.prefetch,t=i.useRouter(),u=r.default.useMemo((function(){var n=l.resolveHref(t,e.href,!0),a=s(n,2),r=a[0],i=a[1];return{href:r,as:e.as?l.resolveHref(t,e.as):i||r}}),[t,e.href,e.as]),f=u.href,h=u.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,j=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var g=(n=r.default.Children.only(p))&&"object"===typeof n&&n.ref,N=c.useIntersection({rootMargin:"200px"}),b=s(N,2),w=b[0],y=b[1],k=r.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);r.default.useEffect((function(){var e=y&&a&&l.isLocalURL(f),n="undefined"!==typeof j?j:t&&t.locale,s=o[f+"%"+h+(n?"%"+n:"")];e&&!s&&d(t,f,h,{locale:n})}),[h,f,y,j,a,t]);var E={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,a,s,t,r,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(a))&&(e.preventDefault(),null==i&&s.indexOf("#")>=0&&(i=!1),n[t?"replace":"push"](a,s,{shallow:r,locale:c,scroll:i}))}(e,t,f,h,v,m,x,j)},onMouseEnter:function(e){l.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(t,f,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof j?j:t&&t.locale,C=t&&t.isLocaleDomain&&l.getDomainLocale(h,L,t&&t.locales,t&&t.domainLocales);E.href=C||l.addBasePath(l.addLocale(h,L,t&&t.defaultLocale))}return r.default.cloneElement(n,E)};n.default=u},90639:function(e,n,a){"use strict";var s=a(63038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,a=e.disabled||!l,c=t.useRef(),o=t.useState(!1),d=s(o,2),u=d[0],f=d[1],h=t.useCallback((function(e){c.current&&(c.current(),c.current=void 0),a||u||e&&e.tagName&&(c.current=function(e,n,a){var s=function(e){var n=e.rootMargin||"",a=i.get(n);if(a)return a;var s=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var n=s.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;n&&a&&n(a)}))}),e);return i.set(n,a={id:n,observer:t,elements:s}),a}(a),t=s.id,r=s.observer,l=s.elements;return l.set(e,n),r.observe(e),function(){l.delete(e),r.unobserve(e),0===l.size&&(r.disconnect(),i.delete(t))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[a,n,u]);return t.useEffect((function(){if(!l&&!u){var e=r.requestIdleCallback((function(){return f(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[u]),[h,u]};var t=a(67294),r=a(26286),l="undefined"!==typeof IntersectionObserver;var i=new Map},32979:function(e,n){"use strict";n.Z=function(e){window.addEventListener("scroll",(function(){var n=window.pageYOffset;e&&e.forEach((function(e){e.style.transform="translate3d(0, "+-.2*n+"px, 0)",e.style.opacity=1-n/600}))}))}},57420:function(e,n){"use strict";n.Z=function(e){var n=[];if(!e.parentNode)return n;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&n.push(a),a=a.nextSibling;return n}},81108:function(e,n,a){"use strict";a.d(n,{z:function(){return t},_:function(){return r}});var s=a(57420),t=function(e){(0,s.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},r=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},25914:function(e,n,a){"use strict";a(67294),a(41664);var s=a(82806),t=a(85893);n.Z=function(e){var n=e.hideBGCOLOR;return(0,t.jsx)("footer",{className:"".concat(n?"":"sub-bg"),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item md-mb50",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h5",{children:"Contact Us"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Officeal Address"}),(0,t.jsx)("p",{children:"Shop No 3 - Manibhadra tower, Indralok Phase 4, Bhayander(East), Mumbai"})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-mail"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Email Us"}),(0,t.jsx)("p",{children:"info@widski.com"})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-call"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Call Us"}),(0,t.jsx)("p",{children:"+91 7977 03 8084"})]})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item md-mb50",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h5",{children:"For Recent News"})}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"subscribe",children:[(0,t.jsx)("input",{type:"text",placeholder:"Type Your Email"}),(0,t.jsx)("span",{className:"subs pe-7s-paper-plane"})]})})})]})}),(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("img",{src:s.E8,alt:""})}),(0,t.jsx)("div",{className:"copy-right",children:(0,t.jsxs)("p",{children:["\xa9 2022,Widski Technologies. Made with passion by",(0,t.jsx)("a",{target:"_blank",children:"Widski technolgies"}),"."]})})]})})]})})})}},30015:function(e,n,a){"use strict";a(67294);var s=a(41664),t=a(82806),r=a(81108),l=a(85893);n.Z=function(e){var n=e.lr,a=e.nr,i=e.theme;return(0,l.jsx)("nav",{ref:a,className:"navbar navbar-expand-lg change ".concat("themeL"===i?"light":""),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(s.default,{href:"/",children:(0,l.jsx)("a",{className:"logo",children:i&&"themeL"===i?(0,l.jsx)("img",{ref:n,src:t.Q1,alt:"logo"}):(0,l.jsx)("img",{ref:n,src:t.E8,alt:"logo"})})}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button",onClick:r._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"icon-bar",children:(0,l.jsx)("i",{className:"fas fa-bars"})})}),(0,l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,l.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,l.jsx)("li",{className:"nav-item dropdown",children:(0,l.jsx)(s.default,{href:"/homepage/home1-light",children:(0,l.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(s.default,{href:"/about/about-light",children:(0,l.jsx)("a",{className:"nav-link",children:"About"})})}),(0,l.jsx)("li",{className:"nav-item dropdown",children:(0,l.jsx)(s.default,{href:"/works2/works2-light",children:(0,l.jsx)("a",{className:"nav-link",children:"Portfolio"})})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(s.default,{href:"/contact/contact-light",children:(0,l.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}},27196:function(e,n,a){"use strict";var s=a(67294),t=a(32979),r=a(85893);n.Z=function(e){var n=e.sliderRef;return s.useEffect((function(){(0,t.Z)(document.querySelectorAll(".fixed-slider .capt .parlx"))}),[]),(0,r.jsx)("header",{ref:n,className:"works-header fixed-slider hfixd valign sub-bg",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-lg-7 col-md-9 static",children:(0,r.jsxs)("div",{className:"capt mt-50",children:[(0,r.jsxs)("div",{className:"parlx text-center",children:[(0,r.jsx)("h1",{className:"color-font",children:"amazing works"}),(0,r.jsx)("p",{children:"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before."})]}),(0,r.jsx)("div",{className:"bactxt custom-font valign",children:(0,r.jsx)("span",{className:"full-width",children:"Works"})})]})})})})})}},41664:function(e,n,a){e.exports=a(7942)}}]);