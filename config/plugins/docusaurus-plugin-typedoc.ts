export const docusaurusPuginTypedoc = [
  "docusaurus-plugin-typedoc",
  {
    out: "./docs/api",
    entryPoints: [],
    readme: "none",
    tsconfig: "./tsconfig.json",
    watch: process.env.TYPEDOC_WATCH === "true",
    plugin: ["typedoc-plugin-no-inherit", "./plugins/typedoc-plugin-hooks.mjs"],
    githubPages: true,
    entryFileName: "index.md",
    // sidebar options
    sidebar: {
      autoConfiguration: true,
      pretty: true,
    },
  },
];
