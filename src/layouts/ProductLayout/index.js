import { StoreFooter } from '../LayoutComponents/Footer';
import styles from './ProductLayout.module.scss';
import classNames from 'classnames/bind';
import Navbar from '../LayoutComponents/Navbar';

const cx = classNames.bind(styles);
function ProductLayout({children}) {
    return ( 
        <div className={cx('container')}>
            <Navbar belongTo={'store'}/>
            <div className={cx('content')}>
                {children}
            </div>
            <StoreFooter />
        </div>
     );
}

export default ProductLayout;
