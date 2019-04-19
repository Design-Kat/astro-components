import { b as _taggedTemplateLiteral, c as LitElement, d as html, a as css } from './chunk-70c1b8ef.js';

function _templateObject2() {
  const data = _taggedTemplateLiteral(["\n      :host {\n        position: absolute;\n        display: flex;\n        flex-direction: column;\n\n        font-size: 0.875rem;\n        top: 0;\n        background-color: var(--timelineRegionBackgroundColor, rgb(0, 36, 57));\n        color: var(--timelineRegionTextColor, rgb(255, 255, 255));\n        overflow: hidden;\n\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n\n        border: 1px solid var(--timelineRegionBorderColor, rgb(0, 90, 143));\n        /* transition: border 0.667s ease-in-out; */\n\n        box-sizing: border-box;\n        height: 60px;\n\n        z-index: 1;\n        /* background-color: red; */\n        filter: none;\n      }\n\n      :host([hidden]) {\n        /* filter: saturate(50%); */\n        background-color: #203246;\n        opacity: 0.8;\n        z-index: 0;\n        border-color: #203246;\n        /* display: none; */\n      }\n\n      *,\n      *:after,\n      *:before {\n        box-sizing: inherit;\n      }\n\n      .filtered {\n        opacity: 0.5;\n      }\n\n      /*\n        Placeholders for variable sized timelines\n        :host(.large) {\n        }\n        \n        :host(.medium) {\n        }\n        \n        :host(.small) {\n        }\n        \n        :host(.compact) {\n        }\n        */\n      :host(.current),\n      :host([temporality='present']) {\n        border: 1px solid #4dacff;\n\n        transition: border 0.267s ease-in-out;\n      }\n\n      :host([selected]) {\n        border: 1px solid var(--timelineRegionSelectedBorderColor, rgb(77, 172, 255));\n        background-color: var(--timelineRegionSelectedBackgroundColor, rgb(58, 129, 191));\n        color: var(--timelineRegionSelectedTextColor, rgb(255, 255, 255));\n        z-index: 1;\n      }\n\n      :host([temporality='past']) {\n        color: rgba(255, 255, 255, 0.5);\n        /* filter: brightness(85%); */\n      }\n\n      :host(.future),\n      :host([temporality='future']) {\n        border: 1px dotted var(--timelineRegionSelectedBorderColor, rgb(77, 172, 255));\n      }\n\n      .rux-region__segment {\n        display: flex;\n        align-items: center;\n        padding: 0 1em;\n        margin: 0;\n        height: 30px !important;\n        line-height: 1;\n      }\n\n      .rux-region__header {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n\n        height: 50%;\n      }\n\n      :host .rux-region__label {\n        white-space: nowrap;\n        overflow: hidden;\n\n        text-overflow: ellipsis;\n      }\n      /* \n        placeholders for variant sizes\n        :host(.standard) .rux-region__label {\n        }\n        \n        :host(.medium) .rux-region__label {\n        } */\n\n      :host(.small) .rux-region__label {\n        width: 45px;\n      }\n\n      :host(.compact) .rux-region__label {\n        display: none;\n      }\n\n      .rux-region__header rux-status {\n        margin-right: 0.5rem;\n      }\n\n      :host .rux-region__time {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n\n        height: 50%;\n      }\n\n      /* \n        placeholder for variant sizes\n        :host(.standard) .rux-region__time {\n        }\n        \n        :host(.medium) .rux-region__time {\n          /* display: none; * /\n        } */\n\n      :host(.small) .rux-region__time {\n        display: none;\n      }\n\n      :host(.compact) .rux-region__time {\n        display: none;\n      }\n\n      .rux-region__time__end-time {\n        margin-left: 0.25rem;\n      }\n\n      .rux-region__time__end-time::before {\n        content: '-';\n        margin-right: 0.25rem;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n      <div\n        class=\"container\"\n        label=\"", ": ", "-", "\"\n      >\n        <div class=\"rux-region__segment rux-region__header rux-region__segment rux-region__header\">\n          <rux-status class=\"light-theme\" status=\"", "\"></rux-status>\n          <div class=\"rux-region__label\">", "</div>\n        </div>\n        <div class=\"rux-region__segment rux-region__time\">\n          <span class=\"rux-region__time__start-time\">", "</span>\n          <span class=\"rux-region__time__end-time\">", "</span>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * @polymer
 * @extends HTMLElement
 */

class LitTimelineRegion extends LitElement {
  static get properties() {
    return {
      label: {
        type: String
      },
      status: {
        type: String
      },
      scale: {
        type: Number
      },
      trackWidth: {
        type: Number
      },
      hidden: {
        type: Boolean,
        value: false
      },
      duration: {
        type: Number
      },
      startTime: {
        type: String
      },
      endTime: {
        type: String
      },
      detail: {
        type: Object
      },
      selected: {
        type: Boolean,
        reflect: true
      },
      temporality: {
        type: String,
        reflect: true
      },
      _initialState: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.status = 'off';
    this.scale = 100;
    this.hidden = false;
    this.selected = false;
    this.temporality = 'past';
    this._windowListener = this._onWindowResize.bind(this);
  }

  render() {
    return html(_templateObject(), this.label, this._formatTime(this.startTime), this._formatTime(this.endTime), this.status, this.label, this._formatTime(this.startTime), this._formatTime(this.endTime));
  }

  static get styles() {
    return css(_templateObject2());
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('update', this._windowListener);
    window.addEventListener('resize', this._windowListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('update', this._windowListener);
    window.removeEventListener('resize');
  }

  firstUpdated() {
    const now = new Date();
    const today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0).getTime();
    const start = new Date(this.startTime).getTime();
    const end = new Date(this.endTime).getTime();
    this.trackWidth = this.parentElement.offsetWidth;
    const left = (start - today) * this.trackWidth / this.duration;
    const width = (end - start) * this.trackWidth / this.duration; // set the initial values for each region
    //

    this._initialState = {
      width: width,
      left: left,
      scale: this.scale
    };

    this._updateRegion();
  }

  _onWindowResize() {
    // console.log("window resize");
    this._setDefaultSize();
  }

  _getTime(time) {
    return time;
    /* return new Date(
      time.getUTCFullYear(),
      time.getUTCMonth(),
      time.getUTCDate(),
      time.getUTCHours(),
      time.getUTCMinutes(),
      time.getUTCSeconds()
    ); */
  }

  _formatTime(time) {
    if (isNaN(time)) return false;
    return new Date(time).toLocaleTimeString(this.locale, {
      hour12: false
    });
  }

  _getRegionWidth() {
    return this._initialState.width * (this.scale / this._initialState.scale);
  }

  _getRegionLeft() {
    return this._initialState.left * (this.scale / this._initialState.scale);
  }

  _resetSize() {
    this.classList.remove('small', 'standard', 'compact');
  }

  _filterUpdated() {
    if (this.filter.toLowerCase() === 'none') {
      this.hidden = false;
    } else if (this.filter.toLowerCase() !== this.status.toLowerCase()) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }

  _updateRegion() {
    const _width = this._getRegionWidth();

    const _left = this._getRegionLeft();

    this.style.left = _left + 'px';
    this.style.width = _width + 'px';

    this._resetSize();

    if (_width > 180) {
      // this is a normal sized widget
      this.classList.add('large');
    } else if (_width < 180 && _width > 140) {
      // this is a mid sized widget without its time element
      this.classList.add('medium');
    } else if (_width < 140 && _width > 40) {
      // this is a small widget without time or label
      this.classList.add('small');
    } else if (_width < 40) {
      // this is a small widget without time or label
      this.classList.add('compact');
    }
  }

}
customElements.define('lit-timeline-region', LitTimelineRegion);

function _templateObject3() {
  const data = _taggedTemplateLiteral(["\n      :host {\n        display: flex;\n        width: 100%;\n\n        flex-wrap: wrap;\n      }\n\n      :host([selected]) {\n        height: auto;\n      }\n\n      :host([selected]) .rux-timeline-region--main {\n        display: none;\n      }\n\n      .rux-timeline__track {\n        position: relative;\n        display: block;\n        height: 60px;\n        width: 100%;\n\n        box-sizing: border-box;\n        overflow: hidden;\n      }\n\n      *,\n      *:after,\n      *:before {\n        box-sizing: inherit;\n      }\n\n      .rux-timeline__track {\n        position: relative;\n      }\n\n      ol {\n        display: block;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  const data = _taggedTemplateLiteral(["\n              <li>\n                <lit-timeline-region\n                  id=\"", "\"\n                  class=\"rux-timeline-region rux-timeline-region--main\"\n                  label=\"", "\"\n                  status=\"", "\"\n                  startTime=\"", "\"\n                  endTime=\"", "\"\n                  detail=\"", "\"\n                  scale=\"", "\"\n                  duration=\"", "\"\n                >\n                </lit-timeline-region>\n              </li>\n            "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  const data = _taggedTemplateLiteral(["\n      <div class=\"rux-timeline__track\">\n        <ol class=\"rux-timeline__regions\">\n          ", "\n        </ol>\n      </div>\n    "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
/* eslint-enable no-unused-vars */

/**
 * @polymer
 * @extends HTMLElement
 */

class LitTimelineTrack extends LitElement {
  static get properties() {
    return {
      id: {
        type: String
      },
      index: {
        type: Number,
        reflect: true
      },
      regions: {
        type: Array
      },
      scale: {
        type: Number
      },
      duration: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.id = 'RTT-' + Math.floor(Math.random() * 1000);
    this._windowListener = this._onWindowResize.bind(this);
  }

  render() {
    return html(_templateObject$1(), this.regions.map(region => html(_templateObject2$1(), region.id, region.label, region.status, region.startTime, region.endTime, region.detail, this.scale, this.duration)));
  }

  static get styles() {
    return css(_templateObject3());
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('update', this._windowListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('update', this._windowListener);
  }

  firstUpdated() {
    this.trackWidth = this.shadowRoot.querySelectorAll('.rux-timeline__track')[0].offsetWidth;
  }

  _resetSelected() {
    // reset any region that may be selected
    this.shadowRoot.querySelectorAll('rux-timeline-region').forEach(region => {
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
    const _region = e.currentTarget; // Still not thrilled with this solution, but this will assign
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
      const utcNow = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
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
        temporality: temporality
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

function _templateObject4() {
  const data = _taggedTemplateLiteral(["\n      :host {\n        display: flex;\n        flex-direction: column;\n        flex-grow: 1;\n\n        width: 100%;\n        padding: 0;\n\n        box-sizing: border-box;\n        transform: translateZ(0);\n      }\n\n      *,\n      *:after,\n      *:before {\n        box-sizing: border-box;\n      }\n\n      .rux-timeline__header,\n      .rux-timeline__footer {\n        position: relative;\n\n        display: flex;\n        align-items: center;\n\n        padding: 0 1em;\n\n        background-color: var(--timelineHeaderBackgroundColor, rgb(32, 50, 70));\n\n        z-index: 10;\n      }\n\n      .rux-timeline__header {\n        padding: unset 1.25rem;\n        justify-content: center;\n      }\n\n      .rux-timeline__header h1 {\n        font-size: 1.25rem;\n        font-weight: 300;\n        margin-left: 0.5em;\n      }\n\n      .rux-timeline__header rux-slider {\n        margin-left: auto;\n        margin-right: 1rem;\n      }\n\n      /* the default .rux-button__icon expects you to be using .rux-button--large on the parent */\n      .rux-timeline__header .rux-button .rux-button__icon {\n        height: 1.1rem;\n        width: 1.1rem;\n        margin-left: -0.3125rem;\n      }\n\n      .rux-timeline__footer {\n        display: none;\n      }\n\n      lit-timeline-track {\n        /* height: 60px; */\n        margin: 2px 0;\n      }\n\n      lit-timeline-track {\n        background-color: var(--timelineTrackBackgroundColor, rgb(40, 63, 88));\n      }\n\n      #rux-timeline__ruler {\n        display: flex;\n        justify-content: space-between;\n        position: relative;\n        margin-top: auto;\n        color: var(--fontColor, rgb(255, 255, 255));\n\n        background-color: var(--timelineRulerBackgroundColor, rgb(32, 50, 70));\n        height: 2em;\n        width: 100%;\n\n        /* box-shadow: 0 -2px 6px rgba(0,0,0,0.2) */\n      }\n\n      #rux-timeline__ruler div {\n        font-size: 0.675rem;\n        /* top: 0; */\n        height: 20px;\n        width: 100%;\n        /* position: absolute; */\n        border-left: 1px solid rgba(255, 255, 255, 0.1);\n        padding-left: 0.25rem;\n\n        /* border: 1px solid red; */\n        /* padding: 0.35rem 0 0 0.35rem; */\n      }\n\n      #rux-timeline__playhead {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 3px;\n        background-color: rgba(255, 255, 255, 0.4);\n        z-index: 100;\n        display: none;\n      }\n\n      #rux-timeline__current-time {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 1px;\n        background-color: #5cb3ff;\n        z-index: 200;\n        display: none;\n      }\n      #rux-timeline__current-time::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: -6px;\n        height: 5px;\n        width: 13px;\n        background-color: #5cb3ff;\n      }\n\n      #rux-timeline__current-time::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        left: -6px;\n        height: 5px;\n        width: 13px;\n        border-color: #5cb3ff;\n\n        border-top: 6px solid #5cb3ff;\n        border-left: 5px solid transparent;\n        border-right: 5px solid transparent;\n      }\n\n      .rux-timeline__viewport {\n        position: relative;\n        display: flex;\n\n        justify-content: flex-start;\n        width: 100%;\n        z-index: 5;\n\n        overflow-y: hidden;\n      }\n\n      .rux-timeline__track__label-container {\n        width: 100%;\n        background-color: var(--timelineTrackLabelBackgroundColor, rgb(40, 63, 88));\n        font-size: 0.875rem;\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap;\n\n        height: 60px;\n        margin: 2px 1px 2px 0;\n      }\n\n      .rux-timeline__track__subtracks {\n        width: 100%;\n        background-color: #203246;\n      }\n\n      .rux-timeline__track__label-container[selected] {\n        height: auto;\n      }\n\n      .rux-timeline__track__label-container[selected] .rux-timeline__track__subtracks {\n        display: block;\n      }\n\n      .rux-timeline__track__label--subtrack {\n        background-color: var(--colorTertiaryDarken2);\n        margin: 2px 0;\n      }\n\n      .rux-timeline__track__label--subtrack:last-of-type {\n        margin: 2px 0 0 0;\n      }\n\n      .rux-timeline__track__label {\n        width: 100%;\n\n        font-size: 0.875rem;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        height: 60px;\n        padding: 0 0.9875rem;\n\n        flex-grow: 0;\n      }\n\n      .rux-timeline__viewport__labels {\n        flex-shrink: 0;\n        position: relative;\n        width: 12.875rem;\n        z-index: 200;\n        margin-right: 2px;\n      }\n\n      #rux-timeline__viewport__tracks {\n        height: auto;\n        position: relative;\n      }\n\n      #rux-timeline__tracks {\n        position: relative;\n      }\n\n      #rux-timeline__viewport__track-container {\n        position: relative;\n        overflow-y: hidden;\n        z-index: 0;\n        width: 100%;\n      }\n\n      .rux-timeline__filter {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  const data = _taggedTemplateLiteral(["\n                  <lit-timeline-track\n                    aria-labelledby=\"label-", "\"\n                    label=\"", "\"\n                    index=\"", "\"\n                    scale=\"", "\"\n                    duration=\"", "\"\n                    .regions=\"", "\"\n                  ></lit-timeline-track>\n                "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  const data = _taggedTemplateLiteral(["\n              <div\n                id=\"label-", "\"\n                label=\"", "\"\n                index=\"", "\"\n                class=\"rux-timeline__track__label-container\"\n              >\n                <div class=\"rux-timeline__track__label\">", "</div>\n              </div>\n            "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  const data = _taggedTemplateLiteral(["\n      <section class=\"rux-timeline__viewport\">\n        <div class=\"rux-timeline__viewport__labels\">\n          ", "\n        </div>\n\n        <div id=\"rux-timeline__viewport__track-container\">\n          <div id=\"rux-timeline__viewport__tracks\">\n            <div id=\"rux-timeline__tracks\">\n              ", "\n            </div>\n            <div id=\"rux-timeline__current-time\"></div>\n            <div id=\"rux-timeline__playhead\"></div>\n            <div id=\"rux-timeline__ruler\"></div>\n          </div>\n        </div>\n      </section>\n\n      <footer class=\"rux-timeline__footer\">Footer FPO</footer>\n    "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
/* eslint-enable no-unused-vars */

/**
 * @polymer
 * @extends HTMLElement
 */

class LitTimeline extends LitElement {
  static get properties() {
    return {
      duration: {
        type: Number
      },
      startTime: {
        type: Date
      },
      tracks: {
        type: Array
      },
      playheadControl: {
        type: Boolean
      },
      initialScale: {
        type: Number
      },
      _scale: {
        type: Number
      },
      timezone: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.duration = 86400000;
    this.startTime = null;
    this.playheadControl = false;
    this.initialScale = 100;
    this._scale = 100;
    this.timezone = 'UTC'; // bind scroll listener to scroll event

    this._scrollListener = this._scroll.bind(this); // debounce for request animation frame

    this._last = 0;
  }

  render() {
    return html(_templateObject$2(), this.tracks.map((track, index) => html(_templateObject2$2(), index, track.label, index, track.label)), this.tracks.map((track, index) => html(_templateObject3$1(), index, track.label, index, this._scale, this._duration, track.regions)));
  }

  static get styles() {
    return css(_templateObject4());
  }

  firstUpdated() {
    // get the playhead
    this._playhead = this.shadowRoot.getElementById('rux-timeline__playhead'); // get the current time indicator

    this._currentTime = this.shadowRoot.getElementById('rux-timeline__current-time'); // get the track container; this is the larger container for
    // tracks, ruler, playhead and current time indicator

    this._track = this.shadowRoot.getElementById('rux-timeline__viewport__track-container'); // get the timeline ruler

    this._ruler = this.shadowRoot.getElementById('rux-timeline__ruler'); // get the tracks container; this differs from the track_container
    // in that it only contains the tracks.

    this._tracks = this.shadowRoot.getElementById('rux-timeline__viewport__tracks');

    this._setTics();
  }

  connectedCallback() {
    super.connectedCallback(); // hard coded min/max scale (for now)

    this._minScale = 100;
    this._maxScale = 500; // if duration is less than 1000 then assume the data was in hours.
    // NOTE: Refactor the underscore _duration is redundant at this point
    // NOTE: a future enhancement would be to allow for some form of passing
    // time in e.g. 12h for 12 hours

    if (this.duration < 1000) {
      this.duration = this.duration * 60 * 60 * 1000;
    }

    this._duration = this.duration;
    this._durationHours = this._duration / 1000 / 60 / 60;
    this._scale = this.initialScale;

    if (this.playheadControl) {
      this._playhead.style.display = 'block';
    } // if the browser supports the resizeObserver (currently Chrome 55+)
    // use that to handle both window and css transitions of width. This
    // provides a much smoother resize


    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(entries => {
        entries.forEach(() => {
          this._setParams();
        });
      });
      this.resizeObserver.observe(this); // otherwise use a mutation observer to handle resizing via CSS/JS
      // and a window event listener to handle window resizing.
    } else {
      const _track = this.shadowRoot.getElementById('rux-timeline__viewport__track-container');

      this.mustationObserver = new MutationObserver(mutationList => {
        mutationList.forEach(() => {
          this._setParams();
        });
      });
      this.mustationObserver.observe(_track, {
        attributes: true,
        childList: false,
        subtree: true
      });
    } // Animate the playhead


    this.currentTimeAnimator = window.requestAnimationFrame(this._updateCurrentTime.bind(this));
    this.currentPlayheadAnimator = window.requestAnimationFrame(this._updatePlayhead.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this._track.removeEventListener('wheel', this._scrollListener);

    window.cancelAnimationFrame(this.currentTimeAnimator);
    window.cancelAnimationFrame(this.currentPlayheadAnimator);
  }

  _catchPlayhead() {// if(this._playhead.offsetLeft > 1000) {
    //   this.
    // }
  }

  _dispatchPlayheadEvent(time) {
    // TODO: use a while loop to have a more efficient sub-shadowDom inquisition
    const _t = this.shadowRoot.querySelectorAll('rux-timeline-track');

    _t.forEach(track => {
      const _r = track.shadowRoot.querySelectorAll('rux-timeline-region');

      _r.forEach(region => {
        // handles setting a timeline region to a past state
        if (time > region.startTime && time < region.endTime) {
          region.temporality = 'present';
        } else if (time < region.startTime) {
          region.temporality = 'future';
        } else if (time > region.endTime) {
          region.temporality = 'past';
        }
      });
    });
  }

  _updateCurrentTime(time) {
    const now = new Date();
    const utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    const then = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0); // time of today, like right now

    const dif = utc.getTime() - then.getTime();
    const loc = dif * this._ruler.offsetWidth / this._duration;

    if (loc > this._ruler.offsetWidth) {
      this._currentTime.style.display = 'none';
    } else {
      this._currentTime.style.display = 'block';
      this._currentTime.style.left = loc + 'px';
      this.currentTimeAnimator = window.requestAnimationFrame(this._updateCurrentTime.bind(this));
    } // throttle dispatching events to regions


    if (!this._last || time - this._last >= 1 * 5000) {
      this._last = time;

      this._dispatchPlayheadEvent(utc);
    }
  }

  _updatePlayhead() {
    let loc = this._playhead.offsetLeft;
    loc += 1 * (this._scale / 100);

    if (loc >= this._tracks.offsetWidth) {
      loc = 0;
    }

    this._playhead.style.left = loc + 'px';
    this.currentPlayheadAnimator = window.requestAnimationFrame(this._updatePlayhead.bind(this));
  }

  _updateTimelineScale() {
    // scale tracks container
    const scale = "".concat(Number(this._scale), "%");
    this._tracks.style.width = scale;
    this._track.style.width = scale;
  }

  _setParams() {
    this._updateTimelineScale(); // This is a very ugly way of targeting grandchildren form a parent
    // but for demo it’ll have to do.


    const _t = this.shadowRoot.querySelectorAll('rux-timeline-track');

    _t.forEach(track => {
      track.dispatchEvent(new CustomEvent('update'));

      const _r = track.shadowRoot.querySelectorAll('rux-timeline-region');

      _r.forEach(region => {
        region.dispatchEvent(new CustomEvent('update'));
      });
    });
  }
  /*
    TODO: Consider moving the ruler to its own component entirely and moving
    all the tic/label logic there
  */


  _setTics() {
    // TODO: Allow for a start time that isn’t midnight of the current day
    const start = 0; // loop through the duration set for the timeline

    for (let i = start; i < this._durationHours; i++) {
      // create a new tic
      const tic = document.createElement('div'); // generate a readable time label

      tic.innerHTML = "".concat(i.toString().padStart(2, '0'), ":00"); // append to child

      this._ruler.appendChild(tic);
    }
  }
  /*
    Mostly a dev feature, but maybe useful to end users.
    Scroll the timeline with the mouse wheel
  */


  _scroll(e) {
    if (e.altKey) {
      let _delta = this._scale += e.deltaY / 10;

      if (_delta < this._minScale) {
        _delta = this._minScale;
      } else if (_delta > this._maxScale) {
        _delta = this._maxScale;
      }

      this._scale = Math.floor(_delta);
    } else {
      e.currentTarget.scrollLeft += Math.floor(e.deltaY);
    }
  }

}
customElements.define('lit-timeline', LitTimeline);

export { LitTimeline };
//# sourceMappingURL=lit-timeline.js.map
