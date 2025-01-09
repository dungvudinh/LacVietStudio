import styles from './ServiceLayout.module.scss'
import classNames from 'classnames/bind';
import Contact from '../../components/Contact';
import Navbar from '../LayoutComponents/Navbar';
import {HomeFooter} from '../LayoutComponents/Footer';
const cx = classNames.bind(styles);
function ServiceLayout({children}) {
    return ( 
        <div className={cx('container')}>
            <Navbar belongTo={'home'}/>
            <div className={cx('content')}>
                {children}
            </div>
            <HomeFooter />
            <Contact />
        </div>
     );
}

export default ServiceLayout;