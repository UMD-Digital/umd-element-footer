declare global {
  interface Window {
    UMDFooterElement: typeof UMDFooterElement;
  }
}

import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';

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
    padding: ${spacing.sm} 0;
    background-color: ${colors.gray.darker};
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

  .${SUB_LINKS_CONTAINER} a:not(:first-child) {
    margin-left: ${spacing.sm};
    padding-left: ${spacing.sm};
    background-position: ${spacing.sm} 100%;
    border-left: 1px solid ${colors.gray.dark};
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
  const slot = document.createElement('slot');
  slot.setAttribute('name', type);
  return slot;
};

const CreateSubLink = ({ title, url }: { title: string; url: string }) => {
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
  link.innerText = title;
  link.classList.add('umd-sans-min');
  return link;
};

const CreateShadowDomForLinks = ({ element }: { element: HTMLElement }) => {
  const slot = element.querySelector(`[slot="${SLOT_SUB_LINKS_NAME}"]`);
  const container = document.createElement('div');
  const wrapper = document.createElement('div');

  container.classList.add(SUB_LINKS_CONTAINER);
  wrapper.classList.add('umd-lock');

  if (slot) {
    const slottedLinks = Array.from(
      slot.querySelectorAll(`a`),
    ) as HTMLAnchorElement[];

    slottedLinks.forEach((link) => link.classList.add('umd-sans-min'));
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
  _shadow: ShadowRoot;

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
    return ['type'];
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ) {}

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
