import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { LitElement, html } from 'lit';


class LitComponentWrapper extends LitElement {
  createRenderRoot() { return this }
  firstUpdated() { ReactDOM.render(<App />, this) }
  render() { return html`<div></div>` }
}


customElements.define('lit-component', LitComponentWrapper);