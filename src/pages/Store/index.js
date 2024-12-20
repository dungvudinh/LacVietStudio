import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid2 as Grid, Box, TextField, InputAdornment, IconButton, MenuItem, Menu, Pagination } from "@mui/material";
import { Container } from 'react-bootstrap';
import styles from './Store.module.scss';
import classNames from "classnames/bind";
import HeroSlide from "../../layouts/LayoutComponents/HeroSlide";
import { Clear, KeyboardDoubleArrowRight, Search, Sort} from "@mui/icons-material";

const cx = classNames.bind(styles);
const categories = [
    {
        id:1,
        name:'Category 1', 
        content:[
            {
                id: 1, 
                title:'3D Printers',
            }, 
            {
                id:2, 
                title:'Filaments'
            }
        ]
    }
]
const listSort =[
    {
        id:1, 
        name:'Relevance'
    }, 
    {
        id:2, 
        name:'Price, low to high'
    }, 
    {
        id:3, 
        name:'Price, high to low'
    }
]
function Store() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentFilterId, setCurrentFilterId]= useState(1);
    const [currentSortId, setCurrentSortId]= useState(null);
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
            <HeroSlide />
            <Container className="mt-5 store-container">
                <h1 className={cx('store-title')}>3D Store</h1>
                
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
                                        >
                                            {listSort.map(sortItem=>(
                                                <MenuItem key={sortItem.id} onClick={()=>{
                                                    setCurrentSortId(sortItem.id);
                                                    handleClose();
                                                }} sx={{fontWeight:600, justifyContent:'flex-end'}}>
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
                    
                    <Grid size={2}>
                        <div className={cx('category-filter-wrapper')}>
                            {currentSortId && (
                                <div className={cx('sort-by')}>
                                    <div className={cx('sort-by_header')}>
                                        <p className={cx('sort-by_header__title')}>SORT BY</p>
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
                            )}
                            <div className={cx('category-filter')}>
                                {categories.map((category)=>(
                                    <div className={cx('category-item')} key={category.id}>
                                        <h2>{category.name}</h2>
                                        <ul>
                                            {category.content.map((categoryItemChild)=>(
                                                <li key={categoryItemChild.id} onClick={()=>handleFilter(categoryItemChild.id)} className={cx({active: categoryItemChild.id === currentFilterId})}>
                                                    <KeyboardDoubleArrowRight className={cx('category-item_child__icon')}/>
                                                    <p className={cx('category-item_child__title')}>
                                                        {categoryItemChild.title}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </Grid>

                    {/* Right content - Product list */}
                    <Grid  size={10}>
                        <div className={cx('product-grid')}>
                            <Grid container spacing={3}>
                                {[1,2,3,4,5,6,7,8, 9, 10, 11, 12].map((item, index) => (
                                    <Grid size={3} key={index}>
                                        <Link className={cx('product-item')} to={`/product-detail/1`}>
                                            <div className={cx('image-container')}>
                                                <img 
                                                    src="https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80"
                                                    alt="Product"
                                                    className={cx('main-image')}
                                                />
                                            </div>
                                            <h3  className={cx('product-name')}>Bambu Lab A1 mini 3D Printer {item}</h3>
                                            <h3  className={cx('product-price')}>From $199.00 USD 
                                                <span className={cx('product-old_price')}>$299.00 USD</span>
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