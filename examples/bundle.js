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
var ELEMENT_NAME = "umd-element-footer";
var SLOT_SUB_LINKS_NAME = "sub-links";
var SLOT_BACKGROUND_IMAGE_NAME = "background-image";
var MAIN_CONTAINER = "umd-footer-main-container";
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
var CreateMain = /* @__PURE__ */ __name(({ type, element }) => {
  const container = document.createElement("div");
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
