const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Inject DOMException polyfill at the VERY START of the bundle,
// before React Native's InitializeCore / setUpDefaultReactNativeEnvironment.
// This fixes: ReferenceError: Property 'DOMException' doesn't exist
// caused by whatwg-fetch (dependency of @supabase/supabase-js).
const originalGetPolyfills = config.serializer?.getPolyfills;
config.serializer = config.serializer || {};
config.serializer.getPolyfills = (options) => {
  const defaultPolyfills = originalGetPolyfills
    ? originalGetPolyfills(options)
    : require('react-native/rn-get-polyfills')();
  // Prepend our polyfill BEFORE all React Native polyfills
  return [path.resolve(__dirname, 'polyfills.js'), ...defaultPolyfills];
};

module.exports = withNativeWind(config, { input: './styles/global.css' });

