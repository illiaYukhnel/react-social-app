import classes from './Navbar.module.css'
import profile from '../../icons/profile.svg'
import messages from '../../icons/messages.svg'
import news from '../../icons/news.svg'
import music from '../../icons/music.svg'
import settings from '../../icons/settings.svg'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <img src={profile}/>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <img src={messages}/>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <img src={news}/>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <img src={music}/>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <img src={settings}/>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar