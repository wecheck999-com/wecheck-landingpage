import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from "app/store";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "../utils/index";
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/common';
import { EmptyLayout } from '../components/Layouts/EmptyLayout/EmptyLayout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { wrapper } from '../app/store';
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return <Provider store={store}>
    <CacheProvider value={clientSideEmotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  </Provider>
  }
}
export default wrapper.withRedux(App);