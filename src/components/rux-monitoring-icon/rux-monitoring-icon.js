import { LitElement, html } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxIcon } from '../rux-icon/rux-icon.js';
import { RuxStatus } from '../rux-status/rux-status.js';
/* eslint-enable no-unused-vars */

export class RuxMonitoringIcon extends LitElement {
  static get properties() {
    return {
      status: {
        type: String,
      },
      label: {
        type: String,
      },
      sublabel: {
        type: String,
      },
      notifications: {
        type: Number,
      },
      icon: {
        type: String,
      },
      progress: {
        type: Number,
      },
      config: {
        type: Object,
      },
    };
  }

  constructor() {
    super();

    this._circumference = 56 * 2 * Math.PI;

    this.status = 'null';
    this.sort = 'ascending';
    this.range = [
      {
        threshold: 17,
        status: 'off',
      },
      {
        threshold: 33,
        status: 'standby',
      },
      {
        threshold: 49,
        status: 'normal',
      },
      {
        threshold: 65,
        status: 'caution',
      },
      {
        threshold: 81,
        status: 'serious',
      },
      {
        threshold: 100,
        status: 'critical',
      },
    ];
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          padding: 0;

          --monitoring-progress: 0;
        }

        *[hidden] {
          display: none !important;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        .rux-advanced-status {
          position: relative;
          margin: 0;
          line-height: 0;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .rux-advanced-status__icon-group {
          position: relative;
          margin: 0 auto;
          display: flex;

          width: 4.5rem;

          /*
            Faux icon grid. Usefull for gross alignment
          border: 1px solid red;

          background-image: linear-gradient(
            to right,
            rgba(255, 0, 0, 0) 0,
            rgba(255, 0, 0, 0) 49%,
            rgba(0, 255, 0, 1) 50%,
            rgba(0, 255, 0, 1) 51%,
            rgba(0, 255, 0, 0) 52%,
            rgba(0, 255, 0, 0) 100%
          );
           */
        }

        .rux-advanced-status__status-icon {
          margin: 0 2px 0 auto;
          order: 1;
        }

        .rux-advanced-status__icon {
          order: 2;
          margin: 0 auto;
        }

        rux-status {
          position: absolute;
          top: -0.4rem;
          left: -0.4rem;
          margin: 0;
        }

        .rux-advanced-status__badge {
          display: block;
          z-index: 2;
          order: 3;

          position: absolute;
          bottom: -0.75rem;
          right: -0.4rem;

          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 3px;
          padding: 0.65rem 0.25rem;
          font-size: 0.775rem;
          text-align: center;
          color: #fff;
          background-color: #000;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .rux-advanced-status__label {
          text-align: center;
          color: var(--fontColor, #fff);
          font-size: 0.875rem;
          line-height: 1.2;
          margin-top: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          max-width: 6.25rem;
          white-space: nowrap;
        }

        .rux-advanced-status__label__sub-label {
          font-size: 0.65em;
          color: rgba(255, 255, 255, 0.6);
          display: block;
        }

        .rux-status--off {
          stroke: var(--colorOff, rgb(158, 167, 173));
          fill: var(--colorOff, rgb(158, 167, 173));
        }

        .rux-status--standby {
          stroke: var(--colorStandby, rgb(45, 204, 255));
          fill: var(--colorStandby, rgb(45, 204, 255));
        }

        .rux-status--normal,
        .rux-status--ok {
          stroke: var(--colorNormal, rgb(86, 240, 0));
          fill: var(--colorNormal, rgb(86, 240, 0));
        }

        .rux-status--caution {
          stroke: var(--colorCaution, rgb(252, 232, 58));
          fill: var(--colorCaution, rgb(252, 232, 58));
        }

        .rux-status--error,
        .rux-status--serious {
          stroke: var(--colorSerious, rgb(255, 179, 0));
          fill: var(--colorSerious, rgb(255, 179, 0));
        }

        .rux-status--emergency,
        .rux-status--alert,
        .rux-status--critical {
          stroke: var(--colorCritical, rgb(255, 56, 56));
          fill: var(--colorCritical, rgb(255, 56, 56));
        }

        [data-progress] rux-icon {
          transition: stroke-dashoffset 0.367s, stroke 0.367s;
          transform-origin: 50% 50%;
        }

        .rux-advanced-status__progress {
          font-family: var(--fontFamilyMono);
          font-size: 0.8rem;
          align-self: center;

          letter-spacing: -1px;
          text-align: center;
        }
      </style>

      <div
        id="rux-advanced-status__icon"
        class="rux-advanced-status rux-status--${this.status}"
        title="${this.notifications} ${this.label} ${this.sublabel}"
        ?data-progress="${this.progress}"
      >
        <div class="rux-advanced-status__icon-group">
          <rux-status status="${this.status}"></rux-status>

          <rux-icon
            icon="${this.icon}"
            class="rux-advanced-status__icon progress rux-status--${this.status}"
          >
            <div class="rux-advanced-status__progress" ?hidden="${!this.progress}">
              ${this.progress}%
            </div>
          </rux-icon>

          <div class="rux-advanced-status__badge" ?hidden="${!this.notifications}">
            ${this._filterNotifications()}
          </div>
        </div>

        <div class="rux-advanced-status__label">
          ${this.label}
          <span class="rux-advanced-status__label__sub-label" ?hidden="${!this.sublabel}"
            >${this.sublabel}</span
          >
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.get('progress')) {
      this.status = this.range.find(range => this.progress < range.threshold).status;

      const graphProgress = this._circumference - (this.progress / 100) * this._circumference;

      this.style.setProperty('--monitoring-progress', graphProgress);
    }
  }

  _filterNotifications() {
    const _n = Math.floor(this.notifications);

    // don't show any values less than 0
    if (_n <= 0) return null;

    // get the place value
    const _thousand = Math.floor((_n / 1000) % 1000); // only return a whole number
    const _million = (_n / 1000000) % 1000000; // return a decimal value for numbers like 1.2m
    const _billion = (_n / 1000000000) % 1000000000; // return a decimal value for numbers like 1.2b
    const _trillion = (_n / 1000000000000) % 1000000000000; // trillion is just to offer an overflow instance

    // set the display to its original state
    let _message = _n;

    if (_trillion >= 1) {
      _message = '∞';
    } else if (_billion >= 1) {
      _message = `${_billion.toFixed(1).toString()}b`;
    } else if (_million >= 1) {
      _message = `${_million.toFixed(1).toString()}m`;
    } else if (_thousand >= 1) {
      _message = `${_thousand}k`;
    }

    return _message;
  }
}

customElements.define('rux-monitoring-icon', RuxMonitoringIcon);
