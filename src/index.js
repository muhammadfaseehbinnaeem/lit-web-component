// import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { LitElement, html } from 'lit';
import myStyles from './assets/styles/myStyles';

class LitComponentWrapper extends LitElement {
  // createRenderRoot() { return this }
  // firstUpdated() { ReactDOM.render(<App />, this) }
  // render() { return html`<div></div>` }

  static styles = [myStyles];
  
  firstUpdated() { ReactDOM.render(<App />, this.shadowRoot.querySelector('div')) }
  render() { return html`<div></div>` }
}

customElements.define('lit-component', LitComponentWrapper);