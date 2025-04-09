import type { Config } from "@docusaurus/types";
import wordsUpperCase from "./utils/wordsUpperCase";
import { i18nConfig } from "./config/i18n";
import { presetsConfig, lastVersion } from "./config/presets";
import { themeConfig } from "./config/theme";
import { docusaurusPuginTypedoc } from "./config/plugins/docusaurusPuginTypedoc";
import { projectName, organizationName, tagline } from "./config/constants";

const config: Config = {
  organizationName,
  title: wordsUpperCase(projectName),
  tagline,
  url: "http://localhost/",
  baseUrl: `/${projectName}/`,
  favicon: "img/favicon.ico",
  titleDelimiter: "·",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,

  i18n: i18nConfig,
  presets: presetsConfig,
  themeConfig: themeConfig,
  plugins: [docusaurusPuginTypedoc],

  customFields: {
    lastVersion,
    projectName,
  },
};

export default config;
