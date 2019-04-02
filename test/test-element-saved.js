import {PolymerElement} from '../../../@polymer/polymer/polymer-element.js';
import {SavedListMixin} from '../../../saved-list-mixin/saved-list-mixin.js';
import {RequestsListMixin} from '../requests-list-mixin.js';
import '../requests-list-styles.js';
import {html} from '../../../@polymer/polymer/lib/utils/html-tag.js';
/**
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @appliesMixin RequestsListMixin
 * @appliesMixin SavedListMixin
 */
class TestElementSaved extends RequestsListMixin(SavedListMixin(PolymerElement)) {
  static get template() {
    return html`
    <style include="requests-list-styles"></style>
`;
  }

  static get is() {
    return 'test-element-saved';
  }

  connectedCallback() {
    super.connectedCallback();
    this.type = 'saved';
  }
}
window.customElements.define(TestElementSaved.is, TestElementSaved);
