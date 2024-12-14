import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroSlideImg1 from '../../assets/images/heroSlideImg1.jpg';
import heroSlideImg2 from '../../assets/images/heroSlideImg2.jpg';
import heroSlideImg3 from '../../assets/images/heroSlideImg3.jpg';
import heroSlideImg4 from '../../assets/images/heroSlideImg4.jpg';
import heroSlideImg5 from '../../assets/images/heroSlideImg5.jpg';
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
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
        >
            {heroSlideData.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <HeroSlideItem image={slide.image} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

function HeroSlideItem({ image }) {
    return (
        <div className="hero-slide-item">
            <img src={image} alt="Hero slide" />
        </div>
    );
}
export default HeroSlide;