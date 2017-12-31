/* eslint-disable import/prefer-default-export */

export function style(attributes, name) {
  const typeAttributes = [attributes.type, attributes.lang];

  return typeAttributes.includes(name) || typeAttributes.includes(`text/${name}`);
}
