# Tree

A Tree navigation element presents a hierarchical set of related items, and allow users to explore and select items within that hierarchy. Each item can have a number of subitems.

An item can be expanded to reveal subitems, if any exist, and collapsed to hide subitems.

## Guidelines

- [Astro UXDS: Tree](http://www.astrouxds.com/library/tree)

## Web Components Usage

### 1. Installation

#### ** Install the Astro RUX Tree package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-tree
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the RUX Tree Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxTree } from '@astro-components/rux-tree/rux-tree.js';
```

### 3. Use the RUX Tree Web Component

```xml
<rux-tree .treeData="${treeDataArray}"></rux-tree>
```

### Component Properties

| Property | Type    | Required | Description                                                                 |
| -------- | ------- | -------- | --------------------------------------------------------------------------- |
| treeData | `array` | yes      | An array of objects defining the tree structure. See a sample object below. |

#### Sample `treeData` object

```json
[
 {
  label: "Option 1",
  status: "critical",
  children: [{
   label: "Option 1.1"
   status: "normal"
   children: [ …] }]
 },
 {
  label: "Option 1.2"
  status: "normal"
  children: [ …]
 },
 {
  label: "Option 2",
  status: "normal",
 }
]
```

### `treeData` Object Properties

| Property | Type     | Required | Description                                                                                                               |
| -------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| label    | `string` | yes      | The label for the tree item                                                                                               |
| status   | `string` | no       | An optional property to assign status. See [Astro Status](http://www.astrouxds.com/library/tree) for valid status options |
| children | `array`  | no       | Defines child elements. Each child entry matches the parent structure and can be recursively nested                       |

## Revision History

##### **4.1**

- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
- Tree supports multiple nested child tree element
- Added keyboard support
- Added support for assigning status to each tree item

##### **3.0**

- Added a light theme

##### **2.1**

- Converted to Web Component

##### Notes

RUX Tree is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Tree is available as a preview release and should not be used in production code.
