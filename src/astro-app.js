import { LitElement, html } from 'lit-element';

export class AstroApp extends LitElement {
  render = () => html`
    <rux-global-status-bar theme="dark">
      <lit-clock></lit-clock>
    </rux-global-status-bar>
  `;

  static get properties() {
    return {};
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

customElements.define('astro-app', AstroApp);
