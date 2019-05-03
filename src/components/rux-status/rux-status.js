import { LitElement, html } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxIcon } from '../rux-icon/rux-icon.js';
/* eslint-enable no-unused-vars */

export class RuxStatus extends LitElement {
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
      advanced: {
        type: Boolean,
      },
      config: {
        type: Object,
      },
    };
  }

  constructor() {
    super();

    // this.advanced = !!(this.label || this.icon || this.notifications || this.progress || this.icon);
    this.advanced = true;

    this._circumference = 56 * 2 * Math.PI;

    this.min = 0;
    this.max = 100;
    this.sort = 'ascending';
    this.range = [
      {
        threshold: 0,
        status: 'off',
      },
      {
        threshold: 17,
        status: 'standby',
      },
      {
        threshold: 33,
        status: 'normal',
      },
      {
        threshold: 49,
        status: 'caution',
      },
      {
        threshold: 65,
        status: 'serious',
      },
      {
        threshold: 81,
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
        }

        *[hidden] {
          display: none !important;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        /* .rux-status  */
        .rux-status-indicator {
          font-size: 1rem;

          line-height: 1;
          padding: 0;
          vertical-align: middle;
          text-align: center;

          height: 16px;
          width: 16px;

          margin: 2px;
        }

        /* Icon */
        .rux-status-indicator::before,
        .rux-status::before {
          content: '';
          display: inline-block;

          height: 16px;
          width: 16px;

          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: cover;
        }

        /* Specific Status Iconography */
        .rux-status-indicator.rux-status--off::before,
        .rux-status--off .rux-advanced-status__icon::before {
          background-image: var(
            --statusOff,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22%20fill%3D%22%238C9AA3%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
        }

        .rux-status-indicator.rux-status--standby::before,
        .rux-status--standby .rux-advanced-status__icon::before {
          background-image: var(
            --statusStandby,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%224.5%22%20fill%3D%22none%22%20stroke%3D%22%231EDCFF%22%20stroke-width%3D%223%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
        }

        .rux-status-indicator.rux-status--normal::before,
        .rux-status-indicator.rux-status--ok::before,
        .rux-status--normal .rux-advanced-status__icon::before,
        .rux-status--ok .rux-advanced-status__icon::before {
          background-image: var(
            --statusNormal,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%226%22%20fill%3D%22%2300E600%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
          /* background-position: 1px 1px; */
        }

        .rux-status-indicator.rux-status--caution::before,
        .rux-status--caution .rux-advanced-status__icon::before {
          background-image: var(
            --statusCaution,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFD800%22%20fill-rule%3D%22evenodd%22%20d%3D%22M2%204H14V12H2z%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
          /* background-position: 1px 1px; */
        }

        .rux-status-indicator.rux-status--serious::before,
        .rux-status-indicator.rux-status--error::before,
        .rux-status--serious .rux-advanced-status__icon::before,
        .rux-status--error .rux-advanced-status__icon::before {
          background-image: var(
            --statusSerious,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFAB00%22%20fill-rule%3D%22evenodd%22%20d%3D%22M3%203H12V12H3z%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
          /* margin-top: 1px; */
          transform: rotate(45deg);
        }

        .rux-status-indicator.rux-status--critical::before,
        .rux-status-indicator.rux-status--alert::before,
        .rux-status--critical .rux-advanced-status__icon::before,
        .rux-status--alert .rux-advanced-status__icon::before,
        .rux-status--emergency .rux-advanced-status__icon::before {
          background-image: var(
            --statusCritical,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22red%22%20fill-rule%3D%22evenodd%22%20d%3D%22M15%2013.667L1%2013.667%208%202z%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
          transform: rotate(180deg);
          background-position: 0 -1px;
        }
      </style>

      <!-- Use Advanced Status Template is any property is set //-->
      <div class="rux-status-indicator rux-status--${this.status}"></div>
    `;
  }

  updated(changedProperties) {
    // super.update(changedProperties);

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

customElements.define('rux-status', RuxStatus);
