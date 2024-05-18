import template from './test-button.html';

class TestButton extends HTMLElement {
  static get observedAttributes() {
    return ['appearance', 'loading'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;

    const button = this.shadowRoot.querySelector('button');

    if (!this.hasAttribute('appearance')) {
        button.className = 'primary';
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const button = this.shadowRoot.querySelector('button');
    const loadingSpan = this.shadowRoot.querySelector('.loading');

    if (name === 'appearance') {
      button.className = newValue;
    }

    if (name === 'loading') {
      loadingSpan.style.display = newValue === 'true' ? 'inline' : 'none';
    }
  }
}

customElements.define('test-button', TestButton);