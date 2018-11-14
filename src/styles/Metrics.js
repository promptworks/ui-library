
const gridBase = 8
const typeBase = 16
const pageWidth = 1200

const rem = (pixels) => `${pixels / typeBase}rem`
const gap = (multiplier = 1) => { return rem(gridBase * multiplier) }
const multiplyUnit = (value, multiplier) => {
  const parts = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  return `${parts[1] * multiplier}${parts[2] || ''}`
}

const mediaSizes = {
  tiny: 400,
  small: 600,
  medium: 900,
  large: 1200,
  xlarge: 1500,
  xxlarge: 1800
}

// const media = Object.keys(mediaSizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${rem(mediaSizes[label])}) {
//       ${css(...args)}
//     }
//   `
//   return acc
// }, {})

const Metrics = {
  rem,
  typeBase,
  gridBase,
  gap,
  mediaSizes,
  media,
  multiplyUnit,
  pageWidth: rem(pageWidth),
  gridGutter: gap(3),
  borderWidth: '2px',
  borderRadius: gap(.5)
}

export default Metrics
