import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxIcon } from "../rux-icon/rux-icon.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxButton extends PolymerElement {
  static get properties() {
    return {
      type: String,
      icon: String,
      default: Boolean,
      disabled: Boolean
    };
  }
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          contain: content;
          /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
        }

        .rux-button {
          display: inline-block;
          position: relative;
          min-width: 4rem;
          height: 2.25rem;
          margin: 0;
          padding: 0 0.8rem;
          border-top: var(--button-border-top);
          border-left: var(--button-border-left);
          border-bottom: var(--button-border-bottom);
          border-right: var(--button-border-right);
          color: var(--button-color);
          background-color: var(--button-background);
          font-family: var(--font-family);
          font-size: 0.875rem;
          text-align: center;
          vertical-align: middle;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          cursor: pointer;
          outline: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          transition: background var(--standard-transition-speed);
        }

        .rux-button--icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: auto;
          padding: 0;
          border: none;
          background: none;
          font-size: 0.75rem;
          opacity: 0.2;
          transition: opacity var(--standard-transition-speed);
        }



        .rux-button--icon .rux-icon--button {
          height: 43px;
          width: 43px;
          margin: 0 0 0.5rem 0;
        }

        .rux-button--icon:hover {
          opacity: 1;
        }

        .rux-button:hover:not([disabled]):not(.rux-button--icon) {
          background-color: var(--button-background--hover);
        }

        .rux-button:active:not([disabled]):not(.rux-button--icon) {
          border: 1px solid #0462ab;
          background-color: var(--button-background);
          box-shadow: inset 0 1px 2px 2px rgba(0, 0, 0, 0.5);
        }

        .rux-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .rux-button--default:not(.rux-button--icon) {
          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        .rux-button[hidden] {
          display: none;
        }

        .rux-button--large {
          height: 3.25rem;
          font-size: 1.125rem;
        }

        .rux-button--small {
          min-width: 2rem;
          height: 1.5rem;
          /* padding: 0.25rem 0.5rem; */
          font-size: 0.775rem;
          line-height: 1.25;
        }

        .rux-button--narrow {
          min-width: 1.125rem;
          padding-left: 0.3125rem;
          padding-right: 0.3125rem;
        }

        .rux-button--narrow {
          outline: 1px solid red !important;
          padding-top: 0.1rem !important;
          padding-bottom: 0.1rem !important;
        }

        .rux-button--large .rux-icon--button {
          height: var(--icon-size--button-large, 24px);
          width: var(--icon-size--button-large, 24px);
        }

        .rux-icon--button {
          vertical-align: top;
          margin-right: 0.25rem;
        }


        /*
                  disable buttons below a certain size from
                  having icons
                */

        .rux-button--small .rux-icon--button,
        .rux-button--narrow .rux-icon--button,
        .rux-button--compact .rux-icon--button,
        .rux-icon--button[hidden] {
          display: none !important;
        }


      </style>

      <button class$="rux-button rux-button--[[type]] [[default]]" disabled$="[[disabled]]">
        <rux-icon icon="[[icon]]" class="rux-icon rux-icon--button" hidden="[[hidden]]"></rux-icon>
        <slot></slot>
      </button>`;
  }
  constructor() {
    super();
  }
  ready() {
    super.ready();
    // set default
    this.default = this.default ? "rux-button--default" : "";
    // hide the icon if there is no icon
    this.hidden = !this.icon;
    // set type to standard if there is no type
    this.type = this.type ? this.type : "standard";
  }
}
customElements.define("rux-button", RuxButton);