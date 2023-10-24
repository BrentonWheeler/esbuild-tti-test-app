const { makeMetroConfig} = require('@rnx-kit/metro-config');
const { MetroSerializer } = require('@rnx-kit/metro-serializer');
const { MetroSerializer: EsbuildMetroSerializer, esbuildTransformerConfig } = require('@rnx-kit/metro-serializer-esbuild');

const usingEsbuild = process.env.serializer === 'esbuild'
console.log('process.env.serializer', process.env.serializer)

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

if(usingEsbuild){
    config.serializer = { customSerializer: EsbuildMetroSerializer() }
    config.transformer = esbuildTransformerConfig
} else {
    config.serializer = { customSerializer: MetroSerializer([]) }
    config.transformer = {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    };
}

module.exports = makeMetroConfig(config);
