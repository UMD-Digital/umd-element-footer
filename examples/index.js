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
const Debounce = (cb, wait = 50) => {
    let h = 0;
    let callable = (...args) => {
        clearTimeout(h);
        h = setTimeout(() => cb(...args), wait);
    };
    return callable;
};
const CreateSlot = ({ type }) => {
    const slot = document.createElement("slot");
    slot.setAttribute("name", type);
    return slot;
};
export default class UMDFooterElement extends HTMLElement {
    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(name, oldValue, newValue) { }
    connectedCallback() { }
}
if (!window.customElements.get(ELEMENT_NAME)) {
    window.UMDFooterElement = UMDFooterElement;
    window.customElements.define(ELEMENT_NAME, UMDFooterElement);
}
//# sourceMappingURL=index.js.map