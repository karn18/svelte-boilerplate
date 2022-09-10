import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  plugins: [svelte({ hot: !(process.env.VITEST ?? true) })],
  test: {
    include: ['**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], // Using `spec` to seperate vitest and playwright
    globals: true,
    environment: 'jsdom'
  }
})
