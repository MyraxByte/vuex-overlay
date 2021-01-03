/**
 * Get time (from Vuex)
 * @returns {string}
 */
export const getTime = () => {
  const time = new Date();

  const repeat= (str, times) => {
    const arr = new Array(times + 1)
    return arr.join(str)
  }

  const pad = (num, maxLength) => {
    return repeat('0', maxLength - num.toString().length) + num
  }

  const hours = pad(time.getHours(), 2)
  const minutes = pad(time.getMinutes(), 2)
  const seconds = pad(time.getSeconds(), 2)
  const milliseconds = pad(time.getMilliseconds(), 3)

  return `${hours}:${minutes}:${seconds}.${milliseconds}`
}