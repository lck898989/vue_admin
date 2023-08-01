import Layout from '@/layout'
const assetsDisposalRouter = {
  path: '/assets-disposal',
  component: Layout,
  redirect: '/assets-disposal/assets-break',
  name: '资产处置',
  meta: {
    title: '资产处置',
    icon: 'nested'
  },
  children: [
    {
      path: 'assets-break',
      component: () => import('@/views/assets-disposal/assets-break/index'), // Parent router-view
      name: '资产报废',
      meta: { title: '资产报废' }
    },
    {
      path: 'assets-lost',
      component: () => import('@/views/assets-disposal/assets-lost/index'), // Parent router-view
      name: '资产报失',
      meta: { title: '资产报失' }
    },
    {
      path: 'assets-add',
      component: () => import('@/views/assets-disposal/assets-add/index'), // Parent router-view
      name: '校外调拨',
      meta: { title: '校外调拨' }
    },
    {
      path: 'assets-preset',
      component: () => import('@/views/assets-disposal/assets-preset/index'), // Parent router-view
      name: '预设报废仓库',
      meta: { title: '预设报废仓库' }
    }

  ]
}
export default assetsDisposalRouter
