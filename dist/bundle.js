'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('cxs');
var chroma = _interopDefault(require('chroma-js'));
var ms = _interopDefault(require('modularscale-js'));
var immutable = require('immutable');

var Button = function Button(props, settings) {

  // export const buttonTextSize = {
  //   'small': Type.size.small,
  //   'normal': Type.size.normal,
  //   'large': Type.size.medium
  // }

  var buttonHeight = {
    'small': settings.gap * 4,
    'normal': settings.gap * 6,
    'large': settings.gap * 8
  };

  var buttonPadding = {
    'small': settings.gap,
    'normal': settings.gap * 2,
    'large': settings.gap * 4
  };

  var buttonColor = {
    'normal': settings.colorActionable,
    'muted': settings.colorNeutral,
    'success': settings.colorSuccess,
    'warning': settings.colorWarning,
    'problem': settings.colorProblem
  };

  return {};
};



var components = /*#__PURE__*/Object.freeze({
  button: Button
});

var defaultSettings = {
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
  metrics: {
    gridUnit: 8
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
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var generateStates = function generateStates(settings) {
  var generatedStates = {};
  Object.keys(settings.color.state).forEach(function (state) {
    generatedStates[state] = function (color) {
      var c = chroma(color);
      Object.keys(settings.color.state[state]).forEach(function (change) {
        c = c[change](settings.color.state[state][change]);
      });
      return c.hex();
    };
  });
  return generatedStates;
};

var colorTools = (function (settings) {
  return _extends({}, settings.color, {
    state: _extends({}, generateStates(settings)),
    iconColor: function iconColor(color) {
      return {
        'svg *': {
          fill: color,
          transition: 'fill ' + settings.timing.hoverTransition
        }
      };
    }
  });
});

var BROWSER_DEFAULT_SIZE = 16;

var rem = function rem(pixels) {
  return pixels / BROWSER_DEFAULT_SIZE + 'rem';
};

var multiplyUnit = function multiplyUnit(value, multiplier) {
  var parts = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  return '' + parts[1] * multiplier + (parts[2] || '');
};

var _gu = function _gu(multiplier, settings) {
  return rem(settings.metrics.gridUnit * multiplier);
};
var metricsTools = (function (settings) {
  return {
    gu: function gu() {
      var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return _gu(multiplier, settings);
    },
    gutter: _gu(settings.metrics.gutter, settings),
    multiplyUnit: multiplyUnit,
    rem: rem
  };
});

var generateSizes = function generateSizes(settings) {
  var generatedSizes = {};
  Object.keys(settings.type.sizes).map(function (size) {
    generatedSizes[size] = _modularScale(settings.type.sizes[size], settings);
  });
  return generatedSizes;
};

var _modularScale = function _modularScale(n, settings) {
  return ms(n, {
    base: [settings.type.base / BROWSER_DEFAULT_SIZE],
    ratio: settings.type.scaleRatio
  }) + 'rem';
};
var typeTools = (function (settings) {
  return {
    modularScale: function modularScale(n, settings) {
      return _modularScale(n, settings);
    },
    sizes: generateSizes(settings)
  };
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function () {
  function UI() {
    var userSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, UI);

    var settings = immutable.mergeDeep(defaultSettings, userSettings);
    this.color = colorTools(settings);
    this.type = typeTools(settings);
    this.metrics = metricsTools(settings);
  }

  _createClass(UI, [{
    key: 'stylesFor',
    value: function stylesFor(name, props) {
      var component = components[name];

      if (!component) {
        throw new Error('Component \'' + name + '\' doesn\'t exist');
      } else {
        return component(props, settings);
      }
    }
  }]);

  return UI;
}();

module.exports = UI;
