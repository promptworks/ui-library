import cxs from 'cxs'

const Button = (props, settings) => {

  // export const buttonTextSize = {
  //   'small': Type.size.small,
  //   'normal': Type.size.normal,
  //   'large': Type.size.medium
  // }

  const buttonHeight = {
    'small': settings.gap * 4,
    'normal': settings.gap * 6,
    'large': settings.gap * 8
  }

  const buttonPadding = {
    'small': settings.gap,
    'normal': settings.gap * 2,
    'large': settings.gap * 4
  }

  const buttonColor = {
    'normal': settings.colorActionable,
    'muted': settings.colorNeutral,
    'success': settings.colorSuccess,
    'warning': settings.colorWarning,
    'problem': settings.colorProblem
  }

  return {

  }
}

export default Button
