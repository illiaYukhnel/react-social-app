import classes from './Navbar.module.css'
import profile from '../../icons/profile.svg'
import messages from '../../icons/messages.svg'
import news from '../../icons/news.svg'
import music from '../../icons/music.svg'
import settings from '../../icons/settings.svg'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <img src={profile}/>
                <NavLink to='/profile' className = { navData => navData.isActive ? classes.activeLink : classes.link }>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <img src={messages}/>
                <NavLink to='/dialogs' className = {navData => navData.isActive ? classes.activeLink : classes.link}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <img src={news}/>
                <NavLink to='/news' className = {navData => navData.isActive ? classes.activeLink : classes.link}>News</NavLink>
            </div>
            <div className={classes.item}>
                <img src={music}/>
                <NavLink to='/music' className = {navData => navData.isActive ? classes.activeLink : classes.link}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <img src={settings}/>
                <NavLink to='/settings' className = {navData => navData.isActive ? classes.activeLink : classes.link}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar