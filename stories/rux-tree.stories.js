/* eslint-disable no-unused-vars */
import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import { RuxTree } from '../src/components/rux-tree/rux-tree.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
/* eslint-enable no-unused-vars */

storiesOf('Components|Tree', module)
  .addDecorator(withKnobs)
  .add('Tree', () => {
    const groupId = 'tree';
    const rightTreeLabel = 'Right Tree';
    const treeDataNoStatus = [
      {
        label: 'Tree Item 1',
        children: [
          { label: 'Tree Item 1.1' },
          { label: 'Tree Item 1.2' },
          {
            label: 'Tree Item 1.3',
            children: [{ label: 'Tree Item 1.3.1' }, { label: 'Tree Item 1.3.2' }],
          },
        ],
      },
      {
        label: 'Tree Item 2',
      },
      {
        label: 'Tree Item 3',
      },
    ];
    const rightTree = object(rightTreeLabel, treeDataNoStatus, groupId);

    const treeData = [
      {
        label: 'Pre',
        status: 'off',
        selected: true,
      },
      {
        label: 'New 2',
        status: 'normal',
      },
      {
        label: 'New',
        status: 'normal',
      },
      {
        label: 'First',
        status: 'normal',
        children: [
          {
            label: 'Equipment 1247',
            status: 'serious',
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
        <rux-tree .treeData="${treeData}"></rux-tree>
        <rux-tree .treeData="${rightTree}"></rux-tree>
      </div>
    `;
  });
