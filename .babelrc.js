const presets = [
  '@babel/preset-flow',
  [
    '@babel/preset-env',
    {
      targets: { node: 'current' },
      debug: false
    }
  ]
];

const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: 2
    }
  ],
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-transform-strict-mode'
];

module.exports = { presets, plugins };
