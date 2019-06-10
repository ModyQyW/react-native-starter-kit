module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['import', { libraryName: '@ant-design/react-native' }],
    ],
  };
};
