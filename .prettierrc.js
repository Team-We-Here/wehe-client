const tsOption = {
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSameLine: true,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'auto',
  importOrder: [
    '^next/(.*)$',
    '^styled-components$',
    '@src/reduce(.*)$',
    '@src/hooks(.*)$',
    '@src/service(.*)$',
    '@src/socket(.*)$',
    '@src/util(.*)$',
    '@src/constants(.*)$',
    '@src/containers(.*)$',
    '@src/components(.*)$',
    '@src/pages(.*)$',
    '@src/assets(.*)$',
    '@src/type(.*)$',
    '@src/styles(.*)$',
    '@public/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
    'antd/dist/antd.less',
    'antd/dist/antd.css',
    '^(.*)(?:.css)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = {
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        ...tsOption,
      },
    },
    {
      files: '*.{js,jsx}',
      options: {
        ...tsOption,
        printWidth: 80,
      },
    },
    {
      files: '*.{scss}',
      options: {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 4,
      },
    },
    {
      files: '*.{css}',
      options: {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 4,
      },
    },
  ],
};
