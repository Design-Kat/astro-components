import { LitElement, html } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxClock } from './components/rux-clock/rux-clock';
import { RuxStatus } from './components/rux-status/rux-status';
import { RuxTree } from './components/rux-tree/rux-tree';
import { RuxMonitoringIcon } from './components/rux-monitoring-icon/rux-monitoring-icon';

/* eslint-enable no-unused-vars */

/** Class representing a single Clock instance. */
export class AstroApp extends LitElement {
  static get properties() {
    return {
      appName: {
        type: String,
      },
      _progress: {
        type: Number,
      },
      treeData: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.appName = 'Astro 4.4';

    this._negative = -50;
    this._progress = 0;
    this._regress = 100;

    this.treeData = [
      {
        label: 'Pre',
        status: 'off',
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
  }

  render() {
    return html`
      <style>
        rux-monitoring-icon {
          margin: 1rem;
        }
      </style>

      <rux-tree .treeData="${this.treeData}"></rux-tree>
    `;
  }
}
customElements.define('astro-app', AstroApp);
