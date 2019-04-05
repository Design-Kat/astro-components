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
          width: 300px;
        }

        .container {
          display: flex;
          justify-content: center;
        }
      </style>

      <div class="container">
        <rux-accordion label="Accordion Label">
          Accordion Content
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
