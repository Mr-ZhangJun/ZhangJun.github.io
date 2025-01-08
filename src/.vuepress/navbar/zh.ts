import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  {
    text: '前端',
    icon: 'qianduan',
    // link: '/posts',
    children: ['/coder', '/linux', '/skills', '/tools', '/leetcode'],
  },
  {
    text: '后端',
    icon: '后端',
    children: [
      { text: '全部', icon: 'list', link: '/article' },
      { text: '分类', icon: 'category', link: '/category' },
      { text: '标签', icon: 'tag', link: '/tag' },
      { text: '时间轴', icon: 'time', link: '/timeline' },
    ],
  },

  {
    text: '数据库',
    icon: 'jiansuo',
    // link: '/favorite',
    children: ['/favorite/links', '/favorite/movies', '/favorite/music', '/favorite/photos'],
  },
  // '/about',
]);
