import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default [
  // 1. Глобальные игноры (объект только с ignores работает на весь проект)
  {
    ignores: ['dist']
  },
  
  // 2. Базовые рекомендуемые конфиги JS и TS
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. Окружение Node.js для конфигурационных файлов (включая commitlint.config.cjs)
  {
    files: ['**/*.config.{js,cjs,ts}', '**/*.config.*.{js,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // 4. Настройки для исходного кода React приложения
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
]