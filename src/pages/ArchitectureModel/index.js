import styles from './ArchitectureModel.module.scss'
import classNames from 'classnames/bind';
import heroSlideImg from '../../assets/images/saban/heroSlideImg.jpg';
import { Button } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
const cx  = classNames.bind(styles);

function ArchitectureModel() {
    return ( 
        <div className={cx('architecture-model')}>
            <HeroSlide />
        </div>
     );
}


const HeroSlide = ()=>{
    return (
        <div className={cx('hero-slide__item')} style={{backgroundImage:`url(${heroSlideImg})`}}>
            <div className={cx('hero-slide__item__content')}>
            <div className={cx('hero-slide__item__content__info')}>
                <h1 className={cx("title")} >Contact Us</h1>
                <div className={cx('overview')}>Get to us in a way that better suits your situation.</div>
            </div>
        </div>
    </div>
    )
}
export default ArchitectureModel;