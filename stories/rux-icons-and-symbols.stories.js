/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, text, number, select, array, object, withKnobs } from '@storybook/addon-knobs';
import { RuxIcon } from '../src/components/rux-icon/rux-icon.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
import { RuxMonitoringIcon } from '../src/components/rux-monitoring-icon/rux-monitoring-icon.js';

/* eslint-enable no-unused-vars */

storiesOf('Components|Icons & Symbols', module)
  .addDecorator(withKnobs)
  .add(
    'All Icons',
    () => {
      const groupId = 'Options';

      const colors = {
        Primary: '#005a8f',
        Secondary: '#4dacff',
        Tertiary: '#52667a',
        Quaternary: '#ced6e4',
      };

      const colorKnob = select('Color', colors, 'Secondary');

      const icons = [
        'altitude',
        'antenna',
        'antenna-off',
        'antenna-receive',
        'antenna-transmit',
        'equipment',
        'mission',
        'payload',
        'processor',
        'processor-alt',
        'netcom',
        'propulsion-power',
        'thermal',
        'satellite-off',
        'satellite-receive',
        'satellite-transmit',
      ];

      return html`
        <style>
          .icon-container {
            list-style: none;
            margin: 1rem 2rem;
            padding: 0;
            display: flex;
            flex-wrap: wrap;

            justify-content: center;
          }

          .icon-container li {
            display: block;
            margin: 1rem 1.5rem;
          }

          .icon-name {
            margin-top: 0.5rem;
            font-size: 0.75rem;
          }
        </style>
        <div style="margin: 3rem auto; text-align: center;">
          <rux-icon library="icons/astro.svg" icon="altitude" label="processor"></rux-icon>

          <ul class="icon-container">
            ${icons.map(
              icon =>
                html`
                  <li>
                    <rux-icon icon="${icon}" color="${colorKnob}"></rux-icon>
                    <div class="icon-name">${icon}</div>
                  </li>
                `,
            )}
          </ul>
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
    },
  )
  .add(
    'Monitoring Icons',
    () => {
      const groupId = 'Options';
      const icons = [
        'altitude',
        'antenna',
        'antenna-off',
        'antenna-receive',
        'antenna-transmit',
        'equipment',
        'mission',
        'payload',
        'processor',
        'processor-alt',
        'netcom',
        'propulsion-power',
        'thermal',
        'satellite-off',
        'satellite-receive',
        'satellite-transmit',
      ];

      /* Select Status */
      const statusLabel = 'Status';
      const statusOptions = {
        Critical: 'critical',
        Serious: 'serious',
        Caution: 'caution',
        Normal: 'normal',
        Standby: 'standby',
        Off: 'off',
        None: null,
      };
      const defaultStatusValue = 'normal';
      const status = select(statusLabel, statusOptions, defaultStatusValue, groupId);

      /* Select Icons */
      const iconLabel = 'Icon';
      const iconOptions = {
        Altitude: 'altitude',
        Antenna: 'antenna',
        'Antenna (Off)': 'antenna-off',
        'Antenna (Receive)': 'antenna-receive',
        'Antenna (Transmit)': 'antenna-transmit',
        Equipment: 'equipment',
        Mission: 'mission',
        Payload: 'payload',
        Processor: 'processor',
        'Processor (Alt)': 'processor-alt',
        Netcom: 'netcom',
        'Propulsion Power': 'propulsion-power',
        Thermal: 'thermal',
        'Satellite (Off)': 'satellite-off',
        'Satellite (Receive)': 'satellite-receive',
        'Satellite (Transmit)': 'satellite-transmit',
        None: null,
      };
      const defaultIconValue = 'altitude';
      const icon = select(iconLabel, iconOptions, defaultIconValue, groupId);

      /* Icon Labels and Sublabels */
      const labelLabel = 'Label';
      const labelDefaultValue = 'Monitoring';
      const label = text(labelLabel, labelDefaultValue, groupId);

      const sublabelLabel = 'Sub-Label';
      const sublabelDefaultValue = '';
      const sublabel = text(sublabelLabel, sublabelDefaultValue, groupId);

      /* Notifications */
      const notificationLabel = 'Notifications';
      const notificationDefaultValue = null;

      const notifications = number(notificationLabel, notificationDefaultValue, {}, groupId);

      return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
          <rux-monitoring-icon
            icon="${icon}"
            label="${label}"
            sublabel="${sublabel}"
            status="${status}"
            notifications="${notifications}"
          ></rux-monitoring-icon>
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
      notes: {
        // this will also use a .md file, but just trying it out for now
        /* eslint-disable no-useless-escape */
        markdown: `
## When to use a Monitoring Icon
A Toggle describes a state or value. Similar to a checkbox toggles allow users to change a setting between two states such as “On" or "Off.” Unlike a checkbox, a toggle button initiates an action with immediate effect.


### Component Registration
\`\`\`js
import { RuxToggle } from '@astrouxds/rux-toggle/rux-toggle.js';
\`\`\`

### Component Usage
\`\`\`html
<rux-toggle disabled="false" checked="false"></rux-toggle>
\`\`\`

### Component Options
| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| icon | string | yes | n/a | Set which icon  | 
| status | string | yes | off | | 

## Revision History

##### **3.0**

- Breaking change to markup of toggle button

##### **2.1**

- Moved Pushbuttons to its own style sheet

##### **1.4**

- Added \`rux\_\` prefixes and BEM-compatible classes to all \`satcom\_\`-prefixed elements. NOTE: \`satcom\_\` will be removed in a future version
- Removed prefixed linear gradients
- Removed prefixed transition
- Fixed added colon to checked pseudo class (e.g., checked became :checked)
- Alignment issue fixed on toggle button label
- Updated to WCAG colors
- Updated transition speed

        `,
      },
    },
  )
  .add(
    'Percentage Icon',
    () => {
      const groupId = 'Options';

      const labelLabel = 'Label';
      const labelDefaultValue = 'Progress';
      const label = text(labelLabel, labelDefaultValue, groupId);

      const sublabelLabel = 'Sub-Label';
      const sublabelDefaultValue = '';
      const sublabel = text(sublabelLabel, sublabelDefaultValue, groupId);

      const progressLabel = 'Progress';
      const progressDefaultValue = 50;
      const progressOptions = {
        range: true,
        min: 0,
        max: 100,
        step: 1,
      };
      const progress = number(progressLabel, progressDefaultValue, progressOptions, groupId);

      const configLabel = 'Configuration';
      const configDefaultValue = [
        {
          threshold: 17,
          status: 'off',
        },
        {
          threshold: 33,
          status: 'standby',
        },
        {
          threshold: 81,
          status: 'serious',
        },
        {
          threshold: 49,
          status: 'normal',
        },
        {
          threshold: 65,
          status: 'caution',
        },

        {
          threshold: 100,
          status: 'critical',
        },
      ];

      // const config = object(configLabel, configDefaultValue, {}, groupId);

      return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
          <rux-monitoring-icon progress="${progress}" label="${label}" sublabel="${sublabel}"></rux-monitoring-icon>
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
    },
  );
