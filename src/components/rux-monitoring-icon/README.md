# Monitoring Icons

These icons represent objects, equipment, and concepts that are being administered or monitored. The purpose of these icons is to easily, concisely, and clearly visually communicate their status to be to users.

## Guidelines

- [Astro UXDS: Icons and Symbols](http://www.astrouxds.com/library/icons-and-symbols)

## Installation

`npm i -save @astrouxds/rux-monitoring-icon`

### Dependencies

- [LitElement](http://lit-element.polymer-project.org/)
- [Astro 3 Core CSS](https://bitbucket.org/rocketcom/astro-styles/src/master/)
- [Rux Icon](https://bitbucket.org/rocketcom/astro-components/src/master/src/astro-components/rux-icon/)
- [Rux Status](https://bitbucket.org/rocketcom/astro-components/src/master/src/astro-components/rux-status/)

## Web Components Usage

### 1. Installation

#### **Install the Astro RUX Monitoring Icon package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-monitoring-icon
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the RUX Monitoring Icon Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxMonitoringIcon } from '@astro-components/rux-monitoring-icon/rux-monitoring-icon.js';
```

### 3. Use the RUX Monitoring Icon Web Component

```xml
<rux-monitoring-icon
 status="critical"
 label="Label"
 sublabel="Sub Label"
 icon="altitude"
 notifications="10" ></rux-monitoring-icon>
```

Astro 4.0 introduces an additional monitoring icon that depicts progress. You may replace the `icon` and `status` properties with a `progress` attribute with the value equal to a Number between 0 and 99 or 1 and 100 to show progress in a percentage format with a donut graph. The donut graph’s color will adopt status color. Status color is defined by a `range` property (see below).

```xml
<rux-monitoring-icon
 label="Label"
 progress="50" ></rux-monitoring-icon>
```

**Note** Status valid strings have been updated

### Component Properties

| Property        | Type     | Required | Description                                                                                                                                         |
| --------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`        | `string` | true     | Valid options are `off`, `standby`, `normal`, `caution`, `serious` and `critical`.                                                                  |
| `label`         | `string` | true     | Primary label for an advanced status symbol. Labels exceeding width of the icon will be truncated with an ellipsis                                  |
| `sublabel`      | `string` | false    | An optional string value appearing underneath the primary label                                                                                     |
| `notifications` | `number` | false    | Indicates notifications for a give status. Values beyond 9,999 are shorthanded 10K, 100K, 1.5M, 1.5B and ∞ for numbers greater than 999,999,999,999 |
| `progress`      | `number` | false    | Indicates the progress of a given operation, number must be provided in a range between 0-99                                                        |
| `range`         | `array`  | false    | An array of objects defining the threshold and associated status. See below for a valid range array.                                                |

#### Sample `range` Object

```xml
[
 { threshold: 17, status: 'off' },
 { threshold: 33, status: 'standby'},
 { threshold: 81, status: 'serious'},
 { threshold: 49, status: 'normal'},
 { threshold: 65, status: 'caution'},
 { threshold: 99, status: 'critical'},
]
```

#### Sample `range` Object Properties

| Property    | Type     | Required | Description                                                                        |
| ----------- | -------- | -------- | ---------------------------------------------------------------------------------- |
| `threshold` | `number` | true     | A number between 0 and 99 or 1 and 100 depending on your implementation.           |
| `status`    | `string` | true     | Valid options are `off`, `standby`, `normal`, `caution`, `serious` and `critical`. |

## Revision History

##### **4.1**

- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now
- Renamed component to more accurately reflect guidelines semantics
- Moved simple status indicators to their own component [Rux Status](https://bitbucket.org/rocketcom/astro-components/src/master/src/astro-components/rux-status/)
- Added support for Percentage Icon from EGS
- Removed legacy `satcom_` prefix

##### **3.0**

- Removed margin on status symbols

##### **1.4**

- Added rux* and BEM compatible classes to all satcom* NOTE: satcom\_ will be removed in a future version
- Embeded SVG graphics

##### Notes

RUX Tree is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Tree is available as a preview release and should not be used in production code.
