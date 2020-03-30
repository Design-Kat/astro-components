/* eslint-disable no-unused-expressions */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import './rux-tree.js';

function trimShadowCruft(dom) {
	return dom.replace(/\<!----\>/g, '');
}


/**
 * @typedef {import('./rux-tree.js').RuxTree} RuxTree
 */

describe('Astro Tree', () => {

	const simpleTreeData = [
		{
			label: 'Tree Item 1',
			selected: true
		}
	];


  it('has the expected default shadowDOM', async() => {

		

    const el = /** @type {RuxTree} */ await fixture(
      html `<rux-tree .data=${simpleTreeData}></rux-tree>`
		);

		expect(el).shadowDom.to.equal(`
		<nav class="rux-tree">
			<ul role="tree">
				<li
					aria-expanded="false"
					aria-level="1"
					aria-posinset="1"
					aria-selected="true"
					aria-setsize="0"
					class="rux-tree__tree-item"
					data-key="rid-orfka5gpj"
					role="treeitem"
					tabindex="-1"
				>
					<div class="rux-tree__parent">
						<i
							class="rux-tree__arrow"
							hidden=""
						>
						</i>
						<div
							class="rux-tree__label"
							title="Tree Item 1, status undefined"
						>
							Tree Item 1
						</div>
					</div>
				</li>
			</ul>
		</nav>` ,  { ignoreAttributes: ['data-key'] });
		});
	});
