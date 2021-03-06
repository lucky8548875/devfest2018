import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
import '../../components/speaker-section/index.js';
import '../../components/speaker-list/index.js';
import '../../smart-components/speaker-list-loader/index.js';
import '../../components/lazy-picture/index.js';
import '../../components/banner-link/index.js';
import '../../components/footer-section/index.js';
const { HTMLElement, customElements } = window;

class Page extends TemplateLite(HTMLElement) {
  static get is () { return 'page-home'; }

  static get renderer () { return render; }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }

  buy ({ target }) {
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'buy_ticket',
        'event_label': target.href,
        'transport_type': 'beacon'
      });
    }
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
