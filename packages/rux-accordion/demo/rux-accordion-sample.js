import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxTree } from "../rux-tree.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxAccordionSample extends PolymerElement {
  static get template() {
    return html`
      <style>
      
        rux-accordion {

          --accordion-label-padding: .5rem .5rem .5rem 1rem;
          --accordion-label-color: var(--colorWhite, rgb(255,255,255));
          --accordion-content-padding: 1rem;
          --accordion-content-color: var(--colorWhite, rgb(255,255,255));
          --accordion-item-border-color: rgb(40, 63, 88);
          --accordion-item-border-width: 0 0 1px 0;
          
          --accordion-closed-label-background: transparent;
          --accordion-open-label-background: var(--colorTertiary, rgb(40, 63, 88));
          --accordion-hover-label-background: var(--colorTertiary, rgb(40, 63, 88));
          --accordion-content-background: var(--logHeaderBackgroundColor, rgb(20, 32, 44));

          
          width: 300px;
        }

        .container {
          display: flex;
          justify-content: center;
        }
      </style>
      
      <div class="container">
        <rux-accordion>
          <span slot="label">Accordion 1</span>
          <span slot="content">I am some content HTML</span>
        </rux-accordion>

        <rux-accordion>
          <span slot="label">Accordion 2</span>
          <span slot="content">I am some other content HTML</span>
        </rux-accordion>
      </div>
      
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Accordion Component"
      }
    };
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
  ready() {
    super.ready();
  }
}
customElements.define("rux-accordion-sample", RuxAccordionSample);
