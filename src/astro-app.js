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

    this._progress = 0;

    this.monitoringConfig = {};

    setInterval(() => {
      const _increment = Math.floor(Math.random() * 5);

      if (this._progress + _increment > 100) {
        this._progress = _increment;
      } else {
        this._progress += _increment;
      }
    }, 500);
  }

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

      <h1>Testing ${this.appName}</h1>
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

      <br />
      <rux-monitoring-icon
        label="Progress"
        icon="progress"
        progress="${this._progress}"
      ></rux-monitoring-icon>
      <rux-monitoring-icon status="normal"></rux-monitoring-icon>
    `;
  }
}
customElements.define('astro-app', AstroApp);
