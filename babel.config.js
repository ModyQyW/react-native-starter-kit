module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-transform-react-jsx-source',
      ['import', { libraryName: '@ant-design/react-native' }],
    ],
  };
};
