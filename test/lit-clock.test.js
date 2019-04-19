import { html, fixture, expect } from '@open-wc/testing';

import '../packages/lit-clock/lit-clock.js';

describe('<lit-clock>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<lit-clock></lit-clock>');
    expect(el.header).to.equal('My Example');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <lit-clock .header=${'different'}></lit-clock>
    `);
    expect(el.header).to.equal('different');
  });
});
