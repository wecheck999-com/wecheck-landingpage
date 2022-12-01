import { ReactElement, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { NextPageWithLayout } from 'utils/interfaces';
import PartnersDefault from 'utils/page/partners.const';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Layout from 'layouts';
const cx = classNames.bind(styles);

const Partners: NextPageWithLayout = () => {
  const renderPartners = useMemo(() => {
    return PartnersDefault.map((item, index) => (
      <article key={index} className={cx('backer')}>
        <Image src={item.logo} alt={item.name} />
      </article>
    ));
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('bg-gradient')}></div>
      <div className={cx('inner')}>
        <div className={cx('bg-gradient-ellipse')}>
          <div className={cx('bg-color-gradient-ellipse')}></div>
        </div>
        <h2 className="gdf-heading-14">Partner</h2>
        <div className={cx('backers')}>{renderPartners}</div>
      </div>
    </div>
  );
};

Partners.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      header="Our Partners"
      description="We look forward to meeting and working with incredible teams ready to build the next wave of applications that will power an open world."
    >
      {page}
    </Layout>
  );
};

export default Partners;
