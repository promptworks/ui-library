export default {
  gridUnit: 8
  color: {
    white: '#FFF',
    black: '#222',
    actionable: '#009EFF',
    problem: '#FF3348',
    warning: '#FFC301',
    success: '#61AF0C',
    neutral: '#9CA7A5',
    state: {
      active: { 'darken': 0.75 },
      shadow: { 'darken': 3, 'alpha': 0.4 },
      disabled: { 'alpha': 0.5 }
    }
  },
  media: {
    tiny: { screen: 400, gutter: 1 },
    small: { screen: 600, gutter: 2 },
    medium: { screen: 900, gutter: 2 },
    large: { screen: 1200, gutter: 3 },
    xlarge: { screen: 1500, gutter: 3 },
    xxlarge: { screen: 1800, gutter: 3 }
  },
  timing: {
    hoverTransition: '0.3s'
  },
  type: {
    base: 16,
    scaleRatio: 1.25,
    fonts: {
      base: {
        fontFace: '"Open Sans", sans-serif',
        importString: 'Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i'
      }
    },
    sizes: {
      small: -1,
      default: 0,
      medium: 1,
      large: 2,
      xlarge: 3
    }
  }
}
