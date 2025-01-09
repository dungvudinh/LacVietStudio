import { Box, Container, Stack, Button, Typography, Grid2 as Grid, Link, Accordion,AccordionSummary,
    AccordionDetails
 } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FacebookIcon, InstagramIcon } from '../../../assets/icons';

const cx = classNames.bind(styles);

const PRODUCT_ITEMS = [
    { title: '3D Store' },
    { title: 'Service' }
];

const COMPANY_ITEMS = [
    { title: 'About Us' },
    { title: 'News' }
];

const PRIVACY_LINKS = [
    { title: 'Privacy Policy' },
    { title: 'Terms of Use' },
    { title: 'Warranty' },
    { title: 'Cookie Policy' },
    { title: 'Cookie Settings' }
];

const STORE_MENU_ITEMS = {
    Menu: ['Store', 'End-ofYear Sale', 'Printers'],
    Support: ['Order Tracker', 'FAQ', 'Returns & Refunds', 'Privacy Policy'],
    Explore: ['Office Website', 'Authorized Reseller', 'Contact Us', 'About Us']
};

const HomeFooter = ()=>{
    return (
        <Box bgcolor="#111" color="#fff" paddingTop="60px" padding="60px 30px 50px 30px">
                <Container maxWidth='lg' sx={{padding:0}}>
                    <Stack 
                        direction={{ xs: 'column', sm: 'row' }} 
                        spacing={2} 
                        justifyContent="space-between" 
                        paddingBottom={4}
                    >
                        <Typography sx={{
                            width:{xs:'100%', sm:'50%'}, 
                            fontWeight:600, 
                            fontSize:{xs:'1.5rem'}, 
                            textAlign:{xs:'center'}
                        }}>
                            Be the first to receive our latest product updates, newest offerings, and free product trials.
                        </Typography>
                        <Box 
                            paddingLeft={{ xs: 0, sm: 20 }}  
                            width={{ xs: '100%', sm: '50%' }}
                            marginTop={{ xs: 2, sm: 0 }}
                        >
                            <Box width="100%" bgcolor="#fff" height={40} paddingLeft={2} borderRadius={1} display="flex" flexDirection='row' justifyContent='space-between'>
                                <input className={cx('footer-signup_input')} placeholder="Enter Your Email"  />
                                <Button variant="contained" 
                                sx={{
                                    color:'#fff',
                                    borderTopLeftRadius:0,
                                    borderBottomLeftRadius:0,
                                }}>
                                    Sign Up
                                </Button>
                            </Box>  
                            <Typography variant="p" component="p" fontSize="1.1rem" marginTop={1}>
                                By signing up, you agree to Bambu Lab's <span style={{color: '#f77919'}}>Terms of Use</span> and <span style={{color: '#f77919'}}>Privacy Policy</span>
                            </Typography>      
                        </Box>
                    </Stack>
                    <Box pb="10px" borderTop="1px solid #616161" borderBottom="1px solid #616161">
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <Accordion sx={{ 
                                bgcolor: 'transparent', 
                                color: 'rgb(224, 224, 224)',
                                '&::after': {
                                    content: '""',
                                    height: '1px',
                                    backgroundColor: '#616161',
                                    width: '100%',
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    bottom: 0
                                },
                                '&::before': {
                                    content: 'none'
                                },
                                boxShadow: 'none'
                            }}>
                                <AccordionSummary 
                                    expandIcon={<ExpandMore sx={{ color: '#fff' }} />}  
                                    sx={{ padding:'0 !important'}}
                                >
                                    <Typography sx={{fontSize:'1.4rem'}} varient={'h6'}>Product</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {PRODUCT_ITEMS.map((item, index) => (
                                        <Typography key={index} sx={{fontSize:'1.4rem', padding:'5px 0'}}>{item.title}</Typography>
                                    ))}
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ 
                                bgcolor: 'transparent', 
                                color:'rgb(224, 224, 224)',
                                '&::after': {
                                    content: '""',
                                    height: '1px',
                                    backgroundColor: '#616161',
                                    width: '100%',
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    bottom: 0
                                },
                                '&::before': {
                                    content: 'none'
                                },
                                boxShadow: 'none'
                            }}>
                                <AccordionSummary 
                                    expandIcon={<ExpandMore sx={{ color: '#fff' }} />} 
                                    sx={{ padding:'0 !important'}}
                                >
                                    <Typography sx={{fontSize:'1.4rem'}}>Company</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {COMPANY_ITEMS.map((item, index) => (
                                        <Typography key={index} sx={{fontSize:'1.4rem', padding:'5px 0'}}>{item.title}</Typography>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                        <Grid container mb={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            <Grid xs={12} sm={6} md={2}>
                                <Typography varient='h6' sx={{fontSize:'1.4rem', padding:'15px 0', fontWeight:600}}>Product</Typography>
                                {PRODUCT_ITEMS.map((item, index) => (
                                    <Typography key={index} varient='body1' sx={{fontSize:'1.4rem', padding:'5px 0 15px'}}>{item.title}</Typography>
                                ))}
                            </Grid>
                            <Grid xs={12} sm={6} md={2}>
                                <Typography varient='h6' sx={{fontSize:'1.4rem', padding:'15px 0', fontWeight:600}}>Company</Typography>
                                {COMPANY_ITEMS.map((item, index) => (
                                    <Typography key={index} varient='body1' sx={{fontSize:'1.4rem', padding:'5px 0 15px'}}>{item.title}</Typography>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid container position="relative" direction={{xs:'column',md:'row'}}>
                            <Grid xs={12} md={10} className={cx('privacy')}>
                                <Stack flexDirection={{ xs: 'column', sm: 'row' }} gap={1}>
                                    {PRIVACY_LINKS.map((item, index) => (
                                        <div key={index} className={cx('privacy-item')}>
                                            <Link underline='none' color={{xs:'rgb(224, 224, 224)', md:'#9E9E9E'}} >{item.title}</Link>
                                        </div>
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid xs={12} md={2} textAlign={{ xs: 'left', md: 'right' }} mt={{ xs: 2, md: 0 }}>
                                <Link underline="none" href=""  sx={{color:"#9E9E9E"}} mr="20px">
                                    <FacebookIcon width={25} height={25}/>
                                </Link>
                                <Link underline="none" href=""  sx={{color:"#9E9E9E"}}>
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
                        <Stack 
                            direction={{ xs: 'column', sm: 'row' }} 
                            justifyContent="space-between"
                            spacing={{ xs: 3, sm: 2 }}
                        >
                            {Object.entries(STORE_MENU_ITEMS).map(([title, items]) => (
                                <Box key={title}>
                                    <div className={cx('link-title')} style={{color:'#111'}}>{title}</div>
                                    {items.map((item, index) => (
                                        <div key={index} className={cx('link-type')}>{item}</div>
                                    ))}
                                </Box>
                            ))}
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