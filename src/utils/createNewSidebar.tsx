import Bookmark from '../icons/Bookmark'
import Eye from '../icons/Eye'
import Notice from '../icons/Notice'
import Star from '../icons/Star'


const createStudentSidebar = () => {
  return [
    {
      type: 'section',
      label: '수업 공간',
      menus: [
        {
          type: 'menu',
          label: 'go to main(/)',
          value: 'class1',
          href: '/',
          icon: <Bookmark fontSize="inherit" />,
        },
        {
          type: 'menu',
          label: '학생2',
          value: 'class2',
          href: '/class2',
          icon: <Bookmark fontSize="inherit" />,
        },

      ],
    },
  ]
};

const createManagerSidebar = () => {
  return [
    {
      type: 'section',
      label: '수업 공간',
      menus: [
        {
          type: 'menu',
          label: 'go to new-detail',
          value: 'class3',
          href: '/new-detail',
          icon: <Star fontSize="inherit" />,
        },
        {
          type: 'menu',
          label: '관리2',
          value: 'class4',
          href: '/class4',
          icon: <Star fontSize="inherit" />,
        },

      ],
    },
    {
      type: 'section',
      label: '수업 공간222',
      menus: [
        {
          type: 'menu',
          label: '관리3',
          value: 'class5',
          href: '/class5',
          icon: <Star fontSize="inherit" />,
        },
        {
          type: 'menu',
          label: '관리4',
          value: 'class6',
          href: '/class6',
          icon: <Star fontSize="inherit" />,
        },

      ],
    },
  ]
}

const createDetailSidebar = () => {
  return [
    {
      type: 'section',
      label: '수업 공간',
      menus: [
        {
          type: 'menu',
          label: 'go to new-main',
          value: '',
          href: '/new-main',
          icon: <Bookmark fontSize="inherit" />,
        },
        {
          type: 'menu',
          label: '학생별 학습 현황',
          value: 'dashboard',
          href: '/dashboard',
          icon: <Eye fontSize="inherit" />,
        },

      ],
    },
    {
      type: 'section',
      label: '수업 설계',
      menus: [
        {
          type: 'menu',
          label: '피드 발송',
          value: 'feed',
          href: '/feed',
          icon: <Star fontSize="inherit" />,
        },
        {
          type: 'menu',
          label: '커리큘럼',
          value: 'curriculum',
          href: 'curriculum',
          icon: <Notice fontSize="inherit" />,
        },
        {
          type: 'menu',
          label: '일정 관리',
          value: 'calendar',
          href: '/calendar',
          icon: <Bookmark fontSize="inherit" />,
        },
      ],
    },
  ]
}



export { createStudentSidebar, createManagerSidebar, createDetailSidebar };
