import './Footer.css';
import { footerText } from '../../assets/strings'; 

const Footer = () => { 
    return ( 
        <div className='footerContainer'>
            <span className='footerText'>{footerText}</span>
        </div>
    )
}

export default Footer; 