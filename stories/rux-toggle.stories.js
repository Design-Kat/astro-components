/* eslint-disable no-unused-vars */
import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RuxToggle } from '../src/components/rux-toggle/rux-toggle.js';
/* eslint-enable no-unused-vars */

storiesOf('Components|Toggle', module)
  .addDecorator(withKnobs)
  .add(
    'Toggle',
    () => {
      const disabled = boolean('Disabled', false);
      const checked = boolean('Checked', false);
      return html`
        <rux-toggle .disabled=${disabled} .checked=${checked}></rux-toggle>
      `;
    },
    {
      notes:
        'A Toggle describes a state or value. Similar to a checkbox toggles allow users to change a setting between two states such as “On" or "Off.” Unlike a checkbox, a toggle button initiates an action with immediate effect.',
    },
  );
