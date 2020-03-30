/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-progress';




function trimShadowCruft(dom) {
	return dom.replace(/\<!----\>/g, '');
}

/**
 * @typedef {import('./rux-progress.js').RuxProgress} RuxProgress
 */

describe('RUX Progress', () => {
  it('has the expected shadowDOM', async () => { 
    const el = await fixture(
      html`
        <rux-progress></rux-progress>
      `,
		);
		expect(el).shadowDom.to.equal(`<progress class="rux-progress"></progress>`);
	});
	it('displays a numeric progress label by default', async() => {
		const el = await fixture(
      html`
        <rux-progress value="50"></rux-progress>
      `,
		);
		expect(el.shadowRoot.querySelector('output').hasAttribute('hidden')).to.be.true;
	});
	it('hides numeric progress label by with hide-label attribute', async() => {
		const el = await fixture(
      html`
        <rux-progress value="50" hide-label></rux-progress>
      `,
		);
		expect(el.shadowRoot.querySelector('output').hasAttribute('hidden')).to.be.false;
	});
	it('shows indeterminite progress when no value is set', async() => {
		const el = await fixture(
      html`
        <rux-progress></rux-progress>
      `,
		);
		expect(el).shadowDom.to.equal(`<progress class="rux-progress"></progress>`);
	});
	it('shows determinate progress when a value is set', async() => {
		const el = await fixture(
      html`
        <rux-progress value="50"></rux-progress>
      `,
		);
		expect(el).shadowDom.to.equal(`<progress class="rux-progress" value="50" max="100"></progress><output class="rux-progress__value" hidden="">50%</output>`);
	})
});