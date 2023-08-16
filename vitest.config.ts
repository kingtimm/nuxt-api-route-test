import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
    test: {
        environmentOptions: {
            nuxt: {
                domEnvironment: 'jsdom'
            }
        }
    }
})