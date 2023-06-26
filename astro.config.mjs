import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://hibzzgames.github.io',
  integrations: [
    starlight({
      title: 'Hibzz.Docs',
      social: {
        github: 'https://github.com/hibzzgames/',
        discord: 'https://discord.gg/YXdJ8cZngB',
        twitter: 'https://twitter.com/hibzzgames',
      },
      customCss: [
        '@fontsource/poppins/400.css',
        '@fontsource/poppins/600.css',
        '/src/styles/custom.css'
      ],
    }),
  ],
  experimental: {
    redirects: true
  },
  redirects: {
    '/dropl': '/dropl/getting-started',
    '/singletons': '/singletons/getting-started'
  }
});
