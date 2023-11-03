/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [
		require("autoprefixer"),
		require("postcss-normalize"),
		require("@fullhuman/postcss-purgecss")({
			content: ["*.html"],
			extractors: [
				{
					extractor: (content) =>
						content.match(/[\w-/:]+(?<!:)/g) ||
						[],
					extensions: ["html"],
				},
			],
			whitelist: ["html", "body", "hidden"],
		}),
		require("cssnano")({ preset: "default" }),
	],
};

module.exports = config;
