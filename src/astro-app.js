import { LitElement, html } from 'lit-element';

/** Class representing a single Clock instance. */
export class LitClock extends LitElement {
  static get properties() {
    return {};
  }

  /*
    Template and styles blocks should appear as the very last code blocks
  */
  static render() {
    return html`
      <h1>test</h1>
    `;
  }
}
customElements.define('lit-clock', LitClock);
