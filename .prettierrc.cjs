/** @type {import('prettier').Config} */
module.exports = {
  semi: true, // This is how you turn off semicolons, by the way
  trailingComma: 'all',
  singleQuote: true,
  arrowParens: 'always',
  jsxSingleQuote: false,
  printWidth: 120,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
  // eslint-disable-next-line no-dupe-keys
  overrides: [
    {
      files: ['*.json', '*.md', '*.toml', '*.yml'],
      options: { useTabs: false },
    },
  ],
}
