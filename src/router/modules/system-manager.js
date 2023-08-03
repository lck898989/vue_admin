import Layout from '@/layout'

const systemManagerRouter = {
  path: '/system-manager',
  component: Layout,
  redirect: '/system-manager/staff-manager',
  name: '系统管理',
  meta: {
    title: '系统管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'staff-manager',
      component: () => import('@/views/system-manager/staff-manager/index'), // Parent router-view
      name: '员工管理',
      meta: { title: '员工管理' }
    },
    {
      path: 'property-setting',
      component: () => import('@/views/system-manager/property-setting/index'), // Parent router-view
      name: '字段设置',
      meta: { title: '字段设置' }
    },
    {
      path: 'params-setting',
      component: () => import('@/views/system-manager/params-setting/index'), // Parent router-view
      name: '参数设置',
      meta: { title: '参数设置' },
      redirect: '/system-manager/params-setting/old-params-setting',
      children: [
        {
          path: 'old-params-setting',
          component: () => import('@/views/system-manager/params-setting/old-params-setting/index'), // Parent router-view
          name: '折旧参数设置',
          meta: { title: '折旧参数设置' }
        },
        {
          path: 'old-params-setting',
          component: () => import('@/views/system-manager/params-setting/old-params-setting/index'), // Parent router-view
          name: '折旧参数设置',
          meta: { title: '折旧参数设置' }
        }
      ]
    },
    {
      path: 'info-manager',
      component: () => import('@/views/system-manager/info-manager/index'), // Parent router-view
      name: '信息管理',
      meta: { title: '信息管理' },
      redirect: '/system-manager/info-manager/broadcast',
      children: [
        {
          path: 'broadcast',
          component: () => import('@/views/system-manager/info-manager/broadcast/index'), // Parent router-view
          name: '广播',
          meta: { title: '广播' }
        },
        {
          path: 'broadcast',
          component: () => import('@/views/system-manager/info-manager/broadcast/index'), // Parent router-view
          name: '广播',
          meta: { title: '广播' }
        }
      ]
    }
  ]
}

export default systemManagerRouter
