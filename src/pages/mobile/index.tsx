import { ReactElement } from 'react';
import { NextPageWithLayout } from 'utils/interfaces';
import Layout from 'layouts';
import ComingSoon from 'modules/coming-soon';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

const Partners: NextPageWithLayout = () => {
  return <ComingSoon />;
};

Partners.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header="Mobile" description="A platform for young people to confidently connect in love, life, and work">
      {page}
    </Layout>
  );
};

export default Partners;
