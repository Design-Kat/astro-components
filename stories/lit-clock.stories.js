/* eslint-disable no-unused-vars */
import { storiesOf, html } from '@open-wc/demoing-storybook';
import { LitClock } from '../src/components/lit-clock/lit-clock.js';
/* eslint-enable no-unused-vars */

storiesOf('Components|Clock', module).add(
  'LitClock',
  () => html`
    <lit-clock></lit-clock>
  `,
);
