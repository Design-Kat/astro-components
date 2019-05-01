import { LitElement, html } from 'lit-element';

export class RuxStatus extends LitElement {
  static get properties() {
    return {
      status: {
        type: String,
      },
      label: {
        type: String,
      },
    };
  }

  render() {
    return html`
      <canvas height="64" width="64" id="status" aria-label="${this.status}"></canvas>
      <p>${this.status}</p>
    `;
  }

  constructor() {
    super();

    this.status = 'null';
    this.label = 'null';
  }

  updated() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    switch (this.status) {
      case 'critical':
        this.context.fillStyle = 'red';
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(16, 0);
        this.context.lineTo(8, 16);

        this.context.fill();

        break;
      case 'serious':
        this.context.fillStyle = 'orange';
        this.context.beginPath();
        this.context.moveTo(0, 8);
        this.context.lineTo(8, 16);
        this.context.lineTo(16, 8);
        this.context.lineTo(8, 0);
        this.context.fill();
        break;
      case 'error':
        this.context.fillStyle = 'yellow';
        this.context.fillRect(2, 2, 13, 13);
        break;
      case 'normal':
        this.context.fillStyle = 'green';
        this.context.beginPath();
        this.context.arc(8, 8, 8, 0, 2 * Math.PI);
        this.context.fill();

        // this.context.fillRect(0, 0, 16, 16);
        break;
      case 'standby':
        this.context.lineWidth = '4';
        this.context.strokeStyle = 'aqua';
        this.context.beginPath();
        this.context.arc(8, 8, 6, 0, 2 * Math.PI);
        this.context.stroke();
        break;
      case 'off':
        this.context.fillStyle = 'grey';
        this.context.beginPath();
        this.context.arc(8, 8, 4, 0, 2 * Math.PI);
        this.context.fill();
        break;
      default:
        break;
    }
  }

  firstUpdated() {
    this.canvas = this.shadowRoot.getElementById('status');
    this.context = this.canvas.getContext('2d');
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

customElements.define('rux-status', RuxStatus);
