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
      hasStatus: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();

    this._maxBranches = 4;
    this.hasStatus = false;

    this._handleKeyPress = this.handleKeyPress.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    document.addEventListener('keyup', this._handleKeyPress);
  }

  disconnectedCallback() {
    this.removeEventListener('keyup', this._handleKeyPress);
    document.disconnectedCallback();
  }

  firstUpdated() {
    this._treeItems = this.shadowRoot.querySelectorAll('[role="treeitem"]');
  }

  handleKeyPress(e) {
    // console.log('KEY PRESS');

    switch (e.keyCode) {
      case 37:
        // left
        this.toggleTreeItemRefactor(-1);
        break;
      case 38:
        // up
        this.traverse(-1);
        break;
      case 39:
        // right
        this.toggleTreeItemRefactor(1);
        break;
      case 40:
        // down
        this.traverse(1);
        break;
      case 13:
        // enter
        this.toggleTreeItemRefactor(2);
        break;
      case 36:
        // home
        break;
      case 35:
        // end
        break;
      case 9:
        // tab
        break;
      case 106: {
        // asterisk
        this.expandAll();
        break;
      }
      default:
        break;
    }
  }

  toggleTreeItemRefactor(direction) {
    const selectTreeItem = this.shadowRoot.querySelector('[aria-selected="true"]');
    if (selectTreeItem.hasAttribute('aria-expanded')) {
      if (direction === 1) {
        selectTreeItem.setAttribute('aria-expanded', true);
      } else if (direction === -1) {
        selectTreeItem.setAttribute('aria-expanded', false);
      } else {
        selectTreeItem.setAttribute(
          'aria-expanded',
          selectTreeItem.getAttribute('aria-expanded') !== 'true',
        );
      }
    }
  }

  traverse(direction) {
    const selectTreeItem = this.shadowRoot.querySelector('[aria-selected="true"]');
    selectTreeItem.setAttribute('aria-selected', false);

    if (direction === 1) {
      // if the next item has children but isn't expanded then select it
      if (selectTreeItem.getAttribute('aria-expanded') === 'false') {
        if (selectTreeItem.nextElementSibling) {
          selectTreeItem.nextElementSibling.setAttribute('aria-selected', true);
        } else {
          selectTreeItem
            .closest('[aria-expanded="true"]')
            .nextElementSibling.setAttribute('aria-selected', true);
        }
        // if the section is expanded then go to the first child element
      } else {
        selectTreeItem.querySelector('.rux-tree__tree-item').setAttribute('aria-selected', true);
      }
    } else if (direction === -1) {
      if (selectTreeItem.previousElementSibling) {
        if (selectTreeItem.previousElementSibling.getAttribute('aria-expanded') === 'true') {
          const items = selectTreeItem.previousElementSibling.getElementsByClassName(
            'rux-tree__tree-item',
          );
          items[items.length - 1].setAttribute('aria-selected', true);
        } else {
          selectTreeItem.previousElementSibling.setAttribute('aria-selected', true);
        }
      } else {
        selectTreeItem.closest('[aria-expanded="true"]').setAttribute('aria-selected', true);
      }
    }
  }

  expandAll() {
    // technically ARIA states the asterisk should open a/all group/s but does not
    // mention collapsing them again. This would allow for collapse as well if
    // desired, just replace "true" in the loop with 'expand'

    // const expand = this.shadowRoot.querySelector('[aria-expanded="true"]') === null;

    this.shadowRoot.querySelectorAll('[aria-expanded]').forEach(item => {
      item.setAttribute('aria-expanded', 'true');
    });
  }

  // eslint-disable-next-line class-methods-use-this
  toggleTreeItem(e) {
    e.stopPropagation();
    // find the closest ancestor
    const toggleTreeItem = e.target.closest('[aria-expanded]');

    // unfortunately the aria-expanded attribute isn’t boolean so
    // have to treat true/false as strings
    toggleTreeItem.setAttribute(
      'aria-expanded',
      toggleTreeItem.getAttribute('aria-expanded') !== 'true',
    );
  }

  selectTreeItem(e) {
    e.stopPropagation();
    // reset currently selected items
    this.shadowRoot.querySelectorAll('[aria-selected="true"]').forEach(selectedTree => {
      selectedTree.setAttribute('aria-selected', false);
      selectedTree.setAttribute('tabindex', '-1');
    });

    // find the nearest parent. handles clicks on tree and status
    this.selected = e.target.closest('.rux-tree__tree-item');

    // select clicked item
    this.selected.setAttribute('aria-selected', true);
    this.selected.setAttribute('tabindex', '0');

    // dispatch event to app to handle what
    // should happen next
    this.dispatchEvent(
      new CustomEvent({
        detail: {},
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const treeItem = item => html`
      <li
        class="rux-tree__tree-item"
        role="treeitem"
        aria-expanded="false"
        tabindex="-1"
        @click="${this.selectTreeItem}"
      >
        <div class="rux-tree__parent">
          <i
            class="rux-tree__arrow"
            @click="${this.toggleTreeItem}"
            ?hidden="${!item.children}"
          ></i>
          ${this.hasStatus
            ? html`
                <rux-status status="${item.status || 'null'}"></rux-status>
              `
            : ``}
          <div title="${item.label}, status ${item.status}" class="rux-tree__label">
            ${item.label}
          </div>
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
          position: relative;
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

        .rux-tree li {
          font-weight: bold;
          border-top: 1px solid var(--treeItemBorderColor, rgb(40, 63, 88));
          /* outline: 1px solid red; */
          /* margin: 1rem 0; */
        }

        .rux-tree__parent {
          display: flex;
          align-items: center;
          padding: 0 0.5rem;
          height: 2rem;
        }

        [aria-selected='true'] > .rux-tree__parent {
          background-color: #00436b; /* @todo set color with variable */
          outline: none;
        }

        .rux-tree__parent::after {
          content: '';
          height: 2rem;
          width: 100%;
          left: 0;
          z-index: 0;
          position: absolute;
          transition: background-color 0.0967s ease-in;
        }

        .rux-tree__parent:hover::after {
          background-color: #103751; /* @todo set color with variable */
          transition: background-color 0.047s ease-out;
        }

        [aria-selected='true'] > .rux-tree__parent::after {
          box-shadow: inset 0.25rem 0 0 #4dacff;
          background-color: #00436b; /* @todo set color with variable */
        }

        .rux-tree__parent:focus,
        .rux-tree__tree-item:focus {
          outline: none !important;
        }

        .rux-tree__label {
          left: 3rem;

          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          order: 3;
          z-index: 10;

          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* label w/o status */
        .rux-tree__arrow[hidden] + .rux-tree__label {
          margin-left: 1.5rem;
        }

        .rux-tree__parent rux-status {
          margin: 0 0.5rem;
          z-index: 12;
          order: 2;
        }

        .rux-tree__arrow[hidden] + rux-status {
          margin-left: 2rem;
        }

        .rux-tree__arrow {
          order: 1;
          position: relative;
          cursor: pointer;
          width: 0.35rem;
          /* margin-top: -2px; */
          margin-right: 1rem;
          margin-left: 0.15rem;
          background-color: transparent;
          transition: transform 0.167s ease-in-out;
          z-index: 11;
          /* outline: 1px solid red; */
        }

        .rux-tree__arrow::before {
          content: '';
          display: block;
          height: 1.5rem;
          width: 1.5rem;
          top: -0.15rem;
          left: -0.65rem;
          position: absolute;
        }

        .rux-tree__arrow::after {
          content: '';

          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0.35rem 0 0.35rem 0.35rem;
          border-color: transparent transparent transparent
            var(--treeAccentColor, rgb(77, 172, 255));
          display: inline-block;
        }

        [aria-expanded='false'] > .rux-tree__children {
          display: none;
        }

        [aria-expanded='true'] > .rux-tree__children {
          display: block;
          background-color: #182736; /* @todo set color with variable */
        }

        [aria-expanded='true'] > .rux-tree__children li {
          font-weight: normal;
          border-top: none;
        }

        [aria-expanded='true'] > .rux-tree__parent .rux-tree__arrow {
          transform: rotate(90deg);
        }

        .rux-tree__children {
          padding-left: 1.5rem;
        }

        .rux-tree__children .rux-tree__parent {
          margin-left: -1.5rem;
        }
      </style>

      <menu class="rux-tree">
        <ul role="tree">
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
