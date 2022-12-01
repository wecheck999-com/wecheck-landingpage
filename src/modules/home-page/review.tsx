import Image from 'next/image';
import Link from 'next/link';
import IconStar from 'assets/images/icons/icon-star.svg';
import Avatar from 'assets/images/nft/nft-02.png';
import DoubleQuotes from 'assets/images/icons/double-quotes.svg';
import Carousel from 'components/carousel';
import { reviews } from 'utils/page/reviews';
import classNames from 'classnames/bind';
import styles from './review.module.scss';
import { useMemo } from 'react';
const cx = classNames.bind(styles);

const Review = () => {
  const renderReview = useMemo(() => {
    return reviews.map((data: any) => (
      <article className={cx('review')}>
        <div className={cx('review-header')}>
          <div className={cx('review-star')}>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
          <div className={cx('comment-content')}>
            <div>
              <DoubleQuotes />
            </div>
            <header>
              <p className="gdf-heading-3">{data.comment}</p>
            </header>
          </div>
        </div>
        <div className={cx('review-content')}>
          <div className={cx('profile')}>
            <div className={cx('avatar')}>
              <Image src={data.image} alt={data.name} />
            </div>
            <header>
              <p className="gdf-heading-4">{data.name}</p>
              <p className="gdf-heading-1">{data.position}</p>
            </header>
          </div>
        </div>
      </article>
    ));
  }, []);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('section-header')}>
          <h2 data-aos="fade-up" data-aos-duration="1000" className={cx('header-title')}>
            review
          </h2>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Testimonials
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className={cx('reviews')}>
          <Carousel hasNavigator={false} data={renderReview} numberPerViewport={1} />
        </div>
      </div>
    </section>
  );
};

export default Review;
