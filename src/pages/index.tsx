import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

type customFields = {
  [x: string]: string;
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { lastVersion, projectName } = siteConfig.customFields as customFields;
  const versionPath = lastVersion === "current" ? "" : lastVersion;

  return (
    <Layout title="Welcome">
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>{projectName}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <Link to={`/docs/${versionPath}`}>Get started</Link>
      </div>
    </Layout>
  );
}
