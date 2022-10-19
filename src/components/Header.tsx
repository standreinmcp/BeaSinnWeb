import './Header.css'; 
import { burgerMenuDescription,  logoDescription, title } from '../assets/strings';
import { logo, burgerMenu } from '../assets/svgImages';

export const Header = () => { 
    return ( 
        <div className='container'>
            <img className='logo' src={logo} alt={logoDescription}/> 
            <span className='title'>{title}</span>
            <img className='burgerMenu' src={burgerMenu} alt={burgerMenuDescription}/>
        </div>
    )
}