import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hero.scss'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    return (
        <section className="hero hero-normal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <div>
                                    <input type="text" placeholder="What do yo u need?" />
                                    <button type="submit" className="site-btn">Tìm kiếm</button>
                                </div>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>0868154365</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero
