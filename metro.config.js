const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    unstable_allowRequireContext: true,
  },
  resolver: {
    assetExts: [
      ...assetExts.filter(ext => ext !== 'svg'),
      'glb',
      'gltf',
      'png',
      'jpg',
    ],
    sourceExts: [...sourceExts, 'svg', 'js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
  },
};

module.exports = mergeConfig(defaultConfig, config);