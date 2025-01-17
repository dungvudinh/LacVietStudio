import styles from './MainLayout.module.scss';
import Navbar from '../LayoutComponents/Navbar';
import {HomeFooter} from '../LayoutComponents/Footer';
import classNames from 'classnames/bind';
import Contact from '../../components/Contact';
const cx = classNames.bind(styles);
function MainLayout({children}) {
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

export default MainLayout;