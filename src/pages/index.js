import React from 'react';
import { Features } from '../components/features';
import { Intro } from '../components/intro';
import { Testimonial } from '../components/testimonial';
import { Presenter } from '../components/presenter';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <>
      <Layout>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title='Home'
        />
        <Features />
        <Intro num='1' />
        <Testimonial />
        <Presenter
          title='Pain makes the future easier. No Pain makes the future harder.'
        />
        <Features showTitle={false} />
        <Intro
          showTitle={false}
          num='2'
        />
      </Layout>
    </>
  );
}

export default IndexPage;
