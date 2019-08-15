import { LitElement, html } from 'lit-element';
// eslint-disable-next-line no-unused-vars
import { RuxIcon } from '../rux-icon/rux-icon.js';
export class RuxInput extends LitElement {
  static get properties() {
    return {
      label: {
        type: String,
      },
      orientation: {
        type: String,
        reflect: true,
      },
      placeholder: {
        type: String,
      },
      size: {
        type: String,
      },
      hideLabel: {
        type: Boolean,
      },
      required: {
        type: Boolean,
        reflect: true,
      },
    };
  }
  constructor() {
    super();
    this.orientation = 'vertical';
    this.size = '';
    this.errorMessage = '';
    this.hideLabel = false;
    this.required = false;

    console.log(this.required);
  }

  firstUpdated() {
    console.log(this.required);

    // get the element
    if (this.required) {
      this.querySelector('input').setAttribute('required', '');
    }
  }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;

          --padding: 0.5rem;
          --paddingLeft: 0.5rem;
          --paddingRight: 0.5rem;
          --paddingTop: 0.25rem;
          --paddingBottom: 0.25rem;

          font-family: var(--fontFamilty, 'Open Sans', sans-serif);
          font-size: var(--fontSize, 1rem);
          color: var(--fontColor, rgb(255, 255, 255));
        }

        :host([hideLabel]) ::slotted(label) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host([orientation='horizontal']) {
          flex-direction: row;
        }

        *[hidden] {
          display: none !important;
        }

        ::slotted(label) {
          color: red;
          display: flex;
          order: 1;
          margin: 0 0 0.15rem 0;

          align-items: center;

          color: var(--fontColor, rgb(255, 255, 255));
          user-select: none;
        }

        ::slotted(input) {
          box-sizing: border-box;
          order: 2;

          height: 2.125rem;

          padding: 0 1rem;

          border: 1px solid var(--inputBorderColor, transparent);
          border-radius: var(--defaultBorderRadius, 3px);

          font-size: var(--fontSize, 1rem);
          color: var(--inputTextColor, rgb(0, 0, 0));
        }

        ::slotted(input[type='search']::-webkit-search-decoration) {
          -webkit-appearance: textfield;
        }

        ::slotted(input[type='search']) {
          -webkit-appearance: none;
          -moz-appearance: none;
          padding-left: 1.75rem;

          background: no-repeat center left 0.3rem/1.1em
            url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 13 13'%3E%3Cg fill='%230973C1' fill-rule='evenodd'%3E%3Cpath d='M9 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-4.707.293l1.414 1.414-4 4-1.414-1.414'/%3E%3Cpath d='M6.33 5.67l1 1-3.66 3.66-1-1'/%3E%3C/g%3E%3C/svg%3E")
            var(--inputBackgroundColor, rgb(255, 255, 255));
        }

        :host([size='large']) ::slotted(input[type='search']) {
          padding: 0.5rem 0 0.5rem 2rem;
        }

        :host([size='small']) ::slotted(input[type='search']) {
          font-size: 0.875rem;
          height: 1.625rem;
          padding-left: 1.625rem;
          padding-right: 0.5rem;
        }

        /* ::slotted(*)::-webkit-search-cancel-button { */
        ::slotted(input)::after {
          display: block;
          content: 'saf';
          position: relative;
          border: 1px solid green !important;
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%3E%0A%20%20%3Cpath%20fill%3D%22rgb(0%2C%2090%2C%20143)%22%20fill-rule%3D%22evenodd%22%20d%3D%22M69.028%2064l22.628%2022.627-5.029%205.029L64%2069.028%2041.373%2091.656l-5.029-5.029L58.972%2064%2036.344%2041.373l5.029-5.029L64%2058.972l22.627-22.628%205.029%205.029L69.028%2064z%22%2F%3E%0A%3C%2Fsvg%3E');
        }

        ::slotted(*)::placeholder {
          color: green !important;
        }

        ::slotted(input[required]) {
          border: 1px solid red;
        }

        :host([required]) ::slotted(label)::after {
          content: '*';
          font-weight: bold;
          margin: 0 0.3rem;
        }
        /* ::slotted(input[type='search']::-webkit-search-cancel-button) {
          position: relative;

          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%3E%0A%20%20%3Cpath%20fill%3D%22rgb(0%2C%2090%2C%20143)%22%20fill-rule%3D%22evenodd%22%20d%3D%22M69.028%2064l22.628%2022.627-5.029%205.029L64%2069.028%2041.373%2091.656l-5.029-5.029L58.972%2064%2036.344%2041.373l5.029-5.029L64%2058.972l22.627-22.628%205.029%205.029L69.028%2064z%22%2F%3E%0A%3C%2Fsvg%3E');
        } */

        output {
          display: none;
          order: 3;
        }
      </style>

      <slot></slot>

      <output class="error">Error Message</output>
    `;
  }
}
customElements.define('rux-input', RuxInput);
