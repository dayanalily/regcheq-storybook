import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#395CE0',

  // UI
  appBg: 'white',
  appContentBg: '#f2f2f2',
  appBorderColor: 'grey',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'rgba(255,255,255,0.8)',
  barBg: '#395CE0',

  // Form colors
  inputBg: 'white',
  inputBorder: '#4B9611',
  inputTextColor: 'black',
  inputBorderRadius: 2,

  brandTitle: 'Regcheq',
  brandImage: 'https://regcheq.com/wp-content/uploads/2023/07/Regcheq-Software-the-compliance-Logo-1.png',
  brandTarget: '_self',
});