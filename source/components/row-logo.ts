import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';

import { ContactContainerStyles, CreateContactContainer } from './contact';
import { SocialContainerStyles, CreateSocialCampaignColumns } from './social';
import { LogoContainerStyles, CreateLogoContainer } from './logo';
import { VERSION_TYPE_SIMPLE } from './index';

export const MAIN_TOP_CONTAINER = 'umd-footer-main-top-container';
export const MAIN_TOP_CONTAINER_WRAPPER =
  'umd-footer-main-top-container-wrapper';

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

const CreateCallToActionContainer = () => {
  const container = document.createElement('div');

  return container;
};

export const CreateLogoRow = ({
  type,
  theme,
  element,
}: {
  type: string;
  theme: string;
  element: HTMLElement;
}) => {
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
    } else {
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
