import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
	]),
	{
		settings: {
			'import/resolver': {
				typescript: {
					project: './tsconfig.json',
				},
			},
		},
		rules: {
			// =========================
			// --> Turn the rule off <--
			// =========================
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 0,
			'react/react-in-jsx-scope': 0,
			// React 17+ provide support for a new version of the JSX transform
			'react/require-default-props': 0,
			// DefaultProps => object default values
			'import/prefer-default-export': 0,
			'react/jsx-no-useless-fragment': 0,
			'no-shadow': ['error', { allow: [] }],
			'no-param-reassign': 0,
			// Redux toolkit - linting state mutations
			'import/no-relative-packages': 0,
			'react/prop-types': 0,
			// Off props types
			'react/forbid-prop-types': [1, { forbid: [] }],
			// Reset default forbid props as any, array, object
			'import/no-named-as-default': 0,
			// Allow to use default import
			'import/no-named-as-default-member': 0,
			// Allow to use default import
			'no-plusplus': 0,
			// Allow to use i++ operator
			// =====================================
			// --> Turn the rule on as a warning <--
			// =====================================
			'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
			// ====================================
			// --> Turn the rule on as an error <--
			// ====================================
			'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
			'react/no-unstable-nested-components': [2, { allowAsProps: true }],
			'react/jsx-props-no-spreading': [2, { html: 'ignore', custom: 'ignore', explicitSpread: 'ignore', exceptions: [''] }],
			'import/no-extraneous-dependencies': 'off',
			'import/extensions': 'off',
			'no-console': 1,
			'no-useless-return': 'error',
			'arrow-body-style': ['error', 'as-needed'],
			'no-nested-ternary': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: true,
					// ...
				},
			],
			'no-duplicate-imports': 'error',
		},
	},
]);

export default eslintConfig;
