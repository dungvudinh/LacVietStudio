import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Stack, Link } from '@mui/material';
import { Add, Close, Remove } from '@mui/icons-material';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Cart({ open, onClose }) {
    // Dummy data - replace with your actual cart items
    const cartItems = [
        {
            id: 1,
            name: '3D Printer Filament',
            price: 29.99,
            image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
            quantity: 2
        },
        {
            id: 1,
            name: '3D Printer Filament',
            price: 29.99,
            image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
            quantity: 2
        },
        {
            id: 1,
            name: '3D Printer Filament',
            price: 29.99,
            image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
            quantity: 2
        },
        {
            id: 1,
            name: '3D Printer Filament',
            price: 29.99,
            image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
            quantity: 2
        },
        {
            id: 1,
            name: '3D Printer Filament',
            price: 29.99,
            image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
            quantity: 2
        },
        {
            id: 1,
            name: '3D Printer Filament',
            price: 29.99,
            image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
            quantity: 2
        },

        {
            id: 1,
            name: '3D Printer Filament',
            price: 29.99,
            image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
            quantity: 2
        },
        // Add more items as needed
    ];

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: { width: 380 }
            }}
            sx={{ zIndex: 1220 }}
        >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 2, borderBottom: '1px solid #eee' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ fontSize: '2rem', fontWeight: 600 }}>Cart</Typography>
                        <IconButton onClick={onClose}>
                            <Close />
                        </IconButton>
                    </Box>
                </Box>

                <List sx={{ flex: 1, overflowY: 'auto', py: 0, padding:'0 10px' }}>
                    {cartItems.map((item) => (
                        <ListItem key={item.id} divider alignItems='center' sx={{height:150}}>
                            <ListItemAvatar sx={{height:'100%'}}>
                                <img src={item.image} style={{height:'100%', objectFit:'cover'}}/>
                            </ListItemAvatar>
                            <Stack ml={3}  justifyContent="space-between" height="100%" width="100%">
                                <Box>
                                    <Typography variant="body1" fontWeight={600}>
                                        ${item.name}
                                    </Typography>
                                    <Typography variant="body1" >
                                        ${item.price}
                                    </Typography>
                                </Box>
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Box border="1px solid #ddd" padding={1} display='flex' justifyContent='space-between' alignItems='center'>
                                        <Remove fontSize='small'/>
                                        <input style={{outline:'none', border:'none', width:'44px', textAlign:'center'}} defaultValue={item.quantity}/>
                                        <Add fontSize='small'/>
                                    </Box>
                                    <Link fontSize="1.2rem" underline='hover' sx={{cursor:'pointer'}}>Remove</Link>
                                </Stack>
                            </Stack>
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ p: 2, borderTop: '1px solid #eee', bgcolor: 'background.paper' }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Total: ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)} USD
                    </Typography>
                    <Button variant="contained" fullWidth sx={{fontWeight:600, color:'#fff'}}>
                        Checkout
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
}

export default Cart;