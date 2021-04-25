export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-default'
  },
  {
    path: '/admin/audit-prestasi',
    title: 'Audit Prestasi',
    type: 'sub',
    icontype: 'fas fa-chart-line text-default',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-prestasi', title: 'Audit Prestasi', type: 'link' },
      { path: 'prestasi-gpis', title: 'GPIS', type: 'link' },
      { path: 'prestasi-sppii', title: 'SPP II', type: 'link' }
    ]
  },
  {
    path: '/admin/audit-kewangan',
    title: 'Audit Kewangan',
    type: 'sub',
    icontype: 'fas fa-file-invoice-dollar text-default',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'kewangan-akaun-kerajaan', title: 'Akaun Kerajaan Persekutuan', type: 'link' },
      { path: 'kewangan-igfmas', title: 'iGFMAS', type: 'link' },
      { path: 'kewangan-fais', title: 'FAIS (UiTM)', type: 'link' },
      { path: 'kewangan-lppsa', title: 'LPPSA', type: 'link' }
    ]
  },
  {
    path: '/admin/audit-syarikat-kerajaan',
    title: 'Audit Syarikat Kerajaan',
    type: 'sub',
    icontype: 'fas fa-building text-default',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'syarikat-syarikat-kerajaan', title: 'Syarikat Kerajaan', type: 'link' },
      { path: 'syarikat-pengauditan', title: 'Pengauditan', type: 'link' },
    ]
  },
  /*{
    path: '/admin/management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },*/
  // {
  //   path: '/admin/report',
  //   title: 'Report',
  //   type: 'link',
  //   icontype: 'fas fa-chart-bar text-default'
  // },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];