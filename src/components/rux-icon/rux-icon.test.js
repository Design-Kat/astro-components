/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-icon.js';
import { property } from 'lit-element';

/**
 * @typedef {import('./rux-icon.js').RuxIcon} RuxIcon
 */

describe('RUX Icon', () => {
  it('Renders the correct ShadowDOM elements', async () => {
    const el = await fixture(
      html`
        <rux-icon label="Internal Library" icon="antenna"></rux-icon>
      `,
    );

    expect(el).shadowDom.to.equal(`
    <span id="rux-icon" title="Internal Library">
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
  it('Loads Icons from an external source', async () => {
    const el = await fixture(
      html`
        <rux-icon
          label="test label"
          library="../icons/astro.svg"
          icon="antenna"
        ></rux-icon>
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
          <use href="../icons/astro.svg#antenna"></use>
        </svg>
      </span>`);
  });
  it('Small to', async () => {
    const el = await fixture(
      html`
        <rux-icon
          label="Internal Library"
          icon="antenna"
          color="#ff0000"
        ></rux-icon>
      `,
    );

    expect(el).to.have.attribute('style', '--iconDefaultColor:#ff0000;');
  });
});
