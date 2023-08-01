import Layout from '@/layout'

const dataReportRouter = {
  path: '/data-report',
  component: Layout,
  redirect: '/data-report/data-report-edu',
  name: '数据报表',
  meta: {
    title: '数据报表',
    icon: 'nested'
  },
  children: [
    {
      path: 'data-report-edu',
      component: () => import('@/views/data-report/data-report-edu/index'), // Parent router-view
      name: '教育部报表',
      meta: { title: '教育部报表' }
    },
    {
      path: 'data-report-manager',
      component: () => import('@/views/data-report/data-report-manager/index'), // Parent router-view
      name: '国管局数据报表',
      meta: { title: '国管局数据报表' }
    },
    {
      path: 'data-report-treasury',
      component: () => import('@/views/data-report/data-report-treasury/index'), // Parent router-view
      name: '财政部报表',
      meta: { title: '财政部报表' }
    },
    {
      path: 'data-report-year',
      component: () => import('@/views/data-report/data-report-year/index'), // Parent router-view
      name: '年度资产报表',
      meta: { title: '年度资产报表' }
    }
  ]
}

export default dataReportRouter
