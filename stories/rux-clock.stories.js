/* eslint-disable no-unused-vars */
import { storiesOf, html } from '@open-wc/demoing-storybook';
import { RuxClock } from '../src/components/rux-clock/rux-clock.js';
/* eslint-enable no-unused-vars */

storiesOf('Components|Clock', module).add(
  'Clock',
  () => html`
    <rux-clock></rux-clock>
  `,
);
