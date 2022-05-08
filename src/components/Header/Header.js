import React, { useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


import logo from '../../assets/images/logo.svg';

import togglar from '../../assets/images/icons/toggler.svg';
import avatarImg from '../../assets/images/avatar.png';
import Avatar from '../Avatar';






export const Header = (props) => {


    // const sidebar = useSelector((state) => state.sidebar.toggle)
    // const dispatch = useDispatch();

    // console.log();




    return (
        <header>
            <Navbar
                container={false}
                expand="lg"
                fixed="top"
            >
                <span className='sidebar-toggler' onClick={() => props.sidebarToggle()}>
                    <img src={togglar} alt="" />
                </span>

                <Link to='/'>
                    <img className='logo' src={logo} alt="" />
                </Link>


                <NavbarToggler onClick={function noRefCheck() { }} />


                <Collapse navbar>
                    <Nav
                        className="ms-auto"
                        navbar
                    >
                        <NavItem>
                            <Link className='nav-link' to='/'>
                                <i className="mdi mdi-content-copy"></i>
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link className='nav-link' to='/'>
                                <i className="mdi mdi-bell-outline"></i>
                                {/* <i className="mdi mdi-bell-badge-outline"></i> */}
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to='/'>
                                <i className='mdi mdi-email-open-outline'></i>
                            </Link>
                        </NavItem>
                        <NavItem>
                            {/* <i className='mdi mdi-email-open-outline'></i> */}
                            <Link className='nav-link' to='/'>
                                <i className='mdi mdi-message-outline'></i>
                            </Link>
                        </NavItem>

                        <UncontrolledDropdown inNavbar nav className='dropdown-user'>
                            <DropdownToggle caret nav>

                                <Avatar className='avatar-sm ' src={avatarImg} />
                                Kunle Badmus
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>

                </Collapse>
            </Navbar>
        </header>
    )
}



export default Header
