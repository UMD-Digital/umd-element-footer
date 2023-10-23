import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';
import { CreateSocialCampaignColumns } from './social';
import { ELEMENT_WRAPPER, THEME_OPTION_LIGHT } from '../variables';

export const ROW_LINKS_CONTAINER = 'umd-footer-main-row-links';

export const RowLinkStyles = `
  .${ROW_LINKS_CONTAINER} {
    padding-bottom: ${spacing['2xl']};
    background-color: ${colors.black};
  }


  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] .${ROW_LINKS_CONTAINER} {
    background-color: ${colors.gray.lightest};
  }
`;

export const CreateRowLinks = ({ element }: { element: HTMLElement }) => {
  const container = document.createElement('div');
  const lock = document.createElement('div');
  const wrapper = document.createElement('div');
  const socialColumnWrapper = CreateSocialCampaignColumns({ element });

  lock.classList.add('umd-lock');
  container.classList.add(ROW_LINKS_CONTAINER);

  lock.appendChild(socialColumnWrapper);
  wrapper.appendChild(lock);
  container.appendChild(wrapper);

  return container;
};
