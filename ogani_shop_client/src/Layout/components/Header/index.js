import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

import './header.scss'
function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header__top__right">
                                <div className="header__top__right__auth">
                                    <Link to="/"><FontAwesomeIcon icon={faUser} className='small-icon'/> Login</Link>
                                </div>
                                <div className="header__top__right__auth">
                                    <Link to="/"><FontAwesomeIcon icon={faUser} className='small-icon'/> Login</Link>
                                </div>
                                <div className="header__top__right__auth">
                                    <Link to="/"><FontAwesomeIcon icon={faUser} className='small-icon'/> Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <Link to="/">
                                <img src={require('~/assets/img/logo.png')} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li className="active"><a href="./shop-grid.html">Shop</a></li>
                                <li><Link to="/">Pages</Link>
                                    <ul className="header__menu__dropdown">
                                        <li><a href="./shop-details.html">Shop Details</a></li>
                                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                        <li><a href="./checkout.html">Check Out</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li>
                                    <Link to="/gio-hang">
                                        <FontAwesomeIcon icon={faHeart} className='text-dark medium-icon'/>
                                        <span>1</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/danh-sach-yeu-thich">
                                        <FontAwesomeIcon icon={faShoppingBag} className='text-dark medium-icon'/>
                                        <span>3</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;