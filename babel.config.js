module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            "last 2 versions"
          ],
          "ie": "11"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  "sourceMaps": "inline",
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/plugin-transform-private-methods",
    "@babel/plugin-transform-private-property-in-object",
    "@babel/plugin-transform-nullish-coalescing-operator",
    "@babel/plugin-transform-optional-chaining"
  ]
};
