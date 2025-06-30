interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: "Rainman's Running Page",
  siteUrl: 'https://rainman.run',
  logo: 'https://deusyu.app/img/favicon3.PNG',
  description: '记录Rainman的跑步足迹与思考',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://deusyu.app',
    },
    {
      name: 'About',
      url: 'https://github.com/deusyu',
    },
  ],
};

export default data;
