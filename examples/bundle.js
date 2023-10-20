var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// node_modules/@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js
var colors = {
  red: "#e21833",
  gold: "#ffd200",
  white: "#ffffff",
  black: "#000000",
  redDark: "#a90007",
  gray: {
    darker: "#242424",
    dark: "#454545",
    mediumAA: "#757575",
    medium: "#7f7f7f",
    light: "#e6e6e6",
    lighter: "#f1f1f1",
    lightest: "#fafafa"
  }
};

// node_modules/@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js
var spacing = {
  min: "8px",
  xs: "12px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xl: "40px",
  "2xl": "48px",
  "3xl": "56px",
  "4xl": "64px",
  "5xl": "72px",
  "6xl": "80px",
  "7xl": "96px",
  "8xl": "104px",
  max: "128px"
};
var screens = {
  small: { min: "320px", max: "479px" },
  medium: { min: "480px", max: "649px" },
  large: { min: "650px", max: "767px" },
  tablet: { min: "768px", max: "1023px" },
  desktop: { min: "1024px", max: "1199px" },
  highDef: { min: "1200px", max: "1499px" },
  maximum: { min: "1500px" }
};
var queries = {
  small: {
    min: "min-width: ".concat(screens.small.min),
    max: "max-width: ".concat(screens.small.max)
  },
  medium: {
    min: "min-width: ".concat(screens.medium.min),
    max: "max-width: ".concat(screens.medium.max)
  },
  large: {
    min: "min-width: ".concat(screens.large.min),
    max: "max-width: ".concat(screens.large.max)
  },
  tablet: {
    min: "min-width: ".concat(screens.tablet.min),
    max: "max-width: ".concat(screens.tablet.max)
  },
  desktop: {
    min: "min-width: ".concat(screens.desktop.min),
    max: "max-width: ".concat(screens.desktop.max)
  },
  highDef: {
    min: "min-width: ".concat(screens.highDef.min),
    max: "max-width: ".concat(screens.highDef.max)
  },
  maximum: { min: "min-width: ".concat(screens.maximum.min) }
};

// examples/index.js
var LOGO = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 315.5 52" style="enable-background:new 0 0 315.5 52;" xml:space="preserve"> <style type="text/css">.st0{fill:#FFFFFF;} .st1{fill:url(#SVGID_1_);} .st2{fill:#CCCCCC;} .st3{fill:#FFD520;} .st4{fill:#E03A3E;} .st5{stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;}</style><g><path class="st0" d="M81.6,49.2L69.9,24.7h-0.1l-1.3,20.7c-0.1,2.3,1.6,2.8,3.7,2.9v0.9h-9.6v-0.9c3.4,0,3.8-0.7,4-4.9l1.1-17.9c0.2-3,0.1-3.9-2.8-4v-0.8h7L83,43.8l11-23.1h6.7v0.8c-2.2,0.2-3.1,0.2-3,1.8l1.5,20.8c0.3,4.2,0.6,4.2,4,4.2v0.9H91.4v-0.9c2.2,0,4.3-0.6,4.1-3l-1.3-20.6h-0.1L82.6,49.2H81.6z"/><path class="st0" d="M121.6,34.5h-7.9l3.9-10.6L121.6,34.5z M122.4,36.5l3.1,8.3c0.2,0.5,0.5,1.1,0.5,1.9c0,1.3-1,1.6-3.6,1.6h-1.2v0.9h12.6v-0.9c-2.3,0-3.3-0.5-4.2-2.9L120.1,20h-4l0.4,1l-8.4,22.8c-1.5,4-2,4.5-5,4.5v0.9h10.6v-0.9h-0.7c-2.5,0-3.7-0.5-3.7-1.7c0-0.6,0.6-2,0.9-2.9l2.7-7.2H122.4z"/><path class="st0" d="M142.1,21.2c0.8-0.1,1.4-0.1,2.3-0.1c7.1,0,9,3.3,9,7.6c0,5.5-3.4,7.7-8.5,7.7c-1.1,0-1.8,0-2.9-0.1V21.2zM142.1,37.2c0.7,0,1.3,0.1,2.4,0.1c1.2,0,2,0,3.1-0.1c1.1,0.7,2.7,2.1,4.8,4.1l3,3c4.1,4.1,6.1,5.8,14.2,5.4v-0.8c-3.5-0.2-6.3-1.9-9-4.6l-3.6-3.6c-2.1-2.1-3.5-3.4-5.2-4.8c3.8-1.1,6.1-4,6.1-7.4c0-4.7-3.8-8.2-12.3-8.2c-3,0-3.9,0-5.8,0.1c-1.9,0.1-4.7,0.3-5.8,0.3v0.9h1c2.7,0,3.4,0.8,3.4,3.7v19.3c0,3.1-1,3.8-3.7,3.8h-0.8v0.9h13v-0.9h-1.1c-2.6,0-3.7-0.7-3.7-3.4V37.2z"/><path class="st0" d="M185.2,24.9c1.5-2.5,0.6-3.3-2.3-3.3v-0.9h10.3v0.9c-3.1,0.2-4.4,1.5-5.7,3.6L179.9,38v6.9c0,2.4,0.9,3.4,3.7,3.4h0.6v0.9h-12.6v-0.9h0.9c2.9,0,3.7-1.1,3.7-3.3v-6.5l-8.2-12.7c-2.2-3.5-3.3-4.2-6.3-4.3v-0.9h12.2v0.9c-3.6,0-3.8,0.9-2.5,3l7.4,11.3L185.2,24.9z"/><path class="st0" d="M213.3,49.2h-20.5v-0.9h1.5c2.1,0,2.9-0.7,2.9-3V25c0-2.4-0.7-3.4-3.6-3.4H193v-0.9h13.5v0.9h-1.7c-3,0-3.8,0.3-3.8,3.2v21.1c0,1.2,0.5,1.7,1.8,1.7h6.7c2.7,0,3.5-1.1,6.4-5.1h0.8L213.3,49.2z"/><path class="st0" d="M234.3,34.5h-7.9l3.9-10.6L234.3,34.5z M235.1,36.5l3.1,8.3c0.2,0.5,0.5,1.1,0.5,1.9c0,1.3-1,1.6-3.6,1.6h-1.2v0.9h12.6v-0.9c-2.3,0-3.3-0.5-4.2-2.9L232.7,20h-4l0.4,1l-8.4,22.8c-1.5,4-2,4.5-5,4.5v0.9h10.6v-0.9h-0.7c-2.5,0-3.7-0.5-3.7-1.7c0-0.6,0.6-2,0.9-2.9l2.7-7.2H235.1z"/><path class="st0" d="M276.2,49.5l-23.7-24.9v19.6c0,3.3,0.7,4,4.6,4v0.9h-10.6v-0.9h0.2c2.8,0,3.8-1,3.8-3.1V22.7c-1.1-0.7-2.2-1.1-3.9-1.1v-0.9h7.2l21.6,22.5V25c0-2.8-0.8-3.3-4.5-3.4v-0.9h10.7v0.9c-3.4,0-4.2,0.6-4.2,2.4v25.6H276.2z"/><path class="st0" d="M290.2,21.3c0.6,0,1.8-0.2,3.7-0.2c6.4,0,9.7,1.6,11.8,3.7c2.7,2.7,3.7,6.5,3.7,9.8c0,4.7-2.1,8.2-3.8,9.9c-2.8,2.8-5.4,3.7-11.6,3.7c-3.6,0-3.8-0.6-3.8-2.5V21.3z M286.4,45c0,2.7-1.1,3.3-3.6,3.3H282v0.9h14.7c11.6,0,17-8.3,17-15.2c0-7.6-5.3-13.7-17.5-13.7c-2.4,0-5.2,0-7.7,0.1c-2.5,0.1-4.8,0.2-6.5,0.3v0.8h0.9c2.7,0,3.5,0.7,3.5,3.7V45z"/></g><g><path class="st0" d="M76,2.3l0.3,0c1.6,0.1,1.9,0.3,1.9,2.4V10c0,3.8-2.7,4.6-4.9,4.6c-3.1,0-4.9-1.6-4.9-4.6V3.7c0-1.1,0.3-1.4,1.5-1.4h0.5v-1H64v1l0.3,0c1.5,0,1.7,0.2,1.7,1.4v6.6c0,3.7,2.7,6,6.9,6c5.2,0,7-3.3,7-6.1V4.2c0-1.3,0.4-1.8,1.8-1.8l0.3,0v-1H76V2.3z"/><path class="st0" d="M100.9,2.4l0.3,0c1.8,0,1.9,0.3,1.9,1.4v8.3L92.8,1.3h-4v1l0.3,0c0.7,0,1.2,0.2,1.6,0.4v11.1c0,0.8-0.2,1.2-1.6,1.2h-0.4v1h5.9v-1h-0.3c-1.8,0-2-0.3-2-1.7v-9l11.2,11.8l0.1,0.1h1v-13c0-0.6,0-0.9,1.8-0.9h0.3v-1h-5.9V2.4z"/><path class="st0" d="M113.9,2.3l0.3,0c1.2,0.1,1.4,0.3,1.4,1.3v9.7c0,1.4-0.2,1.6-1.4,1.7l-0.3,0v1h6.1v-1h-0.3c-1.4,0-1.6-0.3-1.6-1.5V3.9c0-1.4,0.3-1.5,1.6-1.5h0.3v-1h-6.1V2.3z"/><path class="st0" d="M137.6,2.4h0.3c1.8,0,1.8,0.4,1.8,0.7c0,0.3-0.1,0.7-0.4,1.3L136,13l-3.8-9.5c-0.2-0.5-0.1-0.6-0.1-0.7c0.2-0.3,0.8-0.4,2-0.5l0.3,0v-1h-6.9v1h0.3c1.2,0,1.4,0.2,2,1.6l5,12.5h1.5l4.8-12.3c0.5-1.3,1-1.8,2.1-1.8h0.3v-1h-5.9V2.4z"/><path class="st0" d="M162.3,12.3c-0.6,2-1,2.4-2.3,2.4h-3.5c-0.7,0-0.9-0.1-0.9-1V9.2h3.6c0.7,0,1.1,0,1.3,1.5l0,0.3h1V6h-1l0,0.3c-0.1,1.3-0.5,1.4-1,1.4h-3.8v-5h4.5c0.6,0,1.1,0.2,1.4,2.1l0,0.3h1l-0.2-3.8h-11.5v1h0.8c1.3,0,1.5,0.4,1.5,1.5v9.6c0,1.2-0.2,1.6-1.8,1.6h-0.9v1h12.7l0.4-4h-1L162.3,12.3z"/><path class="st0" d="M185.6,13.1l-1.8-1.8c-0.9-0.8-1.5-1.5-2.2-2c1.7-0.7,2.7-2.1,2.7-3.8c0-2.7-2.4-4.3-6.4-4.3c-1.5,0-1.9,0-2.9,0.1l-0.6,0c-0.9,0.1-1.8,0.1-2.3,0.1h-0.3v1h0.8c1.2,0,1.4,0.3,1.4,1.5v9.6c0,1.4-0.4,1.6-1.5,1.6h-0.7v1h7v-1h-0.8c-1.2,0-1.5-0.3-1.5-1.4v-3.5c0.2,0,0.5,0,0.9,0c0.5,0,0.8,0,1.2,0l0.3,0c0.6,0.4,1.4,1.1,2.2,1.9l1.5,1.5c1.9,1.9,3,2.8,6.3,2.8c0.3,0,0.6,0,1,0l0.3,0v-1l-0.3,0C188.3,15.2,187,14.6,185.6,13.1z M176.5,2.2c0.3,0,0.5,0,0.8,0c2.9,0,4.2,1.1,4.2,3.5c0,2.4-1.3,3.5-3.9,3.5l-0.6,0c-0.2,0-0.4,0-0.5,0V2.2z"/><path class="st0" d="M200.3,7.3c-1.6-1-3.1-2-3.1-3.3c0-1.1,0.9-1.8,2.2-1.8c1.5,0,2.8,1,3.4,2.5l0.1,0.2h0.9l-0.5-3.5h-0.8l-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.1c-0.3,0-0.5-0.1-0.8-0.2c-0.5-0.2-1.1-0.4-2.3-0.4c-2.5,0-4.3,1.5-4.3,3.6c0,2.2,2.1,3.6,4,4.8c1.7,1.1,3.2,2,3.2,3.4c0,1.6-1.4,2.4-2.8,2.4c-1.7,0-3.1-1.2-3.5-3l-0.1-0.2h-1l0.6,4.1h0.8l0.1-0.2c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.4,0.1,0.6,0.2c0.7,0.2,1.7,0.5,2.5,0.5c2.8,0,4.9-1.8,4.9-4.2C204.5,9.9,202.3,8.5,200.3,7.3z"/><path class="st0" d="M213.4,2.3l0.3,0c1.2,0.1,1.4,0.3,1.4,1.3v9.7c0,1.4-0.2,1.6-1.4,1.7l-0.3,0v1h6.1v-1h-0.3c-1.4,0-1.6-0.3-1.6-1.5V3.9c0-1.4,0.3-1.5,1.6-1.5h0.3v-1h-6.1V2.3z"/><path class="st0" d="M241.3,1l0,0.2c0,0-0.1,0.1-0.4,0.1h-11c-0.1,0-0.3,0-0.4-0.1l0-0.2h-1l-0.4,4.3h1l0-0.2c0.4-2.1,0.8-2.3,1.4-2.3h3.7v11c0,1-0.2,1.4-1.5,1.4h-1.1v1h7.8v-1h-1.1c-1.3,0-1.5-0.4-1.5-1.4v-11h3.7c0.6,0,1,0.2,1.4,2.3l0,0.2h1L242.3,1H241.3z"/><path class="st0" d="M260.2,2.4h0.3c0.9,0,1.1,0.2,1.2,0.3c0,0.1,0.1,0.3-0.3,0.9l-3,5.1l-3.4-5.2c-0.4-0.6-0.4-0.7-0.3-0.8c0-0.1,0.2-0.2,1.3-0.2h0.3v-1h-6.6v1l0.3,0c1.3,0,1.8,0.2,2.9,2l4,6.3v3.1c0,0.9-0.2,1.3-1.5,1.3h-0.7v1h6.9v-1h-0.6c-1.3,0-1.5-0.4-1.5-1.4v-3.3l3.8-6.3c0.6-1,1.2-1.6,2.6-1.7l0.3,0v-1h-5.7V2.4z"/><path class="st0" d="M286.9,1c-5,0-8.6,3.4-8.6,8c0,4.2,3.7,7.4,8.5,7.4c4.8,0,8.4-3.5,8.4-8.1C295.2,4.2,291.6,1,286.9,1zM286.3,2.1c3.6,0,6.2,2.8,6.2,6.9c0,3-1.6,6.2-5.2,6.2c-3.6,0-6.3-3-6.3-7C281,5.8,282.4,2.1,286.3,2.1z"/><path class="st0" d="M308.4,2.7c1.2,0,1.6,0.4,1.6,1.6l0,0.3h1V1.3h-10.8v1l0.3,0c1.3,0,1.4,0.4,1.4,1.8v8.9c0,1.8-0.2,1.9-1.4,1.9l-0.3,0v1h6.1v-1h-0.3c-1.6,0-1.7-0.4-1.7-1.5V8.9h3.9c0.9,0,1.3,0.2,1.3,1.4l0,0.3h1V6h-1l0,0.3c-0.1,1-0.5,1.2-1,1.2h-4.2V2.7H308.4z"/></g><g><g><radialGradient id="SVGID_1_" cx="26.9871" cy="25.4294" r="25.2867" gradientUnits="userSpaceOnUse"><stop  offset="0" style="stop-color:#FFFFFF"/><stop  offset="0.5149" style="stop-color:#FDFDFD"/><stop  offset="0.7003" style="stop-color:#F6F6F6"/><stop  offset="0.8325" style="stop-color:#EBEBEB"/><stop  offset="0.9387" style="stop-color:#DADADA"/><stop  offset="1" style="stop-color:#CCCCCC"/></radialGradient><path class="st1" d="M27,50.7C13,50.7,1.7,39.4,1.7,25.4C1.7,11.5,13,0.1,27,0.1c13.9,0,25.3,11.3,25.3,25.3C52.3,39.4,40.9,50.7,27,50.7z"/></g><g><path class="st2" d="M27,50.7C13,50.7,1.7,39.4,1.7,25.4C1.7,11.5,13,0.1,27,0.1c13.9,0,25.3,11.3,25.3,25.3C52.3,39.4,40.9,50.7,27,50.7z M27,0.5c-13.8,0-25,11.2-25,25c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25C51.9,11.7,40.7,0.5,27,0.5z"/></g><path class="st3" d="M52.1,24.9c0,0.1-0.4,0.5-0.9,0.8c0,0,0,0,0,0c-0.6,0.4-1.6,0.7-2.7,1c-1.2,0.3-2.6,0.6-4.2,0.8c-1.6,0.2-3.4,0.4-5.3,0.6c0,0,0,0,0,0c-2.4,0.2-4,0.3-5.9,0.4c-2.1,0.1-4.2,0.1-6.4,0.1c0,0.3,0,0.6,0,0.8c0,2,0,3.8,0,5.6c0.1,9.6,0.1,9.6,0.4,15.5c13.9,0,25.1-11.2,25.1-25.1C52.1,25.4,52.1,25.1,52.1,24.9z"/><g><path d="M26.6,29.5c0,2,0,3.8,0,5.6c4,3.8,4,3.8,5.7,5.5c0.4-3.2,0.7-7,0.7-11.2c0-0.3,0-0.6,0-0.8c-2.5,0.1-4.2,0.1-6.4,0.1C26.6,28.9,26.6,29.2,26.6,29.5z"/><path d="M35.8,44.8c-0.9-1.4-1.7-2.4-3.5-4.3c-0.9,6.1-2.4,9.9-4.3,10c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6-0.1C31.9,50.2,34.1,48.2,35.8,44.8z"/><path d="M38.6,34.6c0,0-1.4,7.5-2.8,10.3c0.8,1.5,0.8,2.1,0.5,3.1c2.4-1.9,4.4-4.6,5.8-8.1C41.3,38,40.7,37.1,38.6,34.6z"/><path d="M31.5,50.2C32,50.1,32,50,33,49.8l0.6-0.2c1.9-0.6,2.2-0.9,2.8-1.7c-1.7,1.2-3.4,2-5.4,2.3L31.5,50.2z"/><path d="M42.6,44c3.6-4.1,5.8-9.9,5.8-16.5c0-0.3,0-0.6,0-0.8c-1.2,0.3-2.6,0.6-4.2,0.8c0,0.3,0,0.6,0,0.8c0,4.3-0.7,8.2-2.1,11.5C43,41.7,43,42.6,42.6,44z"/><path d="M39,28.1c-2.4,0.2-4,0.3-5.9,0.4c3.4,3.6,4.2,4.4,5.6,6.1c0.2-1.8,0.3-3.7,0.3-5.6C39,28.7,39,28.4,39,28.1z"/></g><path d="M21.5,1.6c1.4-0.6,2.7-1.2,5.5-1.3l0,0C25.1,0.5,23.2,1,21.5,1.6"/><g><path class="st4" d="M43.8,27.5c-1.3-0.2-2.4-2.4-1.8-4.6c-1.8,1.3-3.9-1.3-3.6-3.8c0.2-1.3,1-2.4,2.5-1.9c-0.6-2-1.3-4-2.2-5.8c-1.3,0.2-2.7,0.3-4.2,0.4c1.3,2,0,3.9-1.8,3.6c-1.4-0.2-2.6-1.6-2.3-3.3c-1.1,0.8-3.4,0.5-3.6-1.9c-0.1,5.1-0.1,11.6-0.1,18.4c6.7,0.1,14.5-0.6,17.6-1.1c0,0,0,0,0,0C44.1,27.5,43.9,27.5,43.8,27.5z"/></g><g><path class="st4" d="M10.8,32.5c1.9-0.7,4.2,2.5,3.4,4.7c-0.4,1-1.4,1.3-2.4,0.7c0.6,1.9,1.3,3.6,2.1,5.1c1.3,0.2,2.8,0.3,4.4,0.5c-1.3-1.6-0.3-2.9,1.5-2.8c1.5,0.1,3.5,1.3,3,3c1.3-0.6,3.6-0.1,3.9,1.6c-0.1-3.8-0.1-9.3-0.1-15.8c0-0.3,0-0.5,0-0.8c-2.1,0-4.3-0.1-6.4-0.2c-4.5-0.2-7.6-0.4-11.4-1.1c0,0,0,0,0,0C10.7,28,11.3,30.9,10.8,32.5z"/></g><path class="st4" d="M38.9,9.4L38.9,9.4L38.9,9.4C38.9,9.4,38.9,9.4,38.9,9.4L38.9,9.4C38.9,9.4,38.9,9.4,38.9,9.4c0.3,0,0.5-0.1,0.7-0.1c1.4-0.3,4.7-1,4.7-2c0,0,1.3,1.3,2.2,3.1c0.1,0.2,0.2,0.4,0.3,0.7c0.1,0.3,0.2,0.7,0.2,0.9c0,0.5-0.4,0.6-0.7,0.4c0,0-0.1,0-0.1,0c-1.3-0.6-1.7-1.8-2-2.3c-0.7,0.2-1.7,0.7-2.6,0.9c-0.1,0-0.3,0.1-0.4,0.1c1.1,1.8,2.1,3.8,2.8,5.9c1.3-1.3,3.2,1.1,3.3,3.4c0.1,1.4-0.6,2.6-1.8,2.1c1,1.9,0.7,4.6-1.2,5.2C43.9,21.4,42.9,16,38.9,9.4L38.9,9.4L38.9,9.4"/><path class="st4" d="M38.9,9.4L38.9,9.4L38.9,9.4L38.9,9.4L38.9,9.4c-3.2-4.9-5.7-6.7-9-7.9c-0.6-0.3-2.8-1.1-3-1.1l0,0l0,0c0.6,0.8,1.7,1.3,2,1.4c-0.1,0.3,0,0.9,1,1.7c0.2,0.1,0.3,0.2,0.5,0.3c1.6,0.9,2,0.2,2.1-0.1c0,0,0,0,0,0C33,4,34,4.7,35.1,6c0.6,0.7,1.2,1.4,1.6,2c-1,0.1-2.3,0.2-3.7,0.3c-0.1-1.6-1.2-2.4-2-2.7c-1.6-0.6-2.1,1.3-1.4,2.6c-1.3-0.7-2.7-0.1-3,1.9C31.7,10.1,35.1,9.9,38.9,9.4L38.9,9.4L38.9,9.4"/><path class="st4" d="M39.2,4.8c0,0,0-0.1,0-0.2c0-0.1,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0.3-0.1,1-0.2,3.1,1.2c-4.4-3.4-9-4.8-13-5.2c-0.6-0.1-1.6-0.1-1.6-0.1c1.3,0.1,2.1,0.4,2.3,0.5c0.2,0.1,0.3,0.1,0.4,0.2c0,0,0,0,0,0c0.3,0,0.5,0.1,0.9,0.2c0.4,0.1,1,0.4,1.6,0.6c0.6,0.3,1.4,0.9,1.4,1.2c-0.1,0.1-0.2,0.1-0.6,0c1.5,1.1,3.6,3.1,4.9,4.5c0.9-0.2,2.2-0.3,2.8-0.5C41.5,7.1,39.6,5.7,39.2,4.8z"/><path class="st4" d="M13.6,44.4c-2.2-0.4-3.4-0.7-4.2-1.1c-0.1-0.1-0.2-0.1-0.2-0.1c0,0-1.2-1.2-2.3-2.6c-0.8-1-1.4-2.1-1.5-2.2c0,0,0.2,0,0.3,0c1.1,0.4,2.9,3.5,2.9,3.5c0.7,0.3,1.6,0.5,2.7,0.7c-1-1.6-1.9-3.3-2.6-5.2c-1.6,0.8-3.6-3.3-2.9-5.1C6,31.9,6.4,31.2,7.4,32c-0.8-1.8-0.6-4.6,1.3-4.6C8.8,33.5,9.7,38.7,13.6,44.4"/><path class="st4" d="M26.7,45.6c-0.2,0.9-1.4,1.7-3.2,1c0.8,1.1,0.1,2-1.3,1.7c-1.1-0.2-2.4-1.1-2.5-2c-1.4-0.1-2.6-0.2-3.7-0.4c1.1,1.2,2.2,2.2,3.5,3c0.2-0.1,0.4,0,1.1,0.2c1,0.3,1.9,0.8,2.8,1.1c0,0-0.2,0-0.2,0c-0.7-0.1-0.9-0.2-1.3-0.2c-1.9-0.4-5.1-1.4-8.3-5.7h0h0l0,0c3.9,0.6,7.7,0.9,13.1,0.9C26.7,45.4,26.7,45.5,26.7,45.6"/><path class="st3" d="M26.9,0.3c-13.5,0-24.8,11-25.1,24.6l0,0c0,0,0.1,0.3,0.7,0.6v0v0c0.5,0.3,1.3,0.7,2.3,1c1.3,0.3,2.6,0.6,3.9,0.8l0,0c3.8,0.6,6.9,0.9,11.4,1.1c2.1,0.1,4.3,0.2,6.4,0.2c0-1.3,0-8.6,0-15.6c0-0.9,0-1.9,0-2.8C26.8,5.6,26.8,0.9,26.9,0.3L26.9,0.3z"/><path d="M39,47.5c-1.4,0.8-1.7,0.8-3.6,1.6c-0.5,0.2-1,0.3-1.6,0.5c3.4-0.9,8-4.7,8.8-5.6c-0.4,0.9-0.7,1.5-1.7,2.3C40.6,46.5,39.4,47.3,39,47.5z"/><path d="M4.9,26.5c-1-0.3-1.8-0.6-2.3-1C2.8,16.5,7.9,8.4,15.2,4c-1.7,1.5-2.5,2.5-3.4,4.6C7.7,13.3,5.1,19.7,4.9,26.5"/><path d="M15.3,4c1.8-1.3,2.9-2.3,5.8-3c2-0.5,3.8-0.7,5.9-0.7l0,0C22.7,0.5,18.7,1.9,15.3,4"/><path d="M13.9,28c-1.8-0.2-3.6-0.4-5.1-0.7c0.1-4.6,1.1-8.9,2.7-12.8c0.6,2.5,1.2,3.9,3,6.9C14.1,23.6,13.9,25.8,13.9,28"/><path d="M26.7,10.2c0,2.8,0,5.6-0.1,7.8c0,2.2,0,3.8,0,4.1c-2.5-2.6-3.8-4-5.6-6.3c1.2-7.8,3.4-14,5.9-15.4l0,0l0,0C26.8,1,26.8,5.5,26.7,10.2z"/><g><path d="M17.9,9.9c-1.6,3.3-2.8,7.3-3.4,11.6c1.5,2.3,2.5,3.6,5.5,7c0-4.5,0.4-8.8,1-12.8C19.2,13.2,18.6,12,17.9,9.9z"/></g><path class="st5" d="M51.1,25.7c0,0.3,0,0.6,0,0.8c0,8.9-4.3,16.3-11.1,20.4L39.9,47c3.2-2,7.2-5.3,9.8-10.7c2.7-5.4,2.4-11.4,2.4-11.4C52,25.1,51.6,25.4,51.1,25.7z"/><g><path d="M21.5,1.6c-3.7,1.4-7,3.9-9.6,7c-0.7,2.3-0.7,3.6-0.4,6c1.6-3.8,3.9-7.1,6.6-9.6C18.9,3.6,19.4,2.7,21.5,1.6z"/></g><path d="M17.9,9.9c-0.5-2.1-0.5-3.1,0.2-4.9c2.6-2.4,5.6-4.2,8.9-4.7C23.4,1.2,20.2,4.9,17.9,9.9"/></g></svg>`;
var ELEMENT_NAME = "umd-element-footer";
var SLOT_SUB_LINKS_NAME = "sub-links";
var SLOT_BACKGROUND_IMAGE_NAME = "background-image";
var MAIN_CONTAINER = "umd-footer-main-container";
var MAIN_TOP_CONTAINER = "umd-footer-main-top-container";
var BACKGROUND_IMAGE_CONTAINER = "umd-footer-background-image-container";
var BACKGROUND_IMAGE_GRADIENT = "umd-footer-background-image-graident-container";
var SUB_LINKS_CONTAINER = "umd-footer-sub-links-container";
var componentStyles = `
  :host {
    display: block !important;
    position: relative !important;
    text-wrap: pretty;
    container: umd-footer / inline-size;
  }

  .${MAIN_CONTAINER} {

  }

  .${MAIN_CONTAINER}[type="visual"] .${BACKGROUND_IMAGE_CONTAINER}  {
    padding-top: 100px;
  }

  .${BACKGROUND_IMAGE_CONTAINER} {
    position: relative;
  }

  .${BACKGROUND_IMAGE_GRADIENT} {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 500vw;
    height: 100px;
    background: linear-gradient( 180deg, rgba(255, 255, 255, 1) 0%, #e4edf9 100% );
  }

  .${MAIN_TOP_CONTAINER} {
    background-color: ${colors.black};
    padding: ${spacing["5xl"]} 0 ${spacing["2xl"]} ;
  }

  .${MAIN_TOP_CONTAINER} svg {
    max-width: 310px;
  }
  
  .${SUB_LINKS_CONTAINER} {
    padding: ${spacing.sm} 0;
    background-color: ${colors.gray.darker};
  }

  .${SUB_LINKS_CONTAINER} .umd-lock {
    display: flex;
  }

  .${SUB_LINKS_CONTAINER} .umd-lock > *:not(:first-child) {
    margin-left: ${spacing.sm};
    padding-left: ${spacing.sm};
    background-position: ${spacing.sm} 100%;
    border-left: 1px solid ${colors.gray.dark};
  }

  .${SUB_LINKS_CONTAINER} .umd-lock p {
    color: ${colors.white};
  }
  
  .${SUB_LINKS_CONTAINER} a {
    color: ${colors.white};
    background-image: linear-gradient(${colors.white}, ${colors.white});
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 0 1px;
    display: inline;
    position: relative;
    transition: background-size .4s;
  }

  .${SUB_LINKS_CONTAINER} a:hover,
  .${SUB_LINKS_CONTAINER} a:focus {
    background-size: 100% 1px;
  }
`;
var requiredSubLinks = [
  {
    title: "Privacy Policy",
    url: "https://www.umd.edu/privacy-notice"
  },
  {
    title: "Web Accessibility",
    url: "https://www.umd.edu/web-accessibility"
  }
];
var CreateSubLink = /* @__PURE__ */ __name(({ title, url }) => {
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
  link.innerText = title;
  link.classList.add("umd-sans-min");
  return link;
}, "CreateSubLink");
var CreateUtility = /* @__PURE__ */ __name(({ element }) => {
  const slot = element.querySelector(`[slot="${SLOT_SUB_LINKS_NAME}"]`);
  const container = document.createElement("div");
  const wrapper = document.createElement("div");
  const copyRight = document.createElement("p");
  container.classList.add(SUB_LINKS_CONTAINER);
  wrapper.classList.add("umd-lock");
  if (slot) {
    const slottedLinks = Array.from(slot.querySelectorAll(`a`));
    slottedLinks.forEach((link) => link.classList.add("umd-sans-min"));
    slottedLinks.forEach((link) => wrapper.appendChild(link));
  }
  requiredSubLinks.forEach((link) => wrapper.appendChild(CreateSubLink(link)));
  copyRight.classList.add("umd-sans-min");
  copyRight.innerHTML = `\xA9${(/* @__PURE__ */ new Date()).getFullYear()} UNIVERSITY OF MARYLAND`;
  wrapper.appendChild(copyRight);
  container.appendChild(wrapper);
  return container;
}, "CreateUtility");
var CreateMainLogoRow = /* @__PURE__ */ __name(() => {
  const container = document.createElement("div");
  const lock = document.createElement("div");
  container.classList.add(MAIN_TOP_CONTAINER);
  lock.classList.add("umd-lock");
  const makeLogo = /* @__PURE__ */ __name(() => {
    const logoLink = document.createElement("a");
    const logoElmement = document.createElement("div");
    logoLink.setAttribute("href", "https://umd.edu");
    logoLink.setAttribute("target", "_blank");
    logoLink.setAttribute("rel", "noopener noreferrer");
    logoElmement.innerHTML = `${LOGO}`;
    logoLink.appendChild(logoElmement);
    lock.appendChild(logoLink);
  }, "makeLogo");
  makeLogo();
  container.appendChild(lock);
  return container;
}, "CreateMainLogoRow");
var CreateMain = /* @__PURE__ */ __name(({ type, element }) => {
  const container = document.createElement("div");
  const logoRow = CreateMainLogoRow();
  container.setAttribute("type", type);
  container.classList.add(MAIN_CONTAINER);
  if (type === "visual") {
    const slottedDate = element.querySelector(`[slot="${SLOT_BACKGROUND_IMAGE_NAME}"]`);
    const visualContainer = document.createElement("div");
    const backgroundGraident = document.createElement("div");
    const backgroundImage = document.createElement("img");
    let altText = "The University of Maryland Campus";
    let imageSrc = `./background.jpg`;
    if (slottedDate) {
      const source = slottedDate.getAttribute("src");
      const alt = slottedDate.getAttribute("alt");
      if (typeof source === "string" && source.length > 0) {
        imageSrc = source;
      }
      if (typeof alt === "string" && alt.length > 0) {
        altText = alt;
      }
    }
    visualContainer.classList.add(BACKGROUND_IMAGE_CONTAINER);
    backgroundImage.setAttribute("src", imageSrc);
    backgroundImage.setAttribute("alt", `${altText}`);
    backgroundGraident.classList.add(BACKGROUND_IMAGE_GRADIENT);
    visualContainer.appendChild(backgroundGraident);
    visualContainer.appendChild(backgroundImage);
    container.appendChild(visualContainer);
  }
  if (type === "mega") {
  }
  if (type === "simple") {
  }
  container.appendChild(logoRow);
  return container;
}, "CreateMain");
var LoadTemplate = /* @__PURE__ */ __name(async () => {
  const template = document.createElement("template");
  const resp = await fetch("./styles.css");
  const configCss = await resp.text();
  template.innerHTML = `<style>${configCss}${componentStyles}</style>`;
  return template;
}, "LoadTemplate");
var UMDFooterElement = class extends HTMLElement {
  static {
    __name(this, "UMDFooterElement");
  }
  constructor() {
    super();
    this._type = "simple";
    this._shadow = this.attachShadow({ mode: "open" });
    const load = /* @__PURE__ */ __name(async () => {
      const template = await LoadTemplate();
      this._shadow.appendChild(template.content.cloneNode(true));
    }, "load");
    load();
  }
  static get observedAttributes() {
    return ["type"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "type" && newValue && !oldValue) {
      this._type = newValue;
    }
  }
  connectedCallback() {
    const element = this;
    const mainElement = CreateMain({ element, type: this._type });
    const utilityElement = CreateUtility({ element });
    this._shadow.appendChild(mainElement);
    this._shadow.appendChild(utilityElement);
  }
};
if (!window.customElements.get(ELEMENT_NAME)) {
  window.UMDFooterElement = UMDFooterElement;
  window.customElements.define(ELEMENT_NAME, UMDFooterElement);
}
export {
  UMDFooterElement as default
};
