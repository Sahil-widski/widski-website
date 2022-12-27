"use strict";
exports.id = 1368;
exports.ids = [1368];
exports.modules = {

/***/ 1058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-css-tags */






const LightTheme = ({
  children,
  mobileappstyle
}) => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    window.theme = "light";
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/light.css"
      }), mobileappstyle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        href: "/css/mobile-app-light.css",
        rel: "stylesheet"
      }) : ""]
    }), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightTheme);

/***/ }),

/***/ 1368:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1288);
/* harmony import */ var _components_About_us_about_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8254);
/* harmony import */ var _components_Services_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7509);
/* harmony import */ var _components_Works_works__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7233);
/* harmony import */ var _components_Numbers_numbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6257);
/* harmony import */ var _components_Video_with_testimonials_video_with_testimonials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(434);
/* harmony import */ var _components_Skills_circle_skills_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(513);
/* harmony import */ var _components_Clients_clients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7831);
/* harmony import */ var _components_blogs_Blogs1_blogs1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4112);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2806);
/* harmony import */ var _components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2786);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5914);
/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Works_works__WEBPACK_IMPORTED_MODULE_5__, _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_2__]);
([_components_Works_works__WEBPACK_IMPORTED_MODULE_5__, _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


















const Homepage1 = () => {
  const fixedSlider = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const MainContent = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }

      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current,
        logo = logoRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", _data_app_json__WEBPACK_IMPORTED_MODULE_11__/* .darkLogo */ .Q1);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", _data_app_json__WEBPACK_IMPORTED_MODULE_11__/* .lightLogo */ .E8);
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_layouts_Light__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      nr: navbarRef,
      lr: logoRef
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      sliderRef: fixedSlider
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      ref: MainContent,
      className: "main-content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_About_us_about_us__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Services_services__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Works_works__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Numbers_numbers__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Video_with_testimonials_video_with_testimonials__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Skills_circle_skills_circle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        theme: "light"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage1);
});

/***/ })

};
;