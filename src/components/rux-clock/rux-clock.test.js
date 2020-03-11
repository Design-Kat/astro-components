/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-clock.js';
import RuxUtils from '../rux-utils/datetime.js';

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
  it('hides day of year when hideDate attribute is set', async() => {
    const el = await fixture(
      html`
        <rux-clock hidedate></rux-clock>
      `,
    );
    expect(el.shadowRoot.querySelector('.rux-clock__day-of-the-year')).to.not.exist;
  });
  it('shows acquisition of signal (AOS) when aos property provided', async() => {
    const el = await fixture(
      html`
        <rux-clock aos="1557503698781"></rux-clock>
      `,
    );
    expect(el.shadowRoot.querySelector('.rux-clock__aos')).to.exist;
  });
  it('shows loss of signal (LOS) when aos property provided', async() => {
    const el = await fixture(
      html`
        <rux-clock los="2019-05-10T16:21:12.000Z"></rux-clock>
      `,
    );
    expect(el.shadowRoot.querySelector('.rux-clock__los')).to.exist;
  })
  it('will transform a javascript date to UTC', async() => {
    
    
    const dates = [-248069818000, 1192422487000, Date.now()] ;
    
    expect(RuxUtils.formatClockTimeUTC(dates[0], 'UTC', true)).to.equal('19:43:02');
    expect(RuxUtils.formatClockTimeUTC(dates[1], 'UTC', true)).to.equal('04:28:07');
    expect(RuxUtils.formatClockTimeUTC(dates[2], 'UTC', true)).to.equal(`${new Date(dates[2]).getUTCHours().toString().padStart(2, '0')}:${new Date(dates[2]).getUTCMinutes().toString().padStart(2, '0')}:${new Date(dates[2]).getUTCSeconds().toString().padStart(2, '0')}`);

  });
  it('will transform an ISO 8601 datetime string to UTC', async() => {
    const el = await fixture(
      html`
        <rux-clock aos="2019-05-10T16:21:12.000Z"></rux-clock>
      `,
    );

    
    const dates = ['1962-02-20T19:43:02Z', '2007-10-15T04:28:07Z', new Date(Date.now()).toISOString()];

    expect(RuxUtils.formatClockTimeUTC(dates[0], 'UTC', true)).to.equal('19:43:02');
    expect(RuxUtils.formatClockTimeUTC(dates[1], 'UTC', true)).to.equal('04:28:07');
    expect(RuxUtils.formatClockTimeUTC(dates[2], 'UTC', true)).to.equal(`${new Date(dates[2]).getUTCHours().toString().padStart(2, '0')}:${new Date(dates[2]).getUTCMinutes().toString().padStart(2, '0')}:${new Date(dates[2]).getUTCSeconds().toString().padStart(2, '0')}`);
    
  });



});
