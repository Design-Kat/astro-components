import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

/* eslint-disable no-unused-vars */
/* import {RuxIcon} from '../../packages/rux-icon/rux-icon.js';
import {RuxAccordion} from '../packages/rux-accordion/rux-accordion.js';
import {RuxButton} from '../packages/rux-button/rux-button.js';
import {RuxClock} from '../packages/rux-clock/rux-clock.js';
import {RuxGlobalStatusBar} from '../packages/rux-global-status-bar/rux-global-status-bar.js';
import {RuxLog} from '../packages/rux-log/rux-log.js';
import {RuxModal} from '../packages/rux-modal/rux-modal.js';
import {RuxNotification} from '../packages/rux-notification/rux-notification.js';
import {RuxPopUpMenu} from '../packages/rux-pop-up-menu/rux-pop-up-menu.js';
import {RuxProgress} from '../packages/rux-progress/rux-progress.js';
import {RuxPushButton} from '../packages/rux-push-button/rux-push-button.js';
import {RuxSegmentedButton} from '../packages/rux-segmented-button/rux-segmented-button.js';
import {RuxSlider} from '../packages/rux-slider/rux-slider.js';
import {RuxSpectrumAnalyzer} from '../packages/rux-spectrum-analyzer/rux-spectrum-analyzer.js';
import {RuxStatus} from '../packages/rux-status/rux-status.js';
import {RuxTimeline} from '../packages/rux-timeline/rux-timeline.js';
import {RuxToggle} from '../packages/rux-toggle/rux-toggle.js';
import {RuxTabs} from '../packages/rux-tabs/rux-tabs.js';
import {RuxTree} from '../packages/rux-tree/rux-tree.js'; */

import {RuxGlobalStatusBar} from '../packages/rux-global-status-bar/rux-global-status-bar.js';
import {RuxClock} from '../packages/rux-clock/rux-clock.js';
import {RuxStatus} from '../packages/rux-status/rux-status.js';
import {RuxIcon} from '../packages/rux-icon/rux-icon.js';
import {RuxTimeline} from '../packages/rux-timeline/rux-timeline.js';

import {LitClock} from '../packages/lit-clock/lit-clock.js';

/* eslint-enable no-unused-vars */

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroComponentViewer extends PolymerElement {
  static get template() {
    return html`
      <link rel="stylesheet" href="/public/css/astro.core.css" />

      <style>
        :host {
          display: block;
          z-index: 100;

          /* box-sizing: border-box; */
        }

        .dark-theme {
          --paneBackgroundColor: var(--colorSecondaryDarken3, rgb(19, 43, 64));
          --paneHeaderBackgroundColor: var(--colorSecondaryDarken3, rgb(19, 43, 64));
          --paneHeaderColor: var(--colorSecondaryDarken3, rgb(19, 43, 64));
        }

        .light-theme {
          --paneBackgroundColor: var(--colorSecondaryDarken2, rgb(19, 43, 64));
          --paneHeaderBackgroundColor: var(--colorSecondaryDarken3, rgb(19, 43, 64));
          --paneHeaderColor: var(--colorWhite, rgb(255, 255, 255));
        }
      </style>

      <rux-global-status-bar theme="dark">
        <rux-clock></rux-clock>
        <lit-clock></lit-clock>
      </rux-global-status-bar>

      <rux-timeline id="listenerTimeline" status="caution" label="Timeline" tracks="[[multiTrack]]"> </rux-timeline>
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();

    /* FAKE TIMELINE */
    const today = new Date();
    this.multiTrack = [
      {
        label: 'LEO',
        test: 'AASDF',
        regions: [
          {
            label: 'NROL-11',
            status: 'caution',
            startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 7, 30, 0),
            endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 8, 30, 0),
          },
          {
            label: 'DSP-1-18 F21',
            status: 'normal',
            startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 10, 0, 0),
            endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 13, 0, 0),
          },
          {
            label: 'NROL-14 (KH-11)',
            status: 'serious',
            startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 15, 0, 0),
            endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 20, 30, 0),
          },
        ],
      },
      {
        label: 'HEO',
        regions: [
          {
            label: 'GPS-IIR-15',
            status: 'caution',
            startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 1, 0, 0),
            endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 4, 30, 0),
          },
          {
            label: 'GPS-IIR-16',
            status: 'normal',
            startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 8, 0, 0),
            endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 12, 0, 0),
          },
          {
            label: 'GPS-IIR-16',
            status: 'serious',
            startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 17, 0, 0),
            endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 20, 30, 0),
          },
        ],
      },
      {
        label: 'GEO',
        regions: [
          {
            label: 'STSS-Demo',
            status: 'caution',
            startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 7, 30, 0),
            endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 8, 30, 0),
          },
          {
            label: 'WGS-3',
            status: 'normal',
            startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 10, 0, 0),
            endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 13, 0, 0),
          },
          {
            label: 'GPS IIF-1',
            status: 'serious',
            startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 15, 0, 0),
            endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 20, 30, 0),
          },
        ],
      },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define('astro-component-viewer', AstroComponentViewer);
