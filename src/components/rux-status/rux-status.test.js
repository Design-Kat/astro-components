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
	it('is accessible', async() => {
		const el = await fixture(
      html `<rux-status status="off"></rux-status>`
		);

		expect(el).shadowDom.to.be.accessible;
	});
	it('can instantiate an element with properties', async () => {
		const el = await fixture(
			html`
				<rux-status .status=${'critical'}></rux-status>
			`,
		);
		expect(el.status).to.equal('critical');
	});
	it('status property updates with attribute change', async () => {
		const el = await fixture(
      html `<rux-status .status=${'off'}></rux-status>`
		);
		expect(el.status).to.eq('off');

		el.status = 'standby';
		await elementUpdated(el);
		expect(el.status).to.equal('standby');

		el.status = 'normal';
		await elementUpdated(el);
		expect(el.status).to.equal('normal');

		el.status = 'caution';
		await elementUpdated(el);
		expect(el.status).to.equal('caution');

		el.status = 'serious';
		await elementUpdated(el);
		expect(el.status).to.equal('serious');

		el.status = 'critical';
		await elementUpdated(el);
		expect(el.status).to.equal('critical');

	});
});
