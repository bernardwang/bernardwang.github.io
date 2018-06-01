
import archive1 from './assets/img/archive1.png'
import archive2 from './assets/img/archive2.png'
import grove1 from './assets/img/grove1.png'
import grove2 from './assets/img/grove2.png'
import grove3 from './assets/img/grove3.png'
import explorations1 from './assets/img/explorations1.png'
import explorations2 from './assets/img/explorations2.png'
import lisa1 from './assets/img/lisa1.png'
import lisa2 from './assets/img/lisa2.png'
import mael1 from './assets/img/mael1.png'
import mael2 from './assets/img/mael2.png'

const works = [{
  title: 'archive.bernard.wang',
  url: 'http://archive.bernard.wang',
  gallery: [{
    caption: 'Main view with puppies.',
    src: archive1
  }, {
    caption: '"Sitemap" of archived websites.',
    src: archive2
  }],
  details: {
    Expertise: 'UI & UX Design / Front-end',
    Details: 'Record of past iterations of my personal website. Retro design inspired by my childhood desktop computer, torrent readmes, and GameFAQ walkthroughs.',
    Year: '2018'
  }
}, {
  title: 'Grove AI',
  url: 'http://grove.ai',
  gallery: [{
    caption: 'Overview page of a Grove AI test account.',
    src: grove1
  }, {
    caption: 'On the Bot Builder page admins will draft, publish, and monitor different conversations handled by the chatbot.',
    src: grove2
  }, {
    caption: 'Conversation editor for admins to change content, add images & configure other messaging related UI. The graph view is a representation of the conversation structure.',
    src: grove3
  }],
  details: {
    Expertise: 'Full-stack / UI & UX Design / Product Vision',
    Details: 'Platform for progressive campaigns and nonprofits to organize online through Facebook Messenger chatbots',
    Credits: 'Product Vision & Backend: Vishal Disawar',
    Year: '2017 - 2018'
  }
}, {
  title: 'Explorations',
  url: 'http://bernard.wang/explorations',
  gallery: [{
    caption: 'Landing page and navbar.',
    src: explorations1
  }, {
    caption: 'Projects from various art and design classes.',
    src: explorations2
  }],
  details: {
    Expertise: 'Front-end / Web Design',
    Details: 'Personal project showcasing my work in Art & Design classes throughout college. Uses Flickr to host images and a Handlebars to build the page.',
    Credits: '',
    Year: '2017'
  }
}, {
  title: 'Lisa Vuong Portfolio',
  url: 'http://bernard.wang/lisa-irl-copy/',
  gallery: [{
    caption: 'Introduction and links.',
    src: lisa1
  }, {
    caption: 'Portfolio items.',
    src: lisa2
  }],
  details: {
    Expertise: 'Front-end',
    Details: 'Portfolio site for my dear friend and fellow shiba fan. Coded entirely in vanilla JS and Sass, the site also uses custom built gallery sliders.',
    Credits: 'Web Design: Lisa Vuong',
    Year: '2015'
  }
}, {
  title: 'IBM Maelstrom',
  url: 'http://bernard.wang/mael-nano/',
  gallery: [{
    caption: 'Hero page for the Maelstrom intern program.',
    src: mael1
  }, {
    caption: 'Page sections and navigation.',
    src: mael2
  }],
  details: {
    Expertise: 'Project Management / Web Design / Front-end',
    Details: 'Website built for IBM Maelstrom, a ten week design program in Austin, TX. Part of a week long micro-project involving other branding and style deliverables.',
    Credits: 'Web Design: Meme Betadam, Kei Yumino / Project Management: Tobi Oyadiran',
    Year: '2016'
  }
}, {
  title: 'This site!',
  details: {
    Expertise: 'Front-end / Web Design',
    Details: 'Personal site and portfolio built with Vue.js, Webpack, Tachyons and PugJS. Visit archive.bernard.wang to view previous versions of this site!',
    Credits: '',
    Year: '2017'
  }
}]

export default works
