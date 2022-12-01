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
    <Layout
      header="Marketplace"
      description="NFT MarketPlace gives an exclusive marketplace for buying & selling cards NFTs  on the GoDatingFi platform"
    >
      {page}
    </Layout>
  );
};

export default Partners;
