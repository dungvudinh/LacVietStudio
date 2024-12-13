import {useState, createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/images/logo.png';
import { Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import {Button, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Box, ListItemButton, 
Drawer, Divider,Accordion, AccordionSummary, AccordionDetails, Avatar, Tooltip, Grid2, 
InputLabel, FormControl, Select, ListItem, List
}  from '@mui/material';
import {ExpandMore, AccountCircle,  Settings, Logout, KeyboardArrowRight} from '@mui/icons-material';
import { deepOrange} from '@mui/material/colors';
import englandCountry from '../../assets/images/england.svg';
import vietnameCountry from '../../assets/images/vietnam.svg';
const cx = classNames.bind(styles);
const LoginConText = createContext();

const menuList = [
    {
        display:'3D Printers', 
        path:'', 
        contentType:"drawer", 
        name:'panel1'
    }, 
    {
        display:'Filament', 
        path:'', 
        contentType:'menu', 
        name:'panel2', 
        content:[
            {
                primary:'Shop All Filament', 
                path:''
            }, 
            {
                primary:'Filament Guild', 
                path:''
            }
        ]
    }, 
    {
        display:'Accessories', 
        path:'', 
        name:'panel3'
    }, 
    {
        display:'Software', 
        path:'', 
        name:'panel4'
    }, 
    {
        display:'Support', 
        path:'', 
        name:'panel5'
        
    }, 
    {
        display:'Company', 
        path:'', 
        contentType:'menu', 
        name:'panel6', 
        content: [
            {
                primary:'About Us',
                path:''
            },
            {
                primary:'Blog', 
                path:''
            }, 
            {
                primary:'Contact', 
                path:''
            }
        ]
    }, 
    {
        display:'Makerworld', 
        path:'', 
        name:'panel7'
    }
]
const listLanguage = [
    {
      name:'English', 
      image: englandCountry, 
      value:'en'
    }, 
    {
      name:'Tiếng Việt', 
      image:vietnameCountry, 
      value:'vi'
    }
  ]
function Navbar() {
    const [isLogin, setLogin] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [menuContent, setMenuContent]  = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [profile, setProfile] = useState({
        username: 'Dungg Vu', 
        email:'anhkho881@gmail.com'
    })
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const [currentLocale, setCurrentLocale] = useState(()=>{
        const currentLocale = localStorage.getItem('locale');
        if(!currentLocale)
            return navigator.language.split('-')[0];
        return localStorage.getItem('locale');
    });
    const toggleMenuMobile = (newOpen) => () => {
        setOpenMenuMobile(newOpen);
    };
    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
      };
    const handleToggleMenuContent = (e, contentType, content)=>{
        if(contentType === 'drawer')
        {
            setOpenDrawer(!openDrawer);
            setAnchorEl(null);
        }
        else if(contentType === 'menu')
        {
            setOpenDrawer(false);
            setMenuContent(content);
            if(anchorEl == null)
                setAnchorEl(e.currentTarget);
            else 
                setAnchorEl(null);
        }
    }
    const handleChangeLanguage= (event)=>{
        setCurrentLocale(event.target.value);
        localStorage.setItem('locale', event.target.value);
    }
    return ( 
        <LoginConText.Provider value={[isLogin, profile]}>
            <div className={cx('navbar')}>
                <Container className={cx('navbar-container')}>
                    <div className={cx('menu-mobile')}>
                        <IconButton onClick={toggleMenuMobile(!openMenuMobile)} size='small' sx={{color:'#fff'}}>
                            <FontAwesomeIcon icon={faBars}/>
                        </IconButton>
                        <MenuListMobile openMenu={openMenuMobile} setOpenMenuMobile={setOpenMenuMobile} />
                    </div>
                    <div className={cx('navbar-left')}>
                        <Link className={cx('navbar-logo')} to="/">
                            <img src={logo} alt="" />
                        </Link>
                        <div className={cx('navbar-menu')}>
                            <ul className={cx('menu-list')}>
                                {menuList.map((menuItem, index)=>(
                                    <li key={index} className={cx('menu-item')} onClick={(e)=>handleToggleMenuContent(e, menuItem.contentType, menuItem.content)}>
                                        {menuItem.display}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('navbar-right')}>
                        <Box sx={{ maxWidth:200 }}>
                            <FormControl fullWidth>
                                <Select sx={{ "& .MuiOutlinedInput-notchedOutline": {border: "none"}, 
                                '& .MuiSvgIcon-root':{color:'white'}, 
                                '& .MuiSelect-select':{display:'flex', alignItems:'center'}, 
                                color:'white'
                                }}
                                size='small' value={currentLocale} onChange={handleChangeLanguage}
                                >
                                {listLanguage.map((language, index)=>(
                                    <MenuItem  key={index} value={language.value} sx={{display:'flex', alignItems:'center'}}>
                                        <ListItemIcon sx={{minWidth:30, display:'flex', alignItems:'center'}}>
                                            <img src={language.image} style={{width:20}}/>
                                        </ListItemIcon>
                                        <ListItemText primary={language.name} />
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <div className={cx('navbar-actions')}>
                            
                            {isLogin 
                            ?
                                <UserButton />
                            :
                                <Button variant="contained"color="orange" sx={{color:'#fff'}}>Log In</Button>
                            }
                        </div>
                    </div>
                </Container>
            </div>
            <DrawerHorizontal open={openDrawer} toggleDrawer={toggleDrawer} />
            <MenuCustom open={open} onCloseMenu={()=>setAnchorEl(null)}  minWidth={200} anchorEl={anchorEl} menuList={menuContent} isMenuWithProfile={false}/>
        </LoginConText.Provider>
     );
}
const settings =[
    {
        primary:'Profile setting', 
        secondary:'', 
        path:'account/account-setting', 
        icon:(fontSize)=><Settings fontSize={fontSize}/>
    }, 
    {
        primary: 'Log out', 
        secondary:'', 
        path:'logout', 
        icon:(fontSize)=> <Logout  fontSize={fontSize}/>, 

    }
] 
function MenuCustom({open, onCloseMenu, minWidth, anchorEl,menuList, isMenuWithProfile})
{
    const [isLogin, profile] = useContext(LoginConText);
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onCloseMenu}
            slotProps={{
                paper:{
                    sx:{minWidth}
                }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {isMenuWithProfile && (
                <MenuItem>
                {/* <ListItemIcon> */}
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30, marginRight:'10px' }}>DV</Avatar>
                {/* </ListItemIcon> */}
                <ListItemText primary={profile.username} secondary={profile.email}/>
            </MenuItem>
            )}
            {isMenuWithProfile && <Divider />}
            {menuList.map((menuItem, index)=>(
                <MenuItem key={index} onClick={onCloseMenu}>
                    <Link to={menuItem.path} className='d-flex flex-row align-items-center text-decoration-none text-black'>
                    {menuItem.icon && (
                         <ListItemIcon>
                            {menuItem.icon('medium')}
                        </ListItemIcon>
                    )}
                        <ListItemText primary={menuItem.primary} secondary={menuItem.secondary} />
                    </Link>
                </MenuItem>
            ))}
        </Menu>
    )
}

MenuCustom.propTypes = {
    open: PropTypes.bool,
    onCloseMenu:PropTypes.func, 
    minWidth:PropTypes.number, 
    menuList: PropTypes.array, 
    isMenuWithProfile:PropTypes.bool
}
function UserButton()
{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Tooltip title="Account settings" >
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}>DV</Avatar>
                </IconButton>
            </Tooltip>
            <MenuCustom open={open} onCloseMenu={handleClose} minWidth={200} anchorEl={anchorEl} menuList={settings} isMenuWithProfile={true}/>
        </>
    )
}

function MenuListMobile({openMenu, setOpenMenuMobile})
{
    const [isLogin, profile] = useContext(LoginConText);
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleNavigateAccountPage = ()=>{
        console.log('toggle');
        setOpenMenuMobile(false);
        navigate('/account');
    }
    const handleToggleMenu = (value)=>()=>{
        setOpenMenuMobile(value)
    }
    return (
        <Drawer open={openMenu} sx={{height:'100%', overflowY:'hidden'}} onClose={handleToggleMenu(!openMenu)} anchor='top'
        transitionDuration={{enter:500, exit:500}}>
            <Box sx={{ width:'100%', position:'relative', height:'100vh', overflowY:'auto', paddingTop:'60px'}} role="presentation">
                {menuList.map((menuItem, index)=>(
                     <Accordion key={index} square={true} disableGutters={true} expanded={expanded === menuItem.name} onChange={handleChange(menuItem.name)}>
                        <AccordionSummary expandIcon={menuItem.content && <ExpandMore /> } aria-controls="panel1-content" id="panel1-header" sx={{fontSize:'1.4rem'}}>
                        {menuItem.display}
                        </AccordionSummary>
                        {menuItem.content && (
                            <AccordionDetails sx={{fontSize:'1.4rem', padding:0}}>
                                <List sx={{paddingLeft:'10px'}}>
                                    {menuItem.content && menuItem.content.map((menuItemChild, ix)=>(
                                        <ListItemButton key={ix}>
                                            <Link to={menuItemChild.path} className='d-flex align-items-center'>
                                                <ListItemText primary={menuItemChild.primary}/>
                                                <IconButton>
                                                    <KeyboardArrowRight />
                                                </IconButton>
                                            </Link>
                                        </ListItemButton>
                                    ))}
                                  
                                </List>
                            </AccordionDetails>
                        )}
                    </Accordion>
                ))}
               
            </Box>
            <Box sx={{position:'absolute', bottom:'0', width:'100%', backgroundColor:'#fff !important'}}>
                <Divider />
                <ListItemButton  color='dark' onClick={handleNavigateAccountPage} sx={{borderTop:'1px solid rgba(0, 0, 0, 0.12)'}}>
                    <ListItemIcon sx={{minWidth:'3rem'}}>
                        {isLogin 
                        ?
                            <Avatar sx={{ bgcolor: deepOrange[500], width: 24, height: 24 }} sizes='small'>DV</Avatar>
                        :
                        <AccountCircle size="small"/>
                        }
                    </ListItemIcon>
                    <ListItemText primary={isLogin ? profile.username : 'Log In'}/>
                </ListItemButton>

            </Box>
            {/* {isLogin && <MenuCustom open={open} onCloseMenu={handleClose} minWidth={200} anchorEl={anchorEl} menuList={settings} isMenuWithProfile={true}/>} */}
        </Drawer>
    )
}

function DrawerHorizontal({open, toggleDrawer})
{
    return (
        <Drawer open={open} onClose={toggleDrawer(false)} anchor='top'>
            <Box  role="presentation" onClick={toggleDrawer(false)} sx={{width:'auto', marginTop:'80px', flexGrow: 1}}>
                <Grid2 container justifyContent="center" >
                    <Grid2 size={10} marginTop="20px" sx={{bgcolor:'white', padding:'20px', borderRadius:'10px'}}>
                        <div className="profile-setting" >
                            3D PRINTER CATEGORIES
                        </div>
                    </Grid2>
                </Grid2>
            </Box>
        </Drawer>
    )
}
export default Navbar;
