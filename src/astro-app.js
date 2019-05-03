import { LitElement, html } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxClock } from './components/rux-clock/rux-clock';
import { RuxStatus } from './components/rux-status/rux-status';

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
        rux-status {
          margin: 1rem;
        }
      </style>

      <h1>Testing ${this.appName}</h1>
      <rux-clock></rux-clock>
      <rux-status
        label="Test Making this Longer"
        notifications="10"
        sublabel="Small"
        status="critical"
        icon="altitude"
      ></rux-status>
      <rux-status label="A" status="critical" icon="processor" notifications="100000"></rux-status>
      <rux-status label="B" status="serious" icon="thermal"></rux-status>
      <rux-status label="Medium" status="caution" icon="mission"></rux-status>
      <rux-status label="Short" status="normal" icon="antenna"></rux-status>
      <rux-status label="Long Text Goes Here" status="standby" icon="satellite-off"></rux-status>
      <rux-status label="Label" status="off" icon="processor-alt"></rux-status>

      <br />
      <rux-status label="Progress" icon="progress" progress="${this._progress}"></rux-status>
      <rux-status status="normal"></rux-status>
    `;
  }
}
customElements.define('astro-app', AstroApp);
