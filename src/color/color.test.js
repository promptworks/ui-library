import { mergeDeep } from 'immutable'
import settings from '../settings'
import { generateStates } from './index'


test('generate color states', () => {
  const states = generateStates(settings)

  expect(states.shadow).toBeInstanceOf(Function)
  expect(states.active).toBeInstanceOf(Function)
  expect(states.disabled).toBeInstanceOf(Function)

  expect(states.shadow(settings.color.problem)).toBe('#58000066')
  expect(states.active(settings.color.problem)).toBe('#d3002a')
  expect(states.disabled(settings.color.problem)).toBe('#ff334880')
})


test('add new color states', () => {
  const modifiedSettings = mergeDeep(settings, {
    color: {
      state: {
        muck: { desaturate: 2.5, darken: 0.2 },
        pizzaz: { saturate: 2, brighten: 0.5 }
      }
    }
  })
  const newStates = generateStates(modifiedSettings)

  expect(newStates.muck).toBeInstanceOf(Function)
  expect(newStates.pizzaz).toBeInstanceOf(Function)

  expect(newStates.muck(settings.color.problem)).toBe('#bc6460')
  expect(newStates.pizzaz(settings.color.problem)).toBe('#ff3a44')
})
