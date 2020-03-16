/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-slider.js';

function trimShadowCruft(dom) {
	return dom.replace(/\<!----\>/g, '');
}


/**
 * @typedef {import('./rux-slider.js').RuxSlider} RuxSlider
 */

describe('Astro Slider/Range', () => {
  it('has the expected default shadowDOM', async() => {
    const el = /** @type {RuxSlider} */ await fixture(
      html `<rux-slider></rux-slider>`
    );
    
    expect(el).shadowDom.to.equal(`
    <div class="rux-slider">
  		<div class="rux-form-field rux-form-field--small rux-slider__label">
    		<label
      		class="rux-label"
      		hidden=""
      		id="ruxSlider"
    			>
    		</label>
    		<input
      		aria-labelledby="ruxSlider"
      		class="rux-input rux-slider__input"
      		max="100"
      		min="0"
      		step="1"
      		type="number"
    		>
  		</div>
  		<div class="rux-slider__control">
    		<input
      		aria-labelledby="ruxSlider"
      		class="rux-range"
      		max="100"
      		min="0"
      		step="1"
      		type="range"
    		>
    	<ol
      	class="rux-slider__control__labels"
      	data-count="0"
      	hidden=""
    		>
    	</ol>
  	</div>
	</div>`);
	});
	it('shows label when label property is set', async() =>{
		const el = /** @type {RuxSlider} */ await fixture(
      html `<rux-slider label="Astro Slider"></rux-slider>`
		);

		const label = el.shadowRoot.querySelector('.rux-label');

		expect(trimShadowCruft(label.innerHTML)).to.equal(el.label);
		expect(label.getAttribute('hidden')).to.not.be.true;
	});
	it('input and range elements are disabled with disabled property is set', async() => {
		const el = /** @type {RuxSlider} */ await fixture(
      html `<rux-slider disabled></rux-slider>`
		);

		const input = el.shadowRoot.querySelector('input[type="number"]');
		const range = el.shadowRoot.querySelector('input[type="range"]');
		expect(input.hasAttribute('disabled')).to.be.true;
		expect(range.hasAttribute('disabled')).to.be.true;
	});
	it('hides input when hideInput is set', async() => {
		const el = /** @type {RuxSlider} */ await fixture(
      html `<rux-slider hideInput></rux-slider>`
		);

		const input = el.shadowRoot.querySelector('input[type="number"]');
		expect(input.getAttribute('hidden')).to.not.be.true;

	});
	it('range element value matches input element value', async() => {
		const el = /** @type {RuxSlider} */ await fixture(
      html `<rux-slider></rux-slider>`
		);
		
		const input = el.shadowRoot.querySelector('input[type="number"]');
		const range = el.shadowRoot.querySelector('input[type="range"]');

		expect(input.value === range.value);
		el.val = 25;
		await elementUpdated(el);
		expect(input.value === range.value);

		el.val = el.max;
		await elementUpdated(el);
		expect(input.value === range.value);

		el.val = Math.floor(Math.random()* el.max);
		await elementUpdated(el);
		expect(input.value === range.value);

	});
	it('shows axis labels when axisLabels property is set', async() =>{
		const el = /** @type {RuxSlider} */ await fixture(
      html `<rux-slider axisLabels=["Low","Medium","High"]></rux-slider>`
		);

		const labels = el.shadowRoot.querySelector('.rux-slider__control__labels');

		expect(labels.hasAttribute('hidden')).to.be.false;
		
		el.axisLabels.forEach((label, index) => {
			expect(label).to.equal(trimShadowCruft(labels.children[index].innerHTML));			
		});
	});
});
