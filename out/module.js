/* eslint-disable import/prefer-default-export */

function style(attributes, name) {
  const typeAttributes = [attributes.type, attributes.lang];

  return typeAttributes.includes(name) || typeAttributes.includes(`text/${name}`);
}

export { style };
//# sourceMappingURL=module.js.map
