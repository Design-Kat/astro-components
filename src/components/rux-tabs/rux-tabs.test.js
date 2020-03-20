/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-tabs.js';

/**
 * @typedef {import('./rux-button.js').RuxButton} RuxButton
 */

describe('Astro tabs', () => {
  it('has the expected default shadowDOM', async() => {
    const el = /** @type {RuxTabs} */ await fixture(
      html `<rux-tabs id="tab-set-id-1">
      <rux-tab id="tab-id-1">Tab 1</rux-tab>
      <rux-tab id="tab-id-2">Tab 2</rux-tab>
      <rux-tab id="tab-id-3">Tab 3</rux-tab>
    </rux-tabs>`
    );
    
    expect(el).shadowDom.to.equal(`
    <slot>
    </slot>
`);
  });
});
