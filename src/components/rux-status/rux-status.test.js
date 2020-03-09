/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-status.js';

/**
 * @typedef {import('./rux-status.js').RuxStatus} RuxStatus
 */

describe('Astro Status Indicator', () => {
  it('has the expected default shadowDOM', async() => {
    const el = await fixture(
      html `<rux-status status="off"></rux-status>`
		);
		expect(el).shadowDom.to.equal(`<div></div>`);
		});
});
