import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';
import { ELEMENT_WRAPPER, THEME_OPTION_LIGHT } from './index';
const SLOT_UTILITY_LINKS_NAME = 'utility-links';
export const UTILITY_CONTAINER = 'umd-footer-utility-container';
export const UtilityContainerStyles = `
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

  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] .${UTILITY_CONTAINER} {
    background-color: ${colors.gray.light};
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
const createSubLink = ({ title, url }) => {
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.innerText = title;
    link.classList.add('umd-sans-min');
    return link;
};
export const CreateUtility = ({ element }) => {
    const slot = element.querySelector(`[slot="${SLOT_UTILITY_LINKS_NAME}"]`);
    const container = document.createElement('div');
    const wrapper = document.createElement('div');
    const copyRight = document.createElement('p');
    container.classList.add(UTILITY_CONTAINER);
    wrapper.classList.add('umd-lock');
    if (slot) {
        const slottedLinks = Array.from(slot.querySelectorAll(`a`));
        slottedLinks.forEach((link) => link.classList.add('umd-sans-min'));
        slottedLinks.forEach((link) => wrapper.appendChild(link));
    }
    requiredSubLinks.forEach((link) => wrapper.appendChild(createSubLink(link)));
    copyRight.classList.add('umd-sans-min');
    copyRight.innerHTML = `©${new Date().getFullYear()} UNIVERSITY OF MARYLAND`;
    wrapper.appendChild(copyRight);
    container.appendChild(wrapper);
    return container;
};
