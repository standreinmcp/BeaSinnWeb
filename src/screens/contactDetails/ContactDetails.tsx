import './ContactDetails.css';
import { 
    contactDetailsTitle, 
    contactDetailsPhoneText, 
    contactDetailsAddressText,
    contactDetailsBeConfident, 
    contactDetailsSubtitle
} from '../../assets/strings'; 
import { contactDetailsAddress, contactDetailsPhone } from '../../assets/svgImages';
import { Contact } from '../../components';

const contactDetails = [ 
    { 
        icon: contactDetailsPhone, 
        label: contactDetailsPhoneText
    },
    { 
        icon: contactDetailsAddress, 
        label: contactDetailsAddressText
    }
]

const ContactDetails = () => { 
    return ( 
        <div className='contactDetailsContainer'> 
            <span className='contactDetailsTitle'>{contactDetailsTitle}</span>
            <div className='contactDetailsContactContainer'>
                {contactDetails.map((item, key) => <Contact key={key} iconStyle={
                    item === contactDetails[0] ? { 
                        height: 24, width: 20
                    } : { 
                        height: 28, width: 24
                    }
                } {...item} />)}
            </div>
            <span className='contactDetailsBeConfident'>{contactDetailsBeConfident}</span>
            <span className='contactDetailsSubtitle'>{contactDetailsSubtitle}</span>
        </div>
    )
}

export default ContactDetails; 