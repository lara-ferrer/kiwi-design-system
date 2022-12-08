import { create } from '@storybook/theming';
import logo from './assets/kiwi-logo.png';

export default create({
  base: 'light',

  colorPrimary: '#7DDE80',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#F6F2CF',
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
  barTextColor: '#42736C',
  barSelectedColor: '#F97D23',
  barBg: '#FFE9A4',

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