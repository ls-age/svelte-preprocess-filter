'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable import/prefer-default-export */

function style(attributes, name) {
  const typeAttributes = [attributes.type, attributes.lang];

  return typeAttributes.includes(name) || typeAttributes.includes(`text/${name}`);
}

exports.style = style;
//# sourceMappingURL=index.js.map
