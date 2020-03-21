/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-pop-up-menu.js';

/**
 * @typedef {import('./rux-pop-up-menu.js').RuxPopUpMenu} RuxPopUpMenu
 */

describe('Astro Pop Up Menu', () => {
  it('has the expected default shadowDOM', async() => {
    const data = [
        {
          id: '1',
          label: 'Item 1',
          value: '',
        },
        {
          id: '2',
          label: 'Item 2',
        },
        {
          role: 'seperator',
        },
        {
          id: '3',
          label: 'Item 3',
        },
      ];
    const el = /** @type {RuxPopUpMenu} */ await fixture(
      html `
      <rux-pop-up-menu
      id="popup-menu-1"
      .data="${data}">
     </rux-pop-up-menu>`
    );
    
    expect(el).shadowDom.to.equal(`
    <slot>
    </slot>
`);
  });
});
