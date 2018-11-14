import { gu } from '../metrics'

export const generateMediaSizes = (settings) => {
  let generatedMediaSizes = {}
  Object.keys(settings.media).forEach(size => {
    generatedMediaSizes[size] = {
      screen: rem(settings.media[size].screen, settings.type.base),
      gutter: gu(settings.media[size].gutter, settings)
    }
  })
}

export default (settings) => {
  return {
    media: { ...generateMediaSizes(settings) }
  }
}
