import { Typography,Box, Stack, Grid2 as Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './News.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function News() {
    return ( 
        <div className='container'>
            <Typography variant='h3' fontWeight={700} sx={{padding:'60px 0', borderBottom:'1px solid var(--border-color)'}}>News</Typography>
            <Box sx={{padding:'20px'}}>
                <Grid container columnSpacing={4} rowSpacing={6} >
                    <Grid size={3}>
                        <Card />
                    </Grid>
                    <Grid size={3}>
                        <Card />
                    </Grid>
                    <Grid size={3}>
                        <Card />
                    </Grid>
                    <Grid size={3}>
                        <Card />
                    </Grid>
                    <Grid size={3}>
                        <Card />
                    </Grid>
                    <Grid size={3}>
                        <Card />
                    </Grid>
                    <Grid size={3}>
                        <Card />
                    </Grid>

                </Grid>
            </Box>
        </div>
     );
}



const Card = ({title, content }) => {
    return (
        <article className={cx('card-item')}>
            <Link to='/news/1'>
                <figure className={cx('card-image')}>
                    <img src='https://blog.bambulab.com/content/images/size/w320/format/webp/2024/07/img_v3_02cj_654bcdd5-1289-4c8c-9345-52b54844663g.png' />
                </figure>
                <div className={cx('card-wrapper')}>
                    <Typography variant='h6' fontWeight={800}>Custom Firmware Plan and Our Principles on Ecosystem</Typography>
                    <Typography variant='p' sx={{
                        WebkitLineClamp:2, 
                        WebkitBoxOrient:  'vertical',
                        display:'-webkit-box', 
                        lineHeight:'1.4', 
                        marginTop:'8px', 
                        overflowY:'hidden',
                        overflowWrap:'break-word',
                        fontSize:'1.45rem',
                    }}>
                    We're honored by the increasing number of projects launched to improve the performance of Bambu Lab printers. Everyone appreciates a thriving ecosystem where diverse individuals and companies collaborate to enhance a product.
                    As a young company that has just completed the first round of our product launches, with
                    </Typography>
                    <footer variant='p' className={cx('card-footer')}>
                        <span className={cx('card-author')}> By Spaghetti Monster</span>
                        <time className={cx('card-date')}>
                            Mar 19, 2024
                        </time>
                    </footer>
                </div>
            </Link>
        </article>
    )
}
export default News ;