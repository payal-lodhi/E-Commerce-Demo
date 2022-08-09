import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AiTwotoneMail } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import { FaFacebookF, FaUser } from 'react-icons/Fa';
import { BsInstagram, BsFillCartPlusFill } from 'react-icons/bs';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';


const Header = () => {
    const iconStyle = {
        color: "white"
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" className="templatemo_nav_top">
                <Container>
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <AiTwotoneMail style={iconStyle} />
                            <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                            <MdCall style={iconStyle} />
                            <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                        </div>
                        <div>
                            <FaFacebookF style={iconStyle} /> 
                            <BsInstagram style={iconStyle} /> 
                            <FiTwitter style={iconStyle} /> 
                            <FiLinkedin style={iconStyle} />
                        </div>
                    </div>
                </Container>
            </Navbar>
            <Navbar variant="light" className="shadow">
                <Container className="d-flex justify">
                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <Navbar.Brand> <Link href='/'>
                            <a className="navbar-brand text-success logo h1 align-self-center">
                                PS
                            </a>
                        </Link></Navbar.Brand>
                        <div className="flex-fill">
                            <Nav className="justify-content-between mx-lg-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <BsFillCartPlusFill />
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                            </a>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                <FaUser />
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                            </a>
                        </div>

                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;