import { PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxIconLibrary extends PolymerElement {
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
    this._updateIconListener = this._setIcon.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('set-icon', this._updateIconListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('set-icon', this._updateIconListener);
  }

  ready() {
    super.ready();
  }

  /*
   Needs a rewrite
   */
  _setIcon(e) {
    const _icon = e.detail;
    if (_icon.icon === '') return;

    if (this.name && _icon.library && this.name === _icon.library) {
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

      let sourceSvg = this.querySelectorAll(`#${_icon.icon}`)[0];

      // if no icon exists then put
      if (!sourceSvg) {
        // eslint-disable-next-line prefer-destructuring
        sourceSvg = this.querySelectorAll('#fpo')[0];
      }

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
      e.detail.el.root.insertBefore(svg, null);
    }
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
