import { Box, Typography, Container,  Grid2 as Grid, Stack, Divider } from '@mui/material';
import styles from './Service.module.scss';
import classNames from 'classnames/bind';
import offer1 from '../../assets/images/offer1.jpg';
import offer2 from '../../assets/images/offer2.jpg';
import offer3 from '../../assets/images/offer3.jpg';
import introBg from '../../assets/images/introBg.jpg';
import {PercentIcon} from '../../assets/icons';
import { Done } from '@mui/icons-material';

const cx = classNames.bind(styles);

function Service() {
    return (
        <Box paddingBottom={'100px'}>
            <div className={cx('service-banner')}>
                <div className={cx('service-banner_text')}>
                    <Typography variant="h2" fontWeight={700}>
                        Custom 3D Printing 
                        & 
                        Design Solutions
                    </Typography>
                    <Typography variant="h6" >
                        Khám Phá Dịch Vụ In Ấn và Thiết Kế File 3D Đột Phá Tại Lạc Việt Studio - Sáng Tạo Từ Ý Tưởng Đến Hiện Thực!
                    </Typography>
                </div>
            </div>
            
            <div maxWidth="lg" className={cx('service-content')}>
                {/* OFFERING */}
                <Container maxWidth="lg">
                    <Box sx={{marginTop:'50px', textAlign:'center'}}>
                        <Typography variant="h4" fontWeight={700} fontSize={'3.5rem'}>
                            Ưu Đãi Đặc Biệt
                        </Typography>
                        <Typography variant="h6" fontWeight={400} fontSize={'1.8rem'} sx={{marginTop:'10px'}}>
                            Nhận ưu đãi hấp dẫn khi sử dụng dịch vụ in ấn và thiết kế 3D tại Lạc Việt Studio!
                        </Typography>
                        <Box sx={{marginTop:'50px', padding:'0 50px'}}>
                            <Stack direction={'row'} spacing={6}>
                                <div className={cx('offer-item')} style={{backgroundImage: `url(${offer1})`}}>
                                    <div className={cx('offer-item_content')} >
                                        <Typography variant="h4" fontWeight={700} fontSize={'3.5rem'} className={cx('offer-item_number')}>
                                            01.
                                        </Typography>
                                        <div className={cx('offer-item_text')}>
                                            <Typography variant="h6" fontWeight={700} fontSize={'2rem'}>
                                                Mở rộng sáng tạo
                                            </Typography>
                                            <Typography variant="h6" fontWeight={400} fontSize={'1.6rem'} marginTop={'10px'}>
                                            Giảm 20% cho dịch vụ thiết kế 3D lần đầu, giúp bạn bắt đầu các dự án sáng tạo với chi phí hợp lý
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('offer-item')} style={{backgroundImage: `url(${offer2})`}}>
                                    <div className={cx('offer-item_content')} >
                                    <Typography variant="h4" fontWeight={700} fontSize={'3.5rem'} className={cx('offer-item_number')}>
                                            02.
                                        </Typography>
                                        <div className={cx('offer-item_text')}>
                                            <Typography variant="h6" fontWeight={700} fontSize={'2rem'}>
                                                Combo In Ấn & Thiết Kế
                                            </Typography>
                                            <Typography variant="h6" fontWeight={400} fontSize={'1.6rem'} marginTop={'10px'}>
                                            Giảm 10% khi sử dụng đồng thời dịch vụ in ấn và thiết kế 3D, mang lại giải pháp trọn gói hoàn hảo
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('offer-item')} style={{backgroundImage: `url(${offer3})`}}>
                                    <div className={cx('offer-item_content')} >
                                        <Typography variant="h4" fontWeight={700} fontSize={'3.5rem'} className={cx('offer-item_number')}>
                                            03.
                                        </Typography>
                                        <div className={cx('offer-item_text')}>
                                            <Typography variant="h6" fontWeight={700} fontSize={'2rem'}>
                                            Giới thiệu bạn bè
                                            </Typography>
                                            <Typography variant="h6" fontWeight={400} fontSize={'1.6rem'} marginTop={'10px'}>
                                            Tặng voucher giảm 15% cho lần tiếp theo khi giới thiệu bạn bè sử dụng dịch vụ của Lạc Việt Studio
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </Stack>
                        </Box>
                    </Box>
                </Container>
                <Box sx={{ padding: '80px 0', textAlign: 'center' }}>
                    <Container maxWidth="lg">
                        <Stack 
                            direction="row" 
                            spacing={4} 
                            justifyContent="center"
                            alignItems="center"
                            divider={<Divider orientation="vertical" flexItem sx={{ backgroundColor: 'var(--primary-color)', width: '2px' }} />}
                        >
                            <Box sx={{ padding: '20px 40px' }}>
                                <Typography variant="h4" fontWeight={700} fontSize={'4.5rem'} color="var(--primary-color)">
                                    92%
                                    {/* <PercentIcon className='ms-2'/> */}
                                </Typography>
                                <Typography variant="h6" fontWeight={500} fontSize={'1.8rem'} color="var(--secondary-color)">
                                    Khách hàng hài lòng
                                </Typography>
                            </Box>

                            <Box sx={{ padding: '20px 40px' }}>
                                <Typography variant="h4" fontWeight={700} fontSize={'4rem'} color="var(--primary-color)">
                                    25+
                                </Typography>
                                <Typography variant="h6" fontWeight={500} fontSize={'1.8rem'} color="var(--secondary-color)">
                                    Thành viên
                                </Typography>
                            </Box>

                            <Box sx={{ padding: '20px 40px' }}>
                                <Typography variant="h4" fontWeight={700} fontSize={'4rem'} color="var(--primary-color)">
                                    3+
                                </Typography>
                                <Typography variant="h6" fontWeight={500} fontSize={'1.8rem'} color="var(--secondary-color)">
                                    Năm kinh nghiệm
                                </Typography>
                            </Box>
                        </Stack>
                    </Container>
                </Box>
                {/* INTRODUCE STUDIO */}
                <Box>
                    <Container maxWidth="lg">
                        <Stack direction={'row'} spacing={4} justifyContent={'center'} alignItems={'center'}>
                            {/* intro content text */}
                            <Box>
                                <Typography variant="h4" fontWeight={700} fontSize={'4rem'} color='primary'> 
                                    Lạc Việt Studio 
                                </Typography>
                                <Typography variant="h6" fontWeight={500} fontSize={'1.8rem'} marginTop={'20px'}>
                                    Chào mừng bạn đến với Lạc Việt Studio – chuyên cung cấp dịch vụ in ấn và thiết kế chuyên nghiệp. Với đội ngũ sáng tạo và công nghệ hiện đại, chúng tôi cam kết mang đến sản phẩm chất lượng cao, đáp ứng mọi nhu cầu từ in ấn đến thiết kế 3D. Hãy để chúng tôi giúp bạn hiện thực hóa ý tưởng và tạo dấu ấn cho thương hiệu!
                                </Typography>
                            </Box>
                            {/* intro content img */}
                            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                <div className={cx('intro-content_img1')}>
                                    <img src={introBg} alt="" />
                                </div>
                                <div className={cx('intro-content_img2')}>
                                    <img src={introBg} alt="" />
                                </div>
                            </Box>
                        </Stack>
                    </Container>
                </Box>
                <Box sx={{marginTop:'80px', backgroundColor:'var(--primary-color-bg)'}}>
                    <Container maxWidth="lg" sx={{padding:'80px 0', textAlign:'center'}}>
                        <Typography variant="h4" fontWeight={800} fontSize={'4rem'} >
                            Dịch vụ in ấn và thiết kế chuyên nghiệp
                        </Typography>
                        {/* service 1 */}
                        <Grid  container spacing={4} marginTop={'50px'} alignItems={'center'} direction={'row'}>
                            <Grid size={6}>
                                <div className={cx('service-item_img')}>
                                    <img src={introBg} alt="" />
                                </div>
                            </Grid>
                            <Grid size={6}>
                                <div className={cx('service-item_text')}>
                                    <Typography variant="h6" fontWeight={800} fontSize={'3rem'} marginBottom={'20px'}>
                                        In Mô Hình 3D
                                    </Typography>
                                    <Typography variant="body" fontWeight={400} fontSize={'1.8rem'}>
                                        Dịch vụ in mô hình 3D tại Lạc Việt Studio mang đến sản phẩm chi tiết, sắc nét, giúp hiện thực hóa ý tưởng sáng tạo với công nghệ in tiên tiến.
                                    </Typography>
                                    <Box  marginTop={'20px'}>
                                        <div className={cx('service-item_procedure')}>
                                            <span className={cx('service-item_procedure_icon')}>
                                                <Done fontSize="small"/>
                                            </span>
                                            <Typography variant="body" fontWeight={400} fontSize={'1.8rem'}>
                                                Gửi file 3D hoặc thiết kế sẵn cho chúng tôi
                                            </Typography>
                                        </div>
                                        <div className={cx('service-item_procedure')}>
                                            <span className={cx('service-item_procedure_icon')}>
                                                <Done fontSize="small"/>
                                            </span>
                                            <Typography variant="body" fontWeight={400} fontSize={'1.8rem'}>
                                                Chọn loại vật liệu và kích thước mô hình
                                            </Typography>
                                        </div>
                                        <div className={cx('service-item_procedure')}>
                                            <span className={cx('service-item_procedure_icon')}>
                                                <Done fontSize="small"/>
                                            </span>
                                            <Typography variant="body" fontWeight={400} fontSize={'1.8rem'}>
                                                 In và vệ sinh sản phẩm trước khi gửi đến khách hàng
                                            </Typography>
                                        </div>
                                    </Box>
                                </div>
                            </Grid>
                        </Grid>
                        {/* service 2 */}
                        <Grid  container spacing={4} marginTop={'100px'} alignItems={'center'} direction={'row'}>
                            <Grid size={6}>
                                <div className={cx('service-item_text')}>
                                    <Typography variant="h6" fontWeight={800} fontSize={'3rem'} marginBottom={'20px'}>
                                        Thiết kế mô hình 3D
                                    </Typography>
                                    <Typography variant="body" fontWeight={400} fontSize={'1.8rem'}>
                                        Dịch vụ thiết kế file 3D của Lạc Việt Studio giúp tạo ra các bản vẽ 3D chính xác, tối ưu cho in ấn, sản xuất và mô phỏng.
                                    </Typography>
                                    <Box  marginTop={'20px'}>
                                        <div className={cx('service-item_procedure')}>
                                            <span className={cx('service-item_procedure_icon')}>
                                                <Done fontSize="small"/>
                                            </span>
                                            <Typography variant="body" fontWeight={400} fontSize={'1.8rem'}>
                                                Tư vấn và thiết kế file 3D theo yêu cầu của khách hàng
                                            </Typography>
                                        </div>
                                        <div className={cx('service-item_procedure')}>
                                            <span className={cx('service-item_procedure_icon')}>
                                                <Done fontSize="small"/>
                                            </span>
                                            <Typography variant="body" fontWeight={400} fontSize={'1.8rem'}>
                                                Thiết kế sản phẩm
                                            </Typography>
                                        </div>
                                        <div className={cx('service-item_procedure')}>
                                            <span className={cx('service-item_procedure_icon')}>
                                                <Done fontSize="small"/>
                                            </span>
                                            <Typography variant="body" fontWeight={400} fontSize={'1.8rem'}>
                                                Bàn giao cho khách hàng
                                            </Typography>
                                        </div>
                                        <div className={cx('service-item_procedure')}>
                                            <span className={cx('service-item_procedure_icon')}>
                                                <Done fontSize="small"/>
                                            </span>
                                            <Typography variant="body" fontWeight={400} fontSize={'1.8rem'}>
                                                Chỉnh sửa bổ sung (nếu cần)
                                            </Typography>
                                        </div>
                                    </Box>
                                </div>
                            </Grid>
                            <Grid size={6} sx={{display:'flex', justifyContent:'flex-end'}}>
                                <div className={cx('service-item_img')}>
                                    <img src={introBg} alt="" />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                {/* call to action */}
                <Container maxWidth='lg' sx={{marginTop:'150px', position:'relative'}}>
                    <Box className={cx('contact-text')} >
                        <Typography variant='h6' fontSize={'3.5rem'} fontWeight={600} marginBottom={'20px'}>
                            Liên hệ với chúng tôi
                        </Typography>
                        <Typography varient="body1" fontSize={'1.8rem'}>
                            Chúng tôi luôn tận tâm lắng nghe và đáp ứng mọi nhu cầu của khách hàng
                        </Typography>
                        <button className={cx('contact-text_action')}>
                            CONTACT TO US
                        </button>
                    </Box>
                    <Box className={cx('contact_bg')}>
                    </Box>
                </Container>
            </div>
        </Box>
    );
}

export default Service;
