import { ReactElement } from 'react';
import Image from 'next/image';
import { NextPageWithLayout } from 'utils/interfaces';
import Layout from 'layouts';
import Building from 'assets/images/token/building.svg';
import GanttChart from 'assets/images/token/gantt-chart.svg';
import GanttChartMobile from 'assets/images/token/gantt-chart.png';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

const Tokens: NextPageWithLayout = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('bg-gradient-ellipse')}>
          <div className={cx('bg-color-gradient-ellipse')}></div>
        </div>

        <div className={cx('distribution-tokens')}>
          <header>
            <p className="gdf-heading-12">Distribution of tokens</p>
            <p>
              The genesis block was created in Oct 2022, with 400 million GDF. For transparency, the breakdown of
              genesis block holders is outlined below
            </p>
          </header>

          <div className={cx('color-board')}>
            <article className={cx('color')}>
              <p className={cx('circle', 'advisors')}></p>
              <p>Seed sale</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'treasury')}></p>
              <p>Treasury</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'private-sale')}></p>
              <p>Private sale</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'partnership')}></p>
              <p>Partnership</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'public-sale')}></p>
              <p>Public sale</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'advisors')}></p>
              <p>Advisors</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'team')}></p>
              <p>Team</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'marketing')}></p>
              <p>Marketing</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'liquidity')}></p>
              <p>Liquidity</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'aidrop')}></p>
              <p>Aidrop</p>
            </article>
            <article className={cx('color')}>
              <p className={cx('circle', 'community')}></p>
              <p>Community</p>
            </article>
          </div>
        </div>

        <div className={cx('gantt-chart')}>
          <GanttChart />
          <Image src={GanttChartMobile} alt="" />
        </div>
      </div>

      <Building className={cx('bg-building')} />
    </div>
  );
};

Tokens.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      header="Token Genesis Event Information"
      description="GoDatingFI has been developed and brought to market by one of the most innovative and interdisciplinary teams in the world. The development team pool unlocks over 2 years, ensuring all stakeholders are aligned."
    >
      {page}
    </Layout>
  );
};

export default Tokens;
