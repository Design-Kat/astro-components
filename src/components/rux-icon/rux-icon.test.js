/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-icon.js';


/**
 * @typedef {import('./rux-icon.js').RuxIcon} RuxIcon
 */

describe('RUX Icon', () => {
  it('has the expected default shadowDOM', async () => {
    const el = await fixture(
      html`
        <rux-icon></rux-icon>
      `,
		);
		

		/*
		TODO: undefined should not be the default icon
		TODO: need a better default icon set location
		*/
		expect(el).shadowDom.to.equal(`
			<span id="rux-icon" title="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet" focusable="false">
					<use href="/icons/astro.svg#undefined"></use>
				</svg>
			</span>`)
		});
	it('should show the correct icon', async() => {
			const el = await fixture(
				html`
					<rux-icon icon="equipment"></rux-icon>
				`,
			);

			const [library, icon] = el.shadowRoot.querySelector('use').getAttribute('href').split('#');
			expect(icon).to.equal(el.icon);
		});
	it('should load an external icon library', async() => {
			const el = await fixture(
				html`
					<rux-icon library="../static/icons.svg" icon="equipment"></rux-icon>
				`,
			);
			
			
		});
	it('should apply an accessible label when the label property is set', async() => {
		const el = await fixture(
      html`
        <rux-icon label="Icon description"></rux-icon>
      `,
		);
		expect(el.shadowRoot.querySelector('#rux-icon').getAttribute('title')).to.equal(el.label)
	});
	it('set icon size based on size properties', async() => {
		let size = "extra-small";

		const el = await fixture(
      html`
        <rux-icon size="extra-small"></rux-icon>
      `,
		);
	
		expect(el.shadowRoot.querySelector('#rux-icon').offsetWidth).to.equal(16);
		


		// test small size
		el.size = 'small';
		await elementUpdated(el);
		expect(el.shadowRoot.querySelector('#rux-icon').offsetWidth).to.equal(32);
		
		// test normal size
		el.size = 'normal';
		await elementUpdated(el);
		expect(el.shadowRoot.querySelector('#rux-icon').offsetWidth).to.equal(44);

		// test large size
		el.size = 'large';
		await elementUpdated(el);
		expect(el.shadowRoot.querySelector('#rux-icon').offsetWidth).to.equal(64);
		
	});
  it('changes color when color property is set', async() => {
		const el = await fixture(
      html`
        <rux-icon color="#ff0000"></rux-icon>
      `,
		);

		

		// test setting rgb color
		let color = "rgb(0,255,0)"; 
		el.color = color;
		await elementUpdated(el);
		expect(window.getComputedStyle(el).getPropertyValue('--iconDefaultColor')).to.equal(color);
		expect(window.getComputedStyle(el.shadowRoot.querySelector('svg')).fill).to.equal('rgb(0, 255, 0)');
		
		// test hex color
		color = "#0000ff"; 
		el.color = color;
		await elementUpdated(el);
		expect(window.getComputedStyle(el).getPropertyValue('--iconDefaultColor')).to.equal(color);
		expect(window.getComputedStyle(el.shadowRoot.querySelector('svg')).fill).to.equal('rgb(0, 0, 255)');

		
		// test hsl color
		color = "hsl(0,100%,50%)"; 
		el.color = color;
		await elementUpdated(el);
		expect(window.getComputedStyle(el).getPropertyValue('--iconDefaultColor')).to.equal(color);
		expect(window.getComputedStyle(el.shadowRoot.querySelector('svg')).fill).to.equal('rgb(255, 0, 0)');

		// test html color
		color = "red"; 
		el.color = color;
		await elementUpdated(el);
		expect(window.getComputedStyle(el).getPropertyValue('--iconDefaultColor')).to.equal(color);
		expect(window.getComputedStyle(el.shadowRoot.querySelector('svg')).fill).to.equal('rgb(255, 0, 0)');


	})
});

