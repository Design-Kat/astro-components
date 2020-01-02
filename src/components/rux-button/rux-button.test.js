/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-button.js';

/**
 * @typedef {import('./rux-button.js').RuxButton} RuxButton
 */

describe('RUX Button', () => {
  it('renders the correct ShadowDOM elements', async () => {
    const el = /** @type {A11yInput} */ (await fixture(
      html`
        <rux-button></rux-button>
      `,
    ));
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
});
