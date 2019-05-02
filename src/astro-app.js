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
    };
  }

  constructor() {
    super();
    this.appName = 'Astro 4.4';
  }

  /*
    Template and styles blocks should appear as the very last code blocks

    IMPORTANT to pass linting if your render method doesn’t have any template
    variables the method must be prefixed with a static keyword
  */
  render() {
    return html`
      <h1>Testing ${this.appName}</h1>
      <rux-clock></rux-clock>
      <rux-status
        label="Test"
        notifications="10"
        sublabel="Small"
        status="critical"
        icon="#altitude"
      ></rux-status>
      <rux-status label="Progress" icon="monitoring:altitude"></rux-status>
      <rux-status status="normal"></rux-status>
    `;
  }
}
customElements.define('astro-app', AstroApp);
