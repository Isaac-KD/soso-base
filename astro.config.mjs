// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Sosos base',
      // On met à jour le chemin vers notre nouveau fichier CSS tout propre !
      customCss: [
        './src/styles/global.css', 
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/introduction/' },
            { label: 'Example Page', link: '/example' },
          ],
        },
        {
          label: 'Mathématiques',
          items: [
            { label: 'Analyse & DL', link: '/maths/analyse/' },
          ],
        },
      ],
    }),
  ],
});