import { ComponentStyles } from './components';
import { CreateMain } from './components/main';
import { CreateUtility } from './components/utility';
import {
  ELEMENT_WRAPPER,
  THEME_OPTION_DARK,
  VERSION_TYPE_SIMPLE,
  VERSION_TYPES,
} from './variables';

declare global {
  interface Window {
    UMDFooterElement: typeof UMDFooterElement;
  }
}

const ELEMENT_NAME = 'umd-element-footer';
const STYLE_FILE_CDN =
  'https://unpkg.com/@universityofmaryland/umd-element-footer/dist/styles.css';

const LoadTemplate = async () => {
  const template = document.createElement('template');
  const resp = await fetch(STYLE_FILE_CDN).catch((err) => {
    throw new Error(
      `UMDFooterElement: Failed to load style file from CDN. ${err}`,
    );
  });
  const configCss = await resp.text();

  template.innerHTML = `<style>${configCss}${ComponentStyles}</style>`;

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
    return ['type', 'theme'];
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ) {}

  connectedCallback() {
    const element = this;
    const type = this.getAttribute('type') || VERSION_TYPE_SIMPLE;
    const theme = this.getAttribute('theme') || THEME_OPTION_DARK;

    if (VERSION_TYPES.indexOf(type) === -1) {
      const message = `UMDFooterElement: Invalid type attribute. Must be one of ${VERSION_TYPES.join(
        ',',
      )}. Refer to documenation for more information.`;
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
