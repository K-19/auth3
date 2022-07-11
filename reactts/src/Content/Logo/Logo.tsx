import style from './Logo.module.css'
import logo from '../../images/logo.png'

const Logo = () => {
    return (
        <div className={style.logo}>
            <img alt='logo' src={logo}/>
        </div>
    )
}

export default Logo;