import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'alumni-stories'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  base: isGitHubPages ? `/${repoName}/` : '/',
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
    hmr: false,
  },
  preview: {
    host: true,
    allowedHosts: true,
    port: 5173,
    strictPort: true,
  },
})
