declare global {
  interface Window {
    UMDFooterElement: typeof UMDFooterElement;
  }
}

// Variables

const ELEMENT_NAME = "umd-element-footer";

const COLORS = {
  white: "#ffffff",
  lightGray: "#f1f1f1",
  gray: "#e6e6e6",
  darkGray: "#454545",
  darkerGray: "#242424",
  black: "#000000",
};

const BREAKPOINTS = {
  small: 320,
};

const template = document.createElement("template");

// Styles

template.innerHTML = `
<style>
  :host {
    display: block !important;
    position: relative !important;
    text-wrap: pretty;
    container: umd-footer / inline-size; 
  }

</style>`;

// Functions

const Debounce = <T extends Function>(cb: T, wait = 50) => {
  let h = 0;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
};

const CreateSlot = ({ type }: { type: string }) => {
  const slot = document.createElement("slot");
  slot.setAttribute("name", type);
  return slot;
};

export default class UMDFooterElement extends HTMLElement {
  _shadow: ShadowRoot;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {}

  connectedCallback() {}
}

if (!window.customElements.get(ELEMENT_NAME)) {
  window.UMDFooterElement = UMDFooterElement;
  window.customElements.define(ELEMENT_NAME, UMDFooterElement);
}
