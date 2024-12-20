import styles from './StoreLayout.module.scss';
import classNames from 'classnames/bind';
import Navbar from '../../components/Navbar';
import Footer from '../LayoutComponents/Footer';
const cx = classNames.bind(styles);
function StoreLayout({children}) {
    return ( 
        <div className={cx('container')}>
            <Navbar navbarType={'white'}/>
            <div className={cx('content')}>
                {children}
            </div>
            <Footer />
        </div>
     );
}

export default StoreLayout;