import {Grid2 as Grid, Link, Box, Stack} from "@mui/material";
import styles from './Home.module.scss';
import classNames from "classnames/bind";
import { Container} from 'react-bootstrap';
import HeroSlide from "../../layouts/LayoutComponents/HeroSlide";
import categoryItem1 from '../../assets/images/categoryItem1.jpg';
import { ArrowForward, KeyboardArrowRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import serviceImg1 from '../../assets/images/serviceImg1.jpg'
import serviceImg2 from '../../assets/images/serviceImg2.jpg'

const cx = classNames.bind(styles);

const category1 = [
    {
        id:1, 
        title:'3D Printers', 
        desc: 'Cutting-edge additive manufacturing techs', 
        buyPath:'/', 
        comparePath:'/'
    }, 
    {
        id:2, 
        title:'Filaments', 
        desc: '3D printing materials with excellent quality, performance & ease of use', 
        buyPath:'/', 
        comparePath:'/'
    }, 
    {
        id:3, 
        title:'MakerWorld', 
        desc: 'Free premium models at your fingertips', 
        buyPath:'/', 
        comparePath:'/'
    }, 
    {
        id:4, 
        title:"Maker's Supply", 
        desc: '1-stop shopping for all your non-printed parts needs', 
        buyPath:'/', 
        comparePath:'/'
    }, 
]
function Home() {
    return ( 
        <div className={cx('home')}>
            <HeroSlide />
            <Container className="mt-5 home-container text-center">
                <h1 className={cx('category2-title')}>
                    3D Store
                </h1>
                <div className={cx('category2-desc')}>
                    Khám phá về những sản phẩm tuyệt vời của chúng tôi
                </div>
                {/* category 1 */}
                <Grid container spacing={2} >
                    {category1.map(categoryItem=>(
                        <Grid size={6} key={categoryItem.id}>
                            <div style={{backgroundImage:`url(${categoryItem1})`}} className={cx('grid-bg-item')}>
                                <div className={cx("text-content")}>
                                    <h1 className={cx('grid-item_title')}>{categoryItem.title}</h1>
                                    <div className={cx('grid-item_desc')}>
                                        {categoryItem.desc}
                                    </div>
                                    <div className={cx('grid-item_link')}>
                                        <Link color="primary" underline="hover" href={categoryItem.buyPath}
                                        sx={{fontSize:'1.6rem', cursor:'pointer', display:'flex', flexDirection:'row', justifyContent:'center'}} > 
                                            <p>Buy now</p>
                                            <KeyboardArrowRight sx={{marginTop:'2px'}}/>
                                        </Link>
                                        <Link color="primary" underline="hover" href={categoryItem.comparePath}
                                        sx={{fontSize:'1.6rem', cursor:'pointer', display:'flex', flexDirection:'row', justifyContent:'center'}} > 
                                            <p>Compare all</p>
                                            <KeyboardArrowRight sx={{marginTop:'2px'}}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
                {/* category 2  */}
                <Box mt={7} textAlign="center">
                    <h1 className={cx('category2-title')}>
                        3D Service
                    </h1>
                    <div className={cx('category2-desc')}>
                        {/* Personalize products according to customer needs */}
                        cá nhân hoá sản phẩm theo nhu cầu của khách hàng
                    </div>
                    {/* content */}
                    <Grid container spacing={2}>
                        <Grid size={6} position="relative" sx={{cursor:'pointer'}}>
                            <div className={cx('img-slider')}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{dynamicBullets: true}}
                                    autoplay={{ delay: 3000 }}
                                >
                                    <SwiperSlide>
                                        <picture>
                                            <img src={serviceImg1} className={cx('service-img_content')}/>
                                        </picture>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <picture>
                                            <img src={serviceImg2} className={cx('service-img_content')}/>
                                        </picture>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className={cx('service-item_content')}>
                                <Stack direction="row" justifyContent="space-between">
                                    <div className={cx('text')}>
                                        <h1>Hobby & DIY</h1>
                                        <p>Enjoy your hobby more with custom parts and designs</p>
                                    </div>
                                    <button className={cx('action')}>
                                        <ArrowForward fontSize="large" sx={{color:'#fff'}}/>
                                    </button>
                                </Stack>
                            </div>
                        </Grid>
                        <Grid size={6} position="relative" sx={{cursor:'pointer'}}>
                            <div className={cx('img-slider')}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{dynamicBullets: true}}
                                    autoplay={{ delay: 3000 }}
                                >
                                    <SwiperSlide>
                                        <picture>
                                            <img src={serviceImg1} className={cx('service-img_content')}/>
                                        </picture>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <picture>
                                            <img src={serviceImg2} className={cx('service-img_content')}/>
                                        </picture>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className={cx('service-item_content')}>
                                <Stack direction="row" justifyContent="space-between">
                                    <div className={cx('text')}>
                                        <h1>Hobby & DIY</h1>
                                        <p>Enjoy your hobby more with custom parts and designs</p>
                                    </div>
                                    <button className={cx('action')}>
                                        <ArrowForward fontSize="large" sx={{color:'#fff'}}/>
                                    </button>
                                </Stack>
                            </div>
                        </Grid>
                        <Grid size={6} position="relative" sx={{cursor:'pointer'}}>
                            <div className={cx('img-slider')}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{dynamicBullets: true}}
                                    autoplay={{ delay: 3000 }}
                                >
                                    <SwiperSlide>
                                        <picture>
                                            <img src={serviceImg1} className={cx('service-img_content')}/>
                                        </picture>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <picture>
                                            <img src={serviceImg2} className={cx('service-img_content')}/>
                                        </picture>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className={cx('service-item_content')} position="relative" sx={{cursor:'pointer'}}>
                                <Stack direction="row" justifyContent="space-between">
                                    <div className={cx('text')}>
                                        <h1>Hobby & DIY</h1>
                                        <p>Enjoy your hobby more with custom parts and designs</p>
                                    </div>
                                    <button className={cx('action')}>
                                        <ArrowForward fontSize="large" sx={{color:'#fff'}}/>
                                    </button>
                                </Stack>
                            </div>
                        </Grid>
                        <Grid size={6} position="relative" sx={{cursor:'pointer'}}>
                            <div className={cx('img-slider')}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{dynamicBullets: true}}
                                    autoplay={{ delay: 3000 }}
                                >
                                    <SwiperSlide>
                                        <picture>
                                            <img src={serviceImg1} className={cx('service-img_content')}/>
                                        </picture>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <picture>
                                            <img src={serviceImg2} className={cx('service-img_content')}/>
                                        </picture>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className={cx('service-item_content')} position="relative" sx={{cursor:'pointer'}}>
                                <Stack direction="row" justifyContent="space-between">
                                    <div className={cx('text')}>
                                        <h1>Hobby & DIY</h1>
                                        <p>Enjoy your hobby more with custom parts and designs</p>
                                    </div>
                                    <button className={cx('action')}>
                                        <ArrowForward fontSize="large" sx={{color:'#fff'}}/>
                                    </button>
                                </Stack>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
     );
}

export default Home;