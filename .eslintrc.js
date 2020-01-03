module.exports = {
  extends: 'erb',
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js')
      }
    }
  },
  rules: {
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "promise/always-return": "off"
  }
}
