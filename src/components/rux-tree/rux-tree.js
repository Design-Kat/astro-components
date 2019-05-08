import { LitElement, html } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxStatus } from '../rux-status/rux-status';
/* eslint-enable no-unused-vars */

export class RuxTree extends LitElement {
  static get properties() {
    return {
      treeData: {
        type: Array,
      },
      temp: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.temp = 'hello world';
  }

  render() {
    const treeItem = el => html`
      <li>
        <div>
          <rux-status status="${el.status}"></rux-status>
          ${el.label}
          ${el.children &&
            el.children.length &&
            html`
              <ul>
                ${el.children.map(
                  child =>
                    html`
                      ${treeItem(child)}
                    `,
                )}
              </ul>
            `}
        </div>
      </li>
    `;

    return html`
      <ul>
        ${this.treeData.map(
          parent =>
            html`
              ${treeItem(parent)}
            `,
        )}
      </ul>
    `;
  }
}
customElements.define('rux-tree', RuxTree);
