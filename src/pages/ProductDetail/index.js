import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid2 as Grid, Typography, Select, MenuItem, Button, Stack, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { Add, Remove } from '@mui/icons-material';

const cx = classNames.bind(styles);
const product = {
    name: '3D Printer Filament',
    price: 29.99,
    images: [
        'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
        'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
        'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
        'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80'
    ],
    options: ['PLA', 'ABS', 'PETG'],
    description: 'High-quality 3D printer filament for your printing needs.'
};
function ProductDetail() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');
    const [paymentType, setPaymentType] = useState('credit');
    const [selectedImage, setSelectedImage] = useState(0);

    // Dummy product data - replace with actual API call using the id
    

    return (
        <>
            <Container maxWidth="lg" sx={{ py: 4, paddingTop: '130px' }}>
                <Grid container spacing={4}>
                    <Grid  xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <img 
                                src={product.images[selectedImage]} 
                                alt={product.name}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                {product.images.map((image, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            cursor: 'pointer',
                                            border: index === selectedImage ? '1px solid #f77919' : '1px solid transparent',
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.name} ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid  xs={12} md={6} >
                        <Stack spacing={3} width="100%">
                            <div className={cx('product-meta')}>
                                <Typography variant="h5" fontSize="2.5rem" fontWeight={600}>
                                    {product.name}
                                </Typography>
                                <Typography variant="h5"  fontWeight={700} fontSize="2.4rem" mt={2}>
                                    ${product.price}
                                    <span className={cx('product-old_price')}>$299.00 USD</span>
                                </Typography>
                            </div>
                            <div className={cx('product-features')}>
                                <Typography variant='p' fontWeight={600}>
                                    Product Features
                                </Typography>
                                <ul className={cx('product-features_content')}>
                                    <li className={cx('product-features_item')}>
                                        Full-auto Calibration
                                    </li>
                                    <li className={cx('product-features_item', 'highlight')}>
                                        Multi-Color Printing (Combo Version)
                                    </li>
                                    <li className={cx('product-features_item')}>
                                        Full-auto Calibration
                                    </li>
                                    <li className={cx('product-features_item')}>
                                        Full-auto Calibration
                                    </li>
                                    <li className={cx('product-features_item')}>
                                        Full-auto Calibration
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('product-options')}>
                                <Typography variant='p' fontWeight={600}>
                                    Options
                                </Typography>
                                <ul className={cx('product-options_content')}>
                                    {product.options.map((option, index) => (
                                        <li 
                                            key={index} 
                                            className={cx('option-item', { selected: selectedOption === option })}
                                            onClick={() => setSelectedOption(option)}
                                        >
                                            <img 
                                                className={cx('option-image')} 
                                                src={product.images[0]} 
                                                alt={option} 
                                            />
                                            <div className={cx('option-info')}>
                                                <div className={cx('option-name')}>{option}</div>
                                                <div className={cx('option-price')}>${product.price}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cx('product-quantity')}>
                                <Typography variant='p' fontWeight={600}>
                                    Quantity
                                </Typography>

                                  
                                <Box  border="1px solid #ddd" padding={1} display='inline-flex' justifyContent ='space-between' alignItems='center' marginTop="20px">
                                    <Add  fontSize="small"/>
                                    <input style={{outline:'none', border:'none', width:'35px', textAlign:'center'}} defaultValue={1}/>
                                    <Remove fontSize='small' />
                                </Box>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            
            <Box className={cx('product-order')}>
                <Container maxWidth="lg">
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
                        <Box>
                            <Typography variant="h4" fontWeight={700}>
                                ${product.price}
                                <span className={cx('product-old_price')}>$299.00 USD</span>
                            </Typography>
                        </Box>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                bgcolor: 'var(--primary-color)',
                                '&:hover': {
                                    bgcolor: 'var(--primary-color-hover)'
                                }, 
                                color:'#FFF',
                                minWidth:'300px', 
                                width:'auto'
                            }}
                        >
                            Add to Cart
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}

export default ProductDetail;