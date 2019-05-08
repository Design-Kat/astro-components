/* eslint-disable no-unused-vars */
import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RuxTree } from '../src/components/rux-tree/rux-tree.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
/* eslint-enable no-unused-vars */

storiesOf('Components|Tree', module)
  .addDecorator(withKnobs)
  .add('Tree', () => {
    const treeData = [
      {
        label: 'Comms',
        status: 'normal',
        children: [
          {
            label: 'Component A',
            children: [
              {
                id: 'E1247',
                label: 'Equipment 1247',
                status: 'critical',
              },
              {
                id: 'E2375',
                label: 'Equipment 2375',
                status: 'serious',
              },
              {
                id: 'E3267',
                label: 'Equipment 3267',
                status: 'critical',
              },
              {
                id: 'E6757',
                label: 'Equipment 6757',
                status: 'serious',
              },
            ],
          },
        ],
      },
      { label: 'Sat', status: 'critical' },
    ];

    return html`
      <rux-tree .treeData="${treeData}"></rux-tree>
    `;
  });
