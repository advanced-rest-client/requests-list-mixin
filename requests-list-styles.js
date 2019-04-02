import '../../@polymer/polymer/polymer-element.js';
const $documentContainer = document.createElement('template');
$documentContainer.innerHTML = `<dom-module id="requests-list-styles">
  <template>
    <style>
    :host {
      --paper-item-icon-width: 72px;
    }

    .request-list-item {
      @apply --arc-font-menu;
      font-weight: 400;
      cursor: pointer;
      @apply --request-list-item;
    }

    http-method-label {
      font-size: 14px;
      height: 52px;
      width: 52px;
      text-align: center;
      padding-top: 14px;
      margin-bottom: 0;
      box-sizing: border-box;
      border-radius: 50%;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .iron-selected .request-list-item,
    .request-list-item.iron-selected {
      background-color: var(--request-list-item-selected-background-color, #E0E0E0);
      @apply --request-list-item-selected;
    }

    :host([list-type="comfortable"]) paper-item-body,
    :host([list-type="compact"]) paper-item-body {
      @apply --layout-horizontal;
      @apply --layout-center;
      @apply --layout-start-justified;
    }

    :host([list-type="comfortable"]) [secondary],
    :host([list-type="compact"]) [secondary] {
      margin-left: 8px;
    }

    :host([list-type="comfortable"]) http-method-label {
      height: 40px;
      width: 40px;
      padding-top: 8px;
      font-size: 13px;
    }

    :host([list-type="compact"]) http-method-label {
      height: 28px;
      width: 28px;
      padding-top: 4px;
      font-size: 11px;
    }

    :host([list-type="comfortable"]) .request-list-item {
      min-height: var(--request-list-item-comfortable-min-height, 52px);
    }

    :host([list-type="compact"]) .request-list-item {
      min-height: var(--request-list-item-comfortable-compact-height, 36px);
    }

    :host([list-type="comfortable"]) .list-action-button {
      height: 32px;
    }

    :host([list-type="compact"]) .list-action-button {
      height: 24px;
    }

    .history-group-header {
      font-weight: var(--request-list-item-history-group-header-font-weigth, bold);
      color: var(--request-list-item-history-group-header-color, rgba(0, 0, 0, 0.67));
      padding: 24px 16px;
      @apply --request-list-history-group-header;
    }

    :host([list-type="comfortable"]) .history-group-header {
      padding: 16px;
    }

    :host([list-type="compact"]) .history-group-header {
      padding: 12px;
    }

    .select-text {
      -webkit-user-select: text;
      user-select: text;
    }

    .list-main-action {
      @apply --action-button;
      height: 36px;
      font-size: 14px;
    }

    .list-secondary-action {
      color: var(--request-list-item-secondary-action-color, var(--primary-color));
      height: 36px;
      font-size: 14px;
    }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($documentContainer.content);
