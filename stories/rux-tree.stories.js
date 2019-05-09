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
          },
          {
            label: 'Equipment 2375',
            status: 'serious',
            children: [
              {
                label: 'Equipment 1247',

                children: [
                  {
                    label: 'Equipment 1247',
                    status: 'critical',
                    children: [
                      {
                        label: 'Equipment 1247',
                        status: 'critical',
                      },
                      {
                        label: 'Equipment 2375',

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
                      },
                    ],
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
      { label: 'Second' },
      {
        label: 'Third',
        status: 'critical',
      },
    ];

    return html`
      <style>
        .container {
          display: flex;
          justify-content: center;
        }

        rux-tree {
          width: 18rem;
          margin: 1rem;
        }
      </style>
      <div class="container">
        <rux-tree .treeData="${treeData}" hasStatus></rux-tree>
        <rux-tree .treeData="${treeData}"></rux-tree>
      </div>
    `;
  });
