import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    adapter: adapter({
      edge: false,
      split: true
    }),
    appDir: 'app',
    csrf: {
      checkOrigin: true
    },
    env: {
      dir: process.cwd()
    },
    version: {
      name: Date.now().toString(),
      pollInterval: 0
    }
  }
}

export default config
