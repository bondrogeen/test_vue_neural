export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/datasets',
    name: 'Datasets',
    component: () => import('@/views/Datasets'),
  },
  {
    path: '/layers',
    name: 'Layers',
    component: () => import('@/views/Layers'),
  },
]
