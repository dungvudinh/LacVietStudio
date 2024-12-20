import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid2 as Grid, Typography, Select, MenuItem, Button, Stack, TextField } from '@mui/material';
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
        <Container maxWidth="lg" sx={{ py: 4,paddingTop:'130px'}}>
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
                                        border: index === selectedImage ? '2px solid #f77919' : '2px solid transparent',
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
                <Grid  xs={12} md={6}>
                    <Stack spacing={3}>
                        <Typography variant="h4" component="h1">
                            {product.name}
                        </Typography>
                        <Typography variant="h5" component="p">
                            ${product.price}
                        </Typography>
                        
                        <Box>
                            <Typography variant="subtitle1" gutterBottom>
                                Material Type
                            </Typography>
                            <Select
                                fullWidth
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                {product.options.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" gutterBottom>
                                Quantity
                            </Typography>
                            <TextField
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                                inputProps={{ min: 1 }}
                            />
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" gutterBottom>
                                Payment Type
                            </Typography>
                            <Select
                                fullWidth
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value)}
                            >
                                <MenuItem value="credit">Credit Card</MenuItem>
                                <MenuItem value="debit">Debit Card</MenuItem>
                                <MenuItem value="paypal">PayPal</MenuItem>
                            </Select>
                        </Box>

                        <Button 
                            variant="contained" 
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            Add to Cart
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductDetail;