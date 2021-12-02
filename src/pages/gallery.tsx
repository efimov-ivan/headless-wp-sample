import { getNextStaticProps } from '@faustjs/next';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Footer, Header, Hero } from 'components';
import { client } from '../client';
import Image from 'next/image'

export default function Page() {
  const { useQuery } = client;
  const { generalSettings } = client.useQuery();
  const gallery = useQuery().allGallery()?.nodes;
  
  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Gallery - {generalSettings.title}</title>
      </Head>

      <Hero title="Gallery" />


      <main className="content content-single">
        <div className="wrap">
          <div className="wp-block-columns">
            {gallery.map((photo, key) => (
              <div key={key} className="wp-block-column">
                  { photo.image.mediaItemUrl 
                    // eslint-disable-next-line jsx-a11y/alt-text
                    ? <img src={photo.image.mediaItemUrl} style={{width: "100%", height: "auto"}}/>
                    : 'asd' }
                  {/* { photo.image.mediaItemUrl 
                    ? <Image src={photo.image.mediaItemUrl} width="800" height="auto" alt={photo.imageTitle}/>
                    : 'asd' } */}
              </div>
            ))}
          </div>
        </div>
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