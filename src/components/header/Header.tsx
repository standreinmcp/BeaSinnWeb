import './Header.css'; 
import { burgerMenuDescription,  logoDescription, title } from '../../assets/strings';
import { logo, burgerMenu } from '../../assets/svgImages';

const Header = () => { 
    return ( 
        <div className='headerContainer'>
            <img className='headerLogo' src={logo} alt={logoDescription}/> 
            <span className='headerTitle'>{title}</span>
            <img className='headerBurgerMenu' src={burgerMenu} alt={burgerMenuDescription}/>
        </div>
    )
}

export default Header; 