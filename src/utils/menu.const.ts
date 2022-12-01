const Menu = [
  {
    to: '/',
    redirect: false,
    label: 'Home',
  },
  // {
  //   to: `${process.env.NEXT_PUBLIC_MARKETPLACE_URL}`,
  //   label: 'Market',
  // },
  {
    to: '/marketplace',
    redirect: false,
    label: 'Marketplace',
  },
  {
    to: '/mobile',
    redirect: false,
    label: 'Mobile',
  },
  {
    to: '/tokens',
    redirect: false,
    label: 'Token',
  },
  {
    to: '/roadmap',
    redirect: false,
    label: 'Roadmap',
  },
  {
    to: '/partners',
    redirect: false,
    label: 'Partner',
  },
  {
    to: '/teams',
    redirect: false,
    label: 'Team',
  },
  {
    to: `${process.env.NEXT_PUBLIC_LIGHTPAPER_URL}`,
    redirect: true,
    label: 'Lightpaper',
  },
];

export default Menu;
