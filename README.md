---
description: >-
  Cubecubed helps you play eye-catching math visualization on the web using SVG
  graphics.
---

# Getting Started

## Installation

```shell
npm i cubecubed --save
```

## Required HTML

The target HTML structure must have this element:

```html
<div id="svg-render">
    <svg xmlns="http://w3.org/2000/svg" id="viz" transform="scale(1, -1)"></svg>
</div>
```

* **A note about KaTeX**: Make sure that you include the proper katex.min.css (one easy way is to pull the script from a CDN service), otherwise KaTeX will render texts two times onto the animation screen (See the sample index.html for more information).

## Setting Scenes

