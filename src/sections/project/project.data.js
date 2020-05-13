import { SubColor } from '../../global.styles';

const PROJECT_DATA = [
    {
      id: 1,
      title: 'Sport Platform',
      name: 'Sportify',
      link: 'http://www.sportify.online/',
      description: 'Sportify is a league management software that helps players manage their organization skills, and build strong relationships with their members.',
      backgroundColor: '#001a4d',
      stacks: [
        {
          id: 1,
          name: 'react.js'
        },
        {
          id: 2,
          name: 'redux.js'
        },
        {
          id: 3,
          name: '.NET Core'
        }
      ],
      icons: [
        {
          id: 1,
          type: 'github'
        },
        {
          id: 2,
          type: 'LinkedIn'
        }
      ]
    },
    {
      id: 2,
      title: 'Personal Website',
      name: 'Portfolio',
      link: '',
      description: 'A nicer look at projects with visual primitives for the components',
      backgroundColor: `${SubColor}`, //'#ff8080',
      stacks: [
        {
          id: 1,
          name: 'react.js'
        },
        {
          id: 2,
          name: 'styled-components'
        },
        {
          id: 3,
          name: 'Heroku'
        }
      ],
      icons: [
        {
          id: 1,
          type: 'github'
        },
        {
          id: 2,
          type: 'LinkedIn'
        }
      ]
    },
    {
      id: 3,
      title: 'E-commerce Project',
      name: 'iOttie',
      link: 'https://www.iottie.com/',
      description: 'Participated creating renewal website by integrating the designer\'s code and implementing the backend code',
      backgroundColor: '#41e1b9',
      stacks: [
        {
          id: 1,
          name: 'C#'
        },
        {
          id: 2,
          name: '.NET MVC5'
        },
        {
          id: 3,
          name: 'jQuery'
        }
      ],
      icons: [
        {
          id: 1,
          type: 'github'
        },
        {
          id: 2,
          type: 'LinkedIn'
        }
      ]
    }
  ];
  
  export default PROJECT_DATA;
  