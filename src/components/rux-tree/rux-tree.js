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
    this._maxBranches = 4;
  }

  // eslint-disable-next-line class-methods-use-this
  toggleTreeElement(e) {
    const selectedTreeElement = e.target.closest('[aria-expanded]');

    selectedTreeElement.setAttribute(
      'aria-expanded',
      selectedTreeElement.getAttribute('aria-expanded') !== 'true',
    );
  }

  render() {
    const treeItem = item => html`
      <li class="rux-tree__tree-element" role="treeitem" aria-expanded="false">
        <div class="rux-tree__parent">
          <i
            class="rux-tree__arrow"
            title="Expand"
            @click="${this.toggleTreeElement}"
            ?hidden="${!item.children}"
          ></i>
          <rux-status status="${item.status || 'null'}"></rux-status>
          <div class="rux-tree__label">${item.label}</div>
        </div>
        ${item.children &&
          item.children.length &&
          html`
            <ul class="rux-tree__children" role="group">
              ${item.children.map(
                child =>
                  html`
                    ${treeItem(child)}
                  `,
              )}
            </ul>
          `}
      </li>
    `;

    return html`
      <style>
        :host {
          display: inline-block;
          box-sizing: border-box;

          width: 100%;
          padding: 0;
          margin: 0;

          font-size: 1rem;

          background-color: var(--treeBackgroundColor, rgb(30, 47, 66));

          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        menu {
          padding: 0;
          margin: 0;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        *[hidden] {
          display: none !important;
        }

        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        li {
          border-top: 1px solid var(--treeItemBorderColor, rgb(40, 63, 88));
        }

        .rux-tree__parent {
          display: flex;
          align-items: center;
          padding: 0.5rem;
        }

        .rux-tree__parent rux-status {
          margin-left: calc(0.5rem + 0.4375rem);
          margin-right: 0.5rem;
        }

        /* .rux-tree__tree-element[aria-expanded='false'] .rux-tree__childre{
          
        } */

        .rux-tree__arrow {
          position: relative;
          cursor: pointer;
          width: 0.4375rem;
          margin-right: -0.4375rem;

          background-color: transparent;
          transition: transform 0.167s ease-in-out;
        }

        .rux-tree__arrow::after {
          content: '';

          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0.4375rem 0 0.4375rem 0.4375rem;
          border-color: transparent transparent transparent
            var(--treeAccentColor, rgb(77, 172, 255));
          display: inline-block;
        }

        [aria-expanded='false'] > .rux-tree__children {
          display: none;
        }

        [aria-expanded='true'] > .rux-tree__children {
          display: block;
        }

        [aria-expanded='true'] > .rux-tree__parent .rux-tree__arrow {
          transform: rotate(90deg);
        }

        .rux-tree__children {
          padding: 0 0 0 1.5rem;
        }
      </style>

      <menu class="rux-tree">
        <ul>
          ${this.treeData.map(
            parent =>
              html`
                ${treeItem(parent)}
              `,
          )}
        </ul>
      </menu>
    `;
  }
}
customElements.define('rux-tree', RuxTree);
