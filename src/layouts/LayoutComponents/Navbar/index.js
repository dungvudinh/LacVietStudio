import {useState, createContext, useContext, useRef, useEffect, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../assets/images/logo.png';
import { Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import {Button, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Box, ListItemButton, 
Drawer, Divider,Accordion, AccordionSummary, AccordionDetails, Avatar, Tooltip, Grid2, 
 FormControl, Select, List,Typography, Badge, Stack
}  from '@mui/material';
import {ExpandMore, AccountCircle,  Settings, Logout, KeyboardArrowRight, ShoppingCart, PersonOutlineOutlined, AccountCircleOutlined} from '@mui/icons-material';
import { deepOrange} from '@mui/material/colors';
import englandCountry from '../../../assets/images/england.svg';
import vietnameCountry from '../../../assets/images/vietnam.svg';
import Login from "../../../components/Login";
import Cart from '../../../components/Cart';
import { FireIcon, UserIcon } from '../../../assets/icons';

const cx = classNames.bind(styles);
const LoginConText = createContext();

const menuList = [
    {
        display:'3D Store', 
        path:'', 
        contentType:"drawer", 
        belongTo: ['home', 'store', 'product', 'profile-setting'],
    }, 
    {
        display:'Dịch Vụ', 
        path:'/service', 
        contentType:'link', 
        belongTo:['home', 'store', 'product', 'profile-setting'], 
        // content:[
        //     {
        //         primary:'In mô hình 3D', 
        //         path:''
        //     }, 
        //     {
        //         primary:'Thiết kế file 3D', 
        //         path:''
        //     }
        // ]
    }, 
    {
        display:'Mô Hình Sa Bàn', 
        path:'', 
        contentType:'link',
        belongTo:['home', 'profile-setting']
    }, 
    {
        display:'Tin Tức',
        path:'/news',
        contentType:'link',
        belongTo:['home','news', 'profile-setting']
    },
    {
        display:'Sale Cuối Năm', 
        path:'/sale', 
        contentType:'link', 
        belongTo:['store', 'product'], 
        icon:({width, height, className})=><FireIcon  width={width} height={height} className={className}/>
    }, 
    // {
    //     display:'About Us', 
    //     path:'', 
    //     contentType:'link', 
    //     belongTo:['home', 'profile-setting'],
    // }, 
    {
        display:'Liên hệ', 
        path:'/contact-us', 
        contentType:'link',
        belongTo:['home', 'profile-setting']
    }, 
   
    
    
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
function Navbar({belongTo}) {
    const navigate = useNavigate();
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
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const navbarRef = useRef();
    const [openCart, setOpenCart] = useState(false);
    const [navbarColor, setNavbarColor] = useState('');
    useLayoutEffect(()=>{
        if(belongTo === 'home') setNavbarColor('');
        else if(belongTo === 'store') setNavbarColor('white');
        else if(belongTo === 'profile-setting') setNavbarColor('black');
    }, [belongTo]);
    useEffect(()=>
    {
        const shrinkHeader= ()=>
        {
            if(belongTo === 'home'){
                if(document.body.scrollTop> 100 ||document.documentElement.scrollTop>100) navbarRef.current.style.backgroundColor = "#111";
                else navbarRef.current.style.backgroundColor = "transparent";
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return ()=>window.removeEventListener('scroll', shrinkHeader);
    })
    const toggleMenuMobile = (newOpen) => () => {
        setOpenMenuMobile(newOpen);
    };
    const toggleDrawer = (newOpen) => () => {
        if(navbarColor === ''){
            if(openDrawer){
                Object.assign(navbarRef.current.style, {
                    backgroundColor: "transparent"
                  });
            }
            else{
                Object.assign(navbarRef.current.style, {
                    backgroundColor: "#111"
                  });
            }
        }
        setOpenDrawer(newOpen);
      };
    
    const handleToggleMenuContent = (e, contentType, content)=>{
        if(contentType === 'drawer')
        {
            if(navbarColor === ''){
                if(openDrawer){
                    Object.assign(navbarRef.current.style, {
                        backgroundColor: "transparent"
                      });
                }
                else{
                    Object.assign(navbarRef.current.style, {
                        backgroundColor: "#111"
                      });
                }
            }
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
                <div className={cx('navbar', `${navbarColor}`)} ref={navbarRef}>
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
                                    {menuList
                                        .filter(menuItem => menuItem.belongTo.includes(belongTo))
                                        .map((menuItem, index) => (
                                            <li key={index} className={cx('menu-item')} onClick={(e)=>handleToggleMenuContent(e, menuItem.contentType, menuItem.content)}>
                                                {menuItem.contentType === 'link'
                                                ?
                                                    <Link to={menuItem.path} className={`d-flex align-items-center ${(navbarColor === '' || navbarColor === 'black')  ? 'text-white' : 'text-black'}`}>
                                                        {menuItem.icon && <menuItem.icon width={20} height={20} className='me-2'/>}
                                                        {menuItem.display}
                                                    </Link>
                                                :
                                                    menuItem.display
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={cx('navbar-right')}>
                            <Box sx={{ maxWidth:200 }}>
                                <FormControl fullWidth>
                                    <Select sx={{ "& .MuiOutlinedInput-notchedOutline": {border: "none"}, 
                                    '& .MuiSvgIcon-root':{color:(navbarColor === '' || navbarColor === 'black')  ? '#fff' : '#111'}, 
                                    '& .MuiSelect-select':{display:'flex', alignItems:'center'}, 
                                    '& .MuiTypography-root':{color:(navbarColor === '' || navbarColor === 'black')  ? '#fff' : '#111'}, 
                                    color:(navbarColor === '' || navbarColor === 'black')  ? '#fff' : '#111', 
                                    }}
                                    
                                    size='small' value={currentLocale} onChange={handleChangeLanguage}
                                    onClick={()=>console.log('clicked')}>
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
                                {(belongTo === 'home' || belongTo === 'profile-setting') 
                                ?
                                    <Button variant="contained" color="orange" 
                                        sx={{ fontSize: '1.4rem', textTransform: 'none', color: '#fff', margin:'0 2rem' }} 
                                        size='small' onClick={()=>navigate('/store')}>
                                            Store
                                    </Button>
                                :
                                    <IconButton  
                                        color={(navbarColor === '' || navbarColor === 'black')  ? '#fff' : '#111'} 
                                        sx={{margin:'0 2rem'}}
                                        onClick={() => setOpenCart(true)}
                                    >
                                        <Badge badgeContent={4} color="primary" sx={{'& .MuiBadge-badge':{color:(navbarColor === '' || navbarColor === 'black')  ? '#fff' : '#111'}}}>
                                            <ShoppingCart sx={{color:(navbarColor === '' || navbarColor === 'black')  ? '#fff' : '#111'}}/>
                                        </Badge>
                                    </IconButton>
                                }


                                {isLogin 
                                ?
                                    <UserButton navbarColor={navbarColor}/>
                                :
                                    <Typography onClick={()=>setOpenLoginDialog(true)} fontWeight={600} sx={{cursor:'pointer',color:(navbarColor === '' || navbarColor === 'black')  ? '#fff' : '#111'}}>
                                        Log In
                                    </Typography>
                                    // <UserIcon width={20} height={20} color={belongTo === 'white' ? '#111' : '#fff'}/>
                                }
                            </div>
                        </div>
                    </Container>
                </div>
                <DrawerHorizontal open={openDrawer} toggleDrawer={toggleDrawer} />
                <MenuCustom open={open} onCloseMenu={()=>setAnchorEl(null)}  minWidth={200} anchorEl={anchorEl} menuList={menuContent} isMenuWithProfile={false}/>
                <Login openLoginDialog={openLoginDialog} setOpenLoginDialog={setOpenLoginDialog}/>
                <Cart open={openCart} onClose={() => setOpenCart(false)} />
            </LoginConText.Provider>
     );
}
const settings =[
    {
        primary:'Profile setting', 
        secondary:'', 
        path:'/account/setting', 
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
function UserButton({navbarColor})
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
                    size="large"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    {/* <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}>DV</Avatar> */}
                    {/* <AccountCircle  sx={{color:belongTo === 'white ' ? '#111' : '#fff'}} fontSize='large'/> */}
                    
                    <UserIcon width={22} height={22} color={(navbarColor === '' || navbarColor === 'black')  ? '#fff' : '#111'}/>
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
        <Drawer open={open} onClose={toggleDrawer(false)} anchor='top' aria-hidden="false"> 
            <Box  role="presentation"  sx={{width:'auto', marginTop:'80px', flexGrow: 1}}>
                <div className="container">
                    <Box sx={{padding:'20px 0'}}>
                        <Box>
                            <Typography sx={{paddingBottom:'20px',fontWeight:'600', fontSize:'1.6rem'}} varient='h6'>Đồ chơi trẻ em</Typography>
                            <Divider sx={{borderColor:'var(--link-color)'}}/>
                            <Stack padding="20px 0" direction='row' flexWrap={'wrap'} justifyContent={'space-between'}>
                                <Link to={'/'} className={cx('link-item')}>
                                    <div className={cx('link-item_image')}>
                                        <img src="https://cdn1.bambulab.com/common/navbar-x1.png"/>
                                    </div>
                                    <div className={cx('link-item_content')}>
                                        <Typography fontWeight={600} variant='h6' fontSize={'1.5rem'}>
                                            Bambu Lab X1 Series
                                        </Typography>
                                        <Typography variant='body1' fontSize={'1.4rem'}>
                                            State-of-the-art Core XY 3D printer
                                        </Typography>
                                    </div>
                                </Link>
                                <Link to={'/'} className={cx('link-item')}>
                                    <div className={cx('link-item_image')}>
                                        <img src="https://cdn1.bambulab.com/common/navbar-x1.png"/>
                                    </div>
                                    <div className={cx('link-item_content')}>
                                        <Typography fontWeight={600} variant='h6' fontSize={'1.5rem'}>
                                            Bambu Lab X1 Series
                                        </Typography>
                                        <Typography variant='body1' fontSize={'1.4rem'}>
                                            State-of-the-art Core XY 3D printer
                                        </Typography>
                                    </div>
                                </Link>
                                <Link to={'/'} className={cx('link-item')}>
                                    <div className={cx('link-item_image')}>
                                        <img src="https://cdn1.bambulab.com/common/navbar-x1.png"/>
                                    </div>
                                    <div className={cx('link-item_content')}>
                                    <Typography fontWeight={600} variant='h6' fontSize={'1.5rem'}>
                                            Bambu Lab X1 Series
                                        </Typography>
                                        <Typography variant='body1' fontSize={'1.4rem'}>
                                            State-of-the-art Core XY 3D printer
                                        </Typography>
                                    </div>
                                </Link>
                            </Stack>
                        </Box>
                        <Box>
                            <Typography sx={{paddingBottom:'20px',fontWeight:'600', fontSize:'1.6rem'}} varient='h6'>Đồ chơi trẻ em</Typography>
                            <Divider sx={{borderColor:'var(--link-color)'}}/>
                            <Stack padding="20px 0" direction='row' flexWrap={'wrap'} justifyContent={'space-between'}>
                                <Link to={'/'} className={cx('link-item')}>
                                    <div className={cx('link-item_image')}>
                                        <img src="https://cdn1.bambulab.com/common/navbar-x1.png"/>
                                    </div>
                                    <div className={cx('link-item_content')}>
                                        <Typography fontWeight={600} variant='h6' fontSize={'1.5rem'}>
                                            Bambu Lab X1 Series
                                        </Typography>
                                        <Typography variant='body1' fontSize={'1.4rem'}>
                                            State-of-the-art Core XY 3D printer
                                        </Typography>
                                    </div>
                                </Link>
                                <Link to={'/'} className={cx('link-item')}>
                                    <div className={cx('link-item_image')}>
                                        <img src="https://cdn1.bambulab.com/common/navbar-x1.png"/>
                                    </div>
                                    <div className={cx('link-item_content')}>
                                        <Typography fontWeight={600} variant='h6' fontSize={'1.5rem'}>
                                            Bambu Lab X1 Series
                                        </Typography>
                                        <Typography variant='body1' fontSize={'1.4rem'}>
                                            State-of-the-art Core XY 3D printer
                                        </Typography>
                                    </div>
                                </Link>
                                <Link to={'/'} className={cx('link-item')}>
                                    <div className={cx('link-item_image')}>
                                        <img src="https://cdn1.bambulab.com/common/navbar-x1.png"/>
                                    </div>
                                    <div className={cx('link-item_content')}>
                                    <Typography fontWeight={600} variant='h6' fontSize={'1.5rem'}>
                                            Bambu Lab X1 Series
                                        </Typography>
                                        <Typography variant='body1' fontSize={'1.4rem'}>
                                            State-of-the-art Core XY 3D printer
                                        </Typography>
                                    </div>
                                </Link>
                               
                            </Stack>
                        </Box>
                    </Box>
                </div>
            </Box>
        </Drawer>
    )
}
export default Navbar;
