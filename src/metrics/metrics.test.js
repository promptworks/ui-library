import { mergeDeep } from 'immutable'
import { rem, multiplyUnit, gu } from './index'
import settings from '../settings'


test('rem converter', () => {
  expect(rem(16)).toBe('1rem')
  expect(rem(24)).toBe('1.5rem')
  expect(rem(12)).toBe('0.75rem')
})


test('multiply units', () => {
  expect(multiplyUnit('20px', 2)).toBe('40px')
  expect(multiplyUnit('200em', 3)).toBe('600em')
  expect(multiplyUnit('2000pt', 4)).toBe('8000pt')
})


test('grid unit', () => {
  expect(gu(1, settings)).toBe('0.5rem')
  expect(gu(2, settings)).toBe('1rem')
  expect(gu(3, settings)).toBe('1.5rem')
})
