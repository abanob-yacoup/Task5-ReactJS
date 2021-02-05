import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import {Collapse,Navbar,NavbarToggler,Nav} from 'reactstrap';
const Header = (props) => {
 let  {onToggle} = props;
  let [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const openModal = () => {
    onToggle();
  }


  return (
    <div className="container">
      <Navbar color="info" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" onClick={openModal} >ADD</Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;


