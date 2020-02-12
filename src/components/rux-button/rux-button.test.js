/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-button.js';

/**
 * @typedef {import('./rux-button.js').RuxButton} RuxButton
 */

describe('Astro Button', () => {
  it('has the expected default shadowDOM', async() => {
    const el = /** @type {RuxButton} */ await fixture(
      html `<rux-button>Button Label</rux-button>`
    );
    
    expect(el).shadowDom.to.equal(`
    <button class="rux-button">
      <slot></slot>
    </button>`);
  });
  it('renders outline/secondrary style', async() => {
    const el = /** @type {RuxButton} */ await fixture(
      html `<rux-button outline>Button Label</rux-button>`
    );

    expect(el).shadowDom.to.equal(`
    <button class="rux-button rux-button--outline">
      <slot></slot>
    </button>`)
  })
  it('is disabled when the disabled attribute is set', async() => {
    const el = /** @type {RuxButton} */ await fixture(
      html `<rux-button disabled>Button Label</rux-button>`
    );

    const button = el.shadowRoot.querySelector('button')
    console.log(el);

    expect(el.shadowRoot.querySelector('button')).to.have.property('disabled')
    expect(el).shadowDom.to.equal(`
    <button class="rux-button" disabled>
      <slot></slot>
    </button>`)
  })
  it('renders an icon when icon property is set', async() => {
    const el = /** @type {RuxButton} */ await fixture(
      html `<rux-button icon="../../static/icons/astro.svg#antenna">Button Label</rux-button>`
    );

    expect(el).shadowDom.to.equal(`
    <button class="rux-button">
      <rux-icon
        color="#ffffff"
        icon="../icons/astro.svg#antenna">
      </rux-icon>
      <slot></slot>
    </button>`)
  })
});
