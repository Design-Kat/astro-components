import { LitElement, html } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxClock } from './components/rux-clock/rux-clock';
import { RuxStatus } from './components/rux-status/rux-status';
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
    };
  }

  constructor() {
    super();
    this.appName = 'Astro 4.4';

    this._negative = -50;
    this._progress = 0;
    this._regress = 100;

    this.monitoringConfig = [
      {
        threshold: 100,
        status: 'normal',
      },
      {
        threshold: 50,
        status: 'critical',
      },
    ];

    setInterval(() => {
      const _increment = Math.floor(Math.random() * 5);
      const _decrement = _increment * -1;

      if (this._progress + _increment > 100) {
        this._progress = _increment;
      } else {
        this._progress += _increment;
      }

      if (this._negative + _increment > 50) {
        this._negative = -50;
      } else {
        this._negative += _increment;
      }

      if (this._regress + _decrement < 0) {
        this._regress = 100;
      } else {
        this._regress += _decrement;
      }
    }, 500);
  }

  /*
  this.negativeConfig = [
      {
        threshold: -50,
        status: 'critical',
      },
      {
        threshold: 25,
        status: 'normal',
      },
      {
        threshold: 0,
        status: 'standby',
      },
    ];
    */

  /*
    Template and styles blocks should appear as the very last code blocks

    IMPORTANT to pass linting if your render method doesn’t have any template
    variables the method must be prefixed with a static keyword
  */
  render() {
    return html`
      <style>
        rux-monitoring-icon {
          margin: 1rem;
        }
      </style>

      <rux-monitoring-icon label="Ascending" progress="${this._progress}"></rux-monitoring-icon>

      <rux-monitoring-icon
        label="Descending"
        progress="${this._regress}"
        .range="${this.monitoringConfig}"
      ></rux-monitoring-icon>

      <br />

      <rux-clock></rux-clock>
      <rux-monitoring-icon
        label="Test Making this Longer"
        notifications="10"
        sublabel="Small"
        status="critical"
        icon="altitude"
      ></rux-monitoring-icon>
      <rux-monitoring-icon
        label="A"
        status="critical"
        icon="processor"
        notifications="100000"
      ></rux-monitoring-icon>
      <rux-monitoring-icon label="B" status="serious" icon="thermal"></rux-monitoring-icon>
      <rux-monitoring-icon label="Medium" status="caution" icon="mission"></rux-monitoring-icon>
      <rux-monitoring-icon label="Short" status="normal" icon="antenna"></rux-monitoring-icon>
      <rux-monitoring-icon
        label="Long Text Goes Here"
        status="standby"
        icon="satellite-off"
      ></rux-monitoring-icon>
      <rux-monitoring-icon label="Label" status="off" icon="processor-alt"></rux-monitoring-icon>

      <!-- <rux-status status="off"></rux-status>
      <rux-status status="standby"></rux-status>
      <rux-status status="normal"></rux-status>
      <rux-status status="caution"></rux-status>
      <rux-status status="serious"></rux-status>
      <rux-status status="critical"></rux-status> -->
    `;
  }
}
customElements.define('astro-app', AstroApp);
