import styles from './HeroSlide.module.scss';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@mui/material';
import {ArrowForwardIos} from '@mui/icons-material';
import heroSlideImg1 from '../../../assets/images/heroSlideImg1.jpg';
import heroSlideImg2 from '../../../assets/images/heroSlideImg2.jpg';
import heroSlideImg3 from '../../../assets/images/heroSlideImg3.jpg';
import heroSlideImg4 from '../../../assets/images/heroSlideImg4.jpg';
import heroSlideImg5 from '../../../assets/images/heroSlideImg5.jpg';

const cx = classNames.bind(styles);
function HeroSlide() {
    const heroSlideData = [
        { id: 1, image: heroSlideImg1 },
        { id: 2, image: heroSlideImg2 },
        { id: 3, image: heroSlideImg3 },
        { id: 4, image: heroSlideImg4 },
        { id: 5, image: heroSlideImg5 },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{dynamicBullets: true}}
            autoplay={{ delay: 3000 }}
        >
            {heroSlideData.map((slide) => (
                <SwiperSlide key={slide.id}>
                {({isActive})=>(
                   <HeroSlideItem image={slide.image} className={isActive ? 'active' : ''}/>
                )}
            </SwiperSlide>
            ))}
        </Swiper>
    );
}

function HeroSlideItem({ image, className}) {
    return (
        <div className={cx('hero-slide__item', `${className}`)} style={{backgroundImage:`url(${image})`}}>
            <div className={cx('hero-slide__item__content')}>
                <div className={cx('hero-slide__item__content__info')}>
                    <h1 className={cx("title")} >Bambu Lab X1C</h1>
                    <div className={cx('overview')}>A Leap in 3D Printing, the Flagship Core-XY 3D Printer</div>
                    <div className={cx('btns')}>
                        <Button variant="contained" color='primary' 
                        sx={{color:'#fff', width:'180px', textTransform:'none', fontSize:'1.6rem', display:'flex', 
                            alignItems:'center'
                        }}>
                            <p>Buy now</p>
                            <ArrowForwardIos fontSize='small' sx={{marginLeft:'1rem', width:15, height:15}}/>
                        </Button>
                        <Button variant="outlined" color='white' sx={{color:'#fff', width:'180px', textTransform:'none', fontSize:'1.6rem', display:'flex', 
                            alignItems:'center'
                        }}>
                            <p>Learn more</p>
                            <ArrowForwardIos fontSize='small' sx={{marginLeft:'1rem', width:15, height:15}}/>
                        </Button>
                    </div>  
                </div>
            </div>
        </div>
    );
}
HeroSlideItem.propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string,
};
export default HeroSlide;