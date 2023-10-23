import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';
import { CreateSocialCampaignColumns } from './social';

export const MAIN_BOTTOM_CONTAINER = 'umd-footer-main-bottom-container';

export const LinksRowStyles = `
  .${MAIN_BOTTOM_CONTAINER} {
    padding: ${spacing['2xl']} 0;
    background-color: ${colors.black};
  }
`;

export const CreateLinksLogoRow = ({ element }: { element: HTMLElement }) => {
  const container = document.createElement('div');
  const lock = document.createElement('div');
  const wrapper = document.createElement('div');
  const socialColumnWrapper = CreateSocialCampaignColumns({ element });

  lock.classList.add('umd-lock');
  container.classList.add(MAIN_BOTTOM_CONTAINER);

  lock.appendChild(socialColumnWrapper);
  wrapper.appendChild(lock);
  container.appendChild(wrapper);

  return container;
};
