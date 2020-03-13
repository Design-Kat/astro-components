/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-notification';




function trimShadowCruft(dom) {
	return dom.replace(/\<!----\>/g, '');
}

/**
 * @typedef {import('./rux-notification.js').RuxNotification} RuxNotification
 */

describe('RUX Notification', () => {
  it('has the expected shadowDOM', async () => { 
    const el = await fixture(
      html`
        <rux-notification></rux-notification>
      `,
		);

		expect(el).shadowDom.to.equal(`<div class="rux-notification__message"></div>
		<rux-icon role="button" label="Close notification" icon="close-large" size="small" style="--iconDefaultColor:undefined;"></rux-icon>`);
	});
	it('displays the notification message', async() => {
		const el = await fixture(
      html`
        <rux-notification message="Notification message"></rux-notification>
      `,
		);
		expect(trimShadowCruft(el.shadowRoot.querySelector('.rux-notification__message').innerHTML.trim())).to.equal(el.message)
	});
	it('changes background color based on status', async() => {
		const el = await fixture(
      html`
        <rux-notification status="critical" message="Notification message"></rux-notification>
      `,
		);
		expect(window.getComputedStyle(el).backgroundColor).to.equal('rgb(255, 100, 100)');

		/*
		TODO: Change color here and get updated background color
		*/
	});
	it('is hidden by default', async() => {
		const el = await fixture(
      html`
        <rux-notification></rux-notification>
      `,
		);
		expect(parseInt(window.getComputedStyle(el).top)).to.not.equal(0);
	});
	it('is visible when open property is set', async() => {
		const el = await fixture(
      html`
        <rux-notification open></rux-notification>
      `
		);
		expect(parseInt(window.getComputedStyle(el).top)).to.equal(0);
	});
	it('closes automatically after user determined period of time', async() => {
		const el = await fixture(
      html`
        <rux-notification closeafter="1" open></rux-notification>
      `
		);
				
		setTimeout(() => {
			expect(el.open).to.not.be.true;
		}, 1500);

	});
})