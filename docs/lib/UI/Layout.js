import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';

export default (props) => {
  return (
    <div className="wrapper">
      <Helmet
        titleTemplate="reactstrap - %s"
        title="Reactstrap documentation"
        defaultTitle="Reactstrap documentation"
        meta={[
            { 'name': 'description', 'content': '' },
            { 'property': 'og:type', 'content': '' }
        ]}
      />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};
