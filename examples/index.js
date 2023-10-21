import { CreateMain, CreateUtility, ComponentStyles, ELEMENT_WRAPPER, THEME_OPTION_DARK, VERSION_TYPE_SIMPLE, VERSION_TYPES, } from './ui';
const ELEMENT_NAME = 'umd-element-footer';
const Debounce = (cb, wait = 50) => {
    let h = 0;
    let callable = (...args) => {
        clearTimeout(h);
        h = setTimeout(() => cb(...args), wait);
    };
    return callable;
};
const LoadTemplate = async () => {
    const template = document.createElement('template');
    const resp = await fetch('./styles.css');
    const configCss = await resp.text();
    template.innerHTML = `<style>${configCss}${ComponentStyles}</style>`;
    return template;
};
export default class UMDFooterElement extends HTMLElement {
    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: 'open' });
        const load = async () => {
            const template = await LoadTemplate();
            this._shadow.appendChild(template.content.cloneNode(true));
        };
        load();
    }
    static get observedAttributes() {
        return ['type', 'theme'];
    }
    attributeChangedCallback(name, oldValue, newValue) { }
    connectedCallback() {
        const element = this;
        const type = this.getAttribute('type') || VERSION_TYPE_SIMPLE;
        const theme = this.getAttribute('theme') || THEME_OPTION_DARK;
        if (VERSION_TYPES.indexOf(type) === -1) {
            const message = `UMDFooterElement: Invalid type attribute. Must be one of ${VERSION_TYPES.join(',')}. Refer to documenation for more information.`;
            throw new Error(message);
        }
        const wrapper = document.createElement('div');
        const utilityElement = CreateUtility({ element });
        const mainElement = CreateMain({
            element,
            type,
            theme,
        });
        wrapper.classList.add(ELEMENT_WRAPPER);
        wrapper.setAttribute('theme', theme);
        wrapper.setAttribute('type', type);
        wrapper.appendChild(mainElement);
        wrapper.appendChild(utilityElement);
        this._shadow.appendChild(wrapper);
    }
}
if (!window.customElements.get(ELEMENT_NAME)) {
    window.UMDFooterElement = UMDFooterElement;
    window.customElements.define(ELEMENT_NAME, UMDFooterElement);
}
