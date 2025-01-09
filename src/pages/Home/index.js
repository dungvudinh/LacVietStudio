import {Grid2 as Grid, Link, Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Container} from "@mui/material";
import styles from './Home.module.scss';
import classNames from "classnames/bind";
import HeroSlide from "../../layouts/LayoutComponents/HeroSlide";
import categoryItem1 from '../../assets/images/categoryItem1.jpg';
import { ArrowForward, KeyboardArrowRight, ExpandMore } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import serviceImg1 from '../../assets/images/serviceImg1.jpg'
import newsImg1 from '../../assets/images/newsImg1.jpeg'
import newsImg2 from '../../assets/images/newsImg2.jpeg'
import { useState } from 'react';
import viettelPost from '../../assets/images/viettelPost.png';
import img1 from '../../assets/images/saban/img1.jpg';
import img2 from '../../assets/images/saban/img2.jpg';
import img3 from '../../assets/images/saban/img3.jpg';

import heroSlideImg2 from '../../assets/images/heroSlideImg2.jpg'
import heroSlideImg3 from '../../assets/images/heroSlideImg3.jpg'
import heroSlideImg4 from '../../assets/images/heroSlideImg4.jpg'
import heroSlideImg5 from '../../assets/images/heroSlideImg5.jpg'

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
const heroSlideData = [
    { id: 2, image: heroSlideImg2 },
    { id: 3, image: heroSlideImg3 },
    { id: 4, image: heroSlideImg4 },
    { id: 5, image: heroSlideImg5 },
];
function Home() {
    const [activeNews, setActiveNews] = useState(0);
    // const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = (index) => (event, isExpanded) => {
        setActiveNews(index);
    };

    return ( 
        <div className={cx('home')}>
            <HeroSlide heroSlideData={heroSlideData}/>
            <Box sx={{paddingBottom:'50px', marginTop:'100px', textAlign:'center'}}>
                <Container maxWidth='xl'>
                    <Typography varient='h1' fontWeight={700} fontSize={{xs:'2.5rem', md:'3.5rem'}}>
                        3D Store
                    </Typography>
                    <Typography varient='h6' fontSize={{xs:'1.5rem', md:'1.8rem'}} >
                        Khám phá về những sản phẩm tuyệt vời của chúng tôi
                    </Typography>
                    <Stack gap={2} direction={{md:'row', xs:'column'}} mt={'2rem'}>
                        {
                            category1.map(categoryItem=>(
                                <div key={categoryItem.id} style={{backgroundImage:`url(${categoryItem1})`}} className={cx('grid-bg-item')}>
                                    <div className={cx("text-content")}>
                                        <Typography variant="h1" fontWeight={600} fontSize={{md:'3rem', xs:'2rem'}}>
                                            {categoryItem.title}
                                        </Typography>
                                        <Typography varient='h6' fontSize={{md:'1.6rem', xs:'1.4rem'}} padding='10px 0'>
                                            {categoryItem.desc}
                                        </Typography>
                                        <Link color="primary" underline="hover" href={categoryItem.buyPath}
                                        sx={{fontSize:'1.6rem', cursor:'pointer', display:'flex', flexDirection:'row', justifyContent:'center'}} > 
                                            <p>Buy now</p>
                                            <KeyboardArrowRight sx={{marginTop:'2px'}}/>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </Stack>
                </Container>
                <Container  sx={{marginTop:'100px',textAlign:'center'}} maxWidth='xl'>
                    <Typography varient='h1' fontWeight={700} fontSize={{xs:'2.5rem', md:'3.5rem'}}>
                        3D Service
                    </Typography>
                    <Typography varient='h6' fontSize={{xs:'1.5rem', md:'1.8rem'}} >
                        cá nhân hoá sản phẩm theo nhu cầu của khách hàng
                    </Typography>
                    <Stack gap={2} direction={{md:'row', xs:'column'}} mt={'2rem'}>
                        {category2.map(categoryItem=>(
                                <Box position="relative" sx={{cursor:'pointer'}} key={categoryItem.id}>
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
                                            <Box>
                                                <Typography varient='h1' fontWeight={600} fontSize={{md:'3rem', xs:'2rem'}}
                                                textAlign={'left'}>
                                                    {categoryItem.title}
                                                </Typography>
                                                <Typography varient='h6' fontSize={{md:'1.6rem', xs:'1.4rem'}}
                                                textAlign={'left'}>
                                                    {categoryItem.desc}
                                                </Typography>
                                            </Box>
                                            <button className={cx('action')}>
                                                <ArrowForward fontSize="medium" sx={{color:'#fff'}}/>
                                            </button>
                                        </Stack>
                                    </div>
                                </Box>
                            ))}
                    </Stack>
                </Container>
                {/* architecture model 3 */}
                <Container className={cx('news-container')} sx={{marginTop:'100px', textAlign:"center"}} maxWidth='xl'>
                    <Typography variant="h1" fontWeight="bold" textAlign="center" fontSize={{md:"3rem" , xs:'2rem'}}marginBottom="5px">
                        Mô Hình Sa Bàn
                    </Typography>
                    <Typography variant="body1"  textAlign="center" fontSize={{md:"1.8rem", xs:'1.5rem'}}>
                        Thiết kế mô hình sa bàn chi tiết, tái hiện chính xác các dự án xây dựng.
                    </Typography>
                    <Stack gap={4} mt={4} direction={'row'}>
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

                        <div className={cx('architecture-model_item')} style={{backgroundImage:`url(${img2})`}}>
                            <div className={cx('architecture-model_item__content')}>
                                <Typography variant="h5" fontWeight="bold" textAlign="center" fontSize="2.5rem" color="#fff">
                                    Mô hình nhà máy
                                </Typography>
                                <Link to="/" underline="hover" fontSize='1.6rem' sx={{cursor:'pointer'}}>
                                    Learn more
                                    <KeyboardArrowRight />
                                </Link>
                            </div>
                        </div>

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
                    </Stack>
                </Container>
                <Box className={cx('slogan_bg')} marginTop={'100px'}>
                    <Typography varient='h6' fontSize={'3.5rem'} fontWeight={700} position={'relative'} zIndex={'10'} maxWidth={'800px'}>
                        Biến Ý Tưởng Của Khách Hàng Thành Hiện Thực
                    </Typography>
                </Box>
                {/* NEWS */}
                <Container  className={cx('news-container')} sx={{marginTop:'100px', textAlign:'center'}} maxWidth='xl'>
                    <Typography variant="h1" fontSize="3.5rem" fontWeight={700}>
                        Tin Tức
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
                </Container>
                <Container  sx={{marginTop:'100px', textAlign:'center'}} maxWidth='xl'>
                    <Typography variant="h1" fontSize="3.5rem" fontWeight={700}>
                        Đối tác của chúng tôi
                    </Typography>
                    <Stack marginTop="50px">
                        <img src={viettelPost} alt="viettelPost" style={{width:'200px'}}/>
                    </Stack>
                </Container>
                {/* <Box textAlign='center' marginTop="100px">
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
                </Box> */}
                
            </Box>
            {/* MAP */}
        </div>
     );
}

export default Home;