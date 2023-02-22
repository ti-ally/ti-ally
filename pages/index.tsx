import React from 'react'
import Layout from '../components/layout';

import heroImg from '../public/imgs/test-report.png';
import Hero from '../components/hero';

export default function Index() {

  return (
    <Layout>
      <Hero heroImage={heroImg} />
    </Layout>
  )
}
