module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  importOrder: [
    'components/(.*)$',
    'store/(.*)$',
    'locales/(.*)$',
    'services/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
};
