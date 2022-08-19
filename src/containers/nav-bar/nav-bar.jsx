import { Drawer,Avatar} from "@mui/material";
import  IconNav from './icon-nav.jpg';
import  IconNavSec from './icon-navSec.jpg';
import  IconNavTier from './nav-BarTier.jpg';


const NavBar=({isVisible, onCloseMenu})=>{

    return(
        <Drawer anchor="left" open={isVisible} onClose={onCloseMenu}>
            lucie
            <Avatar alt='Logo menu' src={IconNav} sx={{width:90,height:90}}/>
            Ellie
            <Avatar alt='Logo menu' src={IconNavSec} sx={{width:90,height:90}}/>
            Nami
            <Avatar alt='Logo menu' src={IconNavTier} sx={{width:90,height:90}}/>
            <Avatar alt='Logo menu' src={IconNav} sx={{width:90,height:90}}/>
            <Avatar alt='Logo menu' src={IconNav} sx={{width:90,height:90}}/>
            <Avatar alt='Logo menu' src={IconNav} sx={{width:90,height:90}}/>

        </Drawer>
    );
};

export default NavBar;