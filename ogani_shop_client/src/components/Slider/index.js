import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './slider.scss'

function Slider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
        <section className="categories">
            <Carousel responsive={responsive} className="">
                <div className="categories__item">
                    <div style={{backgroundImage: `url(${require('../../assets/img/categories/cat-1.jpg')})`}}>
                        <h5><a href="#">Fresh Fruit</a></h5>
                    </div>
                </div>
                <div className="categories__item">
                    <div style={{backgroundImage: `url(${require('../../assets/img/categories/cat-2.jpg')})`}}>
                        <h5><a href="#">Dried Fruit</a></h5>
                    </div>
                </div>
                <div className="categories__item">
                    <div style={{backgroundImage: `url(${require('../../assets/img/categories/cat-3.jpg')})`}}>
                        <h5><a href="#">Vegetables</a></h5>
                    </div>
                </div>
                <div className="categories__item">
                    <div style={{backgroundImage: `url(${require('../../assets/img/categories/cat-4.jpg')})`}}>
                        <h5><a href="#">drink fruits</a></h5>
                    </div>
                </div>
                <div className="categories__item">
                    <div style={{backgroundImage: `url(${require('../../assets/img/categories/cat-3.jpg')})`}}>
                        <h5><a href="#">drink fruits</a></h5>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}

export default Slider;