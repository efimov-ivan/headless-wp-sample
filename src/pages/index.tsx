import { getNextStaticProps } from '@faustjs/next';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { CTA, Footer, Header, Hero, Posts } from 'components';
import styles from 'scss/pages/home.module.scss';
import { client, PageIdType } from 'client';

export default function Page() {
  const { usePosts, usePage, useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  // const posts = usePosts({
  //   first: 6,
  //   where: {
  //     categoryName: 'uncategorized',
  //   },
  // });
  const about = usePage({
    id: 'about',
    idType: PageIdType.URI,
  })
  const contactUs = usePage({
    id: 'contact-us',
    idType: PageIdType.URI,
  })
  const privacyPolicy = usePage({
    id: 'privacy-policy',
    idType: PageIdType.URI,
  })

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
      </Head>

      <main className="content">
        <Hero
          title="WPE-Headless"
          // buttonText="Developer Docs"
          // buttonURL="https://faustjs.org"
          // button2Text="Headless on GitHub"
          // button2URL="https://github.com/wpengine/faustjs"
          bgImage="/images/headless_hero_background.jpg"
          id="hero">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam, accusamus aliquam nobis vitae optio, autem nam distinctio dolores iusto blanditiis dolorum corporis. Accusamus assumenda ex dolore consequatur excepturi id, ipsa, quo odit quis laboriosam incidunt repudiandae corporis magni suscipit numquam optio. Dignissimos quod vero dolorem, esse alias voluptatem excepturi.</p>
        </Hero>

        <section className={styles.about} id={about.slug}>
          <div className="wrap">
            {/* <h2>{about?.title()}</h2> */}
            <div dangerouslySetInnerHTML={{ __html: about?.content() }} />
          </div>
        </section>

        <section className={styles.contact_us} id={contactUs.slug}>
          <div className="wrap">
            {/* <h2>{about?.title()}</h2> */}
            <div dangerouslySetInnerHTML={{ __html: contactUs?.content() }} />
          </div>
        </section>

        <section className={styles.privacy_policy} id={privacyPolicy.slug}>
          <div className="wrap">
            {/* <h2>{privacyPolicy?.title()}</h2> */}
            <div dangerouslySetInnerHTML={{ __html: privacyPolicy?.content() }} />
          </div>
        </section>

        {/* <Posts
          posts={posts.nodes}
          heading="Latest Posts"
          //intro="The Posts component in src/pages/index.tsx shows the latest six posts from the connected WordPress site."
          headingLevel="h2"
          postTitleLevel="h3"
          id={styles.post_list}
        /> */}
        {/* <CTA
          title="Questions or comments?"
          buttonText="Join the discussion on GitHub"
          buttonURL="https://github.com/wpengine/faustjs/discussions"
          headingLevel="h2">
          <p>
            We welcome feature requests, bug reports and questions in the{' '}
            <a href="https://github.com/wpengine/faustjs">
              Headless Framework GitHub repository
            </a>
            .
          </p>
        </CTA> */}
      </main>
      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
