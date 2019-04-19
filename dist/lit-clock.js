import { a as css, b as _taggedTemplateLiteral, c as LitElement, d as html } from './chunk-70c1b8ef.js';

var style = css`:host{display:flex;margin:0 1rem;color:var(--clockTextColor,#fff);font-size:1.15rem}.rux-clock__segment{display:flex;flex-direction:column;align-items:center}.rux-clock__segment__value{display:flex;align-items:center;font-family:var(--fontFamilyMono,'Roboto Mono',monospace);font-weight:700;border:1px solid var(--clockBorderColor,#283f58);background-color:var(--clockBackgroundColor,#14202c);margin-bottom:.25rem;white-space:nowrap;overflow-y:hidden;text-overflow:ellipsis}.rux-clock__segment__value{font-size:1.75rem;height:2.75rem;padding:0 .75rem}:host([compact]) .rux-clock__segment__value{height:2.75rem;padding:0 .75rem;font-size:1.15rem;font-weight:500}.rux-clock__segment__label{font-size:.875rem}.rux-clock__day-of-the-year .rux-clock__segment__value{border-right:0}.rux-clock__segment--secondary .rux-clock__segment__value{font-weight:100}.rux-clock__aos{margin-left:1em}.rux-clock__los{margin-left:.5em}`;;

class RuxUtils {
  constructor() {}

  static get properties() {
    return {
      oneDay: 86400000
    };
  }

  static dayOfYear() {
    let timezone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'utc';
    const now = timezone === 'utc' ? this.utcDate() : new Date();
    const year = timezone === 'utc' ? new Date(now.getFullYear(), 0, 1) : new Date(now.getUTCFullYear(), 0, 1);
    const day = Math.ceil((now - year) / this.properties.oneDay);
    return day.toString().padStart(3, '000');
  }

  static utcDate() {
    let date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    return new Date(date.getFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  }

  static formatTime() {
    let time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    let locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'us-en';
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      hour12: false,
      timeZone: 'UTC',
      timeZoneName: 'short'
    };
    return new Date(time).toLocaleTimeString(locale, options);
  }

}

function _templateObject5() {
  const data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral(["\n            <div class=\"rux-clock__segment rux-clock__segment--secondary rux-clock__los\">\n              <div class=\"rux-clock__segment__value\" aria-labeledby=\"rux-clock__time-label\">\n                ", "\n              </div>\n              <div class=\"rux-clock__segment__label\" id=\"rux-clock__time-label\">\n                LOS\n              </div>\n            </div>\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral(["\n            <div class=\"rux-clock__segment rux-clock__segment--secondary rux-clock__aos\">\n              <div class=\"rux-clock__segment__value\" aria-labeledby=\"rux-clock__time-label\">\n                ", "\n              </div>\n              <div class=\"rux-clock__segment__label\" id=\"rux-clock__time-label\">\n                AOS\n              </div>\n            </div>\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(["\n            <div class=\"rux-clock__segment rux-clock__day-of-the-year\">\n              <div class=\"rux-clock__segment__value\" aria-labeledby=\"rux-clock__day-of-year-label\">\n                ", "\n              </div>\n              <div class=\"rux-clock__segment__label\" id=\"rux-clock__day-of-year-label\">Date</div>\n            </div>\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n      ", "\n\n      <div class=\"rux-clock__segment rux-clock__time\">\n        <div class=\"rux-clock__segment__value\" aria-labeledby=\"rux-clock__time-label\">\n          ", "\n        </div>\n        <div class=\"rux-clock__segment__label\" id=\"rux-clock__time-label\">\n          Time\n        </div>\n      </div>\n\n      ", "\n      ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/** Class representing a single Clock instance. */

class LitClock extends LitElement {
  static get properties() {
    return {
      aos: {
        type: Date
      },
      los: {
        type: Date
      },
      timezone: {
        type: String
      },
      locale: {
        type: String
      },
      hideTimezone: {
        type: Boolean
      },
      hideDate: {
        type: Boolean
      },
      time: {
        type: String,
        reflect: true
      },
      dayOfYear: {
        type: String,
        reflect: true
      }
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
      timeZoneName: 'short'
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
    return html(_templateObject(), !this.hideDate ? html(_templateObject2(), this.dayOfYear) : '', this.time, this.aos ? html(_templateObject3(), RuxUtils.formatTime(this.aos, this.locale, this.timeOptions)) : '', this.los ? html(_templateObject4(), RuxUtils.formatTime(this.los, this.locale, this.timeOptions)) : '');
  }
  /* uses the lit-scss-loader to import external CSS */


  static get styles() {
    return css(_templateObject5(), style);
  }

}
customElements.define('lit-clock', LitClock);

export { LitClock };
//# sourceMappingURL=lit-clock.js.map
