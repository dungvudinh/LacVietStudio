import {useState} from 'react';
import { ArrowForwardIos, HelpOutline, Close, VisibilityOff, Visibility, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Box, Divider, Grid2, List, ListItem, Switch, Typography,DialogContent, Button, DialogActions, 
Dialog, DialogTitle, IconButton, OutlinedInput, InputLabel, FormControl, InputAdornment, TextField, 
MenuItem, Select
} from "@mui/material";
import classNames from "classnames/bind";
import { styled } from '@mui/material/styles';
import styles from './AccountSetting.module.scss';
import PasswordHint from "../../components/PasswordHint";
const cx = classNames.bind(styles);

function AccountSetting() {
    const [openVerifyPass, setOpenVerifyPass] = useState(false);
    const [isCorrectPass, setIsCorrectPass] = useState(false);

   
 
    return ( 
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid2 container justifyContent="center" >
                    <Grid2 size={7} marginTop="20px" sx={{bgcolor:'white', borderRadius:'4px'}}>
                        <div className="profile-setting">
                            <p className={cx('profile-setting_title')}>
                                Account Security    
                            </p>
                            <Divider /> 
                            <div className={cx('profile-setting_content')} style={{padding:'0 24px'}}>
                                <List  sx={{ width: '100%', bgcolor: 'background.paper', padding:0}}>
                                    <ListItem secondaryAction={<ArrowForwardIos sx={{fontSize:'17px'}}/>} sx={{padding:'22px 0'}}>
                                        <p className={cx('setting-item_title', 'm-0')}>Change Password</p>
                                        <PasswordHint numCharacter={5}/>
                                    </ListItem>
                                    <Divider />
                                    <ListItem sx={{padding:'22px 0'}} secondaryAction={
                                        <Switch edge="end" onChange={()=>setOpenVerifyPass(true)} checked={isCorrectPass} size='small'/>}
                                    >
                                        <p className={cx('setting-item_title', 'm-0')}>
                                            2-Step Verifcation 
                                            <HelpOutline  sx={{marginLeft:'5px', color:'iconFillColor', fontSize:'15px'}}/>
                                        </p>
                                        <p className={cx('setting-item_content')}>Turned Off</p>
                                    </ListItem>
                                    <Divider />
                                    <ListItem secondaryAction={<ArrowForwardIos sx={{fontSize:'17px'}}/>} sx={{padding:'22px 0'}}>
                                        <p className={cx('setting-item_title', 'm-0')}>Delete Account</p>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Grid2>
                </Grid2>
            </Box>
            <VerifyPasswordDialog open={openVerifyPass} onClose={()=>setOpenVerifyPass(false)} setIsCorrectPass={setIsCorrectPass}/>
        </>
        
     );
}

const DialogCustom = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#f77919',
        borderWidth:'1px'
      },
    },
  })
function VerifyPasswordDialog({open, onClose, setIsCorrectPass})
{
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    const handleAuthenPassword = ()=>{
      setIsCorrectPass(old=>!old);
      onClose();
    }
    return (
        <DialogCustom
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={false}
        maxWidth="xs"
        sx={{ 
          borderRadius: '20px', 
          color: 'black',
          '& .MuiDialog-paper': {  // Add this to set specific width
              width: '400px'
          }
      }}
      >
        <DialogTitle sx={{ m: 0, p: 2, fontWeight:'700', fontSize:'1.3rem' }} id="customized-dialog-title">
          Verify Your Password
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <Close />
        </IconButton>
        <DialogContent dividers >
          <Typography gutterBottom  sx={{fontSize:'1.1rem'}}>
            To protect your account security, please re-enter your password before continuing.
          </Typography>
          <CssTextField  id="outlined-size-small" size="small" type={showPassword ? 'text' :'password'} fullWidth={true}
          sx={{marginTop:'10px', '&.Mui-focused fieldset':{borderColor:'#f77919'}}} 
          slotProps={{
            input:{
                style: {
                  fontSize: '1.1rem'
                },
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
                    >
                        {showPassword ? <VisibilityOutlined fontSize='small'  sx={{width:15, height:15, color:'#111'}}/> 
                        : <VisibilityOffOutlined fontSize='small' sx={{width:15, height:15, color:'#111'}}/>}
                    </IconButton>
              </InputAdornment>
            }
          }}
          
        />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose} variant='outlined' sx={{ fontSize: '1.1rem', textTransform: 'none' }} color='secondary'>
            Cancel
          </Button>
          <Button autoFocus onClick={handleAuthenPassword} variant='contained' sx={{ fontSize: '1.1rem', textTransform: 'none', color: '#fff' }} >
            Go On
          </Button>
        </DialogActions>
      </DialogCustom>
    )
}
export default AccountSetting;