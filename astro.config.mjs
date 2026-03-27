// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Sosos base',
      // Autres options de configuration...
      // Ajoutez ou modifiez la section sidebar comme suit :
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Assurez-vous que le lien correspond au chemin de votre fichier Markdown
            // Pour /Users/isaac/Desktop/soso-base/src/content/docs/introduction.md, le lien est '/introduction/'
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
