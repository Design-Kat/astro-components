import { LitElement, html } from 'lit-element';
import { directive } from 'lit-html';

const getIcon = directive((library, icon) => (part) => {
  try {
    if (library) {
      part.setValue(`${library}#${icon}`);
    } else {
      part.setValue(`${icon}`);
    }
  } catch (error) {
    throw error;
  }
});

export class RuxIcon extends LitElement {
  static get properties() {
    return {
      icon: {
        type: String,
      },
      size: {
        type: String,
      },
      color: {
        type: String,
      },
      label: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    /* TODO: a non-presumptive way to assign a better default label if the user doesn’t provide one */
    this.label = 'icon';
  }

  firstUpdated() {
    this.style.setProperty('--iconDefaultColor', this.color);
  }

  updated(changedProperties) {
    if (changedProperties.get('color')) {
      this.style.setProperty('--iconDefaultColor', this.color);
    }
  }

  render() {
    return html`
      <style>
        :host {
          --iconDefaultSize: 2.7rem;
          --iconDefaultColor: rgb(77, 172, 255);

          display: inline-block;

          height: var(--iconDefaultSize, 2.75rem);
          width: var(--iconDefaultSize, 2.75rem);
        }

        svg,
        svg > use {
          height: 100%;
          width: auto;
          fill: var(--iconDefaultColor, rgb(77, 172, 255));
        }

        :host([size='extra-small']) {
          height: 1rem;
          width: 1rem;
        }

        :host([size='small']) {
          height: 2rem;
          width: 2rem;
        }

        :host([size='large']) {
          height: 4rem;
          width: 4rem;
        }
      </style>

      <span id="rux-icon" title="${this.label}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <use
            style="display: ${this.icon === 'progress' ? 'none' : 'block'}"
            href="${getIcon(this.library, this.icon)}"
          ></use>
          <g
            id="progress"
            style="display: ${this.icon === 'progress' ? 'block' : 'none'}"
          >
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="transparent"
              stroke="rgba(40, 63, 88, 1)"
              stroke-width="10"
              transform="rotate(-90 61 60)"
            />
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="transparent"
              stroke-dasharray="351.8583772 351.8583772"
              stroke-dashoffset="var(--monitoring-progress, 1)"
              stroke-linecap="round"
              stroke-width="10"
              class="progress-ring__circle"
              transform="rotate(-90 61 60)"
            />
          </g>
        </svg>
      </span>
    `;
  }
}
customElements.define('rux-icon', RuxIcon);
