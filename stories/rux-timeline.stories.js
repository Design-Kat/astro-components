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
      const tracks = [
        'track1',
        'track2',
        'track3',
        'track4',
        'track5',
        'track1',
        'track2',
        'track3',
        'track4',
        'track5',
        'track1',
        'track2',
        'track3',
        'track4',
        'track5',
      ];

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
          max-height: 100%;
          position: fixed;

          overflow: auto;
          overscroll-behavior: contain;
        }

        .track {
          background-color: var(--timelineTrackBackgroundColor, rgb(40, 63, 88));
        }
        .track:not(:first-of-type):not(:last-of-type) {
          border-top: 1px solid black;
          border-bottom: 1px solid black;
        }

        .track:first-of-type {
          border-bottom: 1px solid black;
        }

        .track:last-of-type {
          border-top: 10px solid black;
        }

        .track-label,
        .track {
          display: flex;
          align-items: center;
        }

        .track-label {
          width: 10%;
          height: 100%;

          flex-shrink: 0;
          position: -webkit-sticky;
          position: sticky;
          left: 0;
          z-index: 10;

          padding: 1rem;
          border-right: 2px solid black;
          background-color: var(--timelineTrackLabelBackgroundColor);
        }

        .track-content {
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
        }

        .timeline-ruler,
        .track {
          display: flex;
          width: 200%;
          /* width: 200%; */
        }

        .track:not(.timeline-ruler) {
          z-index: 1;
          height: 5rem;
        }

        .timeline-ruler {
          display: flex;
          position: sticky;
          bottom: 0;
          height: 2rem;
          z-index: 20;

          font-size: var(--fontSizeSM);

          color: var(--timelineRulerTextColor, rgb(255, 255, 255));
          background-color: var(--timelineRulerBackgroundColor);
        }

        .timeline-ruler .track-label {
          background-color: var(--timelineRulerBackgroundColor);
        }

        .timeline-ruler .track-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .timeline-ruler .track-content div:not(:first-of-type) {
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          padding-top: 0.15rem;
          padding-left: 0.35rem;
        }
      </style>

      <div class="timeline">
        ${tracks.map(
      (track) => html`
            <div class="track">
              <div class="track-label">${track}</div>
              <div class="track-content">Track</div>
            </div>
          `
  )}  
        <!-- 
          NOTE SEE  https://en.wikipedia.org/wiki/ISO_8601#Durations
          for more information on duration strings

          P: Indicates a duration
          Y: If duration is years
          M: If duration is months
          D: If duration is days
          T: Indicates time starter
          H: If duration is hours
          M: If duration is minutes
          S: Id duration is seconds

          e.g., PTH24M0S0 is a duration of 24 hours
        //--> 
        <time class="timeline-ruler" datetime="PTH24M0S0">
          <div class="track-label"></div>
          <div class="track-content">
            <div>00:00</div>
            <div>01:00</div>
            <div>02:00</div>
            <div>03:00</div>
            <div>04:00</div>
            <div>05:00</div>
            <div>06:00</div>
            <div>07:00</div>
            <div>08:00</div>
            <div>09:00</div>
            <div>10:00</div>
            <div>11:00</div>
            <div>12:00</div>
            <div>13:00</div>
            <div>14:00</div>
            <div>15:00</div>
            <div>16:00</div>
            <div>17:00</div>
            <div>18:00</div>
          </div>
        </span>
      </time>
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
