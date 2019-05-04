import { configure, addDecorator, addParameters } from '@storybook/polymer';
import { withA11y } from '@storybook/addon-a11y';
import addons from '@storybook/addons';

import astroTheme from './theme';

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
    addonPanelInRight: true,
  },
  darkMode: {
    dark: { ...astroTheme.dark },
    light: { ...astroTheme.light }
  }
});

let isDark = false;
const channel = addons.getChannel();

addDecorator(withA11y);

addDecorator((storyFn) => {
  const el = storyFn();
  let body = document.getElementsByTagName('body')[0];
  body.classList.remove('light-theme', 'dark-theme');
  body.classList.add(isDark ? 'dark-theme' : 'light-theme');

  channel.on('DARK_MODE', (newIsDark) => {
    isDark = newIsDark;
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(isDark ? 'dark-theme' : 'light-theme');
  });

  return el;
})


function loadStories() {
  require('../stories/index.stories');

  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
