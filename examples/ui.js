import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';
import { DARK_LOGO, LIGHT_LOGO, FACEBOOK_ICON, X_ICON, INSTAGRAM_ICON, YOUTUBE_ICON, TWITTER_ICON, } from './svgs';
const SLOT_SUB_LINKS_NAME = 'sub-links';
const SLOT_BACKGROUND_IMAGE_NAME = 'background-image';
const SLOT_CONTACT_NAME = 'contact';
const SLOT_SOCIAL_NAME = 'social-links';
export const ELEMENT_WRAPPER = 'umd-footer-element-wrapper';
const MAIN_CONTAINER = 'umd-footer-main-container';
const MAIN_TOP_CONTAINER = 'umd-footer-main-top-container';
const MAIN_BOTTOM_CONTAINER = 'umd-footer-main-bottom-container';
const MAIN_TOP_CONTAINER_WRAPPER = 'umd-footer-main-top-container-wrapper';
const LOGO_CONTAINER = 'umd-footer-logo-container';
const CONTACT_CONTAINER = 'umd-footer-contact-container';
const SOCIAL_CONTAINER = 'umd-footer-social-container';
const SOCIAL_CONTAINER_WRAPPER = 'umd-footer-social-container_wrapper';
const BACKGROUND_IMAGE_CONTAINER = 'umd-footer-background-image-container';
const BACKGROUND_IMAGE_GRADIENT = 'umd-footer-background-image-graident-container';
const UTILITY_CONTAINER = 'umd-footer-utility-container';
export const THEME_OPTION_DARK = 'dark';
const THEME_OPTION_LIGHT = 'light';
const VERSION_TYPE_MEGA = 'mega';
const VERSION_TYPE_VISUAL = 'visual';
export const VERSION_TYPE_SIMPLE = 'simple';
export const VERSION_TYPES = [
    VERSION_TYPE_SIMPLE,
    VERSION_TYPE_MEGA,
    VERSION_TYPE_VISUAL,
];
const SubLinkStyles = `
  .${UTILITY_CONTAINER} {
    padding: ${spacing.sm} 0;
    background-color: ${colors.gray.darker};
  }
  
  .${UTILITY_CONTAINER} .umd-lock {
    display: flex;
  }
  
  .${UTILITY_CONTAINER} .umd-lock > *:not(:first-child) {
    margin-left: ${spacing.sm};
    padding-left: ${spacing.sm};
    background-position: ${spacing.sm} 100%;
    border-left: 1px solid ${colors.gray.dark};
  }
  
  .${UTILITY_CONTAINER} .umd-lock p {
    color: ${colors.white};
  }
  
  .${UTILITY_CONTAINER} a {
    color: ${colors.white};
    background-image: linear-gradient(${colors.white}, ${colors.white});
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 0 1px;
    display: inline;
    position: relative;
    transition: background-size .4s;
  }
  
  .${UTILITY_CONTAINER} a:hover,
  .${UTILITY_CONTAINER} a:focus {
    background-size: 100% 1px;
  }
`;
const MainContainerStyles = `
  .${MAIN_CONTAINER} {
  
  }
  
  .${MAIN_TOP_CONTAINER} {
    background-color: ${colors.black};
    padding: ${spacing['5xl']} 0 ${spacing['2xl']} ;
  }

  .${MAIN_TOP_CONTAINER} p,
  .${MAIN_TOP_CONTAINER} a {
    color: ${colors.white};
  }
  
  .${MAIN_TOP_CONTAINER_WRAPPER}  {
    display: flex;
  }
  
  .${LOGO_CONTAINER} {
    max-width: 310px;
    align-self: flex-start;
  }
  
  .${LOGO_CONTAINER} svg {
    width: 100%;
  }
  
  .${CONTACT_CONTAINER} {
    padding-left: ${spacing['2xl']};
  }
  
  .${CONTACT_CONTAINER} * {
    color: ${colors.white};
  }

  .${SOCIAL_CONTAINER} {
    margin-left: auto;
    display: flex;
    align-items: center;
    align-self: flex-start;
    padding-left: ${spacing['2xl']};
  }

  .${SOCIAL_CONTAINER_WRAPPER} {
    display: grid;
    grid-gap: ${spacing.xs};
    grid-template-columns: repeat(3, 1fr);
    margin-left: ${spacing.xs};
  }

  .${SOCIAL_CONTAINER_WRAPPER}[count="4"] {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .${SOCIAL_CONTAINER_WRAPPER} a {
    background-color: ${colors.gray.darker};
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .${SOCIAL_CONTAINER_WRAPPER} a > *,
  .${SOCIAL_CONTAINER_WRAPPER} a path {
    max-height: 20px !important;
    fill: ${colors.white} !important;
  }
`;
const VariationVisualStyles = `
  .${ELEMENT_WRAPPER}[type="${VERSION_TYPE_VISUAL}"] .${BACKGROUND_IMAGE_CONTAINER}  {
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

  .${BACKGROUND_IMAGE_CONTAINER} img {
    width: 100% !important;
    object-fit: cover !important;
    object-position: center;
  }
`;
const LightThemeStyles = `
  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] p, 
  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] a {
    color: ${colors.gray.darker};
  }

  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] .${MAIN_TOP_CONTAINER} {
    background-color: ${colors.gray.lightest};
  }

  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] .${UTILITY_CONTAINER} {
    background-color: ${colors.gray.light};
  }

  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"]  .${SOCIAL_CONTAINER_WRAPPER} a {
    background-color: ${colors.gray.light};
  }

  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] .${SOCIAL_CONTAINER_WRAPPER} a > *,
    .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] .${SOCIAL_CONTAINER_WRAPPER} a path {
    fill: ${colors.black} !important;
  }
`;
export const ComponentStyles = `
  :host {
    display: block !important;
    position: relative !important;
    text-wrap: pretty;
    container: umd-footer / inline-size;
  }

  ${MainContainerStyles}
  ${VariationVisualStyles}
  ${SubLinkStyles}
  ${LightThemeStyles}
`;
const CreateSlot = ({ type }) => {
    const slot = document.createElement('slot');
    slot.setAttribute('name', type);
    return slot;
};
const GetSocialIcon = ({ link }) => {
    const url = link.getAttribute('href') || null;
    if (!url)
        return link;
    if (url.match(/facebook.com/)) {
        link.innerHTML = FACEBOOK_ICON;
    }
    if (url.match(/x.com/)) {
        link.innerHTML = X_ICON;
    }
    if (url.match(/instagram.com/)) {
        link.innerHTML = INSTAGRAM_ICON;
    }
    if (url.match(/youtube.com/)) {
        link.innerHTML = YOUTUBE_ICON;
    }
    if (url.match(/twitter.com/)) {
        link.innerHTML = TWITTER_ICON;
    }
    return link;
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
export const CreateUtility = ({ element }) => {
    const slot = element.querySelector(`[slot="${SLOT_SUB_LINKS_NAME}"]`);
    const container = document.createElement('div');
    const wrapper = document.createElement('div');
    const copyRight = document.createElement('p');
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
    container.classList.add(UTILITY_CONTAINER);
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
const CreateLinksLogoRow = () => {
    const container = document.createElement('div');
};
const CreateSocialRow = ({ element }) => {
    const socialLinks = Array.from(element.querySelectorAll(`[slot="${SLOT_SOCIAL_NAME}"] a`));
    const container = document.createElement('div');
    const linksWrapper = document.createElement('div');
    const headline = document.createElement('p');
    if (socialLinks.length === 0)
        return null;
    socialLinks.forEach((link) => linksWrapper.appendChild(GetSocialIcon({ link })));
    container.classList.add(SOCIAL_CONTAINER);
    linksWrapper.classList.add(SOCIAL_CONTAINER_WRAPPER);
    linksWrapper.setAttribute('count', `${socialLinks.length}`);
    headline.classList.add('umd-interactive-sans-medium');
    headline.innerText = 'Stay Connected';
    container.appendChild(headline);
    container.appendChild(linksWrapper);
    return container;
};
const CreateMainLogoRow = ({ type, theme, element, }) => {
    const container = document.createElement('div');
    const lock = document.createElement('div');
    const wrapper = document.createElement('div');
    container.classList.add(MAIN_TOP_CONTAINER);
    wrapper.classList.add(MAIN_TOP_CONTAINER_WRAPPER);
    lock.classList.add('umd-lock');
    const makeLogo = () => {
        const logoLink = document.createElement('a');
        const logoElmement = document.createElement('div');
        logoLink.classList.add(LOGO_CONTAINER);
        logoLink.setAttribute('href', 'https://umd.edu');
        logoLink.setAttribute('target', '_blank');
        logoLink.setAttribute('rel', 'noopener noreferrer');
        logoElmement.innerHTML =
            theme === THEME_OPTION_LIGHT ? `${LIGHT_LOGO}` : `${DARK_LOGO}`;
        logoLink.appendChild(logoElmement);
        wrapper.appendChild(logoLink);
    };
    const makeContact = () => {
        const contactContainer = document.createElement('div');
        const contactSlot = CreateSlot({ type: SLOT_CONTACT_NAME });
        contactContainer.classList.add(CONTACT_CONTAINER);
        contactContainer.appendChild(contactSlot);
        wrapper.appendChild(contactContainer);
    };
    const makeThirdColumn = () => {
        const includeSocial = type === VERSION_TYPE_SIMPLE;
        if (includeSocial) {
            const socialContainer = CreateSocialRow({ element });
            if (socialContainer)
                wrapper.appendChild(socialContainer);
        }
    };
    makeLogo();
    makeContact();
    makeThirdColumn();
    lock.appendChild(wrapper);
    container.appendChild(lock);
    return container;
};
export const CreateMain = ({ type, theme, element, }) => {
    const container = document.createElement('div');
    const logoRow = CreateMainLogoRow({ theme, type, element });
    container.classList.add(MAIN_CONTAINER);
    if (type === VERSION_TYPE_VISUAL) {
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
    if (type === VERSION_TYPE_MEGA) {
    }
    if (type === VERSION_TYPE_SIMPLE) {
    }
    container.appendChild(logoRow);
    return container;
};
