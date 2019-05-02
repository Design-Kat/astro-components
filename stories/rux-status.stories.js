/* eslint-disable no-unused-vars */
import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
/* eslint-enable no-unused-vars */

storiesOf('Components|Status', module)
  .addDecorator(withKnobs)
  .add(
    'Monitoring Icons',
    () => html`
      <rux-status label="Test" icon="monitoring:altitude"></rux-status>
      <rux-status label="Progress"></rux-status>
    `,
    {
      notes:
        'A Toggle describes a state or value. Similar to a checkbox toggles allow users to change a setting between two states such as “On" or "Off.” Unlike a checkbox, a toggle button initiates an action with immediate effect.',
    },
  );
