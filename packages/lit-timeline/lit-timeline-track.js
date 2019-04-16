import {LitElement, html, css} from 'lit-element';
// import '@polymer/polymer/lib/elements/dom-repeat.js';
/* eslint-disable no-unused-vars */
import {LitTimelineRegion} from './lit-timeline-region.js';
/* eslint-enable no-unused-vars */

/**
 * @polymer
 * @extends HTMLElement
 */
export class LitTimelineTrack extends LitElement {
  static get properties() {
    return {
      id: {
        type: String,
      },
      index: {
        type: Number,
        reflect: true,
      },
      regions: {
        type: Array,
      },
      scale: {
        type: Number,
      },
      duration: {
        type: Number,
      },
    };
  }

  constructor() {
    super();

    this.id = 'RTT-' + Math.floor(Math.random() * 1000);
    console.log(this.regions);
    this._windowListener = this._onWindowResize.bind(this);
  }

  render() {
    return html`
      <div class="rux-timeline__track">
        <ol class="rux-timeline__regions">
          ${this.regions.map(
      (region) => html`
              <li>
                <lit-timeline-region
                  id="${region.id}"
                  class="rux-timeline-region rux-timeline-region--main"
                  label="${region.label}"
                  status="${region.status}"
                  start-time="${region.startTime}"
                  end-time="${region.endTime}"
                  detail="${region.detail}"
                  scale="${this.scale}"
                  track-width="${this.trackWidth}"
                  duration="${this.duration}"
                >
                </lit-timeline-region>
              </li>
            `
  )};
        </ol>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;

        flex-wrap: wrap;
      }

      :host([selected]) {
        height: auto;
      }

      :host([selected]) .rux-timeline-region--main {
        display: none;
      }

      .rux-timeline__track__subtracks {
        background-color: var(--colorTertiaryDarken2);
        display: none;
      }

      :host([selected]) .rux-timeline__track__subtracks {
        display: block;
        background-color: #203246;
        width: 100%;
      }

      .rux-timeline__track,
      .subtrack {
        position: relative;
        display: block;
        height: 60px;
        width: 100%;

        box-sizing: border-box;
        overflow: hidden;
      }

      .subtrack {
        margin: 2px 0;
        background-color: var(--colorTertiaryDarken2);
      }

      .subtrack:last-of-type {
        margin: 2px 0 0 0;
      }

      *,
      *:after,
      *:before {
        box-sizing: inherit;
      }

      .rux-timeline__track {
        position: relative;
        /* height: 100%; */
      }

      ol {
        display: block;
        list-style: none;
        padding: 0;
        margin: 0;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.trackWidth = this.shadowRoot.querySelectorAll('.rux-timeline__track')[0].offsetWidth;

    this.addEventListener('update', this._windowListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener('update', this._windowListener);
  }

  ready() {
    super.ready();
  }

  _resetSelected() {
    // reset any region that may be selected
    this.shadowRoot.querySelectorAll('rux-timeline-region').forEach((region) => {
      if (!this.selectedRegion) return;
      if (region._id !== this.selectedRegion._id) {
        region.removeAttribute('selected');
      }
    });
  }

  isReserved(region) {
    return region.reserved;
  }

  _onClick(e) {
    const _region = e.currentTarget;
    // Still not thrilled with this solution, but this will assign
    // either the model.pass or the subitem object to _model … a
    // I believe this a side effect of having the expanded track
    // be contained within a second loop to the composed track. I.e.,
    // composed tracks have a single loop to add regions, expanded
    // tracks have a loop to create the subtrack, then nested loop
    // to create the reqions.
    // const _model = e.model ? e.model.pass : e.subitem;

    if (_region.hasAttribute('selected')) {
      this._resetSelected();
      this.selectedRegion = {};
    } else {
      this._resetSelected();
      _region.setAttribute('selected', '');

      const now = new Date();
      const utcNow = new Date(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          now.getUTCHours(),
          now.getUTCMinutes(),
          now.getUTCSeconds()
      );

      let temporality = 'past';

      if (utcNow.getTime() > _region.startTime && utcNow.getTime() < _region.endTime) {
        temporality = 'present';
      } else if (utcNow.getTime() < _region.startTime) {
        temporality = 'future';
      }

      this.selectedRegion = {
        _id: _region._id,
        label: _region.label,
        status: _region.status,
        startTime: _region.startTime,
        endTime: _region.endTime,
        detail: _region.detail,
        durationMins: _region.durationMins,
        temporality: temporality,
      };
    }
  }

  _regionChanged() {
    this._resetSelected();
  }

  _onWindowResize() {
    this.trackWidth = this.shadowRoot.querySelectorAll('.rux-timeline__track')[0].offsetWidth;
  }
}
customElements.define('lit-timeline-track', LitTimelineTrack);
