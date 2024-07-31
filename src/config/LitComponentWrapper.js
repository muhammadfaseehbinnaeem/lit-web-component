import React from 'react';
import ReactDOM from 'react-dom';
import MyView from '../views/MyView';
import { LitElement, html } from 'lit';


class LitComponentWrapper extends LitElement {
  createRenderRoot() { return this }
  firstUpdated() { ReactDOM.render(<MyView />, this) }
  render() { return html`<div></div>` }
}


export default customElements.define('lit-component', LitComponentWrapper);