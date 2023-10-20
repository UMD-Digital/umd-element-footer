import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';
const ELEMENT_NAME = 'umd-element-footer';
const SLOT_SUB_LINKS_NAME = 'sub-links';
const SLOT_BACKGROUND_IMAGE_NAME = 'background-image';
const MAIN_CONTAINER = 'umd-footer-main-container';
const SOCIAL_CONTAINER = 'umd-footer-social-container';
const LOGO_CONTAINER = 'umd-footer-logo-container';
const BACKGROUND_IMAGE_CONTAINER = 'umd-footer-background-image-container';
const BACKGROUND_IMAGE_GRADIENT = 'umd-footer-background-image-graident-container';
const SUB_LINKS_CONTAINER = 'umd-footer-sub-links-container';
const BREAKPOINTS = {
    small: 280,
};
const componentStyles = `
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
    link.classList.add('umd-sans-min');
    return link;
};
const CreateUtility = ({ element }) => {
    const slot = element.querySelector(`[slot="${SLOT_SUB_LINKS_NAME}"]`);
    const container = document.createElement('div');
    const wrapper = document.createElement('div');
    const copyRight = document.createElement('p');
    container.classList.add(SUB_LINKS_CONTAINER);
    wrapper.classList.add('umd-lock');
    if (slot) {
        const slottedLinks = Array.from(slot.querySelectorAll(`a`));
        slottedLinks.forEach((link) => link.classList.add('umd-sans-min'));
        slottedLinks.forEach((link) => wrapper.appendChild(link));
    }
    requiredSubLinks.forEach((link) => wrapper.appendChild(CreateSubLink(link)));
    copyRight.classList.add('umd-sans-min');
    copyRight.innerHTML = `©${new Date().getFullYear()} UNIVERSITY OF MARYLAND`;
    wrapper.appendChild(copyRight);
    container.appendChild(wrapper);
    return container;
};
const CreateSocialRow = () => {
    const container = document.createElement('div');
};
const CreateMainLogoRow = () => {
    const container = document.createElement('div');
};
const CreateLinksLogoRow = () => {
    const container = document.createElement('div');
};
const CreateMain = ({ type, element, }) => {
    const container = document.createElement('div');
    container.setAttribute('type', type);
    container.classList.add(MAIN_CONTAINER);
    if (type === 'visual') {
        const slottedDate = element.querySelector(`[slot="${SLOT_BACKGROUND_IMAGE_NAME}"]`);
        const visualContainer = document.createElement('div');
        const backgroundGraident = document.createElement('div');
        const backgroundImage = document.createElement('img');
        let altText = 'The University of Maryland Campus';
        let imageSrc = `./background.jpg`;
        if (slottedDate) {
            const source = slottedDate.getAttribute('src');
            const alt = slottedDate.getAttribute('alt');
            if (typeof source === 'string' && source.length > 0) {
                imageSrc = source;
            }
            if (typeof alt === 'string' && alt.length > 0) {
                altText = alt;
            }
        }
        visualContainer.classList.add(BACKGROUND_IMAGE_CONTAINER);
        backgroundImage.setAttribute('src', imageSrc);
        backgroundImage.setAttribute('alt', `${altText}`);
        backgroundGraident.classList.add(BACKGROUND_IMAGE_GRADIENT);
        visualContainer.appendChild(backgroundGraident);
        visualContainer.appendChild(backgroundImage);
        container.appendChild(visualContainer);
    }
    if (type === 'mega') {
    }
    if (type === 'simple') {
    }
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
        this._type = 'simple';
        this._shadow = this.attachShadow({ mode: 'open' });
        const load = async () => {
            const template = await LoadTemplate();
            this._shadow.appendChild(template.content.cloneNode(true));
        };
        load();
    }
    static get observedAttributes() {
        return ['type'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'type' && newValue && !oldValue) {
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
}
if (!window.customElements.get(ELEMENT_NAME)) {
    window.UMDFooterElement = UMDFooterElement;
    window.customElements.define(ELEMENT_NAME, UMDFooterElement);
}
