#Segmented Button
The RUX Segmented Button component is … RUX Icon is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Segmented Button is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Segmented Button](http://www.astrouxds.com/library/segmented-button)
* [RUX Segmented Button Demo](http://www.astrouxds.com/library/segmented-button)

##Installation
`npm i -S @astrouxds/rux-segmented-button`

###Dependancies

* [Polymer 3](https://www.polymer-project.com)
* [Astro 3 Core CSS](https://bitbucket.org/rocketcom/astro-styles/src/master/)

##Usage
###Import RUX Segmented Button

```javascript
import { RuxSegmented Button } from "@astro-components/rux-segmented-button/rux-segmented-button.js";
```

###Basic HTML Usage

Minimum JavaScript requirement for a segmented button is an array of objects with a key `label`

```json
let segmentedButtonObj = [
	{ "label": "First" },
	{ "label": "Second" },
	{ "label": "Third" },
]
```

```xml
<rux-segmented-button data={{DataObj}}></rux-segmented-button>
```

###Properties
| Property | Type | Description |
| -------- | ---- | ------------|
| `data` | `array` | Object representation of the segmented button labels and optionally additional values.
