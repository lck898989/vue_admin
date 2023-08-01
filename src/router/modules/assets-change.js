/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const assetsChange = {
  path: '/assets-change',
  component: Layout,
  redirect: '/assets-change/assets-move',
  name: '资产变动',
  meta: {
    title: '资产变动',
    icon: 'nested'
  },
  children: [
    {
      path: 'assets-move',
      component: () => import('@/views/assets-change/assets-move/index'), // Parent router-view
      name: '资产调拨',
      meta: { title: '资产调拨' },
      redirect: '/assets-change/assets-user',
      children: [
        {
          path: 'assets-user',
          component: () => import('@/views/assets-change/assets-move/assets-user'),
          name: '使用人调拨',
          meta: { title: '使用人调拨' }
        },
        // {
        //     path: 'menu1-2',
        //     component: () => import('@/views/nested/menu1/menu1-2'),
        //     name: 'Menu1-2',
        //     redirect: '/nested/menu1/menu1-2/menu1-2-1',
        //     meta: { title: 'Menu 1-2' },
        //     children: [
        //         {
        //             path: 'menu1-2-1',
        //             component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
        //             name: 'Menu1-2-1',
        //             meta: { title: 'Menu 1-2-1' }
        //         },
        //         {
        //             path: 'menu1-2-2',
        //             component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
        //             name: 'Menu1-2-2',
        //             meta: { title: 'Menu 1-2-2' }
        //         }
        //     ]
        // },
        {
          path: 'assets-school',
          component: () => import('@/views/assets-change/assets-move/assets-school'),
          name: '校内调拨',
          meta: { title: '校内调拨' }
        }
      ]
    },
    {
      path: 'assets-reduce',
      name: 'assets-reduce',
      component: () => import('@/views/assets-change/assets-reduce/index'),
      meta: { title: '资产减值' }
    },
    {
      path: 'assets-rest',
      name: 'assets-rest',
      component: () => import('@/views/assets-change/assets-rest/index'),
      meta: { title: '闲置调剂' }
    },
    {
      path: 'assets-back',
      name: 'assets-back',
      component: () => import('@/views/assets-change/assets-back/index'),
      meta: { title: '资产退库' }
    }
  ]
}

export default assetsChange
