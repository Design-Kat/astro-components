/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-modal.js';

function trimShadowCruft(dom) {
	return dom.replace(/\<!----\>/g, '');
}


/**
 * @typedef {import('./rux-modal.js').RuxModal} RuxModal
 */

describe('Astro Modal', () => {
  it('has the expected default shadowDOM', async() => {
    const el = /** @type {RuxModal} */ await fixture(
      html `<rux-modal></rux-modal>`
    );
    
    expect(el).shadowDom.to.equal(`
		<div class="rux-modal-container">
		<dialog
			class="rux-modal"
			role="dialog"
		>
			<header class="rux-modal__titlebar">
				<h1>
				</h1>
			</header>
			<div class="rux-modal__content">
				<div class="rux-modal__message">
				</div>
				<div class="rux-button-group">
					<rux-button
						data-value="false"
						tabindex="0"
					>
						Cancel
					</rux-button>
					<rux-button
						data-value="true"
						hidden=""
						tabindex="0"
					>
					</rux-button>
				</div>
			</div>
		</dialog>
		</div>`);
	});
	it('is visible when the open property is set and hidden when not set', async() =>{
		const el = /** @type {RuxModal} */ await fixture(
      html `<rux-modal open></rux-modal>`
		);		
		const modal = window.getComputedStyle(el);

		el.removeAttribute('open');
		await elementUpdated(el);
		expect(modal.display).to.equal('none');
	});
	it('has a title when the title property is set ', async() =>{
		const el = /** @type {RuxModal} */ await fixture(
      html `<rux-modal title="Modal Title" open></rux-modal>`
		);
		const modalTitle = trimShadowCruft(el.shadowRoot.querySelector('.rux-modal__titlebar h1').innerHTML);
		expect(modalTitle).to.equal(el.title);
	});
	it('displays the modal message', async() => {
		const el = /** @type {RuxModal} */ await fixture(
      html `<rux-modal message="Modal window message"></rux-modal>`
		);
		const modalMessage = trimShadowCruft(el.shadowRoot.querySelector('.rux-modal__message').innerHTML.trim());
		expect(modalMessage).to.equal(el.message);
	});
	it('displays a deny button when deny label is provided', async() => {
		const el = /** @type {RuxModal} */ await fixture(
      html `<rux-modal denyText="Cancel"></rux-modal>`
		);

		const denyButton = el.shadowRoot.querySelectorAll('[data-value="false"]');
		

		expect(denyButton[0].innerHTML.trim()).to.equal(el.denyText);
		expect(denyButton[0].getAttributeNames().includes('hidden')).to.be.false;
	});
	it('displays a comfirmation button when confirmation label is provided', async() => {
		const el = /** @type {RuxModal} */ await fixture(
      html `<rux-modal confirmText="Ok"></rux-modal>`
		);
		const confirmButton = el.shadowRoot.querySelectorAll('[data-value="true"]');

		
		expect(confirmButton[0].innerHTML.trim()).to.equal(el.confirmText);
		expect(confirmButton[0].getAttributeNames().includes('hidden')).to.be.false;
	});
	it('displays a comfirmation button when no explicit confirm or deny provided', async() => {
		const el = /** @type {RuxModal} */ await fixture(
      html `<rux-modal></rux-modal>`
		);
		const confirmButton = el.shadowRoot.querySelectorAll('[data-value="true"]');

		expect(confirmButton[0].getAttributeNames().includes('hidden')).to.be.false;
	});
});
