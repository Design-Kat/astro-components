import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
// import { RuxIcon } from "../rux-icon/rux-icon.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxButton extends PolymerElement {
  static get properties() {
    return {
      size: String,
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
        display: inline-flex;
        
        
        /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
      }
      
      *[hidden] {
        display: none !important;
      }
      
      .rux-button-group {
        display: flex;
      }
      
      .rux-button-group .rux-button:not(:last-child) {
        margin-right: 0.625rem;
      }
      
      /* Global Button Styles */
      .rux-button {
        display: flex;
        position: relative;
      
        margin: 0;
        padding: 0 1rem;
      
        height: 2.125rem;
        min-width: 2.25rem;
        /* max-width: 10.125rem; */
      
        border-radius: var(--buttonBorderRadius, 3px);
      
        color: var(--buttonTextColor, #fff);
        font-family: var(--fontFamily, "Open Sans");
        font-size: 1rem;
      
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      
        justify-content: center;
        align-items: center;
      
        user-select: none;
      }
      
      /* 
        
        Disabled States
      
      */
      /* disabled state */
      .rux-button:disabled {
        opacity: var(--disabledOpacity, 0.4);
        cursor: var(--disabledCursor, not-allowed);
      }
      
      .rux-button:focus {
        outline: none;
      }
      .rux-button:not(.rux-button--outline) {
        border: 1px solid var(--buttonBackgroundColor, rgb(0, 90, 143));
        background-color: var(--buttonBorderColor, rgb(0, 90, 143));
        box-shadow: var(
          --controlBoxShadow,
          0 2px 4px rgba(0, 0, 0, 0.14),
          0 3px 4px rgba(0, 0, 0, 0.12),
          0 1px 5px rgba(0, 0, 0, 0.2)
        );
      }
      
      .rux-button--default {
        border-color: var(--buttonDefaultBorderColor, rgb(255, 255, 255)) !important;
      }
      
      /* Outline Button Specific Styles */
      .rux-button--outline {
        color: var(--buttonOutlineTextColor, rgb(255, 255, 255));
        background-color: var(--buttonOutlineBackgroundColor, transparent);
        border: 1px solid var(--buttonOutlineBorderColor, rgb(0, 90, 143));
      }
      
      /* 
        
        Press/Active States
      
      */
      .rux-button:active:not([hover]):not([disabled]):not(.rux-button--outline) {
        border-color: var(--buttonActiveBorderColor, rgb(0, 90, 143)) !important;
        background-color: var(
          --buttonActiveBackgroundColor,
          rgb(0, 90, 143)
        ) !important;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14) !important;
      }
      
      /* 
        
        Hover States
      
      */
      .rux-button:hover:not([active]):not([disabled]):not(.rux-button--outline) {
        border-color: var(--buttonHoverBorderColor, rgb(58, 129, 191));
        background-color: var(--buttonHoverBackgroundColor, rgb(58, 129, 191));
        box-shadow: var(
          --buttonHoverBoxShadow,
          0 8px 10px 1px rgba(0, 0, 0, 0.14),
          0 3px 14px 3px rgba(0, 0, 0, 0.12),
          0 4px 5px rgba(0, 0, 0, 0.2)
        );
      }
      
      .rux-button--outline:hover:not([disabled]) {
        color: var(--buttonOutlineTextColor, rgb(255, 255, 255));
        background-color: var(
          --buttonOutlineHoverBackgroundColor,
          rgba(30, 47, 66, 0.75)
        );
        border-color: var(--buttonOutlineHoverBorderColor, rgb(58, 129, 191));
      }
      
      /* 
        
        Icons
      
      */
      
      .rux-button--small {
        font-size: var(--smallLabelTextSize, 0.875rem);
        height: 1.625rem;
        padding: 0 1rem;
        line-height: 1;
      }
      
      .rux-button--large {
        font-size: var(--largeLabelTextSize, 1.125rem);
        height: 2.875rem;
        /* min-width: 2.875rem; */
        padding: 0 1.5rem;
      }
      
      .rux-button__icon {
        height: 1.5rem;
        width: 1.5rem;
      
        margin-right: 0.625rem;
        margin-left: -0.625rem;
      }
      
      .rux-button--icon-only .rux-button__icon {
        margin-left: -0.625rem;
        margin-right: -0.625rem;
      }
      
      .rux-button--large.rux-button--icon-only .rux-button__icon {
        margin-left: -1rem;
        margin-right: -1rem;
      }
      
      .rux-button--small .rux-button__icon {
        height: 0.875rem;
        width: 0.875rem;
        outline: 1px solid red;
      }
      
      .rux-button--large .rux-button__icon {
        height: 1.75rem;
        width: 1.75rem;
        margin-left: -0.8rem;
        /* margin: -0.65rem 0.25rem -0.3rem calc((1.5rem - 0.625rem) * -1); */
      }
      
      .rux-button__icon .rux-icon {
        height: auto;
        width: 100%;
        fill: var(--buttonTextColor, rgb(255, 255, 255));
      }
      
      .rux-button.rux-button--critical,
      .rux-button.rux-button--critical:active:not([hover]):not([disabled]):not(.rux-button--outline) {
        background-color: var(--colorCriticalDarken1, rgb(191, 36, 36)) !important;
        border-color: var(--colorCriticalDarken1, rgb(191, 36, 36)) !important;
      }
      
      .rux-button.rux-button--critical:hover:not([active]):not([disabled]) {
        background-color: var(--colorCritical, rgb(255, 48, 48));
        border-color: var(--colorCritical, rgb(255, 48, 48));
      }
  </style>      

      <button class$="rux-button rux-button--[[size]] rux-button--[[type]] [[default]]" disabled$="[[disabled]]">
        <rux-icon icon="[[icon]]" color="#fff" class="rux-icon rux-button__icon" hidden="[[hidden]]"></rux-icon>
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
    // set type to standard if there is no type
    this.size = this.size ? this.size : "standard";
  }
}
customElements.define("rux-button", RuxButton);