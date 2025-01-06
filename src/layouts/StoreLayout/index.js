import styles from './StoreLayout.module.scss';
import classNames from 'classnames/bind';
import Navbar from '../LayoutComponents/Navbar';
import {StoreFooter} from '../LayoutComponents/Footer';
import emailSubBg from '../../assets/images/emailSubBg.png';
import { Typography, TextField, Button, Box } from '@mui/material';

const cx = classNames.bind(styles);
function StoreLayout({children}) {
    return ( 
        <div className={cx('container')}>
            <Navbar belongTo={'store'}/>
            <div className={cx('content')}>
                {children}
                <div className={cx('email-subscription')} style={{backgroundImage:`url(${emailSubBg})`}}>
                    <div className={cx('content')}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center',
                            color: '#111',
                            textAlign: 'center'
                        }}>
                            <Typography variant="h4" sx={{ mb: 2, fontWeight: '600', fontSize:'4rem' }}>
                                Stay Tuned!
                            </Typography>
                            <Typography variant="subtitle1" sx={{ mb: 4, fontWeight: '600', fontSize:'1.7rem'}}>
                                Get the latest notification on the Year-end sale
                            </Typography>
                            <Box sx={{ 
                                display: 'flex', 
                                gap: 1,
                                width:'100%', 
                                mb: 2
                            }}>
                                <TextField
                                    fullWidth
                                    placeholder="Please enter your email address"
                                    sx={{
                                        backgroundColor: 'white',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#ddd',
                                            },
                                            '&:hover fieldset': {
                                                border: '1px solid #ddd',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: '1px solid #ddd',
                                            }
                                        },
                                    }}
                                />
                                <Button 
                                    variant="contained" 
                                    sx={{ 
                                        backgroundColor: '#111',
                                        '&:hover': {
                                            backgroundColor: '#333',
                                        },
                                        color:'#fff',
                                        padding:'5px 30px',
                                        fontWeight:'600'
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Box>
                            <Typography variant="caption" fontSize="1.2rem" fontWeight={600}>
                                By submitting this form, you agree to Lac Viet Studio's <span className='text-decoration-underline'>Privacy Policy</span> and <span className='text-decoration-underline'>Terms of use</span>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
            <StoreFooter />
        </div>
     );
}

export default StoreLayout;