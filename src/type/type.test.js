import { mergeDeep } from 'immutable'

import settings from '../settings'
import { generateSizes, modularScale } from './index'


test('modular scale', () => {
  const modifiedSettings = mergeDeep(settings, {
    type: {
      base: 12,
      scaleRatio: 1.5
    }
  })

  // With default settings
  expect(modularScale(0, settings)).toBe('1rem')
  expect(modularScale(1, settings)).toBe('1.25rem')
  expect(modularScale(2, settings)).toBe('1.5625rem')
  expect(modularScale(-1, settings)).toBe('0.8rem')

  // With modified settings
  expect(modularScale(0, modifiedSettings)).toBe('0.75rem')
  expect(modularScale(1, modifiedSettings)).toBe('1.125rem')
  expect(modularScale(2, modifiedSettings)).toBe('1.6875rem')
  expect(modularScale(-1, modifiedSettings)).toBe('0.5rem')
})


test('generate sizes', () => {
  const expectedSizes = {
    small: '0.8rem',
    default: '1rem',
    medium: '1.25rem',
    large: '1.5625rem',
    xlarge: '1.953125rem'
  }
  expect(generateSizes(settings)).toEqual(expectedSizes)
})
