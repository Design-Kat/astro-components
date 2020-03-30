/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-global-status-bar.js';

/**
 * @typedef {import('./rux-global-status-bar.js').RuxGlobalStatusBar} RuxGlobalStatusBar
 */

describe('RUX Global Status Bar', () => {
  it('has the expected default shadowDOM', async() => {
    const el = /** @type {RuxGlobalStatusBar} */ await fixture(
      html `<rux-global-status-bar></rux-global-status-bar>`
    );
    
		expect(el).shadowDom.to.equal(`
		<header>
		  <div
		    class="app-meta"
		    hidden=""
		  >
		    <h1>
		      false
		      <span class="app-version">
		      </span>
		    </h1>
		  </div>
		  <slot>
		  </slot>
		</header>
    `);
	});
	it('supports app version and app name properties', async() => {
    const el = /** @type {RuxGlobalStatusBar} */ await fixture(
      html `<rux-global-status-bar appname="Astro" version="1.0"></rux-global-status-bar>`
    );
		
		
		expect(el).shadowDom.to.equal(`
		<header>
		  <div class="app-meta">
		    <h1>
		      Astro
					<span class="app-version">
					1.0
		      </span>
		    </h1>
		  </div>
		  <slot>
		  </slot>
		</header>
    `);
		// expect(el).lightDom.to.equal('')
	});
	
});
