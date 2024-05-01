import Bookmark from '../icons/Bookmark'
import Eye from '../icons/Eye'
import Notice from '../icons/Notice'
import Star from '../icons/Star'

const createSidebarMenu = (type: 'main' | 'detail') => {

  const mainSideBarMenu = {
    header: [{ value: 'student', label: '학급' }, { value: 'manager', label: '관리' }],
    student: [
      {
        type: 'section',
        label: '수업 공간',
        menus: [
          {
            type: 'menu',
            label: 'go to detail',
            value: 'class1',
            href: '/detail',
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
    ],
    manager: [
      {
        type: 'section',
        label: '수업 공간',
        menus: [
          {
            type: 'menu',
            label: '관리1',
            value: 'class3',
            href: '/class3',
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
    ],
  };


  const detailSideBarMenu = {
    header: [{ value: 'detail', label: '그냥 텍스트!!!' }],
    detail: [
      {
        type: 'section',
        label: '수업 공간',
        menus: [
          {
            type: 'menu',
            label: 'go to main',
            value: '',
            href: '/',
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
            label: 'new-detail!!!!',
            value: 'feed',
            href: '/new-detail',
            icon: <Star fontSize="inherit" />,
          },
          {
            type: 'menu',
            label: 'new-main!!!!!!',
            value: 'new-main',
            href: '/new-main',
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
  };


  if (type === 'detail') return detailSideBarMenu
  else return mainSideBarMenu

};

export default createSidebarMenu;
