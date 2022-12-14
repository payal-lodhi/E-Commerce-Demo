import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaFacebookF } from 'react-icons/Fa';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';


const Footer = () => {
    return (
        <>
            <footer className="bg-dark" id="tempaltemo_footer">
                <Container>
                    <Row>
                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-success border-bottom pb-3 border-light logo">PS Shop</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw"></i>
                                    123 Consectetur at ligula 10660
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw"></i>
                                    <a className="text-decoration-none" href="tel:010-020-0340">010-020-00000</a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw"></i>
                                    <a className="text-decoration-none" href="mailto:info@company.com">info@ps.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="#">Luxury</a></li>
                                <li><a className="text-decoration-none" href="#">Sport Wear</a></li>
                                <li><a className="text-decoration-none" href="#">Men's Shoes</a></li>
                                <li><a className="text-decoration-none" href="#">Women's Shoes</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><Link href='/'>
                                    <a className="text-decoration-none">
                                        Home
                                    </a>
                                </Link></li>
                                <li><Link href='/about'>
                                    <a className="text-decoration-none">
                                        About Us
                                    </a>
                                </Link></li>
                                <li><Link href='/contact'>
                                    <a className="text-decoration-none">
                                        Contact
                                    </a>
                                </Link></li>
                            </ul>
                        </div>

                    </Row>

                    <div className="row text-light mb-4">
                        <div className="col-12 mb-3">
                            <div className="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div className="col-auto me-auto">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/">  <FaFacebookF /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><BsInstagram /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><FiTwitter /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/">  <FiLinkedin /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only">Email address</label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                                <div className="input-group-text btn-success text-light">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="w-100 bg-black py-3">
                    <Container>
                        <Row className="pt-2">
                            <div className="col-12">
                                <p className="text-left text-light">
                                    Copyright ?? 2021 PS
                                </p>
                            </div>
                        </Row>
                    </Container>
                </div>

            </footer>
        </>
    )
}

export default Footer;