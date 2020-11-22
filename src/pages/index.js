import React from "react";
import { Hero } from "../components/hero";
import { Features } from "../components/features";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <>
      <Layout>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="Home"
        />
        <Hero />
        <Features />
      </Layout>
    </>
  );
}

export default IndexPage;
