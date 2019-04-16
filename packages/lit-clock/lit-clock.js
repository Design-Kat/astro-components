import {LitElement, html, css} from 'lit-element';
import RuxUtils from '../rux-utils/datetime.js';

export class LitClock extends LitElement {
  static get properties() {
    return {
      aos: {
        type: Date,
      },
      los: {
        type: Date,
      },
      timezone: {
        type: String,
      },
      locale: {
        type: String,
      },
      hideTimezone: {
        type: Boolean,
      },
      hideDate: {
        type: Boolean,
      },
      _currentTime: {
        type: String,
      },
      _currentDayOfYear: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    // set value of one day in milliseconds
    this._oneDay = 86400000;
    this.aos = null;
    this.los = null;
    this.timezone = 'UTC';
    this.locale = 'us-en';
    this.hideTimezone = false;
    this.hideDate = false;

    this.timeOptions = {
      hour12: false,
      timeZone: this.timezone,
      timeZoneName: this.hideTimezone ? 'long' : 'short',
    };
  }

  render() {
    return html`
      ${!this.hideDate
        ? html`
            <div class="rux-clock__segment rux-clock__day-of-the-year">
              <div class="rux-clock__segment__value" aria-labeledby="rux-clock__day-of-year-label">
                ${this._currentDayOfYear}
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__day-of-year-label">Date</div>
            </div>
          `
        : html``}

      <div class="rux-clock__segment rux-clock__time">
        <div class="rux-clock__segment__value" aria-labeledby="rux-clock__time-label">
          ${this._currentTime}
        </div>
        <div class="rux-clock__segment__label" id="rux-clock__time-label">
          Time
        </div>
      </div>

      ${this.aos
        ? html`
            <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__aos">
              <div class="rux-clock__segment__value" aria-labeledby="rux-clock__time-label">
                ${RuxUtils.formatTime(this.aos, this.locale, this.timeOptions)}
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__time-label">
                AOS
              </div>
            </div>
          `
        : html``}
      ${this.los
        ? html`
            <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__los">
              <div class="rux-clock__segment__value" aria-labeledby="rux-clock__time-label">
                ${RuxUtils.formatTime(this.los, this.locale, this.timeOptions)}
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__time-label">
                LOS
              </div>
            </div>
          `
        : html``}
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        margin: 0 1rem;

        color: var(--clockTextColor, rgb(255, 255, 255));

        font-size: 1.15rem;
      }

      .rux-clock__segment {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .rux-clock__segment__value {
        display: flex;
        align-items: center;
        font-family: var(--fontFamilyMono, 'Roboto Mono', monospace);
        font-weight: 700;

        border: 1px solid var(--clockBorderColor, rgb(40, 63, 88));

        background-color: var(--clockBackgroundColor, rgb(20, 32, 44));
        margin-bottom: 0.25rem;

        white-space: nowrap;
        overflow-y: hidden;
        text-overflow: ellipsis;
      }

      .rux-clock__segment__value {
        font-size: 1.75rem;
        height: 2.75rem;
        padding: 0 0.75rem;
      }

      :host([compact]) .rux-clock__segment__value {
        height: 2.75rem;
        padding: 0 0.75rem;
        font-size: 1.15rem;
        font-weight: 500;
      }

      .rux-clock__segment__label {
        font-size: 0.875rem;
      }

      .rux-clock__day-of-the-year .rux-clock__segment__value {
        border-right: none;
      }

      .rux-clock__segment--secondary .rux-clock__segment__value {
        font-weight: 100;
      }

      .rux-clock__aos {
        margin-left: 1em;
      }

      .rux-clock__los {
        margin-left: 0.5em;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this._timer = setInterval(() => {
      this._currentTime = RuxUtils.formatTime(new Date(), this.locale, this.timeOptions);
      this._currentDayOfYear = RuxUtils.dayOfYear();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._timer);
  }
}
customElements.define('lit-clock', LitClock);
