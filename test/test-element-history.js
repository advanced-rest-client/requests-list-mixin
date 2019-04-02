import {PolymerElement} from '../../../@polymer/polymer/polymer-element.js';
import {HistoryListMixin} from '../../../history-list-mixin/history-list-mixin.js';
import {RequestsListMixin} from '../requests-list-mixin.js';
import '../requests-list-styles.js';
import {html} from '../../../@polymer/polymer/lib/utils/html-tag.js';
/**
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @appliesMixin RequestsListMixin
 * @appliesMixin HistoryListMixin
 */
class TestElementHistory extends RequestsListMixin(HistoryListMixin(PolymerElement)) {
  static get template() {
    return html`
    <style include="requests-list-styles"></style>
`;
  }

  static get is() {
    return 'test-element-history';
  }

  connectedCallback() {
    super.connectedCallback();
    this.type = 'history';
  }
}
window.customElements.define(TestElementHistory.is, TestElementHistory);
