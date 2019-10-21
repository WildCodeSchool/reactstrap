import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import LayoutPage from './components/LayoutPage';
import NavsPage from './components/NavsPage';
import NavbarPage from './components/NavbarPage';
import BreadcrumbsPage from './components/BreadcrumbsPage';
import ButtonsPage from './components/ButtonsPage';
import ButtonGroupPage from './components/ButtonGroupPage';
import ButtonDropdownPage from './components/ButtonDropdownPage';
import DropdownsPage from './components/DropdownsPage';
import FadePage from './components/FadePage';
import FormPage from './components/FormPage';
import InputGroupPage from './components/InputGroupPage';
import PopoversPage from './components/PopoversPage';
import ProgressPage from './components/ProgressPage';
import TooltipsPage from './components/TooltipsPage';
import BadgePage from './components/BadgePage';
import MediaPage from './components/MediaPage';
import ModalsPage from './components/ModalsPage';
import CardPage from './components/CardPage';
import TablesPage from './components/TablesPage';
import PaginationPage from './components/PaginationPage';
import TabsPage from './components/TabsPage';
import JumbotronPage from './components/JumbotronPage';
import AlertsPage from './components/AlertsPage';
import ToastsPage from './components/ToastsPage';
import CollapsePage from './components/CollapsePage';
import CarouselPage from './components/CarouselPage';
import ListGroupPage from './components/ListGroupPage';
import SpinnersPage from './components/SpinnersPage';
import ClearfixPage from './Utilities/ClearfixPage';
import ColorsPage from './Utilities/ColorsPage';
import NotFound from './NotFound';
import Components from './components';
import Utilities from './Utilities';
import UI from './UI';

const routes = (
  <Route path="/reactstrap/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="components/" component={Components}>
      <IndexRedirect to="alerts/" />
      <Route path="breadcrumbs/" component={BreadcrumbsPage} />
      <Route path="buttons/" component={ButtonsPage} />
      <Route path="button-group/" component={ButtonGroupPage} />
      <Route path="button-dropdown/" component={ButtonDropdownPage} />
      <Route path="dropdowns/" component={DropdownsPage} />
      <Route path="fade/" component={FadePage} />
      <Route path="form/" component={FormPage} />
      <Route path="input-group/" component={InputGroupPage} />
      <Route path="popovers/" component={PopoversPage} />
      <Route path="progress/" component={ProgressPage} />
      <Route path="tooltips/" component={TooltipsPage} />
      <Route path="badge/" component={BadgePage} />
      <Route path="card/" component={CardPage} />
      <Route path="tables/" component={TablesPage} />
      <Route path="modals/" component={ModalsPage} />
      <Route path="layout/" component={LayoutPage} />
      <Route path="navs/" component={NavsPage} />
      <Route path="navbar/" component={NavbarPage} />
      <Route path="media/" component={MediaPage} />
      <Route path="pagination/" component={PaginationPage} />
      <Route path="tabs/" component={TabsPage} />
      <Route path="alerts/" component={AlertsPage} />
      <Route path="toasts/" component={ToastsPage} />
      <Route path="jumbotron/" component={JumbotronPage} />
      <Route path="collapse/" component={CollapsePage} />
      <Route path="carousel/" component={CarouselPage} />
      <Route path="listgroup/" component={ListGroupPage} />
      <Route path="spinners/" component={SpinnersPage} />
    </Route>
    <Route path="/utilities/" component={Utilities}>
      <IndexRedirect to="colors/" />
      <Route path="colors/" component={ColorsPage} />
      <Route path="clearfix/" component={ClearfixPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
