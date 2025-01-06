import React, { useState } from 'react';
import { Box, Typography, Container, IconButton, Stack} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './NewsLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NewsLayout({children}) {
    const [overlayContent, setOverlayContent] = useState(null);
  return (
    <div className={cx('container')}>
      {/* Navbar */}
      <Box className={cx('navbar')}>
        <Container>
          <Stack alignItems="center" justifyContent="space-between" flexDirection='row'>
            <div className={cx('navbar-search')}>
              <IconButton color="inherit" onClick={()=>setOverlayContent('search')}>
                <SearchIcon />
              </IconButton>
            </div>
            <div className={cx('navbar-title')}>
              <Typography variant="h5" fontWeight={800} fontSize='2.4rem'>
                Lac Viet Studio News
              </Typography>
            </div>
            <button className={cx('navbar-btn')} onClick={()=>setOverlayContent('subscribe')}>
              Subscribe
            </button>
          </Stack>
        </Container>
      </Box>
      <div className={cx('content')}>
        {children}
      </div>
      <div className={cx('footer-outline')}>
        <Container>
          <div className={cx('footer-header')}>
            <Stack justifyContent='space-between' flexDirection='row'>
              <Typography variant="h4" fontWeight={800} fontSize='2.4rem'>
                Lac Viet Studio News
              </Typography>
              <Typography variant="p" fontWeight={600} fontSize='1.6rem'>
                lacvietstudio.com
              </Typography>
            </Stack>
          </div>
          <div className={cx('footer-content')}>
            <div className={cx('email-subscribe')}>
              <Typography variant="h4" fontWeight={800} fontSize='3.5rem' marginBottom='20px' textAlign={'center'}>
                Subscribe for updates
              </Typography>
              <Typography variant="body1" fontSize='1.5rem' opacity='0.75' textAlign={'center'}>
                Get Lac Viet Studio news and announcements delivered right to your inbox.
              </Typography>
              <Box display='flex' flexDirection='row' alignItems='center' gap={'10px'} marginTop={'20px'}>
                <input placeholder="john@example.com" className={cx('email-subscribe_input')} />
                <button className={cx('email-subscribe_btn')}>Subscribe</button>
              </Box>
            </div>
          </div>
        </Container>
      </div>
      {overlayContent !== null && (
        <div className={cx('overlay')} >
          <div className={cx('overlay-container')}  onClick={()=>setOverlayContent(null)}>
            {overlayContent === 'search' && (
              <Box sx={{bgcolor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                   maxWidth:'51.2rem', width:'100%', display:'flex', alignItems:'center'}} onClick={(e) => e.stopPropagation()}>
                  <SearchIcon  />
                  <input type="text" placeholder="Search posts, tags and authors" className={cx('search-input')} />
              </Box>
            )}
            {overlayContent === 'subscribe' && (
                <Box sx={{bgcolor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        display:'flex', alignItems:'center', padding:'40px', flexDirection:'column'}}
                        onClick={(e) => e.stopPropagation()}>
                        <Typography variant="h4" fontWeight={800} fontSize='3.5rem' marginBottom='20px' textAlign={'center'}>
                        Subscribe for updates
                    </Typography>
                    <Typography variant="body1" fontSize='1.5rem' opacity='0.75' textAlign={'center'}>
                        Get Lac Viet Studio news and announcements delivered right to your inbox.
                    </Typography>
                    <Box display='flex' flexDirection='row' alignItems='center' gap={'10px'} marginTop={'20px'} width= '100%'>
                        <input placeholder="john@example.com" className={cx('email-subscribe_input')} />
                        <button className={cx('email-subscribe_btn')}>Subscribe</button>
                    </Box>
                </Box> 
            )}
              
            
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsLayout;