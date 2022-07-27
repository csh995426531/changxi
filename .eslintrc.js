module.exports = {
  extends: [
    require.resolve('@h/fe-lint/react-ts.js'),
    'plugin:react/jsx-runtime',
  ],
  settings: {
    react: {
      version: '18.2.0',
    },
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
      },
    },
  },
  overrides: [
    {
      files: ['*.js'],
      extends: [require.resolve('@h/fe-lint/js.js')],
    },
    {
      files: ['*.ts'],
      extends: [require.resolve('@h/fe-lint/ts.js')],
    },
    {
      files: ['**/__tests__'],
      extends: [
        require.resolve('@h/fe-lint/ts.js'),
        require.resolve('@h/fe-lint/jest.js'),
      ],
    },
    {
      files: ['vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
