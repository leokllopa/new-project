// SidebarData.js
export const SidebarData = [
  {
    titleKey: 'sidebar.home',
    link: '/',
  },
  {
    titleKey: 'sidebar.investmentBasics',
    link: '/investment-basics',
    subMenu: [
      {
        titleKey: 'sidebar.whatIsInvesting',
        link: '/investment-basics/what-is-investing',
      },
      {
        titleKey: 'sidebar.typesOfInvestments',
        link: '/investment-basics/types-of-investments',
      },
      {
        titleKey: 'sidebar.riskAndReward',
        link: '/investment-basics/risk-and-reward',
      },
    ],
  },
  {
    titleKey: 'sidebar.valuationModels',
    link: '/valuation-models',
    subMenu: [
      { titleKey: 'sidebar.peRatio', link: '/valuation-models/pe' },
      { titleKey: 'sidebar.psRatio', link: '/valuation-models/ps' },
      { titleKey: 'sidebar.pbRatio', link: '/valuation-models/pb' },
      { titleKey: 'sidebar.dcf', link: '/valuation-models/dcf' },
      { titleKey: 'sidebar.ddm', link: '/valuation-models/ddm' },
    ],
  },
  {
    titleKey: 'sidebar.equityResearch',
    link: '/equity-research',
  },
  {
    titleKey: 'sidebar.maAnalysis',
    link: '/ma-analysis',
  },
  {
    titleKey: 'sidebar.tools',
    link: '/tools',
  },
  {
    titleKey: 'sidebar.about',
    link: '/about',
  },
];
