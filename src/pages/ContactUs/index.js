import styles from './ContactUs.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import {Typography,Box, Grid2 as Grid, Link, Stack } from '@mui/material';
import banner from '../../assets/images/banner.jpg'
import {FeedbackIcon, LocalPhone, MediaIcon} from '../../assets/icons/index';
import { Email, LocationOn } from '@mui/icons-material';
const cx = classNames.bind(styles);


function ContactUs() {
    return ( 
        <div className={cx('contact-us')}>
            <div className={cx('banner')}>
                <picture>
                    <source srcSet={banner}/>
                    <img src={banner}/>
                </picture>
                <div className={cx('text-container')}>
                    <div className={cx('header-text')}>
                        <Typography variant='h2' fontWeight='700' fontSize='4.5rem'>
                            Contact Us
                        </Typography>
                        <Typography variant='h4' marginTop='24px' fontSize='2.4rem'>
                            We'd love to hear from you. Here's how you can reach us.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={cx('content')}>
                <div className="container">
                    <Box textAlign='center'>
                        <Typography variant='h2' fontWeight='700' fontSize='3.5rem'>
                            {/* Contacts */}
                            Liên hệ
                        </Typography>
                        <Grid container spacing={4} marginTop='24px'>
                            <Grid size={4}>
                                <Box sx={{backgroundColor:'rgb(250, 250, 250)', padding:'32px 50px', height:'100%'}}>
                                    <LocalPhone width={60} height={60}/>
                                    <Typography variant='h3' fontWeight={600} fontSize='2.4rem' marginTop={2}>
                                        {/* Contact to sales */}
                                        Liên hệ nhân viên bán hàng
                                    </Typography>
                                    <Typography variant='body1' fontSize='1.6rem' padding='30px 0' >
                                        {/* Interested in our products and services? Just pick up the phone to chat with a member of our sales team. */}
                                        Quan tâm đến sản phẩm và dịch vụ của chúng tôi? Hãy gọi điện ngay để trò chuyện với thành viên trong đội ngũ bán hàng của chúng tôi
                                    </Typography>
                                    <Link underline='always' fontSize='1.6rem' fontWeight={600} >
                                        +84 123 456 789
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid size={4}>
                                <Box sx={{backgroundColor:'rgb(250, 250, 250)', padding:'32px 50px', height:'100%', position:'relative'}}>
                                    <MediaIcon />
                                    <Typography variant='h3' fontWeight={600} fontSize='2.4rem' marginTop={2}>
                                        KOLs & Truyền thông
                                    </Typography>
                                    <Typography variant='body1' fontSize='1.6rem' padding='30px 0' >
                                        Liên hệ với chúng tôi để hợp tác, tạo sự tin tưởng và tiếp cận khách hàng một cách chính xác và nhanh chóng.
                                    </Typography>
                                    <Link underline='none' fontSize='1.6rem' fontWeight={600} sx={{ position:'absolute', bottom:'32px', left:'50%', transform:'translateX(-50%)'}}>
                                        marketing@lacvietstudio.com
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid size={4}>
                                <Box sx={{backgroundColor:'rgb(250, 250, 250)', padding:'32px 50px', height:'100%'}}>
                                    <FeedbackIcon />
                                    <Typography variant='h3' fontWeight={600} fontSize='2.4rem' marginTop={2}>
                                        {/* Feedback and Suggestion */}
                                        Phản hồi & Đề xuất
                                    </Typography>
                                    <Typography variant='body1' fontSize='1.6rem' padding='30px 0' >
                                        {/* This email is not for order, product, or technical inquiries. Please choose the correct category above to ensure your request is directed to the right team for a prompt response. Thank you for your understanding. */}
                                        Email này không dành cho việc bán sản phẩm hay dịch vụ. Vui lòng chọn đúng mục để yêu cầu được chuyển tới đội ngũ phù hợp.
                                    </Typography>
                                    <Link underline='none' fontSize='1.6rem' fontWeight={600} >
                                        contact@lacvietstudio.com
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography variant='h2' fontWeight='700' fontSize='3.5rem' marginTop='60px'>
                            {/* Connect with our office */}
                            Kết nối với văn phòng của chúng tôi
                        </Typography>
                        <Box sx={{marginTop:'50px', border:'1px solid var(--border-color)'}}>
                            <Grid container>
                                <Grid size={8}>
                                    <div style={{width:'100%'}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BT%2010%20HUD%20V%C3%A2n%20Canh,%20V%C3%A2n%20Canh,%20Ho%C3%A0i%20%C4%90%E1%BB%A9c,%20H%C3%A0%20N%E1%BB%99i,%20Vi%E1%BB%87t%20Nam+(L%E1%BA%A1c%20Vi%E1%BB%87t%20Studio)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
                                </Grid>
                                <Grid size={4}>
                                    <Box padding='40px 20px'>
                                        <Typography variant='h3' fontWeight='700' fontSize='2.6rem'  marginBottom='20px'>
                                            Lac Viet Studio
                                        </Typography>
                                        <Stack direction='row' spacing={2} alignItems='center' marginTop='50px'>
                                            <LocationOn sx={{marginRight:'10px'}} fontSize='large'/>
                                            <Typography variant='body1' fontSize='1.7rem' textAlign={'left'}>
                                                Số 12 - Lô BT 10, HUD Vân Canh, <br/>
                                                Hoài Đức, Hà Nội, Việt Nam
                                            </Typography>
                                        </Stack>
                                        <Stack direction='row' spacing={2} alignItems='center' marginTop='30px'>
                                            <LocalPhone width={30} height={30}/>
                                            <Typography variant='body1' fontSize='1.7rem' textAlign={'left'}>
                                                +84 123 456 789
                                            </Typography>
                                        </Stack>
                                        <Stack direction='row' spacing={2} alignItems='center' marginTop='30px'>
                                            <Email sx={{marginRight:'10px'}} fontSize='large'/>
                                            <Typography variant='body1' fontSize='1.7rem' textAlign={'left'}>
                                                contact@lacvietstudio.com
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
     );
}


export default ContactUs;