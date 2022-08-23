import { AppBar, Box, Typography, Button, Toolbar } from '@mui/material'

const Navbar = () => {
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Ibus Land
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>

    </>
}





export default Navbar;