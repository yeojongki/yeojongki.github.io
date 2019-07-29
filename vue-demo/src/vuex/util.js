export function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(key, obj[key]))
}
