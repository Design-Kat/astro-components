/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { RuxTimeline } from '../src/components/rux-timeline/rux-timeline.js';
import { RuxSlider } from '../src/components/rux-slider/rux-slider.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';

import Readme from '../src/components/rux-toggle/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Timeline', module)
    .addDecorator(withKnobs)
    .add(
        'Timeline',
        () => {
          /* FAKE TIMELINE */
          const scale = 250;
          const today = new Date();
          const tracks = [
            {
              label: 'LEO',
              regions: [
                {
                  label: 'NROL-11',
                  id: 'LEO1',
                  status: 'caution',
                  startTime: new Date(
                      today.getUTCFullYear(),
                      today.getUTCMonth(),
                      today.getUTCDate(),
                      7,
                      30,
                      0
                  ).toISOString(),
                  endTime: new Date(
                      today.getUTCFullYear(),
                      today.getUTCMonth(),
                      today.getUTCDate(),
                      8,
                      30,
                      0
                  ).toISOString(),
                },
                {
                  label: 'DSP-1-18 F21',
                  id: 'LEO2',
                  status: 'normal',
                  startTime: new Date(
                      today.getUTCFullYear(),
                      today.getUTCMonth(),
                      today.getUTCDate(),
                      10,
                      0,
                      0
                  ).toISOString(),
                  endTime: new Date(
                      today.getUTCFullYear(),
                      today.getUTCMonth(),
                      today.getUTCDate(),
                      13,
                      0,
                      0
                  ).toISOString(),
                },
                {
                  label: 'NROL-14 (KH-11)',
                  id: 'LEO3',
                  status: 'serious',
                  startTime: new Date(
                      today.getUTCFullYear(),
                      today.getUTCMonth(),
                      today.getUTCDate(),
                      15,
                      0,
                      0
                  ).toISOString(),
                  endTime: new Date(
                      today.getUTCFullYear(),
                      today.getUTCMonth(),
                      today.getUTCDate(),
                      20,
                      30,
                      0
                  ).toISOString(),
                },
              ],
            },
          ];

          return html`
        <style>
          .header {
            display: flex;
            align-items: center;
            padding: 0 1rem;
          }

          rux-status {
            margin-right: 0.25rem;
          }

          rux-slider {
            max-width: 15rem;
            margin-left: auto;
          }
        </style>
        <div style="position: relative; padding: 1rem; margin: 3rem auto;">
          <!-- <div class="header" style="overflow: hidden;">
            <rux-status status="normal"></rux-status>
            <h2>Header ${scale}</h2>
            <rux-slider .val="${scale}" min="100" max="500" hideInput></rux-slider>
          </div> -->
          <rux-timeline .tracks="${tracks}"></rux-timeline>
        </div>
      `;
        },
        {
          exports: {
            render,
            html,
          },
          notes: {
            markdown: Readme,
          },
        }
    );
