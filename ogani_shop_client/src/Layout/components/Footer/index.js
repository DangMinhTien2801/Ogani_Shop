import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import { faFacebook, faInstagram, faSquarePinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <Link href="./index.html"><img src={require('~/assets/img/logo.png')} alt="" /></Link>
                            </div>
                            <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Useful Links</h6>
                            <ul>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">About Our Shop</Link></li>
                                <li><Link to="/">Secure Shopping</Link></li>
                                <li><Link to="/">Delivery infomation</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Our Sitemap</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/">Who We Are</Link></li>
                                <li><Link to="/">Our Services</Link></li>
                                <li><Link to="/">Projects</Link></li>
                                <li><Link to="/">Contact</Link></li>
                                <li><Link to="/">Innovation</Link></li>
                                <li><Link to="/">Testimonials</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <h6>Join Our Newsletter Now</h6>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#">
                                <input type="text" placeholder="Enter your mail" />
                                <button type="submit" className="site-btn">Đăng ký</button>
                            </form>
                            <div className="footer__widget__social">
                                <Link to="/"><FontAwesomeIcon icon={faFacebook}/></Link>
                                <Link to="/"><FontAwesomeIcon icon={faInstagram}/></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter}/></Link>
                                <Link to="/"><FontAwesomeIcon icon={faSquarePinterest}/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text">
                                <p>
                                    Copyright &copy;
                                    All rights reserved | This template is made with 
                                    <FontAwesomeIcon icon={faHeart}/> by 
                                    <a href="https://colorlib.com">Colorlib</a>
                                </p>
                            </div>
                            <div className="footer__copyright__payment"><img src={require('~/assets/img/payment-item.png')} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;