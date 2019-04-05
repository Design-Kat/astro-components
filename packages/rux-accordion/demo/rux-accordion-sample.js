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
