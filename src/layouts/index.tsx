import { ReactNode, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import ScrollToTopSvg from 'assets/icons/scroll-top-top.svg';
import HeadApp from './head';
import HeaderHome from './components/header';
import HeaderPage from './components/header/header-page';
import Footer from './components/footer';
import { toastSuccess } from 'modules/toast';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

interface Props {
  header?: string;
  description?: string;
  isHome?: boolean;
  children?: ReactNode;
}

const Layout = ({ header = '', description = '', isHome = false, children }: Props) => {
  const [address, setAddress] = useState<string>('0xB3554D555230b763BDc18a41e626B54be54401C1');

  return (
    <div className="gdf-wrapper">
      <HeadApp />
      <ScrollToTop className={cx('scroll-top-top')} component={<ScrollToTopSvg />} smooth />
      <h2 className={cx('contract-address')}>
        <span>Contract Address on Polygon: </span>
        <a
          className={cx('address')}
          onClick={() => {
            if (address) {
              navigator.clipboard.writeText(address).then(() => toastSuccess('Copied'));
            }
          }}
        >
          {address}
        </a>
      </h2>
      {isHome && <HeaderHome />}
      {!isHome && <HeaderPage header={header} description={description} />}
      <main className={cx('wrapper')}>
        <div className={cx('inner')}>
          <section className={cx('content')}>{children}</section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
