import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// import { RuxIcon } from "/src/astro-components/rux-icon/rux-icon.js";
// import "./rux-icons-svg.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxStatus extends PolymerElement {
  static get properties() {
    return {
      status: {
        type: String,
        reflectToAttribute: true,
      },
      label: {
        type: String,
        value: false,
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
        value: false,
        observer: 'setProgress',
      },
      _notifications: {
        type: String,
        value: null,
        computed: '_filterNotifications(notifications)',
      },
      advanced: {
        type: Boolean,
        value: false,
        computed: '_isAdvanced()',
      },
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
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
          margin: 0 0.75rem;
          line-height: 0;
          /* width: 6.25rem; */

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
          display: flex;
          justify-content: center;
          max-width: 6.25rem;
          min-width: 4rem;

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
                ); */
        }

        .rux-advanced-status__status-icon {
          margin: 0 2px 0 auto;
          order: 1;
        }

        .rux-advanced-status__icon {
          order: 2;
          margin: 0 auto;
        }

        .rux-advanced-status__icon.style-scope {
          height: 44px !important;
          width: 44px !important;
        }

        :host .rux-advanced-status__icon::before {
          content: '';
          display: block;
          position: relative;
          margin-bottom: -12px;
          margin-left: -18px !important;
          height: 16px;
          width: 16px;
          background-repeat: no-repeat;
        }

        :host([status='off']) .rux-advanced-status__icon::before {
          background-image: var(
            --statusOff,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22%20fill%3D%22%238C9AA3%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
        }
        :host([status='standby']) .rux-advanced-status__icon::before {
          background-image: var(
            --statusStandby,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%224.5%22%20fill%3D%22none%22%20stroke%3D%22%231EDCFF%22%20stroke-width%3D%223%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
        }
        :host([status='normal']) .rux-advanced-status__icon::before {
          background-image: var(
            --statusNormal,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%226%22%20fill%3D%22%2300E600%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
        }
        :host([status='caution']) .rux-advanced-status__icon::before {
          background-image: var(
            --statusCaution,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFD800%22%20fill-rule%3D%22evenodd%22%20d%3D%22M2%204H14V12H2z%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
        }
        :host([status='serious']) .rux-advanced-status__icon::before {
          background-image: var(
            --statusSerious,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFAB00%22%20fill-rule%3D%22evenodd%22%20d%3D%22M3%203H12V12H3z%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
        }
        :host([status='critical']) .rux-advanced-status__icon::before {
          background-image: var(
            --statusCritical,
            url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22red%22%20fill-rule%3D%22evenodd%22%20d%3D%22M15%2013.667L1%2013.667%208%202z%22%2F%3E%0A%3C%2Fsvg%3E%0A')
          );
        }

        .progress {
          transition: stroke-dashoffset 0.367s, stroke 0.367s;
          // transform: rotate(-90deg);
          transform-origin: 50% 50%;
        }

        :host([status='off']) .progress {
          stroke: var(--colorOff);
        }
        :host([status='standby']) .progress {
          stroke: var(--colorStandby);
        }
        :host([status='normal']) .progress {
          stroke: var(--colorNormal);
        }
        :host([status='caution']) .progress {
          stroke: var(--colorCaution);
        }
        :host([status='serious']) .progress {
          stroke: var(--colorSerious);
        }
        :host([status='critical']) .progress {
          stroke: var(--colorCritical);
        }

        .rux-advanced-status__badge {
          display: block;
          z-index: 2;
          order: 3;

          position: absolute;
          bottom: -0.75rem;
          right: -0.5rem;

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
          fill: var(--colorOff, rgb(158, 167, 173));
        }

        .rux-status--standby {
          fill: var(--colorStandby, rgb(45, 204, 255));
        }

        .rux-status--normal,
        .rux-status--ok {
          fill: var(--colorNormal, rgb(86, 240, 0));
        }

        .rux-status--caution {
          fill: var(--colorCaution, rgb(252, 232, 58));
        }

        .rux-status--error,
        .rux-status--serious {
          fill: var(--colorSerious, rgb(255, 179, 0));
        }

        .rux-status--critical,
        .rux-status--emergency,
        .rux-status--alert,
        .rux-status--critical {
          fill: var(--colorCritical, rgb(255, 56, 56));
        }

        .rux-advanced-status__icon.style-scope {
          height: 44px !important;
          width: 44px !important;
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
          /* outline: 1px solid rgba(127, 127, 127, 0.5);  */
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

        .rux-advanced-status__progress {
          font-family: var(--fontFamilyMono);
          font-size: 0.8rem;
          position: absolute;
          margin-top: 1.5rem;
          margin-left: -1px;
          letter-spacing: -1px;
          text-align: center;
        }

        /* Tweaks for IE */
        .rux-advanced-status__badge.style-scope {
          display: inline;
          padding: 0;
          text-align: center;
          line-height: normal;
        }

        /*
        .rux-status-indicator.style-scope::before,
        .rux-status.style-scope::before {
          display: inline;
        }
        */

        .rux-advanced-status__icon.style-scope {
          text-align: center;
          margin-top: -1rem;
        }

        .rux-advanced-status__label__sub-label.style-scope {
          margin-top: -0.5rem;
        }
        /* End Tweaks for IE */
      </style>

      <!-- Use Advanced Status Template is any property is set //-->
      <div
        class$="rux-advanced-status rux-status--[[status]]"
        title="[[notifications]] [[label]] [[sublabel]]"
        hidden="[[!advanced]]"
      >
        <div class="rux-advanced-status__icon-group">
          <rux-icon
            icon="[[icon]]"
            class$="rux-advanced-status__icon rux-status--[[status]] [[_isProgress()]]"
          ></rux-icon>
          <div class="rux-advanced-status__badge" hidden="[[!_notifications]]">
            [[_notifications]]
          </div>
          <div class="rux-advanced-status__progress" hidden="[[!progress]]">
            [[progress]]%
          </div>
        </div>

        <div class="rux-advanced-status__label" hidden="[[!label]]">
          [[label]]<span class="rux-advanced-status__label__sub-label">[[sublabel]]</span>
        </div>
      </div>

      <!-- Use simple status if no other properties are set //-->
      <div class$="rux-status-indicator rux-status--[[status]]" hidden="[[advanced]]"></div>
    `;
  }

  constructor() {
    super();

    // magic number for progress icon
    this._circumference = 56 * 2 * Math.PI;
  }

  connectedCallback() {
    super.connectedCallback();

    // set a progress icon if the progress value is set
    if (this.progress >= 0 && !this.icon) {
      this.icon = 'utility:progress';
    }

    // Find if this is a progress element and if so create
    // a refernce to the underlying SVG, then set the progress
    const statusIcon = this.shadowRoot.querySelector('.rux-advanced-status__icon');
    this.progressCircleElement = statusIcon.shadowRoot.querySelector('.progress-ring__circle');
    if (this.progressCircleElement) {
      this.setProgress();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }

  _isProgress() {
    return this.progress > 1 ? 'progress' : '';
  }

  setProgress() {
    if (this.progress > 0 && this.progress < 25) {
      this.status = 'critical';
    } else if (this.progress >= 25 && this.progress < 50) {
      this.status = 'serious';
    } else if (this.progress >= 50 && this.progress < 75) {
      this.status = 'caution';
    } else if (this.progress >= 75) {
      this.status = 'normal';
    }

    this._progress = this._circumference - (this.progress / 100) * this._circumference;

    if (this.progressCircleElement) {
      this.progressCircleElement.setAttribute('style', `stroke-dashoffset:${this._progress}`);
    }
  }

  _isAdvanced() {
    if (this.label || this.icon || this.notifications || this.progress || this.icon) {
      return true;
    }
  }

  _filterNotifications(n) {
    if (isNaN(n)) {
      console.error(`${this.label}'s notification count is not a number`);
    }

    const _n = Math.floor(n);

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
      _message = _billion.toFixed(1).toString() + 'b';
    } else if (_million >= 1) {
      _message = _million.toFixed(1).toString() + 'm';
    } else if (_thousand >= 1) {
      _message = _thousand + 'k';
    }

    return _message;
  }
}

customElements.define('rux-status', RuxStatus);
