import {Link} from 'react-router-dom'

import './banner.scss'


function Banner() {
    return (
        <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
            <div className="hero__text">
                <span>FRUIT FRESH</span>
                <h2>Vegetable <br />100% Organic</h2>
                <p>Free Pickup and Delivery Available</p>
                <Link href="#" className="primary-btn">Tới cửa hàng</Link>
            </div>
        </div>
    );
}

export default Banner;