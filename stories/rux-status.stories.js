/* eslint-disable no-unused-vars */
import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, radios } from '@storybook/addon-knobs';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
/* eslint-enable no-unused-vars */

storiesOf('Components|Status', module)
  .addDecorator(withKnobs)
  .add('Simple Status', () => {
    const label = 'Status';
    const options = {
      Critical: 'critical',
      Serious: 'serious',
      Error: 'error',
      Normal: 'normal',
      StandBy: 'standby',
      Off: 'off',
    };
    const defaultValue = 'critical';
    const value = radios(label, options, defaultValue);
    return html`
      <rux-status status=${value}></rux-status>
    `;
  });
