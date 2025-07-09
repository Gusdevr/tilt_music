module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "jsx-a11y", "react-hooks"],
  rules: {
    // você pode customizar regras aqui:
    "react/react-in-jsx-scope": "off", // porque no Vite/React 17+ não precisa importar React
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "react/jsx-uses-react": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
