// ** PLugin to customize the markdown files

// @ts-check
import { MarkdownPageEvent } from "typedoc-plugin-markdown";
import { projectName } from "../docusaurus.config.json" with { type: "json" };

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(MarkdownPageEvent.END, (page) => {
    switch (page.url) {
      case "index.md":
        page.contents = page.contents.replace(
          `# ${projectName}`,
          "# API Reference",
        );
        break;
      default:
        break;
    }
  });
}
