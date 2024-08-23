import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { LitElement, html } from 'lit';

class LitComponentWrapper extends LitElement {
  // createRenderRoot() { return this }
  // firstUpdated() { ReactDOM.render(<App />, this) }
  // render() { return html`<div></div>` }

  firstUpdated() { ReactDOM.render(<App />, this.shadowRoot.querySelector('div')) }

  render() {
    return html`
      <style>
        ${Array.from(document.styleSheets)
        .map(styleSheet => Array.from(styleSheet.cssRules).map(rule => rule.cssText).join(' '))
        .join(' ')}
      </style>
      <div></div>
    `;
  }
}

customElements.define('lit-component', LitComponentWrapper);