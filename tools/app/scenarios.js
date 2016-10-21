import template from './scenarios.hbs';

export default function render(config) {
  const container = document.querySelector(config.container);
  container.innerHTML = template();
}
