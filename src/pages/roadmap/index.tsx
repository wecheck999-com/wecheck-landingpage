import { ReactElement } from 'react';
import Layout from 'layouts';
import { NextPageWithLayout } from 'utils/interfaces';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

const Partners: NextPageWithLayout = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('bg-gradient')}></div>
        <div className={cx('bg-gradient-ellipse')}>
          <div className={cx('bg-color-gradient-ellipse')}></div>
        </div>
        <h2 className="gdf-heading-14">Roadmap</h2>
        <div className={cx('timelines')}>
          <ul className={cx('progress-bar')}>
            <li className={cx('progress')}>
              <div className={cx('progress-point')}></div>
              <div className={cx('progress-line')}></div>
              <div className={cx('progress-point-node')}></div>
              <div className={cx('step-inner')}>
                <header>
                  <p className={cx('progress-title')}>
                    {/*<span>May 2022</span>*/}
                    <span className="gdf-heading-10">Q2</span>
                  </p>
                  <span>
                    <p>Design UI/UX Web, Mobile </p>
                    <p>Create spec for project</p>
                    <p>Create white paper</p>
                  </span>
                </header>
              </div>
            </li>

            <li className={cx('progress')}>
              <div className={cx('progress-point')}></div>
              <div className={cx('progress-line')}></div>
              <div className={cx('progress-point-node')}></div>
              <div className={cx('step-inner')}>
                <header>
                  <p className={cx('progress-title')}>
                    {/*<span>June 2022</span>*/}
                    <span className="gdf-heading-10 text-center">Q3</span>
                  </p>
                  <span>
                    <p>Seed funding</p>
                    <p>Private funding</p>
                    <p>NFT minting</p>
                    <p>NFT marketplace testnet</p>
                    <p>Build channel & communities</p>
                    <p>Build partnerships</p>
                  </span>
                </header>
              </div>
            </li>

            <li className={cx('progress')}>
              <div className={cx('progress-point')}></div>
              <div className={cx('progress-line')}></div>
              <div className={cx('progress-point-node')}></div>
              <div className={cx('step-inner')}>
                <header>
                  <p className={cx('progress-title')}>
                    {/*<span>July 2022</span>*/}
                    <span className="gdf-heading-10">Q4</span>
                  </p>
                  <span>
                    <p>IOS on the Testflight</p>
                    <p>Android on the Google test</p>
                    <p>Event testnet campaign</p>
                    <p>Partnerships announcements</p>
                    <p>NFT card sale</p>
                    <p>NFT marketplace mainnet</p>
                  </span>
                </header>
              </div>
            </li>

            <li className={cx('progress')}>
              <div className={cx('progress-point')}></div>
              <div className={cx('progress-line')}></div>
              <div className={cx('progress-point-node')}></div>
              <div className={cx('step-inner')}>
                <header>
                  <p className={cx('progress-title')}>
                    {/*<span>August 2022</span>*/}
                    <span className="gdf-heading-10">Q1</span>
                  </p>
                  <span>
                    <p>IOS on the Apple Store</p>
                    <p>Android on the Goolge Play</p>
                    <p>IDO, IEO</p>
                    <p>Soon</p>
                  </span>
                </header>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Partners.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      header="Our Timeline"
      description="Please note that there are many things that could change the ordering of these priorities including massive traction, breakthrough research, and feedback from the community"
    >
      {page}
    </Layout>
  );
};

export default Partners;
