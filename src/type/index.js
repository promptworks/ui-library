import ms from 'modularscale-js'

import { BROWSER_DEFAULT_SIZE } from '../metrics'


export const generateSizes = (settings) => {
  let generatedSizes = {}
  Object.keys(settings.type.sizes).map(size => {
    generatedSizes[size] = modularScale(settings.type.sizes[size], settings)
  })
  return generatedSizes
}


export const modularScale = (n, settings) => {
  return ms(n, {
    base: [settings.type.base/BROWSER_DEFAULT_SIZE],
    ratio: settings.type.scaleRatio,
  }) + 'rem'
}


export default (settings) => {
  return {
    modularScale: (n, settings) => modularScale(n, settings),
    sizes: generateSizes(settings)
  }
}
