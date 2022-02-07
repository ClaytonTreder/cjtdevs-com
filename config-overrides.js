const Mode = require("frontmatter-markdown-loader/mode");

module.exports = function override(config, env) {
  let oneOf = config.module.rules[1].oneOf;

  config.module.rules[1].oneOf = [
    {
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: [Mode.REACT, Mode.META, Mode.HTML] },
    },
    ...oneOf,
  ];

  return config;
};
