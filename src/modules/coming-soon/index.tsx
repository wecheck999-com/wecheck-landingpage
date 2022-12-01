import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Apple from 'assets/images/icons/apple.svg';
import Android from 'assets/images/icons/android.svg';
import Background from 'assets/images/team/background-team.svg';
const cx = classNames.bind(styles);

const ComingSoon = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('bg-gradient-ellipse')}>
        <div className={cx('bg-color-gradient-ellipse')}></div>
      </div>

      <div className={cx('inner')}>
        <h2 className="gdf-heading-14">Available soon on</h2>
        <div className={cx('devices')}>
          <Apple />
          <Android />
        </div>
      </div>

      <Background className={cx('bg-coming-soon')} />
    </div>
  );
};

export default ComingSoon;
