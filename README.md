# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Этот проект подразумевает собой интернет магазин с различными товарами, можно добавить в избранное и посмотреть список в каталоге.
Цель данного проекта было использовать и протестировать технологию Redux-toolkit и RTK-query, для возможности хранить избранные товары.
Также использовал localStorage, а длдя гибкой настройки использовал redux-persist, для того чтобы после перезагрузки страницы сохранялось состояние.

![ScreenShot](https://github.com/zorro199/product-store-react/blob/main/public/screen1.png)
![ScreenShot](https://github.com/zorro199/product-store-react/blob/main/public/screen2.png)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
