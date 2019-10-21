import React from 'react';
import Content from '../UI/Content';

const items = [
  {
    name: 'Alerts',
    to: '/reactstrap/components/alerts/'
  },
  {
    name: 'Badge',
    to: '/reactstrap/components/badge/'
  },
  {
    name: 'Breadcrumbs',
    to: '/reactstrap/components/breadcrumbs/'
  },
  {
    name: 'Buttons',
    to: '/reactstrap/components/buttons/'
  },
  {
    name: 'Button Dropdown',
    to: '/reactstrap/components/button-dropdown/'
  },
  {
    name: 'Button Group',
    to: '/reactstrap/components/button-group/'
  },
  {
    name: 'Card',
    to: '/reactstrap/components/card/'
  },
  {
    name: 'Carousel',
    to: '/reactstrap/components/carousel/'
  },
  {
    name: 'Collapse',
    to: '/reactstrap/components/collapse/'
  },
  {
    name: 'Dropdowns',
    to: '/reactstrap/components/dropdowns/'
  },
  {
    name: 'Fade',
    to: '/reactstrap/components/fade/'
  },
  {
    name: 'Form',
    to: '/reactstrap/components/form/'
  },
  {
    name: 'Input Group',
    to: '/reactstrap/components/input-group/'
  },
  {
    name: 'Jumbotron',
    to: '/reactstrap/components/jumbotron/'
  },
  {
    name: 'Layout',
    to: '/reactstrap/components/layout/'
  },
  {
    name: 'List Group',
    to: '/reactstrap/components/listgroup/'
  },
  {
    name: 'Media',
    to: '/reactstrap/components/media/'
  },
  {
    name: 'Modals',
    to: '/reactstrap/components/modals/'
  },
  {
    name: 'Navbar',
    to: '/reactstrap/components/navbar/'
  },
  {
    name: 'Navs',
    to: '/reactstrap/components/navs/'
  },
  {
    name: 'Spinners',
    to: '/reactstrap/components/spinners/'
  },
  {
    name: 'Toasts',
    to: '/reactstrap/components/toasts/'
  },
  {
    name: 'Pagination',
    to: '/reactstrap/components/pagination/'
  },
  {
    name: 'Popovers',
    to: '/reactstrap/components/popovers/'
  },
  {
    name: 'Progress',
    to: '/reactstrap/components/progress/'
  },
  {
    name: 'Tables',
    to: '/reactstrap/components/tables/'
  },
  {
    name: 'Tabs',
    to: '/reactstrap/components/tabs/'
  },
  {
    name: 'Tooltips',
    to: '/reactstrap/components/tooltips/'
  }
];

function Components(props) {
  return <Content title="Components" items={items} {...props} />;
}

export default Components;
