import type { ReactElement, ReactNode } from 'react';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'assets/styles/godatingfi.scss';
import 'react-toastify/dist/ReactToastify.css';
import { reload } from 'utils/functions';
import ErrorBoundary from 'components/error-boundary';
import { Slide, ToastContainer } from 'react-toastify';
import Layout from 'layouts';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 150,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    window.addEventListener(
      'touchmove',
      () => {
        Aos.refresh();
      },
      false,
    );
  }, []);

  return (
    <ErrorBoundary onReset={reload}>
      <ToastContainer hideProgressBar={true} position={'top-right'} transition={Slide} limit={1} />
      {getLayout(<Component {...pageProps} />)}
    </ErrorBoundary>
  );
}

export default MyApp;
