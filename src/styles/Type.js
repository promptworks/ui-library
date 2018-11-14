import WebFont from 'webfontloader'
import ms from 'modularscale-js'

import settings from '../settings'

/**
 * Generate modular scale type sizes
 * @see http://www.modularscale.com/
 */
const modularScale = (n) => {
  return ms(n, {
    base: settings.type.base,
    ratio: 1.25
  }) + 'rem'
}

/**
 * Load font faces from popular sources, such as Google or Typekit
 * @see https://github.com/typekit/webfontloader
 */
export const loadFonts = () => {
  WebFont.load({
    google: {
      families: ['Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i']
    }
  })
}

/**
 * Type module for importing in style components
 */
const Type = {
  font: '"Open Sans", sans-serif',
  ms: (n) => { return modularScale(n) },
  size: {
    small: modularScale(-1),
    normal: modularScale(0),
    medium: modularScale(1),
    large: modularScale(3),
    xlarge: modularScale(5)
  },
  weight: {
    light: '300',
    regular: '400',
    semiBold: '600',
    bold: '700',
    extraBold: '800'
  }
}

export default Type
