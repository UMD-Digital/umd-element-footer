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

// examples/index.js
var ELEMENT_NAME = "umd-element-footer";
var SLOT_SUB_LINKS_NAME = "sub-links";
var SUB_LINKS_CONTAINER = "umd-footer-sub-links-container";
var componentStyles = `
  :host {
    display: block !important;
    position: relative !important;
    text-wrap: pretty;
    container: umd-footer / inline-size;
  }
  
  .${SUB_LINKS_CONTAINER} {
    padding: 16px 0;
    background-color: ${colors.gray.darker};
  }
  
  .${SUB_LINKS_CONTAINER} a {
    color: ${colors.white};
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
  return link;
}, "CreateSubLink");
var CreateShadowDomForLinks = /* @__PURE__ */ __name(({ element }) => {
  const slot = element.querySelector(`[slot="${SLOT_SUB_LINKS_NAME}"]`);
  const container = document.createElement("div");
  const wrapper = document.createElement("div");
  container.classList.add(SUB_LINKS_CONTAINER);
  wrapper.classList.add("umd-lock");
  if (slot) {
    const slottedLinks = Array.from(slot.querySelectorAll(`a`));
    slottedLinks.forEach((link) => wrapper.appendChild(link));
  }
  requiredSubLinks.forEach((link) => wrapper.appendChild(CreateSubLink(link)));
  container.appendChild(wrapper);
  return container;
}, "CreateShadowDomForLinks");
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
    this._shadow = this.attachShadow({ mode: "open" });
    const test = /* @__PURE__ */ __name(async () => {
      const template = await LoadTemplate();
      this._shadow.appendChild(template.content.cloneNode(true));
    }, "test");
    test();
  }
  static get observedAttributes() {
    return ["type"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
  }
  connectedCallback() {
    const element = this;
    const subLinks = CreateShadowDomForLinks({ element });
    this._shadow.appendChild(subLinks);
  }
};
if (!window.customElements.get(ELEMENT_NAME)) {
  window.UMDFooterElement = UMDFooterElement;
  window.customElements.define(ELEMENT_NAME, UMDFooterElement);
}
export {
  UMDFooterElement as default
};
