import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '../utils/index';
import type { AppProps } from 'next/app';
import { AppPropsWithLayout } from '../models/common';
import { EmptyLayout } from '../components/Layouts/EmptyLayout/EmptyLayout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fragment } from 'react';
import Head from 'next/head';
import settings from "../data/settings.json";
import Script from 'next/script';
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return(
  <Fragment>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-WFNG7DT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-WFNG7DT');
        `}
      </Script>
    <Head>
        <title>{settings?.title}</title>
        <meta name='description' content={settings?.description} />
        <meta name='keywords' content={settings?.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <Layout>
    <Provider store={store}>
          <Component {...pageProps} />
    </Provider>
        </Layout>
      </CacheProvider>
  </Fragment>
  )
}