import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxAccordion extends PolymerElement {
  static get properties() {
    return {
      open: {
        type: Boolean,
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
        border-style: solid;
        border-color: var(--accordion-item-border-color, rgb(40, 63, 88));
        border-width: var(--accordion-item-border-width, 0 0 1px 0);
      }
      
      .rux-accordion__label {
        flex-grow: 1;
        padding: var(--accordion-label-padding, .5rem .5rem .5rem 1rem);
        display: block;
        color: var(--accordion-label-color, rgb(255,255,255));

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        background-color: var(--accordion-closed-label-background, transparent);
        pointer-events: all;
        transition: background .125s;
      }

      .rux-accordion__label::-webkit-details-marker {
        display:none;
      }
      
      .rux-accordion__content {
        padding: var(--accordion-content-padding, 1rem);
        color: var(--accordion-content-color, rgb(255,255,255));
        white-space: normal;
        overflow: hidden;
        background: var(--accordion-content-background, rgb(20, 32, 44));
      }
      
      .rux-accordion__label:hover {
        background-color: var(--accordion-hover-label-background,  gb(40, 63, 88));
      }

      [open] .rux-accordion__label {
        background-color: var(--accordion-open-label-background, rgb(40, 63, 88));
      }
      
      
      </style>

      <details open$="[[ open ]]" class="rux-accordion__item">
        <summary class="rux-accordion__label">
          <slot name="label"></slot>
        </summary>
        <div class="rux-accordion__content">
          <slot name="content"></slot>
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
