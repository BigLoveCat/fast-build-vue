// eslint.config.js 或 .eslintrc
export default [
  {
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended' // ✅ 关键
    ]
  }
];
