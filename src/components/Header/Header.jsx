import logo from "../../logo.svg";
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo}/>
        </header>
    )
}

export default Header