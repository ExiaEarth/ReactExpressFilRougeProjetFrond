import { AppBar,Toolbar,IconButton,Typography,Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import style  from "./header.module.scss";


const Header=({onOpenMenu})=>{

    return (
        <header>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                    onClick={onOpenMenu}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" component="div"  className={style.navBar}>
                        Menus
                    </Typography>
                    <Button color="inherit" className={style.navBarSec}>
                        Connexion
                    </Button>
                    
                </Toolbar>
            </AppBar>
        </header>
    )
};

export default Header;