// @vitest-environment nuxt

import { test, expect } from 'vitest'
import { mountSuspended } from 'nuxt-vitest/utils'
import App from '~/app.vue'

test('that we see the endpoint', async () => {
    // there's a server api endpoint at /api/ping that returns pong

    // const result = await $fetch('/api/ping')
    // expect(result).toEqual('pongg')
    const app = await mountSuspended(App)
    expect(app.html()).toContain('pong')
 }
)