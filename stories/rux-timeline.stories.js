/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, text, number, select, date, withKnobs } from '@storybook/addon-knobs';
import { RuxTimeline } from '../src/components/rux-timeline/rux-timeline.js';
import { RuxSlider } from '../src/components/rux-slider/rux-slider.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';

import Readme from '../src/components/rux-toggle/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Timeline', module)
    .addDecorator(withKnobs)
    .add('Test', () => {
      const tracks = ['track1', 'track2', 'track3', 'track4', 'track5'];

      return html`
      <style>
        html {
          height: 100%;
        }

        body {
          box-sizing: border-box;

          height: 90%;
        }

        .timeline {
          width: 100%;
          position: fixed;
          border: 1px solid red;
          height: 50%;
          overflow-x: scroll;
          overflow-y: scroll;
          overscroll-behavior: contain;
        }

        .track-label,
        .track {
          display: flex;
          align-items: center;
        }

        .track-label {
          width: 100px;
          outline: 1px solid green;
          flex-shrink: 0;
          position: -webkit-sticky;
          position: sticky;
          left: 0;
          z-index: 10;
          background-color: red;
        }

        .track {
          display: flex;
          outline: 1px solid aqua;
          width: 150rem;
          flex-shrink: 0;
          z-index: 1;
          height: 5rem;
          width: 200%;
        }
      </style>

      <div class="timeline">
        <div class="scroller">
          ${tracks.map(
      (track) => html`
              <div class="track">
                <div class="track-label">${track}</div>
                <div>Track</div>
              </div>
            `
  )}
        </div>
      </div>
    `;
    })

    .add('Timeline Region', () => {
    /* Select Status */

      const statusOptions = {
        Critical: 'critical',
        Serious: 'serious',
        Caution: 'caution',
        Normal: 'normal',
        Standby: 'standby',
        Off: 'off',
      };

      const status = select('Status', statusOptions, 'normal');

      const temporalityOptions = {
        Past: 'past',
        Present: 'present',
        Future: 'future',
      };

      const temporality = select('Temporality', temporalityOptions, 'present');

      const label = text('Label', 'Label');

      function dateWrapper(name, defaultValue) {
        const stringTimestamp = date(name, defaultValue);
        return new Date(stringTimestamp);
      }

      const startTime = dateWrapper('Start Time', new Date());
      const endTime = dateWrapper('End Time', new Date(startTime.getTime() + 2 * 60 * 60 * 1000));

      return html`
      <div style="margin: 2rem 0 0 0">
        <rux-timeline-region
          status="${status}"
          label="${label}"
          temporality="${temporality}"
          startTime="${startTime.toISOString()}"
          endTime="${endTime.toISOString()}"
        ></rux-timeline-region>
      </div>
    `;
    })
    .add('Timeline Track', () => {
      return html`
      <div style="margin: 2rem 0 0 0">
        <rux-timeline-track label="Label" index="1" scale="100"></rux-timeline-track>
      </div>
    `;
    })
    .add('Timeline (New)', () => {
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
                  1,
                  30,
                  0
              ).toISOString(),
              endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 3, 30, 0).toISOString(),
            },
            {
              label: 'DSP-1-18 F21',
              id: 'LEO2',
              status: 'normal',
              startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 5, 0, 0).toISOString(),
              endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 7, 0, 0).toISOString(),
            },
            {
              label: 'NROL-14 (KH-11)',
              id: 'LEO3',
              status: 'serious',
              startTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 8, 0, 0).toISOString(),
              endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 11, 30, 0).toISOString(),
            },
          ],
        },
      ];

      return html`
      <div style="margin: 2rem 0 0 0">
        <rux-timeline> </rux-timeline>
      </div>
    `;
    })
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
                      1,
                      30,
                      0
                  ).toISOString(),
                  endTime: new Date(
                      today.getUTCFullYear(),
                      today.getUTCMonth(),
                      today.getUTCDate(),
                      3,
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
                      5,
                      0,
                      0
                  ).toISOString(),
                  endTime: new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 7, 0, 0).toISOString(),
                },
                {
                  label: 'NROL-14 (KH-11)',
                  id: 'LEO3',
                  status: 'serious',
                  startTime: new Date(
                      today.getUTCFullYear(),
                      today.getUTCMonth(),
                      today.getUTCDate(),
                      8,
                      0,
                      0
                  ).toISOString(),
                  endTime: new Date(
                      today.getUTCFullYear(),
                      today.getUTCMonth(),
                      today.getUTCDate(),
                      11,
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
        <div style="margin: 2rem 0 0 0">
          <!-- <div class="header" style="overflow: hidden;">
            <rux-status status="normal"></rux-status>
            <h2>Header ${scale}</h2>
            <rux-slider .val="${scale}" min="100" max="500" hideInput></rux-slider>
          </div> -->
          <rux-timeline duration="43200000" .tracks="${tracks}"></rux-timeline>
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
