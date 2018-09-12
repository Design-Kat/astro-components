#Notification
The RUX Notification component is … RUX Notification is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Notification is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Notification](http://www.astrouxds.com/library/notification)

##Installation
Install the Astro Component Library.
`git clone https://bitbucket.org/rocketcom/astro-components.git`
###Dependencies

* [Polymer 3](https://www.polymer-project.com)
* [Rux Icon](https://bitbucket.org/rocketcom/astro-components/src/master/src/astro-components/rux-icon/)
* [Rux Button](https://bitbucket.org/rocketcom/astro-components/src/master/src/astro-components/rux-button/)

##Usage
###Import RUX Status Indicator

```javascript
import { RuxNotification } from "@astro-components/rux-notification/rux-notification.js";
```

###Basic HTML Usage
At its most basica the `rux-notification` can work with just a value paramater.

```xml
<rux-notification message="The message for the user"></rux-notification>
```

###Properties
| Property | Type | Default | Required | Description  
| --------------- | --------- | ------- | -------- | -----------
| `message` | `string` | none | yes | The message displayed to the user |
| `status` | `string` | none | no | Allows for setting the background color of the message to match the Astro Status Colors. Valid options are: `emergency`,`alert`,`caution`,`ok`,`standby` and `off`
| `target` | `string` | local | no | Defines whether the notification should target its immediate parent element or the window
| `close-after` | `number` | 2 | no | Defines an auto-close behavior. Time is defined in standard seconds or millisecond. A minimum of 2 and maximum of 10 seconds are allowable