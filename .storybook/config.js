import { configure } from '@storybook/polymer';
import '@storybook/addon-console';
import '../src/css/astro.css';

const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
