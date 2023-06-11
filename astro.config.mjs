import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Hibzz.Docs',
      social: {
        github: 'https://github.com/hibzzgames/',
        discord: 'https://discord.gg/YXdJ8cZngB',
        twitter: 'https://twitter.com/hibzzgames',
      },
    }),
  ],
});
