const MAIN_ROUTE = [
    {
      name: 'MAIN_ROUTE',
      path: '/',
      component: 'pages/index.vue',
    },
    {
      name: 'card',
      path: '/card',
      component: 'pages/card.vue',
    },
  ]

  const routesConfig = [
    ...MAIN_ROUTE
  ]
  
  export { MAIN_ROUTE }
  
  export default routesConfig