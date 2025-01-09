import {useState} from 'react';
import styles from './LogIn.module.scss';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, TextField, Box, 
    InputAdornment, Checkbox
} from '@mui/material';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { FacebookIcon, GoogleIcon } from '../../assets/icons';
const cx = classNames.bind(styles);
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
function LogIn() {

    const [account,setAccount] = useState({
        email:'',
        password:''
    })
    const [validateAccount, setValidateAccount]= useState({
        isValidateEmail:false, 
        isValidatePassword:false
    })
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    return ( 
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                fullWidth={false}
                open={true}
                maxWidth="sm"
                sx={{ 
                    borderRadius: '20px', 
                    color: 'black',
                    '& .MuiDialog-paper': {  // Add this to set specific width
                        width: '500px'
                    }
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontSize:'2rem', textAlign:'center', fontWeight:'600' }} id="customized-dialog-title">
                    Lac Viet Studio Account
                </DialogTitle>
                <DialogContent dividers sx={{display:'flex', justifyContent:'center'}}>
                    <Box sx={{ width: 300, margin: '30px auto' }}>
                        <Typography variant="h4" gutterBottom sx={{fontWeight: 500, textAlign:'center'}}>
                            Log In
                        </Typography>
                        <Box component="form" sx={{width: '100%'}}>
                            <TextField  
                                margin="normal"
                                required
                                fullWidth
                                size="small"
                                variant="standard"
                                error={validateAccount.isValidateEmail}
                                helperText={validateAccount.isValidateEmail  ? 'Email is required' : ''}
                                onChange={(e) => setAccount({...account.password, email:e.target.value})}
                                onBlur={(e) => setValidateAccount({...validateAccount, isValidateEmail:true})}
                                placeholder='Email Address*'
                                sx={{'& input':{fontSize:'1.6rem'}}}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                size="small"
                                variant="standard"
                                error={validateAccount.isValidatePassword}
                                helperText={validateAccount.isValidatePassword ? 'Password is required' : ''}
                                onChange={(e) => setAccount({...account.email,password:e.target.value})}
                                onBlur={(e) => setValidateAccount({...validateAccount, isValidatePassword:true})}
                                placeholder='Password*'
                                type={showPassword ? 'text' :'password'}
                                sx={{'& input':{fontSize:'1.6rem'}}}
                                slotProps={{
                                    input:{
                                        endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}   
                                            edge="end"
                                            sx={{marginRight: '2px'}}
                                            >
                                                {showPassword ? <VisibilityOutlined fontSize='small'  sx={{width:15, height:15, color:'#111'}}/> 
                                                : <VisibilityOffOutlined fontSize='small' sx={{width:15, height:15, color:'#111'}}/>}
                                            </IconButton>
                                      </InputAdornment>
                                    }
                                  }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, color: '#fff', textTransform: 'none', fontSize: '1.4rem', fontWeight:600 }}
                                disabled
                            >
                                Log In
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1, marginTop:0 }}>
                            <Typography sx={{ fontSize: '1.4rem', color: '#f77919', cursor: 'pointer' }}>
                                Create Your Account
                            </Typography>
                            <Typography sx={{ fontSize: '1.4rem', color: '#f77919', cursor: 'pointer' }}>
                                Forgot?
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <Checkbox size="small" />
                            <Typography sx={{ fontSize: '1.1rem' }}>
                                I agree to <span style={{color: '#f77919'}}>Terms of Use</span> and <span style={{color: '#f77919'}}>Privacy Policy</span>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}>
                            <Typography sx={{ fontSize: '1.4rem', color: 'rgb(137, 137, 137)', mb: 1 }} className={cx('login-other_text')}>

                                Login with other accounts

                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, mt:2 }}>
                                <IconButton sx={{ p: 1 }} size='small'>
                                    <GoogleIcon width={25} height={25}/>
                                </IconButton>
                                <IconButton sx={{ p: 1 }} size="small">
                                    <FacebookIcon width={25} height={25}/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
            </BootstrapDialog>
     );
}
LogIn.propTypes = {
    openLoginDialog: PropTypes.bool.isRequired,
    setOpenLoginDialog: PropTypes.func.isRequired,
}

export default LogIn;