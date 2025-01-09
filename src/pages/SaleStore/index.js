import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid2 as Grid, Box, TextField, InputAdornment, IconButton, MenuItem, Menu, Pagination, Typography, Divider, Checkbox, ListItemIcon } from "@mui/material";
import { Container } from 'react-bootstrap';
import styles from './SaleStore.module.scss';
import classNames from "classnames/bind";
import HeroSlide from "../../layouts/LayoutComponents/HeroSlide";
import { Check, Clear, KeyboardDoubleArrowRight, Search, Sort} from "@mui/icons-material";

import heroSlideImg2 from '../../assets/images/heroSlideImg2.jpg'
import heroSlideImg3 from '../../assets/images/heroSlideImg3.jpg'
import heroSlideImg4 from '../../assets/images/heroSlideImg4.jpg'
import heroSlideImg5 from '../../assets/images/heroSlideImg5.jpg'
import { SaleIcon } from "../../assets/icons";

const cx = classNames.bind(styles);
const categories = [
    {
        id:1,
        name:'Danh mục', 
        type:'select', 
        content:[
            {
                id: 1, 
                title:'Đồ chơi trẻ em',
            }, 
            {
                id:2, 
                title:'Đồ trang trí'
            }
        ]
    }, 
    {
        id:2, 
        name:'Giá (Đ)', 
        type:'checkbox', 
        content:[
            {
                id:1,
                title:'Dưới 100.000'
            },
            {
                id:2,
                title:'100.000 - 500.000'
            },
            {
                id:3,
                title:'500.000 - 1.000.000'
            },
            {
                id:4,
                title:'1.000.000 - 2.000.000'
            },
            {
                id:5,
                title:'Trên 2.000.000'
            }
        ]
    }, 
    {
        id:3, 
        name:'Tuổi',
        type:'checkbox', 
        content:[
            {
                id:1,
                title:'Từ 0 - 1 tuổi'
            },
            {
                id:2,
                title:'Từ 1 - 3 tuổi'
            },
            {
                id:3,
                title:'Từ 3 - 6 tuổi'
            },
            {
                id:4,
                title:'Từ 6 - 12 tuổi'
            },
            {
                id:5,
                title:'12 tuổi trở lên'
            },
           
        ]
    }
]
const listSort =[
    {
        id:1, 
        name:'Mặc định'
    }, 
    {
        id:2, 
        name:'Sản phẩm mới'
    }, 
    {
        id:3, 
        name:'Bán chạy'
    }, 
    {
        id:4, 
        name: 'Tên sản phẩm A - Z'
    }, 
    {
        id:5, 
        name: 'Tên sản phẩm Z - A'
    }, 
    {
        id:6, 
        name:'Giá giảm dần'
    }, 
    {
        id:7,
        name:'Giá tăng dần'
    }
]
const heroSlideData = [
    { id: 2, image: heroSlideImg2 },
    { id: 3, image: heroSlideImg3 },
    { id: 4, image: heroSlideImg4 },
    { id: 5, image: heroSlideImg5 },
];
function Store() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentFilterId, setCurrentFilterId]= useState(1);
    const [currentSortId, setCurrentSortId]= useState(1);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const totalItems = 50;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const handleFilter = (categoryId)=>{
        setCurrentFilterId(categoryId);
    }

    return ( 
        <div className={cx('store')}>
            <HeroSlide heroSlideData={heroSlideData} />
            <Container className="mt-5 store-container">
                <h1 className={cx('store-title')}>3D Sale </h1>
                
                {/* Search bar */}
                <Box className={cx('search-container')} sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                    <TextField
                        fullWidth
                        placeholder="Search products..."
                        slotProps={{
                            input:{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ), 
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClick} >
                                            <Sort/>
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                              }}
                                              transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                              }}
                                              slotProps={{
                                                paper:{
                                                    sx:{
                                                        minWidth:200
                                                    }
                                                }
                                            }}
                                            defaultChecked={currentSortId}
                                        >
                                            {listSort.map(sortItem=>(
                                                <MenuItem key={sortItem.id} onClick={()=>{
                                                    setCurrentSortId(sortItem.id);
                                                    handleClose();
                                                }} sx={{fontWeight:600, justifyContent:'flex-end'}}>
                                                    {currentSortId === sortItem.id && (
                                                        <ListItemIcon>
                                                            <Check fontSize="small"/>
                                                        </ListItemIcon>
                                                    )}
                                                    {sortItem.name}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </InputAdornment>
                                )
                          }}
                        }
                        variant="outlined"
                    />
                </Box>

                {/* Main content */}
                <Grid container spacing={3} className={cx('main-content')}>
                    {/* Left sidebar - Categories */}
                    
                    <Grid size={3}>
                        <div className={cx('category-filter-wrapper')}>
                            <div className={cx('sort-by')}>
                                <div className={cx('sort-by_header')}>
                                    <Typography variant="h6" className={cx('sort-by_header__title')}>Lọc theo</Typography>
                                    <span className={cx('sort-by_header__action')} onClick={()=>setCurrentSortId(null)}>Clear All</span>
                                </div>
                                <ul className={cx('sort-by_content')}>
                                    {
                                        listSort.filter(sortItem=>sortItem.id === currentSortId).map(sortItem=>(
                                            <li className={cx('sort-by_content__item')} key={sortItem.id}>
                                                <span className={cx('content-item_title')}>{sortItem.name}</span>
                                                <IconButton className={cx('content-item_action')} size="small" onClick={()=>setCurrentSortId(null)}>
                                                    <Clear fontSize="small"/>
                                                </IconButton>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className={cx('category-filter')}>
                                {categories.map((category)=>(
                                    <div className={cx('category-item')} key={category.id}>
                                        <Typography variant="h6" fontWeight={700} marginBottom='15px' color="primary">{category.name}</Typography>
                                        <ul>
                                            {category.type === 'select'
                                            ? 
                                                category.content.map((categoryItemChild)=>(
                                                    <li key={categoryItemChild.id} onClick={()=>handleFilter(categoryItemChild.id)} className={cx({active: categoryItemChild.id === currentFilterId})}>
                                                        <KeyboardDoubleArrowRight className={cx('category-item_child__icon')}/>
                                                        <p className={cx('category-item_child__title', 'select')}>
                                                            {categoryItemChild.title}
                                                        </p>
                                                    </li>
                                                ))
                                            : 
                                                category.content.map((categoryItemChild)=>(
                                                    <li key={categoryItemChild.id} onClick={()=>handleFilter(categoryItemChild.id)} className={cx({active: categoryItemChild.id === currentFilterId})}>
                                                        <p className={cx('category-item_child__title')}>
                                                            <Checkbox size="small"/>
                                                            {categoryItemChild.title}
                                                        </p>
                                                    </li>
                                                ))
                                            }
                                            
                                        </ul>
                                    </div>

                                ))}
                                
                            </div>
                        </div>
                    </Grid>

                    {/* Right content - Product list */}
                    <Grid  size={9}>
                        <div className={cx('product-grid')}>
                            <Grid container spacing={3}>
                                {[1,2,3,4,5,6,7,8, 9, 10, 11, 12].map((item, index) => (
                                    <Grid size={4} key={index}>
                                        <Link className={cx('product-item')} to={`/product-detail/1`}>
                                            <SaleIcon width={45} height={45} className='position-absolute top-1 end-0 z-3'/>
                                            <div className={cx('image-container')}>
                                                <img 
                                                    src="https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80"
                                                    alt="Product"
                                                    className={cx('main-image')}
                                                />
                                            </div>
                                            <h3  className={cx('product-name')}>Bambu Lab A1 mini 3D Printer {item}</h3>
                                            <h3  className={cx('product-price')}>200.000 VND
                                                <span className={cx('product-old_price')}>350.000 VND</span>
                                            </h3>
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                            
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                                <Pagination 
                                    count={totalPages}
                                    page={page}
                                    onChange={handlePageChange}
                                    size="large"
                                    sx={{
                                        '& .MuiPaginationItem-root': {
                                            fontSize: '1.6rem'
                                        }
                                    }}
                                />
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Store;