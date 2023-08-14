const metaData = [
  {
    name: '/',
    title: "Best AR/VR company in India | AjnaLens - India's top XR company",
    description: `Discover the top Augmented and Virtual Reality Training Solutions in India and Experience the World's Best Mixed Reality Headset from India's top xr Company`,
  },
  {
    name: '/ajnaxr',
    title: "AjnaXR World's best Mixed Reality Headset | Best VR Passthrough Device",
    description:
      "Discover world's most advanced True mixed reality headset |Experience India's most advanced Mixed reality headset .",
    keywords:
      'Meta Keywords: Mixed reality headset in India,Mixed reality glasses in India,Most advanced mixed reality headset,Most advanced True mixed reality headsets	,Best VR Passthrough Device,Best vr headset,Oculus quest,Best ar headset,Best vr headset',
  },
  {
    name: '/purpose',
    title: 'Most Advanced True Mixed Reality Headset- AjnaXR | Upskilling India with #IamSkillFirst Movement',
    description: `Discover the fascinating journey of India's top augmented and virtual reality company AjnaLens and how they are revolutionizing the way we learn and work.`,
    keywords:
      'Upskilling India,Iamskillfirst,Skilling India,Skill development in India,Upskilling indians using Mixed reality,Immersive learning',
  },
  {
    name: '/defence',
    title: 'Revolutionising Indian Defence with AR/VR solutions | Mixed Reality in Defence in India',
    description: ` Explore the cutting-edge applications of AR/VR in Indian Defence, revolutionising the way we defend our nation.`,
    keywords: `AR VR in defence in India,Ai in defence technology,State of the art defence technology in India ,State of the art technology,Mixed reality in defence ,Mixed reality in Indian Defence ,Indigenous defence technology in India ,See through armour technology in India ,Virtual reality in defence technology,Use of mr in Indian army,Advanced mixed reality technology in defence`,
  },
  {
    name: '/our-story',
    title:
      'India’s Leading Mixed reality hardware company | Top Mixed reality company in India| State of the art AR VR solution by AjnaLens',
    description: `Discover the fascinating journey of India's top augmented and virtual reality company AjnaLens and how they are revolutionising the way we learn and work.`,
    keywords: `Top xr company in India,Xr company in India,MR company in India,Mixed Reality in India,Mixed reality company,Top mixed reality company in India,Most advanced true mixed reality headset`,
  },
  {
    name: '/about-us',
    title: 'About AjnaLens',
    description:
      "Discover the fascinating journey of India's top augmented and virtual reality company AjnaLens and how they are revolutionizing the way we learn and work.",
  },
  {
    name: '/careers',
    title: "Careers at AjnaLens - Join India's Top AR/VR Company",
    description: ` Explore exciting career opportunities in India's leading AR VR company and unleash your creative potential in the world of immersive technologies.`,
    keywords: `Career in metaverse,Career in mixed reality technology in India,Career in XR,Career in Mixed Reality,Career in Extended Reality,Metaverse career in India,Metaverse Job opportunities in India`,
  },
  {
    name: '/media',
    title: 'AjnaLens in Media | Contact Our Press Release Team Today',
    description:
      'Discover the latest updates on AjnaLens in the media! Get exclusive insights from our press release team. Contact us now for more information.',
  },
  {
    name: '/termsofuse',
    title: 'Terms of Use',
    description: 'Terms of Use',
  },
  {
    name: '/blogs',
    title: 'AjnaLens Blogs',
    description: 'AjnaLens Blogs',
  },
];

module.exports.getMetaData = (name) => metaData.filter((page) => page.name == name);
