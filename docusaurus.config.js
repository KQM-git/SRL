// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KQM SRL',
  tagline: 'KeqingMains\'s Honkai: Star Rail Library',
  url: 'https://srl.keqingmains.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        createRedirects(routePath) {
          const charMatch = routePath.match(/^(\/characters\/[a-z]+\/)(.+)$/);

          if (charMatch) {
            const char = charMatch[2];
            // console.log(`Adding alias from ${char} to ${routePath}`);
            if (char.startsWith('trailblazer-')) {
              const elemental = `${char.replace('trailblazer-', '')[0]}mc`
              return [`/${char}`, `/characters/${char}`, `/${elemental}`, `/characters/${elemental}`, `${charMatch[1]}/trailblazer`];
            }
            return [`/${char}`, `/characters/${char}`];
          }

          const evidenceMatch = routePath.match(/^(\/evidence\/characters\/[a-z]+\/)(.+)$/);
          if (evidenceMatch) {
            const char = evidenceMatch[2];
            // console.log(`Adding evidence alias from ${char} to ${routePath}`);
            if (char.startsWith('trailblazer-')) {
              const elemental = `${char.replace('trailblazer-', '')[0]}mc`
              return [`/evidence/characters/${elemental}`, `/evidence/characters/${char}`, `${evidenceMatch[1]}/${elemental}`, `${evidenceMatch[1]}/trailblazer`];
            }
            return [`/evidence/characters/${char}`];
          }

          return [];
        },
        redirects: [
          { from: '/damage', to: '/combat-mechanics/damage/damage-formula' },
        ]
      }),
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 960,
        min: 640,
        steps: 2,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo-2048.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(45, 40, 47)',
          },
        ],
      }
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/KQM-git/SRL/blob/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          routeBasePath: '/newsletter',
          blogTitle: 'Newsletter',
          path: 'newsletter',
          editUrl: 'https://github.com/KQM-git/SRL/blob/master/',
          postsPerPage: 5,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-117136430-6'
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'KQM SRL',
        logo: {
          alt: 'KeqingMains Logo',
          src: 'img/logo.webp',
          width: 40,
          height: 32
        },
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: 'Home',
          },
          {
            to: 'newsletter',
            position: 'left',
            label: 'Newsletter',
          },
          {
            href: 'https://hsr.keqingmains.com/',
            label: 'KeqingMains',
            position: 'right',
          },
          {
            href: 'https://github.com/KQM-git/SRL/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/KQMStarRail',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'TC Library',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Characters',
                to: '/characters',
              },
              {
                label: 'Equipment',
                to: '/equipment',
              },
              {
                label: 'Newsletter',
                to: '/newsletter',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/KQM-git/SRL/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'KQM',
                href: 'https://keqingmains.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/KQMStarRail',
              },
            ],
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      typesense: {
        typesenseCollectionName: 'srl',
        typesenseServerConfig: {
          nodes: [{
            host: 'library-search.keqingmains.com',
            port: 443,
            protocol: 'https'
          }],
          apiKey: 'g5CAwtRMy61YRcTvtNhANtMbhTvWveA9'
        }
      }
    }),
};

module.exports = config;
