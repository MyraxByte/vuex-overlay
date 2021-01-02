/**
 * Deep Copy (deepCopy from Vuex)
 * @param obj
 * @param cache
 * @returns {*[]|*}
 */
export const deepCopy = (obj, cache) => {
  if (cache === void 0) cache = [];

  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  const hit = cache.filter((c) => c.original === obj)[0]
  if (hit) return hit.copy

  const copy = Array.isArray(obj) ? [] : {};
  cache.push({ original: obj, copy: copy });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}