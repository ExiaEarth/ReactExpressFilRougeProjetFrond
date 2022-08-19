import { Avatar,Divider,Stack} from "@mui/material";
import  style  from "./nav-bar.module.scss";
import  IconNav from './icon-nav.jpg';
import  IconNavSec from './icon-navSec.jpg';
import  IconNavTier from './nav-BarTier.jpg';


const NavBar=()=>{

    return(
        <nav className={style.nav}>
            <Stack direction='column' divider={<Divider orientation="horizontal"/>} spacing={2}>
                <Avatar alt='Logo menu' src={IconNav} className={style.logo} />
                <p>Lucie</p>
                <Avatar alt='Logo menu' src={IconNavSec} className={style.logo} />
                <p>Elie</p>
                <Avatar alt='Logo menu' src={IconNavTier} className={style.logo} />
                <p>Nami</p>
                {/* <Avatar alt='Logo menu' src={IconNav} sx={{width:90,height:90}}/>
                <Avatar alt='Logo menu' src={IconNav} sx={{width:90,height:90}}/>
                <Avatar alt='Logo menu' src={IconNav} sx={{width:90,height:90}}/> */}
                <p>ICI MENU</p>
            </Stack>
        </nav>

    );
};

export default NavBar;