

module.exports = {
  NavbarContent: [
    { title: 'Programs', link: '#prog' },
    { title: 'Events', link: '#event' },
    { 
      title: 'Resources', 
      link: '#', 
      menu: [
        {title: "Blog", link: 'https://blog.zubi.io/'},
        {title: "Forum", link: 'https://forum.zubi.io/'},
        {title: "Github Repos", link:'https://github.com/Zubi-io', },
        {title: "Gitbook", link: 'https://zubi.gitbook.io/community-resources/'}
      ]
    },
    { title: 'Contact Us', link: '#foot' },
    
  ],
  FooterData: {
    Company: [
      { name: "Company" },
      { name: "About", link: "https://zubi.io/", target: "_blank"},
      { name: "Blog", link: "https://blog.zubi.io/", target: "_blank" },
      { name: "Careers", link: "https://angel.co/company/zubi-1", target: "_blank" },
    ],
    Products: [
      { name: "Products" },
      { name: "Z.Assess", link: "https://assess.zubi.io/" },
      { name: "Z.Events", link: "https://events.zubi.io/" },
    ],
    FollowUs: [
      "Contact Us",
      "Corp. Office :",
      "A3, Sector 04, Noida,",
      " Uttar Pradesh - 201301."
    ],
    name: "© Zubi Infotech Pvt. Ltd. 2020",
    policies: [
      { name: "facebook", link: "https://www.facebook.com/zubi.io/" },
      { name: "telegram", link: "https://twitter.com/zubi_io" },
      { name: "instagram", link: "https://www.instagram.com/zubi.io/" },
      { name: "linkedin", link: "https://www.linkedin.com/showcase/zubi-org/" },
      { name: "twitter", link: "https://twitter.com/zubi_io" },
      {
        name: "youtube",
        link: "https://www.youtube.com/channel/UC5Cl0ZfRIfnfQSwen3w1d6Q",
      },
    ],
  }
};
