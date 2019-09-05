[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/requests-list-mixin.svg)](https://www.npmjs.com/package/@advanced-rest-client/requests-list-mixin)

[![Build Status](https://travis-ci.org/advanced-rest-client/requests-list-mixin.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/requests-list-mixin)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/requests-list-mixin)

# requests-list-mixin

A common function for element that handles lists of requests like history, saved or menu items for Advanced REST Client.

The mixin is commonly used with `requests-list-mixin/history-list-mixin` and `requests-list-mixin/saved-list-mixin`.

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/requests-list-mixin
```

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import { RequestsListMixin } from '@advanced-rest-client/requests-list-mixin/requests-list-mixin.js';
import styles from '@advanced-rest-client/requests-list-mixin/requests-list-styles.js';

class SampleElement extends RequestsListMixin(LitElement) {
  static get styles() {
    return styles;
  }
  
  render() {
    return html`
      ${this.modelTemplate}
      ${(this.requests || []).map((request) => html`...`)}return html`${this.modelTemplate}`;
    `;
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this.type = 'history';
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/requests-list-mixin
cd requests-list-mixin
npm install
```

### Running the tests

```sh
npm test
```

## API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)
