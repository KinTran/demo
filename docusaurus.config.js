const { API_BUTTON } = require('./src/constants')

const editUrl = 'https://google.com'

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Demo',
    tagline:
        'Empowering Documentation with Docusaurus: Building, Customizing, and Automating Docs',
    url: 'https://KinTran.github.io',
    baseUrl: '/demo/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.svg',
    organizationName: 'KinTran', // Usually your GitHub org/user name.
    projectName: 'demo', // Usually your repo name.
    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: 'Demo',
            logo: {
                alt: 'Demo Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docsVersionDropdown',
                    position: 'left',
                },
                {
                    type: 'localeDropdown',
                    position: 'left',
                },
                {
                    type: 'doc',
                    position: 'left',
                    docId: 'getting-started/introduction',
                    label: 'Docs',
                },
                {
                    type: 'doc',
                    position: 'left',
                    docId: 'tutorial/index',
                    label: 'Tutorial',
                },
                {
                    docsPluginId: 'community',
                    type: 'doc',
                    position: 'right',
                    docId: 'awesome',
                    label: 'Community',
                },
                {
                    position: 'right',
                    to: 'blog',
                    label: 'Blog',
                },
                {
                    href: 'https://play.yew.rs/',
                    position: 'right',
                    label: 'Playground',
                },
                {
                    href: 'https://docs.rs/yew',
                    position: 'right',
                    label: API_BUTTON,
                },
                {
                    href: 'https://github.com/yewstack/yew',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Support',
                    items: [
                        {
                            label: 'Sponsor Project',
                            href: 'https://opencollective.com/yew',
                        },
                    ],
                },
                {
                    title: 'Participate',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/yewstack/yew',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/VQck8X4',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/yewstack',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Yew Awesome',
                            href: 'https://github.com/jetli/awesome-yew',
                        },
                    ],
                },
            ],
        },
        prism: {
            additionalLanguages: ['rust', 'toml'],
        },
        algolia: {
            appId: '5L7HLR5EFP',
            apiKey: '5b9a7b8afd7985f2870d696afb31cd7e',
            indexName: 'kintran_github_io_5l7hlr5efp_pages',
            contextualSearch: true,
            insights: true, // Optional, automatically send insights when user interacts with search results
            searchPagePath: 'search',
        },
        metadata: [
            { name: 'algolia-site-verification', content: '3ACAA3D29FA457F6' },
        ],
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ja', 'zh-Hans', 'zh-Hant'],
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                theme: {
                    customCss: ['./src/css/custom.css'],
                },
                docs: {
                    path: 'docs',
                    sidebarPath: require.resolve('./sidebars/docs.js'),
                    editUrl,
                    routeBasePath: '/docs',
                },
                blog: {
                    path: 'blog',
                    blogTitle: 'Yew Blog',
                    editUrl,
                },
                pages: {},
            },
        ],
    ],
    plugins: [
        'docusaurus-plugin-sass',
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'community',
                path: 'community',
                sidebarPath: require.resolve('./sidebars/community.js'),
                routeBasePath: '/community',
                editUrl,
            },
        ],
        [
            'client-redirects',
            {
                redirects: [
                    // this handles the redirect from `/next` -> to the (current) first item in the docs sidebar
                    // note: if the first item is changed, it should be reflected here
                    {
                        to: '/docs/next/getting-started/introduction', // string
                        from: ['/docs/next'], // string | string[]
                    },
                ],
            },
        ],
    ],
}
