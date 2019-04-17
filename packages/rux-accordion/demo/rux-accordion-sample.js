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

          --accordionLabelPadding: .5rem .5rem .5rem 1rem;
          --accordionLabelColor: var(--colorWhite, rgb(255,255,255));
          --accordionContentPadding: 1rem;
          --accordionContentColor: var(--colorWhite, rgb(255,255,255));
          --accordionItemBorderColor: rgb(40, 63, 88);
          --accordionItemBorderWidth: 0 0 1px 0;
          
          --accordionClosedLabelBackground: transparent;
          --accordionOpenLabelBackground: var(--colorTertiary, rgb(40, 63, 88));
          --accordionHoverLabelBackground: var(--colorTertiary, rgb(40, 63, 88));
          --accordionContentBackground: var(--logHeaderBackgroundColor, rgb(20, 32, 44));

          
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
