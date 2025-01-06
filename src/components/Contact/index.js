import React, { useState } from 'react';
import { Box, IconButton, ListItemIcon, ListItemText, Menu, Paper, Typography, MenuItem, Divider,Avatar } from "@mui/material";
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { Forum, PersonAdd, Settings, Logout } from '@mui/icons-material';
import { EmailIcon, FacebookIcon, PhoneIcon, PhoneIconV2, ZaloIcon, MessageIcon } from '../../assets/icons';

const cx = classNames.bind(styles);
function Contact() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <Box className={cx('contact-box')} sx={{position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000}}>
           <button className={cx('contact-button')} onClick={handleClick}>
            <Box className={cx('contact-container')}>
              <MessageIcon width={'100%'} height={'100%'} />  
            </Box>
           </button>
           <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    bottom: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
          >          
            <MenuItem onClick={handleClose}>
              <ZaloIcon width={40} height={40} className="me-2"/>
              Zalo
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FacebookIcon width={40} height={40} className="me-2"/> 
              Facebook
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <EmailIcon width={30} height={30} className="me-3 ms-2"/> 
              Email
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <PhoneIconV2 width={30} height={30} className="me-3 ms-2"/> 
              Phone
            </MenuItem>
          </Menu>
        </Box>    );
}

export default Contact;