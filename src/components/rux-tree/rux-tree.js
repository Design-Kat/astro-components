import { LitElement, html } from 'lit-element';

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
    return html`
      <h1>${this.temp}</h1>
      <h1>${this.treeData[0].label}</h1>
      ${this.treeData.map(
        i =>
          html`
            <li>as ${i}</li>
          `,
      )}
    `;
  }
}
customElements.define('rux-tree', RuxTree);
