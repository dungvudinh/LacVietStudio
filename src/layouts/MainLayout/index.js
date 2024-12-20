import styles from './MainLayout.module.scss';
import Navbar from '../../components/Navbar';
import Footer from '../LayoutComponents/Footer';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function MainLayout({children}) {
    return ( 
        <div className={cx('container')}>
            <Navbar navbarType={'black-or-transparent'}/>
            <div className={cx('content')}>
                {children}
            </div>
            <Footer />
        </div>
     );
}

export default MainLayout;