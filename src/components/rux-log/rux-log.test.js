/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';
import './rux-log.js';

/**
 * @typedef {import('./rux-log.js').RuxLog} RuxLog
 */

describe('Astro Button', () => {
  it('has the expected default shadowDOM', async() => {
    const el = /** @type {RuxLog} */ await fixture(
      html `<rux-log>Button Label</rux-log>`
    );
    
    expect(el).shadowDom.to.equal(`
    <header class="rux-log-header">
	<h1 class="rux-log-header-title">
		Event Logs
	</h1>
	<ul class="rux-log__header-labels rux-row">
		<li class="log-event__timestamp">
			Time
		</li>
		<li class="log-event__status">
		</li>
		<li class="log-event__message log-header__message">
			Event
		</li>
		<li>
			<div class="rux-form-field rux-form-field--small">
				<label
					class="sr-only"
					for="log-search"
				>
					Search
				</label>
				<input
					class="rux-input"
					id="log-search"
					placeholder="Search"
					type="search"
				>
			</div>
		</li>
	</ul>
</header>
<ol class="rux-log__events">
	<li
		class="rux-log__filter-enabled"
		hidden=""
	>
		A filter with "
		<b>
		</b>
		" is enabled. 0 of 1 records are currently hidden.
	</li>
	<li class="rux-log__log-event">
		<div class="log-event__timestamp">
			<time datetime="2020-2-16
						17:24:59:320">
				17:24:59
			</time>
		</div>
		<div class="log-event__status">
			<rux-status status="">
			</rux-status>
		</div>
		<div class="log-event__message">
			<div>
				Log initialized with no data…
			</div>
		</div>
	</li>
</ol>`);
  });
});
