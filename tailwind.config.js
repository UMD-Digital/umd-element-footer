/** @type {import('tailwindcss').Config} */

import {
  theme,
  plugins,
} from '@universityofmaryland/design-system-configuration';

const content = ['./source/**/*.{css,ts}', './examples/**/*.html'];

export { content, theme, plugins };