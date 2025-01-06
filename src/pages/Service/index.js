import { Box, Typography } from '@mui/material';
import styles from './Service.module.scss';
import classNames from 'classnames/bind';
import ServiceBanner from '../../assets/images/serviceBanner.jpeg';

const cx = classNames.bind(styles);

function Service() {
    return (
        <Box>
            <div className={cx('service-banner')}>
                <Typography variant="h2" className={cx('banner-text')}>
                    We Will Write a Headline Highlighting Your Business Here
                </Typography>
            </div>
        </Box>
    );
}

export default Service;
