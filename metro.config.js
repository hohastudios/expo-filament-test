/**const {getDefaultConfig} = require('@expo/metro-config');
const {mergeConfig} = require('@react-native/metro-config');



const defaultConfig = getDefaultConfig(__dirname)

/**
 * Metro configuration
 * https://metrobundler.dev/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
/**const config = {
    resolver: {
        // This makes it possible to import .glb files in your code:
        assetExts: [...(defaultConfig.resolver?.assetExts || []), 'glb']
    }
};


module.exports = mergeConfig(defaultConfig, config); */


const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  // Adds support for `.db` files for SQLite databases
  'glb'
);

module.exports = config;