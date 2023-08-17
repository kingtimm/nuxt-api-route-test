// @vitest-environment nuxt

import { expect, test } from 'vitest'
import { mountSuspended, registerEndpoint } from 'nuxt-vitest/utils'
import App from '~/app.vue'

test('we see a pong response', async () => {
  // we register a mock endpoint for the client to hit as there is
  // not a nitro server in this environment
  registerEndpoint('/api/ping', () => 'pong')

  // we mount the application
  const app = await mountSuspended(App)
  expect(app.find('#response').html()).toContain('pong')
},
)
