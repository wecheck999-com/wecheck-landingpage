import { NextPageWithLayout } from 'utils/interfaces';
import Image from 'next/image';
import { ReactElement, useCallback } from 'react';
import Layout from 'layouts';
import Link from 'next/link';
import TeamsMember from 'utils/page/teams.const';
import Facebook from 'assets/images/social-media/facebook-card.svg';
import Twitter from 'assets/images/social-media/twitter-card.svg';
import Linkedin from 'assets/images/social-media/linkedin-card.svg';
import BackgroundTeam from 'assets/images/team/background-team.svg';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

const Partners: NextPageWithLayout = () => {
  const renderCard = useCallback((teams: any) => {
    return teams.map((item: any, index: number) => (
      <article key={index} className={cx('card')}>
        <div className={cx('card-image')}>
          <div>
            <Image src={item.image} alt="" />
            <div className={cx('mask-social-network')}>
              <div className={cx('social-network')}>
                {item.socials &&
                  item.socials.map((social: any, index: number) => (
                    <div key={index}>
                      {social.facebook && (
                        <Link href={social.facebook} passHref>
                          <a target="_blank">
                            <span>
                              <Facebook />
                            </span>
                          </a>
                        </Link>
                      )}

                      {social.twitter && (
                        <Link href={social.twitter} passHref>
                          <a target="_blank">
                            <span>
                              <Twitter />
                            </span>
                          </a>
                        </Link>
                      )}

                      {social.linkedin && (
                        <Link href={social.linkedin} passHref>
                          <a target="_blank">
                            <span>
                              <Linkedin />
                            </span>
                          </a>
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
          <p className={cx('title')}>{item.name}</p>
          <p className={cx('summary')}>{item.position}</p>
        </header>
      </article>
    ));
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('group-teams')}>
          <div className={cx('bg-gradient-ellipse')}>
            <div className={cx('bg-color-gradient-ellipse', 'bg-color-blue-curious')}></div>
          </div>

          <h2 className="gdf-heading-14">Our Best Leadership</h2>
          <div className={cx('cards')}>{renderCard(TeamsMember.leadership)}</div>
        </div>

        <div className={cx('group-teams')}>
          <div className={cx('bg-gradient-ellipse')}>
            <div className={cx('bg-color-gradient-ellipse', 'bg-color-gradient-green')}></div>
            <div className={cx('bg-color-gradient-ellipse', 'bg-color-gradient-purple')}></div>
          </div>

          <h2 className="gdf-heading-14">Advisor</h2>
          <div className={cx('cards')}>{renderCard(TeamsMember.advisor)}</div>
        </div>

        <div className={cx('group-teams')}>
          <div className={cx('bg-gradient-ellipse')}>
            <div className={cx('bg-color-gradient-ellipse', 'bg-color-gradient-purple')}></div>
          </div>

          <h2 className="gdf-heading-14">Team member</h2>
          <div className={cx('cards')}>{renderCard(TeamsMember.teams)}</div>
        </div>
      </div>
      <BackgroundTeam className={cx('bg-team')} />
    </div>
  );
};

Partners.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      header="Team Member"
      description="The team consists of 18 full-time employees and has its headquarters in Hamamatsu, Japan. The team consists of the following individuals"
    >
      {page}
    </Layout>
  );
};

export default Partners;
