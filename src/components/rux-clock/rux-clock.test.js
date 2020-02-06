/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-clock.js';

/**
 * @typedef {import('./rux-clock.js').RuxClock} RuxClock
 */

describe('RUX Clock', () => {
  it('shows timezone and day of year by default', async () => {
    const el = await fixture(
      html`
        <rux-clock></rux-clock>
      `,
    );
    expect(el).to.not.have.property('hidetimezone');
    expect(el).to.not.have.property('hidedate');
  });
  it('shows UTC time by default', async () => {
    const el = await fixture(
      html`
        <rux-clock></rux-clock>
      `,
    );

    const x = new Date();
    const u = `${x.getUTCHours()}:${x.getUTCMinutes()}:${x.getUTCSeconds()} UTC`;
    expect(el.time).to.equal(u);
    console.log('x', u);
  });
});
