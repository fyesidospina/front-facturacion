export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
   },
   {
    text: 'Facturacion',
    path: '/facturacion',
    icon: 'columnproperties' 
   },
   {
    text: 'Inventarios',
    path: '/inventarios',
    icon: 'selectall' 
   },
   {
    text: 'Reportes',
    path: '/reportes',
    icon: 'chart' 
   },
   {
    text: 'Administracion',
    icon: 'preferences',
    items: [
          {
            text: 'Productos',
            path: '/productos'
          },
          {
            text: 'Clientes',
            path: '/clientes'
          },
          {
            text: 'Template',
            path: '/tasks'
          },
          {
            text: 'Template2',
            path: '/profile'
          }
        ]   
   }
  // {
  //   text: 'Examples',
  //   icon: 'folder',
  //   items: [
  //     {
  //       text: 'Profile',
  //       path: '/profile'
  //     },
  //     {
  //       text: 'Tasks',
  //       path: '/tasks'
  //     }
  //   ]
  // }
];
