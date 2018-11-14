export const BROWSER_DEFAULT_SIZE = 16


export const rem = (pixels) => {
  return `${pixels / BROWSER_DEFAULT_SIZE}rem`
}


export const multiplyUnit = (value, multiplier) => {
  const parts = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  return `${parts[1] * multiplier}${parts[2] || ''}`
}


export const gu = (multiplier, settings) => {
  return rem(settings.gridUnit * multiplier)
}


export default (settings) => {
  return {
    gu: (multiplier = 1) => gu(multiplier, settings),
    multiplyUnit,
    rem
  }
}
