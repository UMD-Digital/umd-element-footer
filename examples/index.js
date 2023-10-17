import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
const ELEMENT_NAME = 'umd-element-footer';
const SLOT_SUB_LINKS_NAME = 'sub-links';
const SUB_LINKS_CONTAINER = 'umd-footer-sub-links-container';
const BREAKPOINTS = {
    small: 320,
};
const componentStyles = `
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
const requiredSubLinks = [
    {
        title: 'Privacy Policy',
        url: 'https://www.umd.edu/privacy-notice',
    },
    {
        title: 'Web Accessibility',
        url: 'https://www.umd.edu/web-accessibility',
    },
];
const Debounce = (cb, wait = 50) => {
    let h = 0;
    let callable = (...args) => {
        clearTimeout(h);
        h = setTimeout(() => cb(...args), wait);
    };
    return callable;
};
const CreateSlot = ({ type }) => {
    const slot = document.createElement('slot');
    slot.setAttribute('name', type);
    return slot;
};
const CreateSubLink = ({ title, url }) => {
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.innerText = title;
    return link;
};
const CreateShadowDomForLinks = ({ element }) => {
    const slot = element.querySelector(`[slot="${SLOT_SUB_LINKS_NAME}"]`);
    const container = document.createElement('div');
    const wrapper = document.createElement('div');
    container.classList.add(SUB_LINKS_CONTAINER);
    wrapper.classList.add('umd-lock');
    if (slot) {
        const slottedLinks = Array.from(slot.querySelectorAll(`a`));
        slottedLinks.forEach((link) => wrapper.appendChild(link));
    }
    requiredSubLinks.forEach((link) => wrapper.appendChild(CreateSubLink(link)));
    container.appendChild(wrapper);
    return container;
};
const LoadTemplate = async () => {
    const template = document.createElement('template');
    const resp = await fetch('./styles.css');
    const configCss = await resp.text();
    template.innerHTML = `<style>${configCss}${componentStyles}</style>`;
    return template;
};
export default class UMDFooterElement extends HTMLElement {
    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: 'open' });
        const test = async () => {
            const template = await LoadTemplate();
            this._shadow.appendChild(template.content.cloneNode(true));
        };
        test();
    }
    static get observedAttributes() {
        return ['type'];
    }
    attributeChangedCallback(name, oldValue, newValue) { }
    connectedCallback() {
        const element = this;
        const subLinks = CreateShadowDomForLinks({ element });
        this._shadow.appendChild(subLinks);
    }
}
if (!window.customElements.get(ELEMENT_NAME)) {
    window.UMDFooterElement = UMDFooterElement;
    window.customElements.define(ELEMENT_NAME, UMDFooterElement);
}
//# sourceMappingURL=index.js.map