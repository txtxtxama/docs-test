// devDependencies
// eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin @vue/eslint-config-typescript @rushstack/eslint-patch

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
module.exports = {
    
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-typescript/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['vue', '@typescript-eslint'],
    // ESLint 默认忽略 . 开头的目录/文件 (.开头 在 Linux 系统上表示隐藏目录)
    // 可以在 . 开头的目录/文件 前面加上 ! 表示 不忽略 该目录/文件
    ignorePatterns: [
        '!.vitepress',
        '!.eslintrc.cjs',
        '!.stylelintrc.cjs',
        'node_modules',
        'dist',
        'public',
        'index.html',
        'components.d.ts',
        'auto-imports.d.ts'
    ],
    rules: {
        'vue/multi-word-component-names': 0,
        // 大括号风格
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],

        // 缩进使用 4 个空格，并且 switch 语句中的 Case 需要缩进
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4, { SwitchCase: 1, flatTernaryExpressions: true }],

        // 数组的括号内的前后禁止有空格
        'array-bracket-spacing': ['error', 'never'],
        'vue/array-bracket-spacing': ['error', 'never'],

        // 强制在花括号中使用一致的空格
        'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
        'vue/object-curly-spacing': ['error', 'always', { objectsInObjects: false }],

        // 要求把换行符放在操作符前面
        'operator-linebreak': ['error', 'before'],

        // 禁止空语句（可在空语句写注释避免），允许空的 catch 语句
        'no-empty': ['error', { allowEmptyCatch: true }],

        // 禁止在语句末尾使用分号
        semi: ['error', 'never'],

        // 禁用不必要的分号
        'no-extra-semi': 'error',

        // 函数圆括号之前有一个空格
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always', // 匿名函数表达式
                named: 'always', // 命名的函数表达式
                asyncArrow: 'always' // 异步的箭头函数表达式
            }
        ],

        // 禁止行尾有空格
        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: true // 允许在空行使用空白符
            }
        ],

        // vue模板缩进
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: false,
                ignores: []
            }
        ],

        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    markers: ['*package', '!', '/', ',', '=']
                },
                block: {
                    // 前后空格是否平衡
                    balanced: false,
                    markers: ['*package', '!', ',', ':', '::', 'flow-include'],
                    exceptions: ['*']
                }
            }
        ],

        // 行尾逗号
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }
        ],

        // 强制使用一致的反勾号、双引号或单引号
        quotes: ['error', 'single', { allowTemplateLiterals: true }],

        // 要求对象字面量属性名称用引号括起来
        'quote-props': ['error', 'as-needed'],

        // 括号内的间隔
        'space-in-parens': ['error', 'never'],

        // 不允许多个空格
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],

        // 对象键值间距
        'key-spacing': ['error', { mode: 'strict' }],

        // 等号左右空格
        'space-infix-ops': ['error', { int32Hint: false }],

        // 箭头函数括号
        'arrow-parens': ['error', 'as-needed'],

        // 逗号后空格
        'comma-spacing': ['error', { before: false, after: true }],

        // key
        'vue/require-v-for-key': 'error',

        // v-if v-for
        'vue/no-use-v-if-with-v-for': [
            'error',
            {
                allowUsingIterationVar: false
            }
        ],
        // 允许props修改
        'vue/no-mutating-props': 0,

        // 组件顺序
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'directives', 'filters'],
                    'extends',
                    'mixins',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'data',
                    'computed',
                    'watch',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    ['template', 'render'],
                    'renderError'
                ]
            }
        ],

        // 不允许多个空格
        'vue/no-multi-spaces': [
            'error',
            {
                ignoreProperties: false
            }
        ],

        // 不允许在属性的等号周围有空格
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'],

        // 在{{ value }}插值中加强统一的间距
        'vue/mustache-interpolation-spacing': ['error', 'always'],

        // 关闭组件未使用提示
        'vue/no-unused-components': 'off',

        // 关闭未使用变量提示
        'vue/no-unused-vars': 'off',

        // 闭合标签空格
        'vue/html-closing-bracket-spacing': 'error'
    }
}
