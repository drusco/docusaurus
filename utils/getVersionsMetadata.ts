import type { VersionOptions } from "@docusaurus/plugin-content-docs";

export const semanticVersion = /^\d+\.\d+\.\d+$/;

export const getVersionsMetadata = (
  versions: string[],
): { [v: string]: VersionOptions } => {
  const result: { [v: string]: VersionOptions } = {};
  versions.forEach((version) => {
    const hasPrefix = semanticVersion.test(version);
    result[version] = {
      label: `${hasPrefix ? "v" : ""}${version}`,
      path: version,
    };
  });
  return result;
};
