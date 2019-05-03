import { LitElement, html } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxClock } from './components/rux-clock/rux-clock';
import { RuxStatus } from './components/rux-status/rux-status';
import { OldStatus } from './components/old-status/old-status';
import { RuxStatusCanvas } from './components/rux-status-canvas/rux-status-canvas';
import { RuxStatusBit } from './components/rux-status-bit/rux-status-bit';
import { RuxMonitoringIcon } from './components/rux-monitoring-icon/rux-monitoring-icon';

/* eslint-enable no-unused-vars */

/** Class representing a single Clock instance. */
export class AstroApp extends LitElement {
  static get properties() {
    return {
      appName: {
        type: String,
      },
      statuses: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.STATUS = ['off', 'standby', 'normal', 'caution', 'serious', 'critical'];
    this.statuses = [];

    /* for (let i = 0; i < 150; i += 1) {
      this.statuses.push(this.STATUS[Math.floor(Math.random() * this.STATUS.length)]);
    } */

    setInterval(() => {
      this.statuses = [];
      for (let i = 0; i < 150; i += 1) {
        this.statuses.push(this.STATUS[Math.floor(Math.random() * this.STATUS.length)]);
      }
    }, 100);
  }

  symbolUpdate() {
    console.log('statuses', this.statuses);
  }

  render() {
    return html`
      ${this.statuses.map(
        status =>
          html`
            <rux-status-bit status="${status}"></rux-status-bit>
          `,
      )}
    `;
  }
}
customElements.define('astro-app', AstroApp);
