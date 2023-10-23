import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';
import { ContactContainerStyles, CreateContactContainer } from './contact';
import { SocialContainerStyles, CreateSocialCampaignColumns } from './social';
import { LogoContainerStyles, CreateLogoContainer } from './logo';
import { VERSION_TYPE_VISUAL, VERSION_TYPE_SIMPLE, VERSION_TYPE_MEGA, } from './index';
const SLOT_BACKGROUND_IMAGE_NAME = 'background-image';
export const MAIN_CONTAINER = 'umd-footer-main-container';
export const MAIN_TOP_CONTAINER = 'umd-footer-main-top-container';
export const MAIN_TOP_CONTAINER_WRAPPER = 'umd-footer-main-top-container-wrapper';
export const BACKGROUND_IMAGE_CONTAINER = 'umd-footer-background-image-container';
export const BACKGROUND_IMAGE_GRADIENT = 'umd-footer-background-image-graident-container';
export const MainContainerStyles = `
  .${MAIN_TOP_CONTAINER} {
    background-color: ${colors.black};
    padding: ${spacing['5xl']} 0 ${spacing['2xl']} ;
  }
  
  .${MAIN_TOP_CONTAINER_WRAPPER}  {
    display: flex;
  }
  
  ${LogoContainerStyles}
  ${ContactContainerStyles}
  ${SocialContainerStyles}
`;
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
    container.appendChild(logoRow);
    if (type === VERSION_TYPE_MEGA || type === VERSION_TYPE_VISUAL) {
    }
    return container;
};
const CreateCallToActionContainer = () => {
    const container = document.createElement('div');
    return container;
};
export const CreateMainLogoRow = ({ type, theme, element, }) => {
    const container = document.createElement('div');
    const lock = document.createElement('div');
    const wrapper = document.createElement('div');
    container.classList.add(MAIN_TOP_CONTAINER);
    wrapper.classList.add(MAIN_TOP_CONTAINER_WRAPPER);
    lock.classList.add('umd-lock');
    const makeThirdColumn = () => {
        const includeSocial = type === VERSION_TYPE_SIMPLE;
        if (includeSocial) {
            const socialColumnWrapper = CreateSocialCampaignColumns({ element });
            wrapper.appendChild(socialColumnWrapper);
        }
        else {
            const ctaWrapper = CreateCallToActionContainer();
            wrapper.appendChild(ctaWrapper);
        }
    };
    const logoElement = CreateLogoContainer({ theme });
    const contactElement = CreateContactContainer({ element });
    wrapper.appendChild(logoElement);
    wrapper.appendChild(contactElement);
    makeThirdColumn();
    lock.appendChild(wrapper);
    container.appendChild(lock);
    return container;
};
