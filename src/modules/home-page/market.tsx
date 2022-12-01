import Image from 'next/image';
import Link from 'next/link';
import SafeSecure from 'assets/images/market/safe-secure.svg';
import LowCost from 'assets/images/market/low-cost.svg';
import UniversalAccess from 'assets/images/market/universal-access.svg';
import EarlyProfit from 'assets/images/market/early-profit.svg';
import SecureInvest from 'assets/images/market/secure-invest.svg';
import EasyWallet from 'assets/images/market/easy-wallet.svg';
import ArrowUpRight from 'assets/images/market/arrow-up-right.svg';
import classNames from 'classnames/bind';
import styles from './market.module.scss';
const cx = classNames.bind(styles);

const Market = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('section-header')}>
          <h2 data-aos="fade-up" data-aos-duration="1000" className={cx('header-title')}>
            market
          </h2>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            NFT & ICO crypto currency advantage
          </h2>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            GoDatingFi marketplace provides an efficient place for players to trade NFT cards on and earn massive
            financial benefits
          </h2>
        </div>
        <div className={cx('advantages')}>
          <article data-aos="fade-right" data-aos-duration="1000" className={cx('advantage')}>
            <div>
              <SafeSecure />
            </div>
            <header>
              <p className="gdf-heading-12">Safe & Secure</p>
              <p>Modular 'security as a service', brings the best security mechanism for users</p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article data-aos="fade-left" data-aos-duration="1000" className={cx('advantage')}>
            <div>
              <LowCost />
            </div>
            <header>
              <p className="gdf-heading-12">Low Cost</p>
              <p>
                Polygon solves common blockchain pain points, offering low gas fees and high speeds without sacrificing
                security
              </p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article data-aos="fade-right" data-aos-duration="1000" className={cx('advantage')}>
            <div>
              <UniversalAccess />
            </div>
            <header>
              <p className="gdf-heading-12">Universal Accesse</p>
              <p>
                GoDatingFi is built on the web3 blockchain. So, that everyone can access and use the application easily
              </p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article data-aos="fade-left" data-aos-duration="1000" className={cx('advantage')}>
            <div>
              <EarlyProfit />
            </div>
            <header>
              <p className="gdf-heading-12">Early Profit</p>
              <p>
                The user can start a date. GoDatingFi will return rewards when users match with friends of the opposite
                sex
              </p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article data-aos="fade-right" data-aos-duration="1000" className={cx('advantage')}>
            <div>
              <SecureInvest />
            </div>
            <header>
              <p className="gdf-heading-12">Secure Invest</p>
              <p>
                Tokennomic is always publicly available to the community. We always keep investors' information
                confidential
              </p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
          <article data-aos="fade-left" data-aos-duration="1000" className={cx('advantage')}>
            <div>
              <EasyWallet />
            </div>
            <header>
              <p className="gdf-heading-12">Easy Wallet</p>
              <p>Metamask has always been the leading cryptocurrency wallet of Dapps today</p>
            </header>
            <div className={cx('arrow-up-right-icon')}>
              <ArrowUpRight />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Market;
