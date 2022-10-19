import './MyServices.css'; 
import { myServicesTitle, myServicesServiceOneText, myServicesServiceTwoText, myServicesDetails } from '../../assets/strings'; 
import { myServiceServiceOneImage, myServiceServiceTwoImage } from '../../assets/svgImages';
import { Service } from '../../components';

const services = [
    { 
        backgroundImage: myServiceServiceOneImage, 
        label: myServicesServiceOneText
    }, 
    { 
        backgroundImage: myServiceServiceTwoImage, 
        label: myServicesServiceTwoText
    }
]

const MyServices = () => { 
    return ( 
        <div className='myServicesContainer'>
            <span className='myServicesTitle'>{myServicesTitle}</span>
            <div className='myServicesElementsContainer'>
                {services.map((item, key) => <Service key={key} {...item} />)}
            </div>
            <span className='myServicesDetails'>{myServicesDetails}</span>
        </div>
    )
}

export default MyServices; 