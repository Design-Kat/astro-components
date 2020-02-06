/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-icon.js';

/**
 * @typedef {import('./rux-icon.js').RuxIcon} RuxIcon
 */

describe('RUX Icon', () => {
  it('renders the correct ShadowDOM elements', async () => {
    const el = await fixture(
      html`
        <rux-icon label="test label" icon="antenna"></rux-icon>
      `,
    );

    expect(el).shadowDom.to.equal(`
    <span id="rux-icon" title="test label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <use href="#antenna"></use>
        </svg>
      </span>`);
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
