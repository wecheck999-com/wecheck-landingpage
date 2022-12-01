import Image from 'next/image';
import Link from 'next/link';
import NFT03 from 'assets/images/nft/nft-03.png';
import NFT04 from 'assets/images/nft/nft-04.png';
import SmartphoneImg1 from 'assets/images/home/smartphone-img1.png';
import SmartphoneImg2 from 'assets/images/home/smartphone-img2.png';
import SmartphoneImg3 from 'assets/images/home/smartphone-img3.png';
import SmartphoneImg4 from 'assets/images/home/smartphone-img4.png';
import NFTGroup from 'assets/images/home/nft-group.svg';
import CardNFT from 'modules/card-nft/index';
import classNames from 'classnames/bind';
import styles from './products.module.scss';
const cx = classNames.bind(styles);

const Products = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('section-header')}>
          <h2 data-aos="fade-up" className={cx('header-title')}>
            products
          </h2>
          <h2 data-aos="fade-up">All you need for dating</h2>
          <h2 data-aos="fade-up">
            GoDatingFi will now be working with 0xPolygon to help expand the base of web3 users for dating apps
          </h2>
        </div>

        <article className={cx('products-first')}>
          <div className={cx('prduct-first-left')}>
            <div className={cx('bg-gradient-ellipse')}>
              <div className={cx('bg-color-gradient-ellipse')}></div>
            </div>

            <div data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="50" className={cx('smarphones')}>
              <span className={cx('smarphone-left')}>
                <Image src={SmartphoneImg1} alt={''} />
              </span>
              <span data-aos="fade-right" className={cx('smarphone-right')}>
                <Image src={SmartphoneImg2} alt={''} />
              </span>
            </div>
          </div>
          <div data-aos="fade-left" className={cx('product-first-right')}>
            <h2 className="gdf-heading-14">Connect with people you know but haven’t met yet</h2>
            <h2>
              GoDatingFi is more than an app, it’s featured for SocialFi Blockchain. It is where people go to learn how
              to establish and maintain healthier connections.
            </h2>
          </div>
        </article>

        <article
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="linear"
          data-aos-mirror="true"
          className={cx('products-second')}
        >
          <div className={cx('products-second-inner')}>
            <div className={cx('products-second-left')}>
              <h2 className="gdf-heading-14">So, Why Choose A Dating App Like GoDatingFi?</h2>
              <h2>
                At GoDatingFi, it's easy for everyone to find their other half. We always listen and understand you.
              </h2>
            </div>
            <div className={cx('products-second-right')}>
              <div className={cx('bg-gradient-ellipse')}>
                <div className={cx('bg-color-gradient-ellipse')}></div>
              </div>

              <span className={cx('smarphone-left')}>
                <Image src={SmartphoneImg3} alt={''} />
              </span>
              <span className={cx('smarphone-right')}>
                <Image src={SmartphoneImg4} alt={''} />
              </span>
            </div>
          </div>
        </article>
        <article className={cx('products-third')}>
          <div className={cx('products-third-inner')}>
            <div className={cx('bg-gradient-ellipse')}>
              <div className={cx('bg-color-gradient-ellipse')}></div>
            </div>
            <div data-aos="fade-right" className={cx('products-third-left')}>
              <div className={cx('bg-gradient-ellipse')}>
                <div className={cx('bg-color-gradient-ellipse')}></div>
              </div>
              <NFTGroup />
            </div>
            <div data-aos="fade-left" className={cx('products-third-right')}>
              <h2 className="gdf-heading-14">NFT</h2>
              <h2>View all other people's profiles with your NFT cards, and earn GoDatingFi coins while dating</h2>
            </div>
          </div>
        </article>
        <article className={cx('product-fourth')}>
          <div className={cx('bg-gradient-ellipse')}>
            <div className={cx('bg-color-gradient-ellipse')}></div>
          </div>
          <div className={cx('product-fourth-left')}>
            <h2 data-aos="fade-right" className="gdf-heading-14">
              Marketplace
            </h2>
            <h2 data-aos="fade-right">
              GoDatingFi users could start trading NFT items on the Marketplace to earn enormous financial benefits.
              Moreover, users can give gifts by NFT and convert photos into NFT according to each person's liking.
            </h2>
          </div>
          <div data-aos="fade-left" className={cx('product-fourth-right')}>
            <div className={cx('bg-gradient-ellipse')}>
              <div className={cx('bg-color-gradient-ellipse')}></div>
            </div>
            <span className={cx('smarphone-left')}>
              <CardNFT icon={NFT04} />
            </span>
            <span className={cx('smarphone-right')}>
              <CardNFT icon={NFT03} />
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Products;
