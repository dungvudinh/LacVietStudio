import styles from './HeroSlide.module.scss';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button, Typography } from '@mui/material';
import {ArrowForwardIos} from '@mui/icons-material';
import heroSlideImg1 from '../../../assets/images/heroSlideImg1.jpg';
import heroSlideImg2 from '../../../assets/images/heroSlideImg2.jpg';
import heroSlideImg3 from '../../../assets/images/heroSlideImg3.jpg';
import heroSlideImg4 from '../../../assets/images/heroSlideImg4.jpg';
import heroSlideImg5 from '../../../assets/images/heroSlideImg5.jpg';
import sloganBg from '../../../assets/images/sloganBg.jpg'
const cx = classNames.bind(styles);
function HeroSlide({heroSlideData}) {
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
                    <Typography varient='h1' fontSize={{xs:'3rem',md:'5rem'}} fontWeight='600' className={cx('title')}>Bambu Lab X1C</Typography>
                    <Typography varient='h6' fontSize={{xs:'1.5rem', md:'2rem'}} className={cx('overview')}>
                        A Leap in 3D Printing, the Flagship Core-XY 3D Printer
                    </Typography>
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