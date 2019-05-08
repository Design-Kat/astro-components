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
        label: 'Pre',
        status: 'off',
      },
      {
        label: 'First',
        status: 'normal',
        children: [
          {
            label: 'Equipment 1247',
            status: 'critical',
          },
          {
            label: 'Equipment 2375',
            status: 'serious',
            children: [
              {
                label: 'Equipment 1247',
                status: 'critical',
              },
              {
                label: 'Equipment 2375',
                status: 'serious',
              },
              {
                label: 'Equipment 2375',
              },
            ],
          },
          {
            label: 'Equipment 2375',
            status: 'serious',
          },
        ],
      },
      { label: 'Second', status: 'critical' },
      {
        label: 'Third',
        status: 'null',
      },
    ];

    return html`
      <rux-tree .treeData="${treeData}"></rux-tree>
    `;
  });
