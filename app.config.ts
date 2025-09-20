import { defineConfig } from '@solidjs/start/config'
import postgres from '@neondatabase/vite-plugin-postgres'

export default defineConfig({
  vite: {
    plugins: [
      postgres({
        seed: {
          type: 'sql-script',
          path: 'init.sql',
        },
      }),
    ],
  },
})
