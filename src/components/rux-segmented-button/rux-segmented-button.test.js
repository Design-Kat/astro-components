/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-segmented-button.js';
import RuxUtils from '../rux-utils/datetime.js';

/**
 * @typedef {import('./rux-segmented-button.js').RuxSegmentedButton} RuxSegmentedButton
 */

describe('RUX Segmented Button', () => {
  it('has the expected default shadowDOM', async() => {
    const el = /** @type {RuxSegmentedButton} */ await fixture(
      html `<rux-segmented-button></rux-segmented-button>`
    );
    
    expect(el).shadowDom.to.equal(`
    <ul class="rux-segmented-buttons">
			<li class="rux-segmented-button">
				<input
		  		checked=""
		  		data-label="No data passed"
		  		id="no-data-passed"
		  		name="rux-group"
		  		type="radio"
				>
					<label for="no-data-passed">No data passed</label>
				</li>
      </ul>`);
	});
	it('creates the correct label for each segment', async() => {
		const myButtonSegments = [
			{ label: "First Segment" },
			{ label: "Second Segment", selected: true },
			{ label: "Third Segment" }
		];

		const el = /** @type {RuxSegmentedButton} */ await fixture(
      html `<rux-segmented-button .data="${myButtonSegments}"></rux-segmented-button>`
		);

		el.shadowRoot.querySelectorAll('.rux-segmented-button').forEach((segment, index) => {
			 expect(el.data[index].label).to.equal(segment.querySelector('label').innerHTML.trim());
		})
	});
	it('selected item has corresponding radio button checked', async() => {
		const myButtonSegments = [
			{ label: "First Segment" },
			{ label: "Second Segment", selected: true },
			{ label: "Third Segment" }
		];

		const el = /** @type {RuxSegmentedButton} */ await fixture(
      html `<rux-segmented-button .data="${myButtonSegments}"></rux-segmented-button>`
    );
		expect(el.shadowRoot.querySelector('[data-label="Second Segment"]').checked).to.be.true;
	});
	it('updating selected item data updates corresponding radio buttons', async() => {
		const myButtonSegments = [
			{ label: "First Segment" },
			{ label: "Second Segment", selected: true },
			{ label: "Third Segment" }
		];

		const el = /** @type {RuxSegmentedButton} */ await fixture(
      html `<rux-segmented-button .data="${myButtonSegments}"></rux-segmented-button>`
    );

		expect(el.shadowRoot.querySelector('[data-label="First Segment"]').checked).to.be.false;
		expect(el.shadowRoot.querySelector('[data-label="Second Segment"]').checked).to.be.true;
		expect(el.shadowRoot.querySelector('[data-label="Third Segment"]').checked).to.be.false;

		myButtonSegments[0].selected = true;

		el.data = myButtonSegments;

		await elementUpdated(el);
				
		expect(el.shadowRoot.querySelector('[data-label="First Segment"]').checked).to.be.true;
		expect(el.shadowRoot.querySelector('[data-label="Second Segment"]').checked).to.be.false;
		expect(el.shadowRoot.querySelector('[data-label="Third Segment"]').checked).to.be.false;
	});
});
