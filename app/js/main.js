/* eslint no-console:0 */
import test from './another-file';

export function render(config) {
  console.log(config);
  test();
}

export default render;
