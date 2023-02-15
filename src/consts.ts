export const SITE = {
	title: 'Quick.db Docs',
	description: 'Official Quick.db Documentation',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/plexidev/assets/blob/main/docs/banner-minimal.png?raw=true',
		alt:
			'quick.db logo with the word documentation above it'
	},
	twitter: 'plexidev',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/plexidev/quick.db-docs`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/plexidev`;

// TODO: See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Welcome': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Basic Usage', link: 'en/basic-usage' }
		],
		'Misc.': [
			{ text: 'Migration', link: 'en/migration' },
			{ text: 'Discord Integration', link: 'en/discord' }
		],
	},
};
