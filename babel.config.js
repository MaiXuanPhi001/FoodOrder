module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // RNA RNI reanimated config
  plugins: [
    'react-native-reanimated/plugin',
    [
      "module-resolver",
      {
        root: ['./'],
        alias: {
          '~': './src',
        },
      },
    ]
  ],
};
