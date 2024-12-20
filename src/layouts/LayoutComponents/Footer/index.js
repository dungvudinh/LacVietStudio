
import { Box, Container, Stack, Button, Typography, Grid2 as Grid, Link } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return ( 
        <Box bgcolor="#111" color="#fff" paddingTop="60px" padding="60px 30px 50px 30px">
                <Container>
                    <Stack direction="row" spacing={2} justifyContent="space-between" paddingBottom={4}>
                        <Box width="50%" fontWeight={600}>
                            <h1>Be the first to receive our latest product updates, newest offerings, and free product trials.</h1>
                        </Box>
                        <Box paddingLeft={20}  width="50%">
                            <Box width="100%" bgcolor="#fff" height={40} paddingLeft={2} borderRadius={1} display="flex" flexDirection='row' justifyContent='space-between'>
                                <input className={cx('footer-signup_input')} placeholder="Enter Your Email"  />
                                <Button variant="contained" sx={{color:'#fff', borderTopLeftRadius:0, borderBottomLeftRadius:0}}>Sign Up</Button>
                            </Box>  
                            <Typography variant="p" component="p" fontSize="1.1rem" marginTop={1}>
                                By signing up, you agree to Bambu Lab’s <span style={{color: '#f77919'}}>Terms of Use</span> and <span style={{color: '#f77919'}}>Privacy Policy</span>
                            </Typography>      
                        </Box>
                    </Stack>
                    <Box pb="10px" borderTop="1px solid #616161" borderBottom="1px solid #616161">
                        <Grid container mb={2}>
                            <Grid size={2}>
                                <div className={cx('link-title')}>Product</div>
                                <div className={cx('link-type')}>3D Printers</div>
                                <div className={cx('link-type')}>Filament</div>
                                <div className={cx('link-type')}>Accessories</div>
                            </Grid>
                            <Grid size={2} >
                                <div className={cx('link-title')}>Company</div>
                                <div className={cx('link-type')}>About Us</div>
                                <div className={cx('link-type')}>Blog</div>
                                <div className={cx('link-type')}>Contact Us</div>
                            </Grid>
                        </Grid>

                        <Grid container position="relative">
                            <Grid size={10} className={cx('privacy')}>
                                <Stack flexDirection="row">
                                    <div className={cx('privacy-item')}>
                                        <Link underline="hover" sx={{color:"#9E9E9E"}} >Privacy Policy</Link>
                                    </div>
                                    <div className={cx('privacy-item')}>
                                        <Link underline="hover" sx={{color:"#9E9E9E"}} >Terms of Use</Link>
                                    </div>
                                    <div className={cx('privacy-item')}>
                                        <Link underline="hover" sx={{color:"#9E9E9E"}} >Warranty</Link>
                                    </div>
                                    <div className={cx('privacy-item')}>
                                        <Link underline="hover" sx={{color:"#9E9E9E"}} >Cookie Policy</Link>
                                    </div>
                                    <div className={cx('privacy-item')}>
                                        <Link underline="hover" sx={{color:"#9E9E9E"}} >Cookie Settings</Link>
                                    </div>
                                </Stack>
                            </Grid>
                            <Grid size={2} >
                                <Link underline="none" href=""  sx={{color:"#9E9E9E"}} ml="20px">
                                    <Facebook />
                                </Link>
                                <Link underline="none" href=""  sx={{color:"#9E9E9E"}} ml="20px">
                                    <Instagram />
                                </Link>
                            </Grid>
                            {/* <div className={cx('language-content')}>

                            </div> */}
                        </Grid>
                    </Box>
                    <div className={cx('copyright')}>
                        Copyright © 2024 Bambu Lab All Rights Reserved.
                    </div>
                </Container>
            </Box>
     );
}

export default Footer;