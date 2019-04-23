import { LitElement, html, css } from 'lit-element';
import style from './rux-clock.css';
import RuxUtils from '../rux-utils/datetime.js';

/** Class representing a single Clock instance. */
export class RuxClock extends LitElement {
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
      time: {
        type: String,
        reflect: true,
      },
      dayOfYear: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.timezone = 'UTC';
    this.locale = 'us-en';
    this.hideTimezone = true;
    this.hideDate = false;

    this.timeOptions = {
      hour12: false,
      timeZone: this.timezone,
      timeZoneName: 'short',
    };

    this.updateTime();
  }

  /*
    Lifecycle hooks should occur after the constructor and before custom methods
  */
  connectedCallback() {
    super.connectedCallback();

    this._timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._timer);
  }

  /*
    Public functions should occur after lifecycle hooks
  */

  /*
    Private functions should occur after public functions
  */
  updateTime() {
    this.time = RuxUtils.formatTime(new Date(), this.locale, this.timeOptions);
    this.dayOfYear = RuxUtils.dayOfYear();
  }

  /*
    Template and styles blocks should appear as the very last code blocks
  */
  render() {
    return html`
      ${!this.hideDate
        ? html`
            <div class="rux-clock__segment rux-clock__day-of-the-year">
              <div class="rux-clock__segment__value" aria-labelledby="rux-clock__day-of-year-label">
                ${this.dayOfYear}
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__day-of-year-label">Date</div>
            </div>
          `
        : ''}

      <div class="rux-clock__segment rux-clock__time">
        <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
          ${this.time}
        </div>
        <div class="rux-clock__segment__label" id="rux-clock__time-label">
          Time
        </div>
      </div>

      ${this.aos
        ? html`
            <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__aos">
              <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
                ${RuxUtils.formatTime(this.aos, this.locale, this.timeOptions)}
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__time-label">
                AOS
              </div>
            </div>
          `
        : ''}
      ${this.los
        ? html`
            <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__los">
              <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
                ${RuxUtils.formatTime(this.los, this.locale, this.timeOptions)}
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__time-label">
                LOS
              </div>
            </div>
          `
        : ''}
    `;
  }

  /* uses the lit-scss-loader to import external CSS */
  static get styles() {
    return css`
      ${style}
    `;
  }
}
customElements.define('rux-clock', RuxClock);
