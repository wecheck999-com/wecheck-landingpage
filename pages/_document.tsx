import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache } from 'utils';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>
            Tìm kiếm sđt, số điện thoại, thông tin lừa đảo, môi giới, làm phiền
          </title>
          <meta
            name='keywords'
            content='wecheck999, Tra cưu sdt, tra cứu số điện thoại, thông tin lừa đảo, môi giới, lừa đảo'
          />
          <meta
            name='description'
            content='wecheck999.com, Tìm kiếm thông tin sdt, số điện thoại, thông tin lừa đảo, thông tin môi giới, làm phiền'
          />
          <meta
            property='og:title'
            content='Tra cứu sđt, số điện thoại, thông tin lừa đảo, môi giới, làm phiền'
          />
          <meta
            property='og:description'
            content='wecheck999.com, Tìm kiếm thông tin sdt, số điện thoại, thông tin lừa đảo, thông tin môi giới, làm phiền, ứng dụng chống lừa đảo, làm phiền'
          />
          <meta
            property='og:image'
            content='https://wecheck999.s3.ap-southeast-1.amazonaws.com/Screenshot+2022-11-26+at+11.52.32.png'
          />
          <meta name='RATING' content='GENERAL' />
          <link rel='icon' href='/favicon.ico' />
          <meta
            property='og:url'
            itemProp='url'
            content='https://wecheck999.com'
          />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
