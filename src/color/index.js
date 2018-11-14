import chroma from 'chroma-js'


export const generateStates = (settings) => {
  let generatedStates = {}
  Object.keys(settings.color.state).forEach(state => {
    generatedStates[state] = (color) => {
      let c = chroma(color)
      Object.keys(settings.color.state[state]).forEach(change => {
        c = c[change](settings.color.state[state][change])
      })
      return c.hex()
    }
  })
  return generatedStates
}


export default (settings) => {
  return {
    ...settings.color,
    state: { ...generateStates(settings) },
    iconColor: color => {
      return {
        'svg *': {
          fill: color,
          transition: 'fill ' + settings.timing.hoverTransition
        }
      }
    }
  }
}
