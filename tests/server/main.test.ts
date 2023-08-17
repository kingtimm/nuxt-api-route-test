// @vitest-environment node

import { expect, test } from 'vitest'
import returnResponse from '~/server/api/lib/ping-pong'

test('event handler function should not reply with the same prompt', () => {
  const prompt = 'ping'
  const result = returnResponse(prompt)

  expect(prompt).not.toEqual(result)
})
