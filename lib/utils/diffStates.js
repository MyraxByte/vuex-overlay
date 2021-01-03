import { transform, isEqual, isObject, isEqualWith } from "lodash";

/**
 * Get State Differences
 * @param prevState
 * @param nextState
 */
export const getDifference = (prevState, nextState) => {
  const prev = getChanges(prevState, nextState)
  const next = getChanges(nextState, prevState)

  return { prev, next }
}

function getChanges(object, base) {
  return transform(object, function (result, value, key) {
    if (key !== 'vuexOverlay' && !isEqualWith(value, base[key], customizer)) {
      result[key] = (isObject(value) && isObject(base[key])) ? getChanges(value, base[key]) : value;
    }
  });
}

function customizer(baseValue, value) {
  if (Array.isArray(baseValue) && Array.isArray(value)) {
    return isEqual(baseValue.sort(), value.sort())
  }
}