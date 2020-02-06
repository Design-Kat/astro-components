/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-button.js';

/**
 * @typedef {import('./rux-button.js').RuxButton} RuxButton
 */

describe('RUX Button', () => {
  it('renders the correct ShadowDOM elements', async () => {
    const el = await fixture(
      html`
        <rux-button></rux-button>
      `,
    );

    expect(el).shadowDom.to.equal(`
    <button class="rux-button">
      <rux-icon
        color="#ffffff"
        hidden=""
        icon=""
        style="--iconDefaultColor:#ffffff;"></rux-icon>
      <slot></slot>
    </button>`);
  });
  it('renders properly when disabled attribute is set', async () => {
    const el = await fixture(
      html`
        <rux-button disabled></rux-button>
      `,
    );
    const button = el.shadowRoot.querySelectorAll('button')[0];
    expect(button).to.have.property('disabled');
  });
});
