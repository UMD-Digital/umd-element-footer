import { colors } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/colors.js';
import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';
import { ELEMENT_WRAPPER, THEME_OPTION_LIGHT } from '../variables';
import {
  CAMPAIGN_LOGO,
  FACEBOOK_ICON,
  X_ICON,
  INSTAGRAM_ICON,
  YOUTUBE_ICON,
  TWITTER_ICON,
} from '../svgs';

const SLOT_SOCIAL_NAME = 'social-links';
export const SOCIAL_CONTAINER = 'umd-footer-social-container';
export const SOCIAL_CONTAINER_WRAPPER = 'umd-footer-social-container_wrapper';
export const SOCIAL_COLUMN_WRAPPER = 'umd-footer-social-column_wrapper';

export const SocialContainerStyles = `
  .${SOCIAL_CONTAINER} {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: flex-start;
    padding-left: ${spacing['2xl']};
  }
  
  .${SOCIAL_COLUMN_WRAPPER} > a {
    display: flex;
    justify-content: flex-end;
    margin-top: ${spacing.lg};
    max-width: 250px;
    margin-left: auto;
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

  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"]  .${SOCIAL_CONTAINER_WRAPPER} a {
    background-color: ${colors.gray.light};
  }

  .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] .${SOCIAL_CONTAINER_WRAPPER} a > *,
    .${ELEMENT_WRAPPER}[theme="${THEME_OPTION_LIGHT}"] .${SOCIAL_CONTAINER_WRAPPER} a path {
    fill: ${colors.black} !important;
  }
`;

// Enforce known social link types logos
const GetSocialIcon = ({ link }: { link: HTMLAnchorElement }) => {
  const url = link.getAttribute('href') || null;

  if (!url) return link;

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

const CreateSocialRow = ({ element }: { element: HTMLElement }) => {
  const socialLinks = Array.from(
    element.querySelectorAll(`[slot="${SLOT_SOCIAL_NAME}"] a`),
  ) as HTMLAnchorElement[];
  const container = document.createElement('div');
  const linksWrapper = document.createElement('div');
  const headline = document.createElement('p');

  // Enforce university default links if none are provided
  if (socialLinks.length === 0) {
    const socialLink = ({ url, label }: { label: string; url: string }) => {
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute('aria-label', label);
      return link;
    };

    socialLinks.push(
      socialLink({
        url: 'https://www.youtube.com/user/UMD2101',
        label: 'Link to the youtube channel for the University of Maryland',
      }),
    );

    socialLinks.push(
      socialLink({
        url: 'https://www.facebook.com/UnivofMaryland',
        label: 'Link to the facebook page for the University of Maryland',
      }),
    );

    socialLinks.push(
      socialLink({
        url: 'https://www.instagram.com/univofmaryland',
        label: 'Link to the instagram page for the University of Maryland',
      }),
    );
  }

  socialLinks.forEach((link) =>
    linksWrapper.appendChild(GetSocialIcon({ link })),
  );

  container.classList.add(SOCIAL_CONTAINER);
  linksWrapper.classList.add(SOCIAL_CONTAINER_WRAPPER);
  linksWrapper.setAttribute('count', `${socialLinks.length}`);

  headline.classList.add('umd-interactive-sans-medium');
  headline.innerText = 'Stay Connected';

  container.appendChild(headline);
  container.appendChild(linksWrapper);

  return container;
};

const CreateCampaignRow = () => {
  const container = document.createElement('a');
  container.href = 'https://fearlesslyforward.umd.edu';
  container.setAttribute('target', '_blank');
  container.setAttribute('rel', 'noopener noreferrer');

  container.innerHTML = CAMPAIGN_LOGO;

  return container;
};

export const CreateSocialCampaignColumns = ({
  element,
}: {
  element: HTMLElement;
}) => {
  const socialColumnWrapper = document.createElement('div');
  const socialContainer = CreateSocialRow({ element });
  const campaignContainer = CreateCampaignRow();

  socialColumnWrapper.classList.add(SOCIAL_COLUMN_WRAPPER);

  socialColumnWrapper.appendChild(socialContainer);
  socialColumnWrapper.appendChild(campaignContainer);

  return socialColumnWrapper;
};
