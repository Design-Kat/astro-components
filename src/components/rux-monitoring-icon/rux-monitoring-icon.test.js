/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-monitoring-icon.js';
import './rux-monitoring-progress-icon';


function trimShadowCruft(dom) {
	return dom.replace(/\<!----\>/g, '');
}

/**
 * @typedef {import('./rux-monitoring-icon.js').RuxIcon} RuxIcon
 */

describe('RUX Monitoring Icon', () => {
  it('has the expected default shadowDOM', async () => {
    const el = await fixture(
      html`
        <rux-monitoring-icon></rux-monitoring-icon>
      `,
		);

		expect(el).shadowDom.to.equal(`
		<div id="rux-advanced-status__icon" class="rux-advanced-status" title="0  ">
			<div class="rux-advanced-status__icon-group">
  			<rux-status status="normal"></rux-status>
        <rux-icon icon="" class="rux-status--normal" style="--iconDefaultColor:undefined;"></rux-icon>
				<div class="rux-advanced-status__badge" hidden=""></div>    
			</div>
			<div class="rux-advanced-status__label">
				<span class="rux-advanced-status__sublabel" hidden=""><!----><!----></span>
			</div>
		</div>`);
		
	});
	
	it('should update status', async() => {
			const el = await fixture(
				html`
					<rux-monitoring-icon
						status="critical"
						label="Monitoring Icon Label"
						sublabel="Sublabel"
						notifications=10
						icon="equipment"></rux-monitoring-icon>
				`,
			);

			// console.log(el.shadowRoot.querySelector('rux-status').getAttribute('status'));
			expect(el.shadowRoot.querySelector('rux-status').getAttribute('status')).to.equal(el.status);

			el.status = "normal";
			await elementUpdated(el);
			expect(el.shadowRoot.querySelector('rux-status').getAttribute('status')).to.equal(el.status);

	});

	it('should show the correct label', async() => {
		const el = await fixture(
			html`
				<rux-monitoring-icon
					status="critical"
					label="Monitoring Icon Label"
					sublabel="Sublabel"
					notifications=10
					icon="equipment"></rux-monitoring-icon>
			`,
		);

		/*
		TODO: wrap the label in its own span

		*/
		expect(trimShadowCruft((el).shadowRoot.querySelector('.rux-advanced-status__label').innerHTML.trim())).to.equal(el.sublabel);
	
	el.sublabel = "Updated Label";
	await elementUpdated(el);
	expect(trimShadowCruft((el).shadowRoot.querySelector('.rux-advanced-status__label').innerHTML.trim())).to.equal(el.sublabel);
		
});

it('should show the correct sublabel', async() => {
	const el = await fixture(
		html`
			<rux-monitoring-icon
				status="critical"
				label="Monitoring Icon Label"
				sublabel="Sublabel"
				notifications=10
				icon="equipment"></rux-monitoring-icon>
		`,
	);

	expect(trimShadowCruft((el).shadowRoot.querySelector('.rux-advanced-status__sublabel').innerHTML.trim())).to.equal(el.sublabel);
	
	el.sublabel = "Updated";
	await elementUpdated(el);
	expect(trimShadowCruft((el).shadowRoot.querySelector('.rux-advanced-status__sublabel').innerHTML.trim())).to.equal(el.sublabel);
});

it('should show apprpriate notifications', async() => {

	const el = await fixture(
		html`
			<rux-monitoring-icon
				status="critical"
				label="Monitoring Icon Label"
				sublabel="Sublabel"
				notifications=10
				icon="equipment"></rux-monitoring-icon>
		`,
	);

	
	expect(el.shadowRoot.querySelector('.rux-advanced-status__badge').innerHTML.trim()).to.equal(el.notifications.toString())

	el.notifications = 1435;
	await elementUpdated(el);
	expect(el.shadowRoot.querySelector('.rux-advanced-status__badge').innerHTML.trim()).to.equal("1K");

	el.notifications = 10457893;
	await elementUpdated(el);
	expect(el.shadowRoot.querySelector('.rux-advanced-status__badge').innerHTML.trim()).to.equal("10.5M");

	el.notifications = 1045789303939300;
	await elementUpdated(el);
	expect(el.shadowRoot.querySelector('.rux-advanced-status__badge').innerHTML.trim()).to.equal("∞");

});



});

