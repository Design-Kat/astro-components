import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxAccordion extends PolymerElement {
  static get properties() {
    return {
      label: {
        type: String,
        notify: true
      }
    };
  }

  static get template() {
    return html`
      <style>
      :host,
      .rux-accordion {
        display: inline-block;
        box-sizing: border-box;
      
        width: 100%;
        padding: 0;
        margin: 0;
      
        font-size: 1rem;
      
        background-color: var(--accordionBackgroundColor, rgb(30, 47, 66));
      
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;        
      }
      
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      .rux-accordion__item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: stretch;
        margin: 0;
      }
      
      .rux-accordion__label {
        flex-grow: 1;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        display: block;
      
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: calc(100% - 12px);
        background-color: transparent;
      }

      .rux-accordion__label::-webkit-details-marker {
        display:none;
      }
      
      .rux-accordion__content {
        padding: 0.5rem;
        padding: .5rem .5rem .5rem 1rem;
        white-space: normal;
        overflow: hidden;
        width: calc(100% - 12px);
        background-color: transparent;
      }
                
      [open] .rux-accordion__label {
        background-color: var(--accordionSelectedBackgroundColor, rgb(0, 68, 107));
        box-shadow: inset 5px 0 var(--accordionSelectedAccentColor, rgb(77, 172, 255));
      
        color: var(--accordionSelectedTextColor, rgb(255, 255, 255));
      }
      
      
      </style>

      <details class="rux-accordion__item">
        <summary class="rux-accordion__label" title="[[label]]">
          [[label]] 
        </summary>
        <div class="rux-accordion__content">
          <slot></slot>
        </div>
      </details>
        
      `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

}
customElements.define("rux-accordion", RuxAccordion);
