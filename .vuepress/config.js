const {
    description
} = require('../package')

module.exports = {
    title: 'PojavLauncher',
	description: 'Minecraft: Java Edition, meet mobile devices.',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/',
    dest: './docs',

	watch: {
	    $page(newPage, oldPage) {
	      if (newPage.key !== oldPage.key) {
	        requestAnimationFrame(() => {
	          if (this.$route.hash) {
	            const element = document.getElementById(this.$route.hash.slice(1));

	            if (element && element.scrollIntoView) {
	              element.scrollIntoView();
	            }
	          }
	        });
	      }
	    }
	  },

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/PojavLauncherTeam/pojavlauncherteam.github.io',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
        logo: 'homepage.png',
        sidebar: [{
            title: 'About PojavLauncher',
            collapsable: false,
            sidebarDepth: 1,
            children: [
				['/about-pojavlauncher/supported-versions', 'Supported Versions'],
				['/about-pojavlauncher/supported-platforms', 'Supported Devices'],
				['/about-pojavlauncher/pros-cons', 'Pros and Cons (to real Java)'],
                ['/about-pojavlauncher/security', 'PojavLauncher x Security'],
            ]
        },
        {
            title: 'Android',
            collapsable: true,
            children: [
                {
                    title: 'Getting Started',
                    collapsable: true,
					path: '/android/install-guide/',
                    sidebarDepth: 1,
                    children: [
                        ['/android/install-guide/google-play', 'Google Play'],
						['/android/install-guide/manual', 'GitHub'],
						['/android/install-guide/building.md', 'Building'],
                    ]
                },
				{
					title: 'Wiki',
					collapsable: true,
					path: '/android/wiki/',
					sidebarDepth: 1,
					children: [
						{
							title: 'Getting Started',
							collapsable: true,
							sidebarDepth: 1,
							path: '/android/wiki/getting-started/',
							children: [
								['/android/wiki/getting-started/signing-in', 'Signing into the launcher'],
							]
						},
						{
							title: 'FAQ',
							collapsable: true,
							sidebarDepth: 1,
							path: '/android/wiki/faq/',
							children: [
							]
						},
                        {
							title: 'Troubleshooting',
							collapsable: true,
							sidebarDepth: 1,
							path: '/android/wiki/troubleshooting/',
							children: [
								['/android/wiki/troubleshooting/basics', 'Basic troubleshooting steps'],
								{
									title: 'Specific issues',
									collapsable: true,
									sidebarDepth: 1,
									path: '/android/wiki/troubleshooting/specific/',
									children: [
                                    ]
                                }
							]
						},
						{
							title: 'Going further',
							collapsable: true,
							sidebarDepth: 1,
							path: '/android/wiki/going-further/',
							children: [
								['/android/wiki/going-further/switching-mc-versions', 'Switching Minecraft versions'],
								{
									title: 'Installing non-vanilla Minecraft',
									collapsable: true,
									sidebarDepth: 1,
									children: [
										['/android/wiki/going-further/non-vanilla/forge', 'Forge'],
										['/android/wiki/going-further/non-vanilla/fabric', 'Fabric'],
										['/android/wiki/going-further/non-vanilla/optifine', 'OptiFine'],
									]
								},
							]
						},
					]
				},
				['/android/roadmap', 'Roadmap'],
            ]
        },
        {
            title: 'iOS',
            collapsable: true,
            children: [
                {
                    title: 'Getting Started',
                    collapsable: true,
                    sidebarDepth: 1,
					path: '/ios/install-guide/',
                    children: [
						['/ios/install-guide/procursus', 'Procursus'],
						['/ios/install-guide/doregon-repo', 'Non-Procursus'],
						['/ios/install-guide/manual', 'Manual'],
						['/ios/install-guide/building', 'Building'],
                    ]
                },
				{
                    title: 'Wiki',
                    collapsable: true,
					path: '/ios/wiki/',
					sidebarDepth: 1,
                    children: [
						{
							title: 'FAQ',
							collapsable: true,
							sidebarDepth: 1,
							path: '/ios/wiki/faq/',
							children: [
								['/ios/wiki/faq/jailbreak', 'Why does iOS need a jailbreak?'],
								['/ios/wiki/faq/tweak-conflicts', 'Known issues with other tweaks'],
							]
						},
                        {
							title: 'Troubleshooting',
							collapsable: true,
							sidebarDepth: 1,
							path: '/ios/wiki/troubleshooting/',
							children: [
								['/ios/wiki/troubleshooting/basics', 'Basic troubleshooting steps'],
								{
									title: 'Specific issues',
									collapsable: true,
									sidebarDepth: 1,
									children: [
										['/ios/wiki/troubleshooting/specific/0x68', '0x68 is not a valid region'],
                                    ]
                                }
							]
						},
						{
							title: 'Going further',
							collapsable: true,
							sidebarDepth: 1,
							path: '/ios/wiki/going-further/',
							children: [
								['/ios/wiki/going-further/switching-mc-versions', 'Switching Minecraft versions'],
								{
									title: 'Installing non-vanilla Minecraft',
									collapsable: true,
									sidebarDepth: 1,
									children: [
										['/ios/wiki/going-further/non-vanilla/forge', 'Forge'],
										['/ios/wiki/going-further/non-vanilla/fabric', 'Fabric'],
										['/ios/wiki/going-further/non-vanilla/optifine', 'OptiFine'],
									]
								},
								['/ios/wiki/going-further/controlling-accounts', 'Dealing with accounts'],
								['/ios/wiki/going-further/environment-variables', 'Wrangling environment variables'],
								['/ios/wiki/going-further/java-arguments', 'Custom Java arguments'],
								['/ios/wiki/going-further/overb0arding', 'Fixing memory limits'],
							]
						},
                    ]
                },
				['/ios/roadmap', 'Roadmap'],
            ]
        },
        {
        	title: 'Contributions',
        	collapsable: false,
        	sidebarDepth: 1,
        	children: [
        		['/contribution/launchers.md', 'PojavLauncher itself'],
        		['/contribution/website.md', 'This website'],
        		['/contribution/translations.md', 'Translating'],
        	]
        },
		],
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
