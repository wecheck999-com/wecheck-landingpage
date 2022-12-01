import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from 'assets/images/Logo.png';
import Couple from 'assets/images/banner/couple.png';
import Button from 'components/button';
import MenuHeader from './Menu';
import ReorderThree from 'assets/icons/reorder-three.svg';
import CloseNavbar from 'assets/icons/close-svgrepo-com.svg';
import QRCode from 'assets/images/icons/qrcode.svg';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

const Navbar = () => {
  const [navbarMobile, setNavbarMobile] = useState<boolean>(false);

  return (
    <header className={cx('wrapper', { scrollFixed: navbarMobile })}>
      <div className={cx('bg-gradient')}></div>
      <div className={cx('bg-gradient-ellipse')}>
        <div className={cx('bg-color-gradient-ellipse')}></div>
      </div>
      <div className={cx('inner')}>
        <div className={cx('menu-header')}>
          <h2 className={cx('logo')}>
            <Link href="/">
              <a>
                <Image src={LogoImg} />
                <span className="gdf-heading-12">GoDatingFi</span>
              </a>
            </Link>
          </h2>

          <div className={cx('menu')}>
            <MenuHeader navbarMobile={navbarMobile} />
            <a onClick={() => setNavbarMobile(!navbarMobile)}>
              <div className={cx('overlay', { active: navbarMobile })}>
                <div className={cx('bg-overlay')}></div>
              </div>
              <ReorderThree className={cx('reorder-three', { active: !navbarMobile })} />
              <CloseNavbar className={cx('close', { active: navbarMobile })} />
            </a>
          </div>
        </div>

        <div className={cx('banner')}>
          <div className={cx('banner-content')}>
            <div className={cx('content')}>
              <h1 data-aos="fade-right" data-aos-duration="1000" className="gdf-heading-14">
                Dating app with blockchain
              </h1>
              <h2 data-aos="fade-right" data-aos-duration="1000" className={cx('paragraph')}>
                A decentralized Global Platform for Dating.
              </h2>
              <h2 data-aos="fade-right" data-aos-duration="1000" className={cx('paragraph')}>
                We are a team of SocialFi blockchain in JAPAN, We bring experience dating with blockchain apps.
              </h2>
              <a data-aos="fade-right" data-aos-duration="1000" href="https://t.me/+fNtO9-m-YewyZTVl" target="_blank">
                <Button className={cx('btn-regis')}>Join the Community</Button>
              </a>
            </div>
            <div className={cx('qrcode')}>
              <p data-aos="fade-right" data-aos-duration="1000" className="gdf-heading-8">
                Get the app
              </p>
              <div data-aos="fade-right" data-aos-duration="1000">
                <QRCode />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className={cx('banner-image')}>
            <Image src={Couple} alt={''} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
