import * as components from './components'
import defaultSettings from './settings'
import { mergeDeep } from 'immutable'

import colorTools from './color'
import typeTools from './type'
import metricsTools from './metrics'

class UI {
  constructor (userSettings = {}) {
    const settings = mergeDeep(defaultSettings, userSettings)
    this.color = colorTools(settings)
    this.type = typeTools(settings)
    this.metrics = metricsTools(settings)
  }


  stylesFor (name, props) {
    const component = components[name]

    if (!component) {
      throw new Error(`Component '${name}' doesn't exist`)

    } else {
      return component(props, settings)
    }
  }
}

export default UI
