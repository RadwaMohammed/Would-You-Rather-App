import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function NavLinks() {
  return (
    <Nav defaultActiveKey="/" as="ul" className="navMenu">
      <Nav.Item as="li">
        <Nav.Link as={NavLink} exact to='/' activeClassName="active">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={NavLink} exact to='/leaderboard' activeClassName="active">Leader Board</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={NavLink} exact to='/add' activeClassName="active">New Question</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
