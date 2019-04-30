import { storiesOf, html } from '@open-wc/demoing-storybook';

storiesOf('Demo|Example Element', module).add(
  'Alternative Header',
  () => html`
    <p .header=${'Something else'}></p>
  `,
);
