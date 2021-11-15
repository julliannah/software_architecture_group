import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
            © 2021 Reduction Template, source on <SourceLink>Github</SourceLink>
            <br/> and redesigned by Group 1 within the course EEET2582
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
