import { ReactElement, useEffect } from 'react';
import Layout from 'layouts';
import PersonCard from 'modules/home-page/person-card';
import YourWorld from 'modules/home-page/your-world';
import Products from 'modules/home-page/products';
import Market from 'modules/home-page/market';
import Review from 'modules/home-page/review';
import ContactInfo from 'modules/home-page/contact-info';
import { NextPageWithLayout } from 'utils/interfaces';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <PersonCard />
      <YourWorld />
      <Products />
      <Market />
      <Review />
      <ContactInfo />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout isHome={true}>{page}</Layout>;
};

export default Home;
