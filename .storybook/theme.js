import { create } from '@storybook/theming';
import logo from './assets/logo-white.png';

export default create({
  base: 'light',

  colorPrimary: '#7DDE80',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#7DDE80',
  appContentBg: '#FFFFFF',
  appBorderColor: '#000000',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#525252',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#F9F9F9',
  barSelectedColor: '#FFFFFF',
  barBg: '#7DDE80',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#FFFFFF',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,

  brandTitle: 'Kiwi Design System',
  brandUrl: 'https://example.com',
  brandImage: logo,
  brandTarget: '_self',
});