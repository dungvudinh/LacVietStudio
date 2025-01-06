import {Grid2 as Grid, Link, Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Button} from "@mui/material";
import styles from './Home.module.scss';
import classNames from "classnames/bind";
import { Container} from 'react-bootstrap';
import HeroSlide from "../../layouts/LayoutComponents/HeroSlide";
import categoryItem1 from '../../assets/images/categoryItem1.jpg';
import { ArrowForward, KeyboardArrowRight, ExpandMore } from "@mui/icons-material";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import serviceImg1 from '../../assets/images/serviceImg1.jpg'
import newsImg1 from '../../assets/images/newsImg1.jpeg'
import newsImg2 from '../../assets/images/newsImg2.jpeg'
import { useState, useEffect } from 'react';
import viettelPost from '../../assets/images/viettelPost.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img1 from '../../assets/images/saban/img1.jpg';
import img2 from '../../assets/images/saban/img2.jpg';
import img3 from '../../assets/images/saban/img3.jpg';
const cx = classNames.bind(styles);

const category1 = [
    {
        id:1, 
        title:"Children's toys", 
        desc: 'Cutting-edge additive manufacturing techs', 
        buyPath:'/', 
        comparePath:'/'
    }, 
    {
        id:2, 
        title:'Decorations', 
        desc: '3D printing materials with excellent quality, performance & ease of use', 
        buyPath:'/', 
        comparePath:'/'
    }, 
]
const category2 = [
    {
        id:1, 
        title:'Premium 3D Design Services', 
        desc:'Tailored, high-precision 3D models for any need.', 
        path:''
    }, 
    {
        id:2, 
        title:'High-Quality 3D Printing', 
        desc:'Sharp, detailed 3D prints with exceptional quality.', 
        path:''
    }
]

const newsItems = [
    {
        id: 1,
        title: "Exclusive Model Program: Cash Rewards and Copyright Support",
        desc: "When we communicated with creators on MakerWorld about the features they want, two of the most frequent requests are Cash Incentives and Copyright Support.",
        image: newsImg1,
        link: "/"
    },
    {
        id: 2,
        title: "New 3D Printing Technologies Released",
        desc: "Discover our latest advancements in 3D printing technology that revolutionize the industry.",
        image: newsImg2,
        link: "/"
    },
    {
        id: 3,
        title: "Customer Success Stories",
        desc: "See how our clients are transforming their businesses with our 3D printing solutions.",
        image: newsImg1,
        link: "/"
    },
    {
        id: 4,
        title: "Upcoming 3D Printing Workshops",
        desc: "Join our expert-led workshops to master the art of 3D printing.",
        image: newsImg2,
        link: "/"
    }
];

const faqItems = [
    {
        question: "What is 3D printing?",
        answer: "3D printing is a process of making three dimensional solid objects from a digital file."
    },
    {
        question: "How long does it take to print an object?",
        answer: "The time it takes to print an object depends on the size and complexity of the object."
    },
    {
        question: "What materials can be used in 3D printing?",
        answer: "A variety of materials can be used in 3D printing, including plastics, metals, and ceramics."
    },
    {
        question: "How much does 3D printing cost?",
        answer: "The cost of 3D printing depends on the material used and the size and complexity of the object."
    }
];

function Home() {
    const [activeNews, setActiveNews] = useState(0);
    const swiper = useSwiper();
    console.log(swiper)
    // const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = (index) => (event, isExpanded) => {
        setActiveNews(index);
    };

    useEffect(() => {
    }, [activeNews]);

    return ( 
        <div className={cx('home')}>
            <HeroSlide />
            <Container className="mt-5 home-container text-center" style={{paddingBottom: '100px'}}>
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
                <Box  textAlign="center" marginTop="100px">
                    <h1 className={cx('category2-title')}>
                        3D Service
                    </h1>
                    <div className={cx('category2-desc')}>
                        {/* Personalize products according to customer needs */}
                        cá nhân hoá sản phẩm theo nhu cầu của khách hàng
                    </div>
                    {/* content */}
                    <Grid container spacing={2}>
                        {category2.map(categoryItem=>(
                            <Grid size={6} position="relative" sx={{cursor:'pointer'}} key={categoryItem.id}>
                                <div className={cx('img-slider')}>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ dynamicBullets: true }}
                                        
                                    >
                                        <SwiperSlide>
                                            <picture>
                                                <img src={serviceImg1} className={cx('service-img_content')}/>
                                            </picture>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className={cx('service-item_content')}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <div className={cx('text')}>
                                            <h1>{categoryItem.title}</h1>
                                            <p>{categoryItem.desc}</p>
                                        </div>
                                        <button className={cx('action')}>
                                            <ArrowForward fontSize="medium" sx={{color:'#fff'}}/>
                                        </button>
                                    </Stack>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                {/* architecture model 3 */}
                <Box textAlign='center' className={cx('news-container')} marginTop="100px" >
                    <Typography variant="h1" fontWeight="bold" textAlign="center" fontSize="3rem" marginBottom="5px">
                        Mô Hình Sa Bàn
                    </Typography>
                    <Typography variant="body1"  textAlign="center" fontSize="1.8rem">
                        Thiết kế mô hình sa bàn chi tiết, tái hiện chính xác các dự án xây dựng.
                    </Typography>
                    <Grid container mt={4} spacing={4}>
                        <Grid size={4} overflow={'hidden'}>
                        <div className={cx('architecture-model_item')} style={{backgroundImage:`url(${img1})`}}>
                                <div className={cx('architecture-model_item__content')}>
                                    <Typography variant="h5" fontWeight="bold" textAlign="center" fontSize="2.5rem" color="#fff"
                                    >
                                        Mô hình cao tầng
                                    </Typography>
                                    <Link to="/" underline="hover" fontSize='1.6rem' sx={{cursor:'pointer'}}>
                                        Learn more
                                        <KeyboardArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={4} overflow={'hidden'}>
                        <div className={cx('architecture-model_item')} style={{backgroundImage:`url(${img2})`}}>
                                <div className={cx('architecture-model_item__content')}>
                                    <Typography variant="h5" fontWeight="bold" textAlign="center" fontSize="2.5rem" color="#fff"
                                    >
                                        Mô hình nhà máy
                                    </Typography>
                                    <Link to="/" underline="hover" fontSize='1.6rem' sx={{cursor:'pointer'}}>
                                        Learn more
                                        <KeyboardArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={4} overflow={'hidden'}>
                            <div className={cx('architecture-model_item')} style={{backgroundImage:`url(${img3})`}}>
                                <div className={cx('architecture-model_item__content')}>
                                    <Typography variant="h5" fontWeight="bold" textAlign="center" fontSize="2.5rem" color="#fff"
                                    >
                                        Mô hình quy hoạch
                                    </Typography>
                                    <Link to="/" underline="hover" fontSize='1.6rem' sx={{cursor:'pointer'}}>
                                        Learn more
                                        <KeyboardArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                {/* NEWS */}
                <Box textAlign='center' className={cx('news-container')} marginTop="100px" >
                    <Typography variant="h1" fontSize="3.5rem" fontWeight={700}>
                        Lac Viet Studio News
                    </Typography>
                    <Grid container mt={4}>
                        <Grid size={6} overflow="hidden">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ dynamicBullets: true }}
                                initialSlide={activeNews}
                                onSlideChange={({activeIndex})=>setActiveNews(activeIndex)}
                                
                            >
                                {newsItems.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <picture>
                                            <img src={item.image} className={cx('news-img_content')}/>
                                        </picture>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Grid>
                        <Grid size={6}>
                            <Box padding="30px 64px" sx={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                                {newsItems.map((item, index) => (
                                    <Accordion 
                                        key={item.id}
                                        expanded={activeNews === index}
                                        onChange={handleAccordionChange(index)}
                                        square={true} 
                                        disableGutters={true}
                                    >
                                        <AccordionSummary expandIcon={<ExpandMore fontSize="large"/>}>
                                            <Typography variant="h5" textAlign="left" fontWeight={700} fontSize='2.4rem' 
                                            sx={{paddingRight:'2rem' }} className={cx('news-item_title')}> 
                                                {item.title}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{textAlign:'left', paddingRight:'25px'}}>
                                            <Typography sx={{
                                                overflow:'hidden', 
                                                textOverflow:'ellipsis', 
                                                lineHeight:'1.5', 
                                                maxHeight:'45px', 
                                                display:'-webkit-box', 
                                                WebkitLineClamp:2, 
                                                WebkitBoxOrient:'vertical',
                                            }}>
                                                {item.desc}
                                            </Typography>
                                            <Link color="primary" underline="hover" className="d-flex align-items-center mt-4" href={item.link}>
                                                Learn more
                                                <KeyboardArrowRight />
                                            </Link>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box textAlign='center' marginTop="100px">
                    <Typography variant="h1" fontSize="3.5rem" fontWeight={700}>
                        Đối tác của chúng tôi
                    </Typography>
                    <Stack marginTop="50px">
                        <img src={viettelPost} alt="viettelPost" style={{width:'200px'}}/>
                    </Stack>
                </Box>
                <Box textAlign='center' marginTop="100px">
                    <Typography variant="h1" fontSize="3.5rem" fontWeight={700}>
                        Câu hỏi thường gặp
                    </Typography>
                    <Box marginTop="50px">
                        {faqItems.map((item, index) => (
                            <Accordion key={index} sx={{padding:'0 40px'}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h5" textAlign="left" fontWeight={600} fontSize='2.4rem' >{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{textAlign:'left'}}>
                                    <Typography>{item.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Container>
            {/* MAP */}
        </div>
     );
}

export default Home;