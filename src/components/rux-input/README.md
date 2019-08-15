# PRERELEASE ALPHA

# Input

---

##Guidelines

- [Astro UXDS: Input Field](http://www.astrouxds.com/ui-components/input-field)

## Web Components Usage

### 1. Installation

#### ** Install the Astro UXDS Input package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-input
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the Astro Input Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxInput } from '@astro-components/rux-input/rux-input.js';
```

### 3. Render the Astro Input Web Component

Pass properties as attributes of the Astro Input custom element:

The component auto-imports the Astro Icon Web Component for icons, if you specify one:

### Properties

| Property   | Type    | Default | Required | Description |
| ---------- | ------- | ------- | -------- | ----------- |
| `disabled` | Boolean | `false` | No       | [DESC]      |

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in [Astro UXDS Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

### Attributes

| Attribute  | Type    | Default | Required | Description |
| ---------- | ------- | ------- | -------- | ----------- |
| `disabled` | Boolean | `false` | No       | [DESC]      |

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

---
