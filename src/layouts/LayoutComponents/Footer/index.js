
import { Box, Container, Stack, Button, Typography, Grid2 as Grid, Link, IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FacebookIcon, InstagramIcon } from '../../../assets/icons';

const cx = classNames.bind(styles);




const HomeFooter = ()=>{
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
                            {/* <Grid size={8} marginTop='15px'>
                                <div style={{width:'100%'}}><iframe width="100%" height="300px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=BT%2010%20HUD%20V%C3%A2n%20Canh,%20V%C3%A2n%20Canh,%20Ho%C3%A0i%20%C4%90%E1%BB%A9c,%20H%C3%A0%20N%E1%BB%99i,%20Vietnam+(L%E1%BA%A1c%20Vi%E1%BB%87t%20Studio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
                            </Grid> */}
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
                            <Grid size={2} textAlign='right'>
                                <Link underline="none" href=""  sx={{color:"#9E9E9E"}} ml="20px">
                                    <FacebookIcon width={25} height={25}/>
                                </Link>
                                <Link underline="none" href=""  sx={{color:"#9E9E9E"}} ml="20px">
                                    <InstagramIcon width={25} height={25}/>
                                </Link>
                            </Grid>
                            {/* <div className={cx('language-content')}>

                            </div> */}
                        </Grid>
                    </Box>
                    <div className={cx('copyright')}>
                        Copyright © 2024 Lac Viet Studio All Rights Reserved.
                    </div>
                </Container>
            </Box>
    )
}

const StoreFooter = ()=>{
    return (
        <Box bgcolor="#fff" color="linkColor" paddingTop="60px" padding="60px 30px 50px 30px" border="1px solid #ddd">
                <Container>
                    <Box pb="10px" >
                        <Stack direction="row" justifyContent="space-between">
                            <Box>
                                <div className={cx('link-title')} style={{color:'#111'}}>Menu</div>
                                <div className={cx('link-type')}>Store</div>
                                <div className={cx('link-type')}>End-ofYear Sale</div>
                                <div className={cx('link-type')}>Printers</div>
                            </Box>
                            <Box>
                                <div className={cx('link-title')} style={{color:'#111'}}>Support</div>
                                <div className={cx('link-type')}>Order Tracker</div>
                                <div className={cx('link-type')}>FAQ</div>
                                <div className={cx('link-type')}>Returns & Refunds</div>
                                <div className={cx('link-type')}>Privacy Policy</div>
                            </Box>
                            <Box>
                                <div className={cx('link-title')} style={{color:'#111'}}>Explore</div>
                                <div className={cx('link-type')}>Office Website</div>
                                <div className={cx('link-type')}>Authorized Reseller</div>
                                <div className={cx('link-type')}>Contact Us</div>
                                <div className={cx('link-type')}>About Us</div>
                            </Box>
                            <Box>
                                <div className={cx('link-title')} style={{color:'#111'}}>About Lac Viet Studio</div>
                                <Box maxWidth={240} >
                                    Lac Viet Studio is a consumer tech company focusing on desktop 3D printers. Starting with the X1 series,
                                    Lac Viet Studio builds state-of-the-art 3D printers that break the barriers between the digital and physical worlds,
                                    bringing creativity to a whole new level.
                                </Box>
                                <ul className='d-flex justify-content-start align-items-center mt-2'>
                                    <Link underline="none" href=""  sx={{color:"#9E9E9E"}}>
                                        <FacebookIcon width={25} height={25}/>
                                    </Link>
                                    <Link underline="none" href=""  sx={{color:"#9E9E9E", display:'flex', alignItems:'flex-end'}} ml="20px">
                                        <InstagramIcon width={25} height={25}/>
                                    </Link>
                                </ul>
                            </Box>
                        </Stack>

                        
                    </Box>
                    <div className={cx('copyright', 'text-black')}>
                        Copyright © 2024 Lac Viet Studio All Rights Reserved.
                    </div>
                </Container>
            </Box>
    )
}
export {HomeFooter, StoreFooter};