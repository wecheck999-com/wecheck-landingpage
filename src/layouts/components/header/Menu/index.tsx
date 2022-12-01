import React, { MouseEventHandler } from 'react';
import MenuConst from 'utils/menu.const';
import ActiveLink from './active-link';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

interface Props {
  navbarMobile: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MenuHeader = ({ navbarMobile = false, onClick }: Props) => {
  return (
    <nav className={cx('navbar')} onClick={onClick}>
      <ul className={cx('navbar-menu', { 'navbar-mobile': navbarMobile })}>
        {MenuConst &&
          MenuConst.map((item, index) => (
            <li key={index} className={cx('navbar-item')}>
              <ActiveLink href={item.to} target={item.redirect ? '_blank' : '_self'} activeClassName="nav-active">
                <span>{item.label}</span>
              </ActiveLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MenuHeader;
