import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Facebook from 'assets/images/social-media/facebook-card.svg';
import Twitter from 'assets/images/social-media/twitter-card.svg';
import Linkedin from 'assets/images/social-media/linkedin-card.svg';
import { persons } from 'utils/page/persons';
import Carousel from 'components/carousel';
import classNames from 'classnames/bind';
import styles from './person-card.module.scss';
const cx = classNames.bind(styles);

const PersonCard = () => {
  const renderPersonsCard = useMemo(() => {
    return persons.map((item, index) => (
      <article key={index} className={cx('card')}>
        <div className={cx('card-image')}>
          <div>
            <Image src={item.avatar} alt={item.name} />
            <div className={cx('mask-social-network')}>
              <div className={cx('social-network')}>
                {item.socials &&
                  item.socials.map((social, index) => (
                    <div key={index}>
                      {social.facebook && (
                        <Link href={social.facebook} passHref>
                          <span>
                            <Facebook />
                          </span>
                        </Link>
                      )}

                      {social.twitter && (
                        <Link href={social.twitter} passHref>
                          <span>
                            <Twitter />
                          </span>
                        </Link>
                      )}

                      {social.linkedin && (
                        <Link href={social.linkedin} passHref>
                          <span>
                            <Linkedin />
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <header className={cx('card-content')}>
          <div className={cx('bg-mask')}></div>
          <p className={cx('title')}>
            {item.name}, {item.age}
          </p>
          <p className={cx('summary')}>{item.country}</p>
        </header>
      </article>
    ));
  }, []);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div data-aos="fade-up" data-aos-duration="1000" className={cx('cards')}>
          {renderPersonsCard}
          <Carousel
            className={cx('carousel-personal-mobile')}
            intervalTime={3000}
            hasNavigator={false}
            hasDots={false}
            data={renderPersonsCard}
            numberPerViewport={2}
          />
        </div>
      </div>
    </section>
  );
};

export default PersonCard;
