import { LitElement, html } from 'lit-element';

export class RuxStatusBit extends LitElement {
  static get properties() {
    return {
      status: {
        type: String,
      },
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          padding: 0;

          font-size: 1rem;

          line-height: 1;
          padding: 0;

          text-align: center;

          height: 1rem;
          width: 1rem;

          margin: 0.125rem;
          background-size: 118px 16px;
          background-repeat: none;
          background-image: url('/icons/sprite.png');

          outline: 1px solid red;
          /* background-image: url(data:image/png;base64,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); */
        }

        *[hidden] {
          display: none !important;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        :host([status='off']) {
          background-position-x: -92px;
        }

        :host([status='standby']) {
          /* background-image: url('/icons/standby.png'); */
          background-position-x: -76px;
        }

        :host([status='normal']) {
          /* background-image: url('/icons/normal.png'); */
          background-position-x: -60px;
        }

        :host([status='caution']) {
          /* background-image: url('/icons/caution.png'); */
          background-position-x: -44px;
        }

        :host([status='serious']) {
          /* background-image: url('/icons/serious.png'); */
          background-position-x: -28px;
        }

        :host([status='critical']) {
          /* background-image: url('/icons/critical.png'); */
          background-position-x: -12px;
        }
      </style>

      <!-- Use Advanced Status Template is any property is set //-->
      <div class="rux-status rux-status--${this.status}"></div>
    `;
  }
}

customElements.define('rux-status-bit', RuxStatusBit);
