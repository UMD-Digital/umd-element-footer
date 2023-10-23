import { UtilityContainerStyles } from './utility';
import { RowLogoStyles } from './row-logo';
import { RowLinkStyles } from './row-links';
import { ElementStyles, VariationVisualStyles } from './main';

export const BREAKPOINTS = {
  small: 280,
};

export const ComponentStyles = `
  :host {
    display: block !important;
    position: relative !important;
    text-wrap: pretty;
    container: umd-footer / inline-size;
  }

  ${ElementStyles}
  ${RowLogoStyles}
  ${RowLinkStyles}
  ${VariationVisualStyles}
  ${UtilityContainerStyles}
`;
