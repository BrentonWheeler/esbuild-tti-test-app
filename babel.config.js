module.exports = function(api) {
  api.cache(true);

  const usingEsbuild = process.env.serializer === 'esbuild'
  console.log('process.env.serializer', process.env.serializer)

  return {
    presets: [
      ['@rnx-kit/babel-preset-metro-react-native', {
        disableImportExportTransform: usingEsbuild && process.env['RNX_METRO_SERIALIZER_ESBUILD'],
      }]
    ]
  };
};
