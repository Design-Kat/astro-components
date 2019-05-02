import { LitElement } from 'lit-element';

export class RuxIconLibrary extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        observer: '_nameChanged',
      },
      size: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this._iconSets = Object.create(null);
    //
    // this._updateIconListener = this._setIcon.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('set-icon', this._setIcon);
  }

  disconnectedCallback() {
    document.removeEventListener('set-icon', this._setIcon);
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }

  /*
   Needs a rewrite
   */
  _setIcon(e) {
    const _icon = e.detail;
    console.log('e', _icon);
    if (_icon.icon === '') return;

    // if (this.name && _icon.library && this.name === _icon.library) {
    if (_icon.size) {
      if (parseInt(_icon.size, 10)) {
        const iconSize = `${_icon.size}px`;
        e.detail.el.setAttribute('style', `height:${iconSize}; width:${iconSize}`);
      } else {
        const iconSize = `rux-icon--${_icon.size}`;
        e.detail.el.classList.add(iconSize);
      }
    }

    // set the icon

    const sourceSvg =
      this.querySelectorAll(`#${_icon.icon}`)[0] || this.querySelectorAll('#fpo')[0];

    // if no icon exists then put
    /* if (!sourceSvg) {
        sourceSvg = this.querySelectorAll('#fpo')[0];
      } */

    console.log('sourceSvg', sourceSvg);

    if (!this.size) this.size = '128';
    const content = sourceSvg.cloneNode(true);

    if (_icon.color) {
      content.setAttribute('fill', _icon.color);
    }
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${this.size} ${this.size}`);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('focusable', 'false');
    svg.appendChild(content);
    console.log('svg', svg);
    e.detail.el.shadowRoot.insertBefore(svg, null);
    // }
  }

  _nameChanged() {
    // eslint-disable-next-line no-unused-vars
    const icon = Object.create(null);
    this.querySelectorAll('[id]').forEach(_icon => {
      icon[icon.id] = _icon;
    });
  }
}
customElements.define('rux-icon-library', RuxIconLibrary);
