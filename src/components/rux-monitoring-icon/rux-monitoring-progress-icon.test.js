/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-monitoring-icon';
import './rux-monitoring-progress-icon.js';



/**
 * @typedef {import('./rux-monitoring-progress-icon.js').RuxMonitoringProgressIcon} RuxMonitoringProgressIcon
 */

describe('RUX Monitoring Progress Icon', () => {
  it('status changes with progress', async () => {
    const el = await fixture(
      html`
        <rux-monitoring-progress-icon
					label="Progress Icon"
					progress="0"
					max="100"></rux-monitoring-progress-icon>
      `,
		);


		expect(el).status.tp.equal('off');

		el.progress = "18";
		await elementUpdated(el);
		expect(el).status.tp.equal('standby');

		el.progress = "40";
		await elementUpdated(el);
		expect(el).status.tp.equal('normal');

		el.progress = "50";
		await elementUpdated(el);
		expect(el).status.tp.equal('caution');

		el.progress = "69";
		await elementUpdated(el);
		expect(el).status.tp.equal('serious');

		el.progress = "84";
		await elementUpdated(el);
		expect(el).status.tp.equal('critical');
		
	});
});

