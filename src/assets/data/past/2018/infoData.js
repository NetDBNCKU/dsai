import Og from '../../../media/images/ogImage.png';

// Avatars
import Kao from '../../../media/images/kao-min.jpg';
import Chuang from '../../../media/images/chuang-min.jpg';
import Jie from '../../../media/images/jie-min.jpg';
import Lee from '../../../media/images/lee-min.jpg';
import Na from '../../../media/images/na-min.jpg';
import Him from '../../../media/images/him-min.jpg';
import Ting from '../../../media/images/ting-min.jpg';
import Ou from '../../../media/images/ou-min.jpg';
import Bo from '../../../media/images/bo-min.jpg';
import Wei from '../../../media/images/wei-min.jpg';

export default {
  nav: [{
    name: 'Announcements',
    url: '#course-announcements',
  }, {
    name: 'Schedule',
    url: '#course-schedule',
  }, {
    name: 'Resources',
    url: '#course-resources',
  }],
  title: 'Data Science and Artificial Intelligence Practice',
  description:
    `Data Mining/Machine Learning Theory and Practice. 
    In this course, a series of DM/ML research topics will be taught. 
    There are some short technical lectures and short academic/industrial panel discussions. 
    We emphasize the importance of practices in this course. 
    Your brain, theoretically, is a kind of models which should be trained by lots of instances. 
    Based on the spirit of trial-and-error, we will give 4 HWs, 2 projects, one paper presentation, and mostly, you should program individually.`,
  teachers: {
    instructors: [
      {
        name: 'Kun-Ta Chuang',
        image: Chuang,
        url: 'https://cv_ktchuang.cannerapp.com/',
      },
      {
        name: 'Hung-Yu Kao',
        image: Kao,
        url: 'http://myweb.ncku.edu.tw/~hykao/',
      },
    ],
    assistants: [
      {
        name: 'Jie-Han Chen',
        image: Jie,
        url: 'https://www.linkedin.com/in/jie-han-chen-325620a3/',
        email: 'jhchen@netdb.csie.ncku.edu.tw',
      },
      {
        name: 'Lo Pang-Yun Ting',
        image: Ting,
        url: 'https://www.linkedin.com/in/lo-pang-yun-ting-5a7ab2144/',
      },
      {
        name: 'Lok-Him Leung ',
        image: Him,
        url: '#',
      },
      {
        name: 'Wei Lee',
        image: Lee,
        url: 'http://lee-w.github.io/',
      },
      {
        name: 'Hao-Tzu Huang',
        image: Na,
        url: 'https://www.linkedin.com/in/nana-huang-b42b70129/',
      },
      {
        name: 'Cheng-Kuan Ou',
        image: Ou,
        url: 'https://www.linkedin.com/in/cheng-kuan-ou-620033125/',
      },
      {
        name: 'Bo-Heng Chen',
        image: Bo,
        url: 'https://www.linkedin.com/in/bohengchen/',
      },
      {
        name: 'Chien-Wei Chang',
        image: Wei,
        url: '#',
      },
    ],
  },
  info: [
    {
      title: 'Lecture',
      content: `Spring 2018
        <br>Lecture time: Tue, 9:10-12:00pm, Feb 27 - June 26
        <br>Class room: 65104`,
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
          <path d="M4 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 1c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-.5 1v2.22l.16.13.5.5.34.38.72-.72-.38-.34-.34-.34v-1.81h-1z" />
        </svg>`,
    },
    {
      title: 'Grading',
      content: `- 4 HWs (50%)<br>
      - Mid-term project (15%)<br>
      - Team-based paper presentation (10%)<br>
      - Final project (25%)<br>
      - Panel discussion (5% bonus)`,
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
          <path d="M3.5 0c-.97 0-1.84.4-2.47 1.03l2.97 2.97v-3.97c-.16-.02-.33-.03-.5-.03zm1.5 1.06v3.41l-2.72 2.72c.61.5 1.37.81 2.22.81 1.93 0 3.5-1.57 3.5-3.5 0-1.76-1.31-3.19-3-3.44zm-4.09 1.31c-.56.54-.91 1.29-.91 2.13 0 .96.46 1.79 1.16 2.34l2.13-2.13-2.38-2.34z"/>
        </svg>`,
    },
    {
      title: 'Textbook',
      content: '<a href="http://incompleteideas.net/book/the-book-2nd.html">Reinforcement Learning: An Introduction, 2nd Edition</a>',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
          <path d="M1 0c-.07 0-.13.01-.19.03-.39.08-.7.39-.78.78-.03.06-.03.12-.03.19v5.5c0 .83.67 1.5 1.5 1.5h5.5v-1h-5.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5.5v-5.5c0-.28-.22-.5-.5-.5h-.5v3l-1-1-1 1v-3h-3z" />
        </svg>`,
    },
    {
      title: 'Prerequisites',
      content: `Python, Database, Probability and Statistics`,
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
          <path d="M4 0c-1.1 0-2 .9-2 2 0 1.04-.52 1.98-1.34 2.66-.41.34-.66.82-.66 1.34h8c0-.52-.24-1-.66-1.34-.82-.68-1.34-1.62-1.34-2.66 0-1.1-.89-2-2-2zm-1 7c0 .55.45 1 1 1s1-.45 1-1h-2z" />
        </svg>`,
    },
  ],
};
